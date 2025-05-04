export function FaleComigo() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full px-4 sm:px-6 lg:px-8 py-10">
                <div className="py-32 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
                    <h1 className="mt-8 mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-red-600 dark:to-gray-100">
                            Fale Comigo
                        </span>{" "}
                        <form action="post" className=" w-full max-w-lg mt-8 font-normal text-sm">
                            <fieldset className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
                                <legend className="px-2 text-gray-900 dark:text-white">Suas informações</legend>
                                <div className="flex items-center w-full group py-3">
                                    <div className="relative px-1 ">
                                        <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nome</label>
                                    </div>
                                    <div className="relative px-1">
                                        <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Sobrenome</label>
                                    </div>
                                </div>
                                <div className="w-full group py-3">
                                    <div className="relative px-1 ">
                                        <input type="email" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                                    </div>
                                </div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white"></label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Digite sua mensagem"></textarea>
                                <button type="button" className=" mt-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Enviar</button>
                            </fieldset>
                        </form>
                    </h1>
                </div>
                <div className="py-32 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
                    <h1 className="mt-8 mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-red-600 dark:to-gray-100">
                            Proposta freelance
                        </span>{" "}
                    </h1>
                    <form className="w-full max-w-lg mt-8">
                        <fieldset className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
                            <legend className="px-2 text-gray-900 dark:text-white">Informações do Projeto</legend>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="relative">
                                        <input type="text" id="first-name" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                                        <label htmlFor="first-name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nome</label>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <div className="relative">
                                        <input type="text" id="last-name" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                                        <label htmlFor="last-name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Sobrenome</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="relative">
                                        <input type="tel" id="phone" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                                        <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Telefone (ex: 123-456-7890)</label>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <div className="relative">
                                        <input type="email" id="email" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensagem</label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Descreva seu projeto..."></textarea>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Língua aplicada no serviço</label>
                                <select id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                                    <option selected>Selecione uma opção</option>
                                    <option value="en">Inglês</option>
                                    <option value="es">Espanhol</option>
                                    <option value="fr">Francês</option>
                                    <option value="pt">Português (pt-br)</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
                                    Upload de protótipo
                                </label>
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="file_input" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 transition-colors duration-200">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Clique para enviar</span> ou arraste e solte
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                PDF, DOC, DOCX, JPEG ou PNG (MAX. 10MB)
                                            </p>
                                        </div>
                                        <input
                                            id="file_input"
                                            type="file"
                                            className="hidden"
                                            accept=".pdf,.doc,.docx,.jpeg,.png"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Linguagens preferidas</label>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center">
                                        <input id="javas cript" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="javascript" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">JavaScript</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="python" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="python" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Python</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="java" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="java" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Java</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="csharp" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="csharp" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">C#</label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de banco de dados recomendado</label>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center">
                                        <input id="sql" type="radio" value="sql" name="database" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="sql" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">SQL</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="nosql" type="radio" value="nosql" name="database" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="nosql" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NoSQL</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="shift" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Turno de preferência</label>
                                    <select id="shift" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                                        <option selected>Selecione um turno</option>
                                        <option value="morning">Manhã</option>
                                        <option value="afternoon">Tarde</option>
                                        <option value="evening">Noite</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label htmlFor="meeting-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Melhor horário para reunião</label>
                                    <input type="time" id="meeting-time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="delivery-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de entrega desejada</label>
                                <input type="date" id="delivery-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" />
                            </div>

                            <div className="flex justify-end gap-4">
                                <button type="reset" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    Limpar
                                </button>
                                <button type="submit" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                    Enviar Proposta
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}