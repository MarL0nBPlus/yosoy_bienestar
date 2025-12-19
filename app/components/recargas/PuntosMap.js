"use client"

import 'swiper/css';
import 'swiper/css/navigation';

const puntos = [
    {
        titulo: "Tienda más cercana",
        texto: "Entregasela al vendedor y seria todo, continua navegando."
    },
    {
        titulo: "Tienda más cercana",
        texto: "Entregasela al vendedor y seria todo, continua navegando."
    },
    {
        titulo: "Tienda más cercana",
        texto: "Entregasela al vendedor y seria todo, continua navegando."
    },
    {
        titulo: "Tienda más cercana",
        texto: "Entregasela al vendedor y seria todo, continua navegando."
    },
]

const PuntosMap = () => {
    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 pt-6 pb-32 bg-[#F2F2F2]">
            <div className="max-w-5xl mx-auto flex gap-4 flex-col sm:flex-row md:flex-row lg:flex-row mb-8">
                <div className='flex-1'>
                    <h3 className='text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#9B2649] font-bold'>Internet para el Bienestar</h3>
                    <p className='text-[27px] text-[#4A4A4A]'>Localiza tu tienda más cercana para adquirir tu linea del Bienestar.</p>
                </div>
                <div className='flex-1'>
                    <form className="flex gap-2 flex-col sm:flex-row md:flex-row lg:flex-row">
                        <div className="flex flex-1 bg-[#F5F5F5] border border-[#B85564] rounded-[15px] py-2 px-4">
                            <div className="flex items-center gap-1 mr-1">
                                <span className="material-symbols-outlined text-[#4A4A4A]/50">
                                    tablet_mac
                                </span>
                            </div>
                            <input type="text" className="flex-1" placeholder="Ingresa tu Código Postal" />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-full sm:w-fit md:w-fit lg:w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                        >
                            <span className="absolute w-100 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-300 group-hover:text-white ease">Buscar</span>
                        </button>
                    </form>
                    <button
                        type="submit"
                        className="w-full mt-4 text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                    >
                        <span className="absolute w-[800px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-center text-white transition duration-300 group-hover:text-white ease">Activar gps</span>
                    </button>
                </div>
            </div>

            <img className='max-w-full sm:max-w-7xl md:max-w-7xl lg:max-w-7xl mx-auto' src="/images/mapa.png" alt="" />

            <div className='flex flex-col gap-4 py-12'>
                {
                    puntos.map((item, idx) => (
                        <div key={idx} className={`py-2`}>
                            <div className={`border-2 border-[#E1E1E1] rounded-[10px] py-3 px-2 sm:px-10 md:px-10 lg:px-10 max-w-7xl mx-auto`}>
                                <button className={`text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] cursor-pointer w-full flex flex-col sm:flex-row md:flex-row lg:flex-row justify-start gap-14 items-center`} >
                                    <div className='flex text-left gap-6 items-center text-[#9B2649]'>
                                        <span className='p-4 text-[14px] sm:text-[30px] md:text-[30px] lg:text-[30px] text-[#E1E1E1] font-bold bg-[#9B264A] rounded-full flex justify-center items-center w-8 h-8 sm:w-[50px] md:w-[50px] lg:w-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px]'>{idx + 1}</span>
                                        {item.titulo}
                                    </div>
                                    <p>{item.texto}</p>
                                </button>
                            </div>
                        </div>
                    ))
                }
                <a
                    className={`text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 mx-auto flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer`}
                    href="#"
                >
                    <span className="absolute w-100 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative  transition duration-300 group-hover:text-white ease">Ubicar tiendas</span>
                </a>
            </div>
        </section>
    )
}
export default PuntosMap