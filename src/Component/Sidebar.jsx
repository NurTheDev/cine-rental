import React from 'react';
import {sidebarItems} from "../Data/Data.js";
import {getSidebarIcon} from "../Data/Data.js";
import {themeContext} from "../context/index.js";
const Sidebar = () => {
    const {theme} = React.useContext(themeContext);
    return (
        <aside>
            <ul className="space-y-2">
                {sidebarItems.map((item)=>(
                    <li key={item.id}>
                        <a className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${item.isActive && theme ? "bg-primary text-dark" : item.isActive && !theme ? "bg-primary text-dark" : ""} `} href="#">
                            <img src={getSidebarIcon(item.icon)} width="24" height="24" alt=""/>
                            <span >{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
