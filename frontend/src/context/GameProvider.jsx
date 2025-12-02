import { createContext, useState } from "react";
// import mockData from "../data/games.json";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [summary, setSummary] = useState("");

    console.log(games);

    const askAI = async (prompt) => {
        try {
            const response = await fetch("/api/gemini/ask", {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: prompt,
            });
            return response.text();
        } catch (error) {
            console.error("AI error:", error);
            return null;
        }
    };

    const searchGames = async (userInput) => {
        try {
            // mock data
            // setGames(mockData.results);

            const aiResponse = await askAI(`You are a game recommender AI.

Analyze the user's request: "${userInput}"

Return ONLY valid JSON with NO explanation, NO commentary, NO code fences, NO backticks.

Format EXACTLY like this:

{
  "summary": "a short natural-sounding one-line summary of what the user wants without mentioning the user",
  "titles": ["Game1", "Game2", "Game3", "Game4", "Game5"]
}

Rules:
- The summary should be about what type of results are found.
- DO NOT include any extra text before or after the JSON.
- "summary" must be a simple clean human sentence, NOT a category.
- "titles" must contain 5 real video game titles.

            `);

            const clean = aiResponse
                .replace(/```json/gi, "")
                .replace(/```/g, "")
                .trim();

            console.log("Clean AI output:", clean);

            const parsed = JSON.parse(clean);
            setSummary(parsed.summary);
            const titles = parsed.titles;

            let results = [];

            // api data:
            for (const title of titles) {
                const resp = await fetch(
                    `/api/recommend?recommendation=${title}`
                );
                const game = await resp.json();
                results.push(...game);
            }
            setGames(results);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <GameContext.Provider value={{ games, searchGames, summary }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContext;
