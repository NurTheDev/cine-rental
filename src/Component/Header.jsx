import Logo from "../assets/Logo.jsx";
import Ring from "../assets/Ring.jsx";
import Moon from "../assets/icons/Moon.jsx";
import Shopping from "../assets/Shopping.jsx";
export default function Header() {
    return (
        <header>
            <nav className="container  flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <Logo className="w-32 h-10"  />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#">
                            <Ring className="w-6 h-6"/>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#">
                            <Moon className="w-6 h-6"/>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#">
                            <Shopping className="w-6 h-6"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
