const Soporte = () => {
    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 pt-20">

            <div className="max-w-7xl mx-auto">
                <h2 className="text-[50px] text-[#9B264A]">¿Necesitas soporte?</h2>
            </div>
            <div className="max-w-7xl mx-auto my-4">
                <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">Si neceistas asistencia con tu recagra de tiempo aire, portabilidad o tienes más consultas sobre nuestro servicio comercial o servicio empresarial, puedes escribirnos o marcarnos a los siguientes números y formularios de contacto.</p>
            </div>

            <div className="max-w-7xl mx-auto my-20 flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between gap-14">
                <div className="flex-1">
                    <p>
                        <strong>Ventas</strong>
                        <br />
                        +52 (56) 4469 7852
                        <br />
                        contacto@yosoybienestar.com
                        <br /><br />

                        <strong>Soporte Técnico</strong>
                        <br />
                        +52 (55) 9331 1394
                        <br /><br />

                        <strong>Atención a dudas y consultas</strong>
                        <br />
                        +52 (56) 9331 1394
                        <br /><br />
                        O marca desde tu linea YSB al *444
                        <br />
                        www.altanredes.com
                        <br />
                        www.internerparaelbienestar.mx</p>
                </div>
                <div className="flex-1">
                    <form className='product-form flex flex-col gap-4'>

                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Nombre</label>
                                <input name="name" id="name" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu nombre." />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Apellido</label>
                                <input name="apellido" id="apellido" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu apellido." />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Número telefonico</label>
                                <input name="phone" id="phone" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu número telefonico." />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Correo electrónico</label>
                                <input name="email" id="email" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="email" placeholder="Ingresa tu correo electrónico." />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Consulta a realizar</label>
                                <textarea
                                    placeholder="Ingresa aquí todas tus dudas o comentarios y en breve nos pondremos en contacto con usted al número telefónico que nos indicó."
                                    name="message"
                                    id="message"
                                    className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" cols="30" rows="10"></textarea>

                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                        >
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-300 group-hover:text-white ease">enviar consulta</span>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Soporte