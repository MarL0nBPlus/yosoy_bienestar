const beneficios = [
    {
        icon_small: "cardiology",
        icon_main: "volunteer_activism",
        name: "Membresía de salud",
        description: "Beneficios para ti desde $39 pesos.",
        url: "#",
        color: "bg-[#D9EEF6]",
        textColor: "text-[#386FB4]"
    },
    {
        icon_small: "cardiology",
        icon_main: "volunteer_activism",
        name: "Membresía de salud",
        description: "Beneficios para ti desde $39 pesos.",
        url: "#",
        color: "bg-[#EACCFF]",
        textColor: "text-[#512DB5]"
    },
    {
        icon_small: "cardiology",
        icon_main: "volunteer_activism",
        name: "Membresía de salud",
        description: "Beneficios para ti desde $39 pesos.",
        url: "#",
        color: "bg-[#D8FEC2]",
        textColor: "text-[#2B8D54]"
    },
    {
        icon_small: "cardiology",
        icon_main: "volunteer_activism",
        name: "Membresía de salud",
        description: "Beneficios para ti desde $39 pesos.",
        url: "#",
        color: "bg-[#FFCCF0]",
        textColor: "text-[#971099]"
    },
    {
        icon_small: "cardiology",
        icon_main: "volunteer_activism",
        name: "Membresía de salud",
        description: "Beneficios para ti desde $39 pesos.",
        url: "#",
        color: "bg-[#1F7556]",
        textColor: "text-white"
    }
]
const Beneficios = () => {
    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 py-20">

            <div className="max-w-5xl mx-auto">
                <h2 className="text-[50px] text-[#9B264A] text-center">Los <strong>mejores beneficios</strong> a tu línea</h2>
            </div>
            <div className="max-w-4xl mx-auto my-4">
                <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-center">Selecciona tu paquete de Internet para el Bienestar ideal para ti.
                    Cambia de plan o cancela en cualquier momento y ahorra hasta 20% más que con otras compañías.</p>
            </div>

            <div className="max-w-7xl mx-auto mt-20 gap-4 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
                {
                    beneficios.map((item, idx) => (
                        <div key={idx} className={`rounded-[20px] p-4 ${item.color}`}>
                            <span className={`material-symbols-outlined text-[43px]! ${item.textColor}`}>
                                {item.icon_small}
                            </span>
                            <div>
                                <span className={`material-symbols-outlined text-[103px]! ${item.textColor} opacity-30 text-center mb-4 block!`}>
                                    {item.icon_main}
                                </span>
                                <h2 className={`text-[25px] leading-7 ${item.textColor} font-bold`}>{item.name}</h2>
                                <p className={`mb-4 ${item.textColor}`}>{item.description}</p>
                                <a href={item.url} className={`flex ${item.textColor} gap-2 items-center justify-end`}>Descubre más <span className="material-symbols-outlined">
                                    arrow_right_alt
                                </span></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Beneficios