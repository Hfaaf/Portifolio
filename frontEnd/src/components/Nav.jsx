import { useEffect, useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";

import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const isActive = (path) => location.hash === path;

    return (
        <nav className="fixed w-full z-10 bg-white border-gray-200 dark:bg-gray-950">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h2 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">&lt;</h2>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Heitor</span>
                    <h2 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">/&gt;</h2>
                    <span className="blinking-cursor animate-blink self-center text-2xl font-semibold whitespace-nowrap dark:text-white">|</span>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex flex-row space-x-2 rtl:space-x-reverse rounded-xl bg-black dark:bg-gray-500 p-1 size-min">
                        <MdOutlineLightMode
                            onClick={toggleDarkMode}
                            className={`block gap-2 text-2xl 
                        ${isDarkMode ? "text-gray-500" : "text-yellow-500"} 
                        rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 cursor-pointer md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} />
                        <span className="text-gray-500 dark:text-gray-200">|</span>
                        <MdOutlineDarkMode
                            onClick={toggleDarkMode}
                            className={`block gap-2 text-2xl
                         ${isDarkMode ? "text-purple-900" : "text-gray-500"}
                            rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 cursor-pointer md:hover:text-purple-900 md:p-0 md:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} />
                    </div>
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Abrir menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-950 dark:border-gray-700">
                        <li>
                            <a
                                href="/#inicio"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                ${isActive("#inicio") ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}
                                aria-current={isActive("#inicio") ? "page" : undefined}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#sobre-mim"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                ${isActive("#sobre-mim") ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}
                            >
                                Sobre mim
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/projetos"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                    ${location.pathname === "/projetos" ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}
                            >
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fale-comigo"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                ${location.pathname === "/fale-comigo" ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}
                            >
                                Fale comigo
                            </Link>
                        </li>
                        <li>
                            <div className="flex flex-row justify-center items-center space-x-3 rtl:space-x-reverse gap-1 md:gap-2">
                                <a href="https://github.com/Hfaaf" target="_blank" rel="noopener noreferrer">
                                    <GithubFilled className="text-2xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" />
                                </a>
                                <a href="https://www.linkedin.com/in/heitor-amaral-09011a321/" target="_blank" rel="noopener noreferrer">
                                    <LinkedinFilled className="text-2xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}