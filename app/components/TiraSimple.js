const TiraSimple = ({alt}) => {
    return (<section className="px-4 sm:px-0 md:px-0 lg:px-0 flex-col sm:flex-row md:flex-row lg:flex-row">
        <div className={`max-w-7xl mx-auto ${alt ? "bg-[#9B264A] rounded-[20px]" : "bg-[#C6A87C80] rounded-b-[20px]"}  py-2 px-6 flex justify-between items-center flex-col sm:flex-row md:flex-row lg:flex-row`}>
            <div className="flex gap-4 items-center">
                <p className={`${alt ? "text-white" : "text-[#9B264A]"} text-[22px]`}>Realiza más solicitudes a través de <strong>nuestros Canales digitales</strong></p>
            </div>
            <div className="flex gap-4 items-center flex-col sm:flex-row md:flex-row lg:flex-row mt-4 sm:mt-0 md:mt-0 lg:mt-0">
                <a
                    className="text-white bg-[#BA9560] hover:text-black rounded-[50px] py-2 px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"
                    href="#"
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-white transition duration-300 group-hover:text-white ease">whatsapp</span>
                </a>

                <a
                    className={` ${alt ? "text-[#9B264A] bg-white font-medium":"text-white bg-[#9B264A]"} hover:text-black rounded-[50px] py-2 px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer`}
                    href="/consulta_saldo"
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative  transition duration-300 group-hover:text-white ease">obtener app</span>
                </a>
            </div>
        </div>
    </section>)
}
export default TiraSimple