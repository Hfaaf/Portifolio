import heitor from "../assets/HeitorFarias.jpg";

export function SobreMim() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col-reverse md:flex-row bg-gray-100 dark:bg-gray-900 pt-28 px-4 sm:px-6 lg:px-8">
                <img
                    alt="Heitor Farias Pinheiro do amaral"
                    className="w-full md:w-1/3 h-96 object-cover object-center rounded-lg shadow-lg dark:shadow-gray-800 mb-4 md:mb-0 order-last md:order-first"
                    src={heitor}
                />
                <div className="flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-red-600 dark:to-gray-100">
                            Designer gráfico | Dev full stack
                        </span><br /><br />
                    </h1>
                    <p className="text-base font-normal text-center text-gray-500 sm:text-lg lg:text-xl dark:text-gray-400 max-w-3xl">
                        Atualmente trabalho como designer gráfico na empresa Pic colorê,
                        onde aprimoro minha criatividade e habilidades visuais.
                        Sou estudante de Análise e Desenvolvimento de Sistemas no Senac (segundo período) e
                        busco me tornar um desenvolvedor Full Stack e Game Dev.
                        Tenho uma base sólida em design digital, adquirida no curso Start 5.0 da SAGA,
                        e estou sempre em busca de aprendizado e inovação na área de tecnologia.
                    </p>

                </div>
            </div >
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full px-4 sm:px-6 lg:px-8 py-10">

                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-extrabold text-center text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-red-600 dark:to-gray-100">
                                Experiência profissional:
                            </span>
                        </h2>
                        <div className="pt-5 relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Período
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Instituição
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Cargo
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Descrição
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            2023-Atual
                                        </th>
                                        <td className="px-6 py-4">
                                            Pic Colorê
                                        </td>
                                        <td className="px-6 py-4">
                                            Designer grafico
                                        </td>
                                        <td className="px-6 py-4">
                                            Atuando como designer grafico, fazendo trabalhos como banners, logos, modelagem 3d e realocação de plantas
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-extrabold text-center text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-red-600 dark:to-gray-100">
                                Formação:
                            </span>
                        </h2>
                        <div className="pt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full max-w-4xl text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Período
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Instituição
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Curso
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            2024-Atual
                                        </th>
                                        <td className="px-6 py-4">
                                            Senac
                                        </td>
                                        <td className="px-6 py-4">
                                            Tecnólogo em análise e Desenvolvimento de Sistemas
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            2022-2024
                                        </th>
                                        <td className="px-6 py-4">
                                            Saga
                                        </td>
                                        <td className="px-6 py-4">
                                            Curso start 5.0 design grafico
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-extrabold text-center text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-red-600 dark:to-gray-100">
                        Localização:
                    </span>
                </h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8914211140004!2d-35.001090626005926!3d-8.11253719191669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1d31c6e63981%3A0x825fe7a1e077885!2sCondom%C3%ADnio%20Villa%20das%20castanheiras!5e0!3m2!1spt-BR!2sbr!4v1746367820022!5m2!1spt-BR!2sbr"
                    className="py-10 rounded-lg dark:shadow-gray-800 w-80 h-52 md:w-96 md:h-72"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}