import { createContext, useEffect, useState } from "react";
import mockData from "../data/games.json";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);

    console.log(games);

    const fetchGames = async (query) => {
        try {
            // mock data
            setGames(mockData.results);

            // api data:
            // const response = await fetch(`/api/recommend?recommendation=${query}`);
            // const data = await response.json();
            // setGames(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <GameContext.Provider value={{ games, setGames, fetchGames }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContext;
