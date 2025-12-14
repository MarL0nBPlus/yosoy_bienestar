const Notificacion = ({ title, text, url, alt, noTopMargin }) => {
    return (
        <section className={`px-4 ${noTopMargin ? "" : "pt-56 sm:pt-44 md:pt-44 lg:pt-44"}`}>
            <div className={`max-w-6xl mx-auto border ${alt ? "border-[#B85564] bg-[#B85564]" : "border-[#BA9560] bg-[#E3D3BD]"} rounded-[20px] py-4 px-8 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-10 items-center sm:items-end md:items-end lg:items-end`}>
                <div className="flex-1">
                    <h2 className={`text-[30px] leading-10 ${alt ? "text-white" : "text-[#8A6321]"} mb-4 font-bold`}>{title}
                    </h2>
                    <p className={`${alt ? "text-white" : "text-black"}`}>{text}</p>
                </div>
                {
                    alt ?
                        <a
                            className="text-[#9B264A] bg-white hover:text-black rounded-[50px] py-2 px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"
                            href={url}
                        >
                            <span className="absolute w-80 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative transition duration-300 group-hover:text-white ease">ver más planes</span>
                        </a>
                        :
                        <a
                            className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"
                            href={url}
                        >
                            <span className="absolute w-80 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative transition duration-300 group-hover:text-white ease">ver más planes</span>
                        </a>
                }
            </div>
        </section>
    )
}
export default Notificacion