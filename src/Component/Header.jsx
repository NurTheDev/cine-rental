import React, {useState} from "react";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import {useContext} from "react";
import {movieContext} from "../context/index.js";
import {themeContext} from "../context/index.js";
import Cart from "./Cart.jsx";
export default function Header() {
    const [showCart, setShowCart] = useState(false);
    const handleCartClick = () => {
        setShowCart(!showCart);
    }
    const {state} = useContext(movieContext);
    const {theme, setTheme} = useContext(themeContext);
    return (
        <>{showCart && <Cart onClick={handleCartClick}/>}
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={logo || ""} width="139" height="26" alt=""/>
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                               href="#">
                                <img src={ring || ""} width="24" height="24" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" onClick={()=>setTheme(!theme)}
                               href="#">
                                <img src={theme ? sun : moon || ""} width="24" height="24" alt=""/>
                            </a>
                        </li>
                        <li className="relative">
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                               href="#" onClick={handleCartClick}>
                                <img src={shoppingCart || ""} width="24" height="24" alt=""/>
                            </a>
                            {state.cartItems.length > 0 && (
                                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[20px] h-[20px] text-xs font-semibold">
                                    {state.cartItems.length}
                                </span>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
