export function Inicio() {
    return (
        <div className="dark:bg-gray-900 dark:text-white p-5 bg-white flex flex-col items-center h-screen">
            <div className="flex flex-col justify-content-center items-center max-w-screen-md">
                <h2 className=" mt-5">Gosto de resolver problemas com criatividade, seja no código ou no design.</h2>
                <h3>Sou estudante de Análise e Desenvolvimento de Sistemas e venho construindo meu caminho como dev Full Stack, sempre bucando unir o lado visual com o funcional. Atualmente trabalho com <strong>design gráfico</strong>, criando de tudo um pouco: logotipos, identidades visuais, banners, modelagem 3d... E agora, estou me aprofundando em linguagens e frameworks como: </h3>
                <ul className="mt-5 ">
                    <li className=" gap-2 rtl:gap-reverse">
                        <div className="flex flex-col gap-2 rtl:gap-reverse">
                            <div className="text-blue-400">JavaScript</div>
                            <div className="text-orange-600">React</div>
                            <div className="text-red-400">Tailwind CSS</div>
                            <div className="text-blue-400">Node.js</div>
                            <div className="text-orange-600">C#</div>
                            <div className="text-red-400">Python</div>
                            <div className="text-blue-400">Django</div>
                            <div className="text-orange-600">Bootstrap</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}