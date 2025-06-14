import React from 'react';
import Header from "./Component/Header.jsx";
import Sidebar from "./Component/Sidebar.jsx";
import MoviesBoard from "./Component/MoviesBoard.jsx";
import {movieContext} from "./context/index.js";
import {themeContext} from "./context/index.js";
import {useState} from "react";
const App = () => {
    const [movies, setMovies] = useState([]);
    // Initialize movies state with an empty array or fetch from an API if needed
    const [theme, setTheme] = useState(true); // Example theme state, can be used later for theme switching
    return (
        <themeContext.Provider value={{theme, setTheme}}>
        <movieContext.Provider value={{movies, setMovies}}>
        <div className={`dark:bg-body bg-white font-[Sora] dark:text-white text-dark ${theme ? "dark" : ""}`}>
            <Header/>
            <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar/>
                <MoviesBoard/>
            </main>
        </div>
        </movieContext.Provider>
        </themeContext.Provider>
    );
};

export default App;
