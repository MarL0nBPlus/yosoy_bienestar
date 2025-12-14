"use client"

import { useState } from 'react';
import AccordionItem from './AccordionItem';

const faqs = [
    {
        question: "Visita una de estas tiendas",
        images: ["logo_1.svg", "logo_2.svg", , "logo_3.svg", "logo_4.svg", "logo_5.svg", "logo_6.svg", "logo_7.svg", , "logo_8.svg", "logo_9.svg", "logo_10.svg"]
    },
    {
        question: "Indica que deseas una recarga de Internet para el Bienestaer",
    },
    {
        question: "En caso de necesitar una referencia de pago la puedes generar desde la App",
    },
    {
        question: "Entregasela al vendedor y seria todo, continua navegando.",
    },
]
const Continua = () => {

    const [activeIndex, setActiveIndex] = useState(null); // null means no item is open

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle or close
    };

    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 py-20">

            <div className="max-w-5xl mx-auto">
                <h2 className="text-[50px] text-[#9B264A] text-center">Continua conectado</h2>
            </div>
            <div className="max-w-4xl mx-auto my-4">
                <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-center">Porque tu navegación es lo mas importante para nosotros, tenemos más opciones donde puedes hacer recargas en efectivo.</p>
            </div>

            <div className='mt-14'>
                {faqs.map((item, index) => (
                    <AccordionItem
                        key={index}
                        idx={index}
                        question={item.question}
                        answer={item.answer}
                        logos={item.images}
                        isFaq={false}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>

            <div className='my-10 max-w-4xl mx-auto flex flex-col justify-center items-center gap-6 text-center'>
                <p>¡Encuentra tu tienda más cercana!</p>
                <a
                    className={`text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer`}
                    href="#"
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative  transition duration-300 group-hover:text-white ease">encontrar</span>
                </a>
            </div>

        </section>
    )
}

export default Continua