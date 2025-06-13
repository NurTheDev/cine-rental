import React from 'react';
import {sidebarItems} from "../Data/Data.js";
import {getSidebarIcon} from "../Data/Data.js";
const Sidebar = () => {
    return (
        <aside>
            <ul className="space-y-2">
                {sidebarItems.map((item)=>(
                    <li key={item.id}>
                        <a className={`flex text-white items-center space-x-2 px-5 py-3.5 rounded-lg ${item.isActive && "bg-primary"} `} href="#">
                            <img src={getSidebarIcon(item.icon)} width="24" height="24" alt=""/>
                            <span className={item.isActive && "text-black"}>{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
