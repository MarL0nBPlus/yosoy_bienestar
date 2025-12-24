"use client"

import { useState } from 'react';
import AccordionItem from './AccordionItem';

const faqs = [
    {
        question: "Visita una de estas tiendas",
        image: "logos-empresas.png"
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

    const [activeIndex, setActiveIndex] = useState(0); // null means no item is open

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
                    <div key={index} className=" py-2">
                        <div className="border-2 border-[#E1E1E1] rounded-[10px] py-3 px-2 sm:px-10 md:px-10 lg:px-10 max-w-7xl mx-auto">
                            <div className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] w-full flex justify-between items-center">
                                <div className="flex text-left gap-6 items-center">
                                    <span className="p-4 text-[14px] sm:text-[30px] md:text-[30px] lg:text-[30px] text-[#9B264A] font-bold bg-[#E1E1E1] rounded-full flex justify-center items-center w-8 h-8 sm:w-[50px] md:w-[50px] lg:w-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px]">
                                        {index + 1}</span>
                                    {item.question}
                                </div>
                            </div>
                            {
                                item.image ?
                                    <div className="py-4">
                                        <div className="mt-8">
                                            <img className='max-w-full' alt="logos" src={`/images/${item.image}`} />
                                        </div>
                                    </div>
                                    :
                                    ""
                            }
                        </div>
                    </div>
                ))}
            </div>

            <div className='my-10 max-w-4xl mx-auto flex flex-col justify-center items-center gap-6 text-center'>
                <p>¡Encuentra tu tienda más cercana!</p>
                <a
                    className={`text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer`}
                    href="/recargas_puntos"
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative  transition duration-300 group-hover:text-white ease">ubicar tienda</span>
                </a>
            </div>

        </section>
    )
}

export default Continua