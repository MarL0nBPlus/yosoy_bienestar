const PromoBanner = () => {
    return (
        <section className="px-4 sm:px-0 md:px-0 lg:px-0">
            <div className="max-w-7xl mx-auto  rounded-[25px]">
                <div className="flex flex-col gap-4 bg-[url(/images/comboblackfongb.png)] bg-contain bg-bottom-right bg-no-repeat p-6 pb-24 sm:pb-6 md:pb-6 lg:pb-6">
                    <h2 className="font-black text-[#BA9560] text-[67px] leading-[67px]">El combo perfecto:</h2>
                    <p className="text-[30px] text-[#9B264A]">Activa, conecta y disfruta al instante</p>
                    <a
                        href="/product_page/paquetetelefono"
                        className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                    >
                        <span className="absolute w-104 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-white transition duration-300 group-hover:text-white ease">Quiero mi combo</span>
                    </a>
                </div>
            </div>

        </section>
    )
}
export default PromoBanner