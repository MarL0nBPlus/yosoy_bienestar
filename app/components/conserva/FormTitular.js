import HtmlParser from "react-html-parser"

const FormTitular = ({ title, text }) => {
    return (
        <section className="py-1 px-4 sm:px-0 md:px-0 lg:px-0">
            <div className="max-w-4xl mx-auto my-14">
                <h2 className="text-[50px] text-[#9B264A] text-center">{title}</h2>
                <p className="text-center my-6">{HtmlParser(text)}</p>
                <form className="flex gap-6 flex-col mx-auto max-w-[500px] mt-8">
                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 w-full">
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="name">Nombre</label>
                            <input id="name" name="name" type="text" className="flex-1 bg-white border-[#9B2649] placeholder:text-[#ABABAB] border rounded-[15px] p-2" placeholder="Ingresa tu nombre." required />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="lastname">Apellido</label>
                            <input id="lastname" name="lastname" type="text" className="flex-1 bg-white border-[#9B2649] placeholder:text-[#ABABAB] border rounded-[15px] p-2" placeholder="Ingresa tu apellido." required />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 w-full">
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="name">Correo electrónico</label>
                            <input id="email" name="email" type="email" className="flex-1 bg-white border-[#9B2649] placeholder:text-[#ABABAB] border rounded-[15px] p-2" placeholder="Ingresa tu correo electrónico." required />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[#9B2649]" htmlFor="name">Número telefonico</label>
                            <input id="phone" name="phone" type="tel" className="flex-1 bg-white border-[#9B2649] placeholder:text-[#ABABAB] border rounded-[15px] p-2" placeholder="Ingresa tu número actual." required />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Calle</label>
                            <input name="calle" id="calle" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa la calle." required />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Colonía</label>
                            <input name="colonia" id="colonia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu colonia." required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Alcaldia</label>
                            <input name="alcaldia" id="alcaldia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu alcaldia." required />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">C.P.</label>
                            <input name="postal" id="postal" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu código postal." required />
                        </div>
                    </div>

                    <button
                        type='submit'
                        className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-full overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                    >
                        <span className="absolute w-200 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-white transition duration-300 group-hover:text-white ease">Enviar</span>
                    </button>
                </form>
            </div>
        </section>
    )
}
export default FormTitular