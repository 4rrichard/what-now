# 🎮 What Now 
## AI-Powered Mood-Based Game Finder

**What Now** is a web application that helps users discover video games based on moods, keywords, or simple search terms. 
The frontend is built with **React (Vite)**, **Tailwind CSS**, and **shadcn/ui**. 
The backend is a **Spring Boot** application that integrates with the **RAWG API** and (early stage) **Gemini API** for generating recommendations.

--- 
## 📂 Project Structure 
```text
what-now/
├── backend/                  # Spring Boot backend (in progress)
│   ├── src/main/java/
│       ├── controller/           # RAWG + Gemini endpoints
│       ├── service/              # RAWG service logic
│       ├── model/                # DTOs for RAWG API
│       ├── pom.xml
│
├── frontend/                 # React app (Vite + Tailwind + shadcn)
│   ├── src/
│       ├── components/           # UI components (carousel, search, etc.)
│       ├── context/              # GameProvider (global state)
│       ├── data/games.js         # Temporary mock data
│       ├── vite.config.js
└── README.md
```
--- 
## ✨ Features (So Far) 
### 🧩 Backend (Spring Boot) 
- Implements a `RawgService` that calls the RAWG API.
- Uses custom DTOs to map RAWG responses (`RawgGame`, `RawgResponse`).
- Exposes basic GET endpoints in `RecommendationController`.
- Early integration of **Gemini** for generating text-based recommendations.
### 🎨 Frontend (React) 
- Search bar with smooth expand/collapse animation.
- Game carousel with hover effects and dynamic layout.
- Loading skeleton components.
- Global state management with **GameContext**.
- Search triggers backend requests.
- HeroSection UI with transitions.
---
## 🚀 Running the Project (Current Setup) 
### 🖥️ Backend Requires **Java 21** and **Maven**. 
```bash 
cd backend mvn spring-boot:run
```
Backend runs at: 
``` http://localhost:8080 ``` 
--- 
### 🖥️ Frontend 
```bash 
cd frontend npm install npm run dev
```
Frontend runs at: ``` http://localhost:5173 ``` 
--- 
## 🔌 API Endpoints (Current) 
| Endpoint | Method | Description | 
|----------|--------|-------------| 
| `/api/recommend?recommendation=cozy` | GET | Test endpoint returning AI-generated text | 
| `/api/rawg/search?query=...` *(planned)* | GET | Search games via RAWG | 
| `/api/ai/recommend` *(planned)* | POST | AI description → game recommendations | 

Example usage in frontend: 
```js
const response = await fetch("/api/recommend?recommendation=cozy");
``` 
--- 
## 🧪 Technologies Used 
### Frontend 
- React 18
- Vite
- Tailwind CSS
- shadcn/ui
- React Context
### Backend 
- Spring Boot 3
- RAWG API integration
- Gemini API (early stage)
- Java 21
- Maven
---
## 📌 Current State / To-Do 
### ✔ Already Implemented 
- Game search UI
- Game carousel with dynamic styling
- RAWG DTO and service
- Base Gemini integration
- Basic backend endpoints
- Global context structure
- Smooth search animation
### 🔜 Next Steps 
- Create `.env.sample` 
- Implement full RAWG search endpoint
- Improve Gemini recommendation output
- Add filtering & sorting
- Add detailed game cards
- Optional: Add Docker later
---
## 📝 Notes 
- No Docker setup yet
— development uses local frontend + backend.
- Gemini integration is experimental and will evolve.
- The frontend design is built to support future AI chat features.
