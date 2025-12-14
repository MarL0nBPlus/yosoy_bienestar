"use client"


const ConsultaApp = () => {
    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 py-14 bg-white">
            <div className="max-w-5xl mx-auto flex gap-12 items-start flex-col sm:flex-row md:flex-row lg:flex-row mb-8">
               <img className="max-w-60" src="/images/logo-app.png" alt="logo-app" />
                <div className='flex-1'>
                    <h3 className='text-[50px] text-[#9B2649] font-bold'>Descarga nuestra aplicación</h3>
                    <p className='text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]'>
                        Conoce todo lo relacionado con tu línea desde nuestra aplicación, en ella podrás:</p>

                    <ul className='text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A] list-disc my-4 ml-4'>
                        <li>Consultar tu saldo</li>
                        <li>Ver tus Gigas y Bonos disponibles</li>
                        <li>Promociones</li>
                        <li>Recargar tiempo aire</li>
                    </ul>

                    <p className='text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-[#4A4A4A]'>
                        E incluso hacer pasar tu línea de prepago a renovación automática con hasta 5 GB adicionales gratis.
                    </p>

                    <div className="flex gap-6 mt-6 flex-col sm:flex-row md:flex-row lg:flex-row">
                        <a href="#"><img className="max-w-[180px]" src="/images/gplay.png" alt="app" /></a>
                        <a href="#"><img className="max-w-[180px]" src="/images/astore.png" alt="app" /></a>
                    </div>
                </div>

            </div>
           
        </section>
    )
}
export default ConsultaApp