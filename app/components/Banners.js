import ReactCountryFlag from "react-country-flag"

const Banners = () => {
    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 pt-20 pb-4">
            <div className="max-w-7xl mx-auto flex gap-4 flex-col sm:flex-row md:flex-row lg:flex-row">
                <div className="bg-[#BA956040] p-4 rounded-[20px] flex-2">
                    <h3 className="text-[#9B2649] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] font-bold">Internet para el Bienestar</h3>
                    <p className="text-[27px] text-[#4A4A4A] mb-6">Cambiate al Bienestar, conserva tu número  y  obtén hasta el triple de gigas</p>
                    <form className="flex gap-2 flex-col sm:flex-row md:flex-row lg:flex-row">
                        <div className="flex flex-1 bg-[#F5F5F5] rounded-[15px] py-2 px-4">
                            <div className="flex items-center gap-1 mr-1 pr-1 border-r border-r-black/30">
                                <span className="material-symbols-outlined text-[#4A4A4A]/50">
                                    tablet_mac
                                </span>
                                <ReactCountryFlag countryCode="mx" svg />
                                <p className="text-[#4A4A4A]/50">+52</p>
                            </div>
                            <input type="text" className="flex-1" placeholder="Ingresa tu número celular actual." />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                        >
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-300 group-hover:text-white ease">lo quiero</span>
                        </button>
                    </form>
                </div>
                <div className="bg-[#B85564] p-4 rounded-[20px] flex-1 flex flex-col justify-between items-start">
                    <img className="max-w-[100px]" src="/images/internet.svg" alt="" />
                    <p className="text-white text-[25px]">Grandes ahorros</p>
                    <h3 className="text-white text-[30px] leading-8 font-bold">Hasta 20% más barato que otros</h3>
                    <a href="" className="ml-auto w-8 h-8 flex items-center justify-center bg-[#EDEDED] rounded-full"><img src="/images/arrow.svg" alt="" /></a>
                </div>
                <div className="bg-[#569E84] p-4 rounded-[20px] flex-1 flex flex-col justify-between items-start">
                    <img className="max-w-[150px]" src="/images/cfe.svg" alt="" />
                    <p className="text-white text-[25px]">Recarga fácil</p>
                    <h3 className="text-white text-[30px] leading-8 font-bold">Hasta XX GB hasta por 30 días</h3>
                    <a href="" className="ml-auto w-8 h-8 flex items-center justify-center bg-[#EDEDED] rounded-full"><img src="/images/arrow.svg" alt="" /></a>
                </div>
            </div>
        </section>
    )
}
export default Banners