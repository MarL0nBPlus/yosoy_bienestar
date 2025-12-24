"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductsCopies } from '@/app/Products';
import 'swiper/css';
import 'swiper/css/navigation';
import HtmlParser from 'react-html-parser';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const sim = ProductsCopies.find(product => product.id === "cfe");
const planes = ProductsCopies.find(product => product.id === "cfe").variant;

const PlanesCFE = ({ captions }) => {
    const [isActive, setIsActive] = useState("");
    const router = useRouter()

    const handleClick = (item) => {
        setIsActive(item)
    }

     const handleSend = () => {
        router.push(`/product_page/${sim.id}?type=${isActive}`)
    }

    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 bg-[#F2F2F2]">
            {captions ?
                <>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-[50px] text-[#9B264A] text-center">Selecciona <strong>tu plan</strong></h2>
                    </div>
                    <div className="max-w-4xl mx-auto my-4">
                        <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-center">Selecciona tu paquete con Internet para el Bienestar ideal para ti o cambia de plan y ahorra hasta 20% menos que con otras compañías.</p>
                    </div>
                </>
                :
                ""
            }

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
                            <div onClick={()=>handleClick(idx)} className={`${item.destacado ? "bg-[#FF5F00]" : "bg-initial"} ${isActive === idx ? "shadow-2xl bg-[#E3D3BD]" : "bg-[#2B8D54]"} hover:shadow-2xl transition-all cursor-pointer rounded-[20px] p-1 relative`}>
                                {
                                    item.destacado ?
                                        <p className='text-[50px] absolute -top-10 -right-6'>🔥</p>
                                        :
                                        ""
                                }
                                <div className='relative'>
                                    <p className='bg-[#F3F3F3] rounded-[40px] py-0.5 px-4 absolute -bottom-3 right-2'>{item.vigencia}</p>
                                <h3 className={`text-center font-bold ${(item.destacado || isActive=== idx) ? "text-[#2B8D54]" : "text-white"} text-[14px] sm:text-[22px] md:text-[22px] lg:text-[22px] py-4`}>{sim.title}</h3>
                                </div>
                                <div className='bg-white h-auto sm:h-[400px] md:h-[400px] lg:h-[400px] rounded-b-[20px] flex flex-col p-8'>
                                    <p className='text-[18px] sm:text-[25px] md:text-[25px] lg:text-[25px] text-[#2B8D54]'>Paquete de <strong>{item.plan}GB</strong></p>
                                    <h2 className='text-[30px] sm:text-[70px] md:text-[70px] lg:text-[70px] text-[#2B8D54] font-bold mx-auto'><span className='text-[12px] sm:text-[60px] md:text-[60px] lg:text-[60px]'>$</span>{item.price}.<sup>00</sup> </h2>
                                    <hr className='border-[#D7D7D7] my-4' />
                                    <ul>
                                        {HtmlParser(item.perks)}
                                    </ul>
                                    {
                                        item.destacado ?
                                            <button
                                                className="text-white bg-linear-65 from-[#FF5F00] to-[#DD2929] hover:text-black rounded-[50px] py-2 px-2 sm:px-12 md:px-12 lg:px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6"
                                                onClick={handleSend}
                                                disabled = {isActive === idx ? false : true}
                                            >
                                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                                <span className="relative text-white transition duration-300 group-hover:text-white ease">{isActive === idx ? "Comprar SIM" : "Seleccionar"}</span>
                                            </button>
                                            :
                                            <button
                                                className={`${isActive === idx ? "bg-[#9B264A] text-white" : "bg-transparent text-[#9B264A]"} border text-center border-[#9B264A] hover:text-black rounded-[50px] py-2 px-2 sm:px-12 md:px-12 lg:px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6`}
                                                onClick={handleSend}
                                                disabled = {isActive === idx ? false : true}
                                            >
                                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                                <span className="relative transition duration-300 group-hover:text-white ease">{isActive === idx ? "Comprar SIM" : "Seleccionar"}</span>
                                            </button>
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}
export default PlanesCFE