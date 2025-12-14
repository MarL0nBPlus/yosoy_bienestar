const servicios = [
    {
        icon: "4g_mobiledata",
        name: "Telefonía Celular"
    },
    {
        icon: "mobile_cast",
        name: "Internet Portátil"
    },
    {
        icon: "shoppingmode",
        name: "Tienda en Línea"
    },
    {
        icon: "domain",
        name: "Telefonia Empresarial"
    },
    {
        icon: "globe",
        name: "Roaming Internacional"
    }
]
const Servicios = () => {
    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-[50px] text-[#9B264A] text-center mb-8"><strong>Explora</strong> todos los servicios de YSB</h2>
                <div className="flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row gap-6 sm:gap-0 md:gap-0 lg:gap-0">
                    {
                        servicios.map((item, idx) => (
                            <div key={idx} className="text-center flex flex-col gap-0 sm:gap-4 md:gap-4 lg:gap-4 items-center flex-1">
                                <span className="material-symbols-outlined text-[#B46000]/30 text-[80px]!">
                                    {item.icon}
                                </span>
                                <p className="max-w-[100px]">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Servicios