import React from "react";
import { FaTools, FaHardHat, FaRegClock } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";
import { MdOutlineConstruction } from "react-icons/md";

export function Projetos() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="py-32 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-center">
                    <MdOutlineConstruction className="text-6xl text-red-600 dark:text-red-500 mr-4" />
                    <FaHardHat className="text-5xl text-yellow-500 ml-4" />
                </div>

                <h1 className="mt-8 mb-6 text-4xl font-extrabold text-center text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-red-600 dark:to-gray-100">
                        Página em Construção
                    </span>
                </h1>

                <p className="text-xl font-normal text-center text-gray-500 sm:text-2xl lg:text-3xl dark:text-gray-400 max-w-3xl mb-8">
                    Por favor, aguarde estou trabalhando nisso!
                </p>

                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-10">
                    <FaRegClock className="mr-2 text-xl" />
                    <span className="text-lg">Volte em breve</span>
                </div>
            </div>
        </div>
    );
}