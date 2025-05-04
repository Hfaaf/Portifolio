import React from "react";
import { TbBrandCSharp, TbBrandDjango, TbBrandTailwind } from "react-icons/tb";
import { LiaNodeJs } from "react-icons/lia";
import { FaJs, FaReact, FaPython, FaCss3Alt, FaBootstrap } from "react-icons/fa";

export function Inicio() {
    return (
        <div className=" bg-gray-100 dark:bg-gray-900">
            <div className=" py-32 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
                <h1 className="mt-8 mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-red-600 dark:to-gray-100">
                        Heitor Farias Pinheiro do Amaral
                    </span>{" "}
                </h1>
                <p className="text-base font-normal text-center text-gray-500 sm:text-lg lg:text-xl dark:text-gray-400 max-w-3xl">
                    Gosto de resolver problemas com criatividade, seja no código ou no design.
                    Sou estudante de Análise e Desenvolvimento de Sistemas e venho construindo meu caminho como dev Full Stack, sempre buscando unir o lado visual com o funcional. Atualmente trabalho com <strong>design gráfico</strong>, criando de tudo um pouco: logotipos, identidades visuais, banners, modelagem 3d... E agora, estou me aprofundando em linguagens e frameworks como:
                </p>
                <hr className="w-32 h-1 mx-auto my-6 border-0 rounded-sm bg-gray-700 sm:w-48 md:my-5" />
                <div>
                    {/* C# */}
                    <a href="#" className="bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<TbBrandCSharp
                            className="text-2xl text-white dark:text-gray-200"
                        />}</a>
                    {/*  Node.js */}
                    <a href="#" className="bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<LiaNodeJs
                            className="text-2xl text-white dark:text-gray-200"
                        />}</a>
                    {/* JavaScript */}
                    <a href="#" className=" bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<FaJs
                            className="text-2xl text-white dark:text-gray-200 "
                        />}</a>
                    {/* React */}
                    <a href="#" className="bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<FaReact
                            className="text-2xl text-white dark:text-gray-200"
                        />}</a>
                    {/* Django */}
                    <a href="#" className="bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<TbBrandDjango
                            className="text-2xl text-white dark:text-gray-200"
                        />}</a>
                    {/* Python */}
                    <a href="#" className="bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<FaPython
                            className="text-2xl text-white dark:text-gray-200"
                        />}</a>
                    {/* CSS */}
                    <a href="#" className="bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<FaCss3Alt
                            className="text-2xl text-white dark:text-gray-200"
                        />}</a>
                    {/* Tailwind */}
                    <a href="#" className="bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<TbBrandTailwind
                            className="text-2xl text-white dark:text-gray-200"
                        />}</a>
                    {/* Bootstrap */}
                    <a href="#" className="bg-gray-900 hover:bg-red-600 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:hover:bg-red-600 inline-flex items-center justify-center">
                        {<FaBootstrap
                            className="text-2xl text-white dark:text-gray-200"
                        />}</a>
                </div>
            </div>
        </div>
    );
}