const menu = [
    {
        text: "Obtener línea",
        url: "/conserva_numero"
    },
    {
        text: "Hacer portabilidad",
        url: "/portabilidad"
    }
]
const ConservaMenu = ({active}) => {
    return (
        <section className="flex flex-col gap-8 mt-8">
            <div className="max-w-5xl mx-auto mt-14">
                <h2 className="text-[50px] text-[#9B264A] text-center">Conserva tú mismo número y obtén beneficios con YSB</h2>
            </div>
            <div className="max-w-4xl mx-auto my-4">
                <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-center">Como usuario de una línea celular, tienes el derecho de cambiar de operador de telefonía conservando tu número.
                    Pórtate y en 24 horas podrás disfrutar de la mejor Red 4G LTE con la mayor cobertura y velocidad.</p>
            </div>
            <div className="bg-[#F2F2F2] rounded-t-[20px] w-fit p-4 mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 justify-center">
                {
                    menu.map((item, idx)=>(
                        <a key={idx} href={item.url} className={`${active === idx ? "bg-white text-[#9B2649] shadow-2xs" : ""} hover:bg-white hover:text-[#9B2649] rounded-[15px] flex justify-center p-4 max-w-[300px] w-[300px]`}>{item.text}</a>
                    ))
                }
            </div>
        </section>
    )
}
export default ConservaMenu