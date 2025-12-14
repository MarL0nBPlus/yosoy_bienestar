const menu = [
    {
        titulo: "Recargar saldo",
        texto: "Quiero hacer mi recarga",
        enlace: "recargas_ysb"
    },
    {
        titulo: "Consulta tu saldo",
        texto: "Descarga nuestra app",
        enlace: "/consulta_saldo"
    },
    {
        titulo: "¿Dónde recargar?",
        texto: "Conoce los puntos físicos",
        enlace: "recargas_puntos"
    }
]
const RecargaMenu = ({ active }) => {
    return (
        <section className="flex flex-col gap-8">
            <div className="bg-linear-to-t from-[#F2F2F2] to-white">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4">
                    {
                        menu.map((item, idx) => (
                            <div key={idx} className={`flex-1 flex flex-col ${active === idx ? "bg-white text-[#4A4A4A]" : "bg-[#B85564] text-white"} border border-[#B85564] border-b-0 rounded-t-[20px] items-center p-2 pb-0`}>
                                <p className={`text-[30px]`}><strong>{item.titulo}</strong></p>
                                <p className={`text-[25px]`}>{item.texto}</p>
                                {
                                    active === idx ?
                                        <span className="material-symbols-outlined text-[75px]! text-[#BA956080] rotate-90">
                                            arrow_forward_ios
                                        </span>
                                        :
                                        <a href={item.enlace} className="flex gap-2 items-center text-white ml-auto mt-6">
                                            Descubre más
                                            <span className="ml-auto w-8 h-8 flex items-center justify-center bg-[#EDEDED] rounded-full">
                                                <img src="/images/arrow.svg" alt="" /></span>
                                        </a>
                                }

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default RecargaMenu