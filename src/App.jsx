import React from 'react';
import Header from "./Component/Header.jsx";
import Sidebar from "./Component/Sidebar.jsx";
import MoviesBoard from "./Component/MoviesBoard.jsx";
import MovieModal from "./Component/MovieModal.jsx";

const App = () => {
    return (
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
            <Header/>
            <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar/>
                <MoviesBoard/>
                <MovieModal/>
            </main>
        </div>
    );
};

export default App;
