"use client"
import HtmlParser from "react-html-parser"
import { ProductsCopies } from "../Products"
import { useRouter } from 'next/navigation';

const benMed = ProductsCopies.find(product => product.id === "membresiamed").variant;
const beneficios = [
    {
        icon_small: "cardiology",
        icon_main: "cardiology",
        name: "Membresía de Salud Básica",
        description: "30 días de suscripción",
        url: "/product_page/membresiamed",
        color: "bg-[#D9EEF6]",
        colorGrad: "from-[#386FB4] from-40% to-[#D9EEF6]",
        textColor: "text-[#386FB4]"
    },
    {
        icon_small: "cardiology",
        icon_main: "heart_plus",
        name: "Membresía de Salud Plus",
        description: "30 días de suscripción",
        url: "/product_page/membresiamed#plus",
        color: "bg-[#BA9560]",
        colorGrad: "from-[#8C724D] from-40% to-[#BA9560]",
        textColor: "text-white"
    },

]
const Beneficios = () => {
    const router = useRouter()

    const handleSend = (idx) => {
        router.push(`/product_page/membresiamed?type=${idx}`)
    }

    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 py-20">

            <div className="max-w-5xl mx-auto">
                <h2 className="text-[50px] text-[#9B264A] text-center">Los <strong>mejores beneficios</strong> a tu línea</h2>
            </div>
            <div className="max-w-4xl mx-auto my-4">
                <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-center">Selecciona tu paquete de Internet para el Bienestar ideal para ti.
                    Cambia de plan o cancela en cualquier momento y ahorra hasta 20% más que con otras compañías.</p>
            </div>

            <div className="max-w-4xl mx-auto mt-20 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                {
                    beneficios.map((item, idx) => (
                        <div key={idx} className={`bg-radial ${item.colorGrad} p-3 rounded-3xl`}>
                            <div className={`rounded-[20px] h-full flex flex-col justify-between p-4 ${item.color}`}>
                                {
                                    item.icon_small ?
                                        <span className={`material-symbols-outlined text-[43px]! ${item.textColor}`}>
                                            {item.icon_small}
                                        </span>
                                        :
                                        ""
                                }

                                <div>
                                    {
                                        item.icon_main ?
                                            <span className={`material-symbols-outlined text-[103px]! ${item.textColor} opacity-30 text-center mb-4 block!`}>
                                                {item.icon_main}
                                            </span>
                                            :
                                            ""
                                    }
                                    <h2 className={`text-[25px] leading-7 ${item.textColor} font-bold`}>{item.name}</h2>
                                    <div className={`mb-4 ${item.textColor}`}>{HtmlParser(item.description)}</div>
                                </div>
                                <button 
                                onClick={()=>handleSend(idx)}
                                className={`flex ${item.textColor} cursor-pointer gap-2 items-center justify-end`}>Descubre más <span className="material-symbols-outlined">
                                    arrow_right_alt
                                </span></button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Beneficios