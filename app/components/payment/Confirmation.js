const Confirmation = () => {
    return (
        <section>
            <div className="max-w-5xl mx-auto border rounded-[20px] border-[#BA9560] flex flex-col mt-10 gap-6">
                <div className="p-6 ">
                    <h2 className="text-[30px] text-[#B85564] font-semibold">[Nombre cliente]</h2>
                    <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-black/70">Conoce detalle de tu compra. Nio. XXXXXX</p>
                </div>

                <div className="grid grid-cols-3 p-6 gap-3">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#B85564] font-bold">Costo</h3>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">$000,000.00 MXN</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#B85564] font-bold">Cuotas solicitadas</h3>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">3 MSI</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#B85564] font-bold">Forma de  pago</h3>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A] flex"><span><img src="/images/mastercard.svg" alt="card" /></span>****987</p>
                    </div>
                </div>

                <hr className="border-[#BA9560]" />

                <div className="grid grid-cols-3 px-6 py-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#B85564] font-bold">Producto</h3>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">Content</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">Content</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">Content</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">Content</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">Content</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#B85564] font-bold">Cantidad</h3>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">1</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">1</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">1</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">1</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">1</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#B85564] font-bold">Costo</h3>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">$000,000.00 MXN</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">$000,000.00 MXN</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">$000,000.00 MXN</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">$000,000.00 MXN</p>
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]">$000,000.00 MXN</p>
                    </div>
                </div>

                <hr className="border-[#BA9560]" />

                <div className="flex flex-col gap-4 items-end p-6 ">
                        <div className="flex gap-4 items-center">
                            <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">Costo</h3>
                            <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">$000,000.00 MXN</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] flex flex-col items-end">Costo <br />
                                <small className="text-[#9B2649] font-light text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Incluidos 16%</small></h3>
                            <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">$000,000.00 MXN</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">Costo</h3>
                            <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">$000,000.00 MXN</p>
                        </div>
                    </div>

            </div>
            <div className="py-8 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 justify-center items-center">
                <button
                    type="submit"
                    className="text-[#9B264A] border border-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                >
                    <span className="absolute w-[500px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative transition duration-300 group-hover:text-white ease">Ver más planes</span>
                </button>
                <button
                    type="submit"
                    className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                >
                    <span className="absolute w-[500px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-white transition duration-300 group-hover:text-white ease">Ver más planes</span>
                </button>
            </div>
        </section>
    )
}
export default Confirmation