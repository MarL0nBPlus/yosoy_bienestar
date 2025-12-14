"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import HtmlParser from 'react-html-parser';

const planes = [
    {
        titulo: "Amantes Big Data",
        cantidad: "6 GB",
        costo: "100",
        perks: `<li>✓  Redes Sociales Sin Limites</li>
                <li>✓  Llamadas y SMS Ilimitados</li>
                <li><strong>✓  Hasta TRIPLE Gigas</strong> </li>`,
        vigencia: "30 días",
        destacado: false
    },
    {
        titulo: "Paquete full velocidad",
        cantidad: "12 GB",
        costo: "150",
        perks: `<li>✓  Redes Sociales Sin Limites</li>
                <li>✓  Llamadas y SMS Ilimitados</li>
                <li><strong>✓  Incluye compartir internet</strong></li>`,
        vigencia: "30 días",
        destacado: false
    },
    {
        titulo: "Para uso diario",
        cantidad: "105 GB",
        costo: "300",
        perks: `<li>✓  Redes Sociales Sin Limites</li>
                <li>✓  Llamadas y SMS Ilimitados</li>
                <li><strong>✓  Hasta TRIPLE Gigas</strong> </li>`,
        vigencia: "30 días",
        destacado: false
    }
]

const PlanesCFE = () => {
    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 pt-6 pb-32 bg-[#F2F2F2]">
            <div className="max-w-7xl mx-auto">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={60}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 80,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 60,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                    }}
                    className="planesSwiper p-[60px]!"
                >

                    {planes.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={`${item.destacado ? "bg-[#FF5F00] shadow-2xl" : "bg-[#2B8D54]"} rounded-[20px] p-1 relative`}>
                                {
                                    item.destacado ?
                                        <p className='text-[50px] absolute -top-10 -right-6'>🔥</p>
                                        :
                                        ""
                                }
                                <p className='bg-[#F3F3F3] rounded-[40px] py-0.5 px-4 absolute top-14 right-2'>{item.vigencia}</p>
                                <h3 className={`text-center ${item.destacado ? "text-white text-[16px] sm:text-[29px] md:text-[29px] lg:text-[29px] py-3" : "text-white text-[14px] sm:text-[22px] md:text-[22px] lg:text-[22px] py-4"}`}>{item.titulo}</h3>
                                <div className='bg-white h-auto sm:h-[400px] md:h-[400px] lg:h-[400px] rounded-b-[15px] flex flex-col p-8'>
                                    <p className='text-[18px] sm:text-[25px] md:text-[25px] lg:text-[25px] text-[#2B8D54]'>Paquete <strong>{item.cantidad}</strong></p>
                                    <h2 className='text-[30px] sm:text-[70px] md:text-[70px] lg:text-[70px] text-[#2B8D54] font-bold mx-auto'><span className='text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] sm:text-[60px] md:text-[60px] lg:text-[60px]'>$</span>{item.costo}.<sup>00</sup> </h2>
                                    <hr className='border-[#D7D7D7] my-4' />
                                    <ul>
                                        {HtmlParser(item.perks)}
                                    </ul>
                                    {
                                        item.destacado ?
                                            <a
                                                className="text-white bg-linear-65 from-[#FF5F00] to-[#DD2929] hover:text-black rounded-[50px] py-2 px-2 sm:px-12 md:px-12 lg:px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6"
                                                href="#"
                                            >
                                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                                <span className="relative text-white transition duration-300 group-hover:text-white ease">Comprar SIM</span>
                                            </a>
                                            :
                                            <a
                                                className="text-[#9B264A] border border-[#9B264A] hover:text-black rounded-[50px] py-2 px-2 sm:px-12 md:px-12 lg:px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6"
                                                href="#"
                                            >
                                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-[#9B264A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                                <span className="relative  transition duration-300 group-hover:text-white ease">Comprar SIM</span>
                                            </a>
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <a
                    className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-2 sm:px-20 md:px-20 lg:px-20 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6"
                    href="#"
                >
                    <span className="absolute w-100 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative  transition duration-300 group-hover:text-white ease">ver más sitios</span>
                </a>
            </div>

        </section>
    )
}
export default PlanesCFE