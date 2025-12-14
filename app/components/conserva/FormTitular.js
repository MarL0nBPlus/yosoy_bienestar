import HtmlParser from "react-html-parser"

const FormTitular = ({title, text}) => {
    return (
        <section className="py-1 px-4 sm:px-0 md:px-0 lg:px-0">
            <div className="max-w-4xl mx-auto my-14">
                <h2 className="text-[50px] text-[#9B264A] text-center">{title}</h2>
                <p className="text-center my-6">{ HtmlParser(text)}</p>
                <form className="flex gap-6 flex-col mx-auto max-w-[500px] mt-8">
                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 w-full">
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="name">Input Title</label>
                            <input id="name" name="name" type="text" className="flex-1 border-[#9B2649] border rounded-[15px] p-2" placeholder="Ingresa tu número celular actual." />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="lastname">Input Title</label>
                            <input id="lastname" name="lastname" type="text" className="flex-1 border-[#9B2649] border rounded-[15px] p-2" placeholder="Ingresa tu número celular actual." />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 w-full">
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="name">Input Title</label>
                            <input id="name" name="name" type="text" className="flex-1 border-[#9B2649] border rounded-[15px] p-2" placeholder="Ingresa tu número celular actual." />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 w-full">
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="name">Input Title</label>
                            <input id="name" name="name" type="text" className="flex-1 border-[#9B2649] border rounded-[15px] p-2" placeholder="Ingresa tu número celular actual." />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="lastname">Input Title</label>
                            <input id="lastname" name="lastname" type="text" className="flex-1 border-[#9B2649] border rounded-[15px] p-2" placeholder="Ingresa tu número celular actual." />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 w-full">
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="name">Input Title</label>
                            <input id="name" name="name" type="text" className="flex-1 border-[#9B2649] border rounded-[15px] p-2" placeholder="Ingresa tu número celular actual." />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="material-symbols-outlined text-[#BA9560]">
                            info
                        </span>
                        <p className="text-[#4D3A11]">Son los 16 a 18 dígitos que están atrás de tu tarjeta SIM, debajo del código de barras atrás de tu tarjeta SIM que terminan en F.</p>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-full overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                    >
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-white transition duration-300 group-hover:text-white ease">Enviar</span>
                    </button>
                </form>
            </div>
        </section>
    )
}
export default FormTitular