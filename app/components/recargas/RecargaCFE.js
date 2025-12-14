const RecargaCFE = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="bg-linear-to-t from-[#F2F2F2] to-white">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4">
                    <div className="flex-1 flex flex-col bg-white border border-[#B85564] border-b-0 rounded-t-[20px] items-center p-2 pb-0">
                        <p className="text-[30px] text-[#4A4A4A]"><strong>Recargar saldo</strong></p>
                        <p className="text-[25px]">Quiero hacer mi recarga</p>
                        <span className="material-symbols-outlined text-[75px]! text-[#BA956080] rotate-90">
                            arrow_forward_ios
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col border border-[#B85564] bg-[#B85564] border-b-0 rounded-t-[20px] items-center p-2 pb-0" >
                        <p className="text-[30px] text-white"><strong>Consulta tu saldo</strong></p>
                        <p className="text-[25px] text-white">Descarga nuestra app</p>
                        <a href="#" className="flex gap-2 items-center text-white ml-auto mt-6">
                            Descubre más
                            <span className="ml-auto w-8 h-8 flex items-center justify-center bg-[#EDEDED] rounded-full">
                                <img src="/images/arrow.svg" alt="" /></span>
                        </a>
                    </div>
                    <div className="flex-1 flex flex-col border border-[#B85564] bg-[#B85564] border-b-0 rounded-t-[20px] items-center p-4 pb-0" >
                        <p className="text-[30px] text-white"><strong>¿Dónde recargar?</strong></p>
                        <p className="text-[25px] text-white">Conoce los puntos físicos</p>
                        <a href="/recargas_puntos" className="flex gap-2 items-center text-white ml-auto mt-6">
                            Descubre más
                            <span className="ml-auto w-8 h-8 flex items-center justify-center bg-[#EDEDED] rounded-full">
                                <img src="/images/arrow.svg" alt="" /></span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-[#F2F2F2] rounded-t-[20px] w-fit p-4 mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 justify-center">
                <a href="/recargas_ysb" className="hover:bg-[#9B2649] rounded-[15px] flex justify-center p-2 max-w-[300px] w-[300px] mix-blend-difference opacity-25 hover:mix-blend-normal hover:opacity-100"><img className="w-[100px]" src="/images/internet.svg" alt="" /></a>
                <a href="/recargas_cfe" className="bg-[#2B8D54] rounded-[15px] flex justify-center p-2 max-w-[300px] w-[300px]"><img className="w-[200px]" src="/images/cfe.svg" alt="" /></a>
            </div>
        </section>
    )
}
export default RecargaCFE