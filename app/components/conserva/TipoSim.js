const TipoSim = () => {
    return (
        <section className="py-20 px-4 sm:px-0 md:px-0 lg:px-0">
            <div className="max-w-5xl mx-auto my-14">
                <h2 className="text-[50px] text-[#9B264A] text-center">2. Selecciona tu tipo de SIM</h2>
            </div>
            <div className="max-w-4xl mx-auto flex gap-20 flex-col sm:flex-row md:flex-row lg:flex-row">
                <div className="flex-1 bg-[#E3D3BD] hover:bg-[#B85564] transition-all group rounded-[20px] p-1 relative">
                    <h3 className="text-center group-hover:text-white text-[#9F2241] text-[14px] sm:text-[22px] md:text-[22px] lg:text-[22px] py-4">Bundle Title</h3>
                    <div className="bg-white h-auto sm:h-[400px] md:h-[400px] lg:h-[400px] rounded-b-[15px] flex flex-col p-8">
                        <img src="/images/sim-bienestar.png" className="max-w-[200px]" alt="sim" />
                        <div className="py-4">
                            <h3 className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] sm:text-[40px] md:text-[40px] lg:text-[40px] sm:leading-10 md:leading-10 lg:leading-10 text-[#9F2241] font-bold mx-auto">
                                000GB
                            </h3>
                            <h2 className="text-[30px] sm:text-[70px] md:text-[70px] lg:text-[70px] sm:leading-[70px] md:leading-[70px] lg:leading-[70px] text-[#9F2241] font-bold mx-auto">
                                000GB
                            </h2>
                        </div>
                        <a className="text-[#9B264A] border border-[#9B264A] hover:text-black rounded-[50px] py-2 px-2 sm:px-12 md:px-12 lg:px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6" href="#"><span className="absolute w-80 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-[#9B264A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span><span className="relative  transition duration-300 group-hover:text-white ease">Ver más planes</span>
                        </a>
                    </div>
                </div>
                <div className="flex-1 bg-[#E3D3BD] hover:bg-[#B85564] transition-all group rounded-[20px] p-1 relative">
                    <h3 className="text-center group-hover:text-white text-[#9F2241] text-[14px] sm:text-[22px] md:text-[22px] lg:text-[22px] py-4">Bundle Title</h3>
                    <div className="bg-white h-auto sm:h-[400px] md:h-[400px] lg:h-[400px] rounded-b-[15px] flex flex-col p-8">
                        <img src="/images/e-sim.png" className="max-w-[200px]" alt="sim" />
                        <div className="py-4">
                            <h3 className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] sm:text-[40px] md:text-[40px] lg:text-[40px] sm:leading-10 md:leading-10 lg:leading-10 text-[#9F2241] font-bold mx-auto">
                                000GB
                            </h3>
                            <h2 className="text-[30px] sm:text-[70px] md:text-[70px] lg:text-[70px] sm:leading-[70px] md:leading-[70px] lg:leading-[70px] text-[#9F2241] font-bold mx-auto">
                                000GB
                            </h2>
                        </div>
                        <a className="text-[#9B264A] border border-[#9B264A] hover:text-black rounded-[50px] py-2 px-2 sm:px-12 md:px-12 lg:px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6" href="#"><span className="absolute w-80 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-[#9B264A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span><span className="relative  transition duration-300 group-hover:text-white ease">Ver más planes</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TipoSim