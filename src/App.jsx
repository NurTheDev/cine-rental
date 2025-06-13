import React from 'react';
import Header from "./Component/Header.jsx";
import Sidebar from "./Component/Sidebar.jsx";

const App = () => {
    return (
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
            <Header/>
            <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar/>
            </main>
        </div>
    );
};

export default App;
