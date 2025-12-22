"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import HtmlParser from 'react-html-parser';
import Notificacion from '../Notificacion';
import { ProductsCopies } from '@/app/Products';
import { useRouter } from 'next/navigation';

const planesSIM = ProductsCopies.find(product => product.id === "sim").variant;
const planesESIM = ProductsCopies.find(product => product.id === "esim").variant;

const sim = [
    ProductsCopies.find(product => product.id === "sim"),
    ProductsCopies.find(product => product.id === "esim")
]

const notifTitle = "Olvídate de hacer tus recargas mes a mes, Sin penalizaciones ni comisiones ocultas.";
const notifText = "Adquiere tu línea del Bienestar con Renovación Automática y beneficios especiales.";
const notifUrl = "/recargas_ysb";

const PlanesConserva = () => {
    const router = useRouter()
    const [selectedPlan, setSelectedPlan] = useState("");
    const [selectedSim, setSelectedSim] = useState("");
    const [planes, setPlanes] = useState([]);

    const handleClickPlan = (item) => {
        setSelectedPlan(item);
    }

    const handleClickSim = (item) => {
        setSelectedSim(item);
        if (item === 0) {
            setPlanes(planesSIM)
        } else setPlanes(planesESIM)
    }

    const handleSubmit = (e, formData) => {
        e.preventDefault();
        router.push(`/payment_page/${sim[selectedSim].id}?qty=1&price=${planes[selectedPlan].price}&type=${planes[selectedPlan].id}&form=${formData}`)
    }

    return (
        <form onSubmit={handleSubmit} className='bg-[#F2F2F2]'>
            <section className="py-20 px-4 sm:px-0 md:px-0 lg:px-0">
                <div className="max-w-5xl mx-auto my-14">
                    <h2 className="text-[50px] text-[#9B264A] text-center">1. Selecciona tu tipo de SIM</h2>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {sim.map((item, idx) => (
                        <div key={idx} onClick={() => handleClickSim(idx)} className={`${selectedSim === idx ? "shadow-2xl bg-[#B85564]" : "bg-[#E3D3BD]"} cursor-pointer hover:bg-[#B85564] transition-all group rounded-[20px] p-1 relative`}>
                            <h3 className={`${selectedSim === idx ? "text-white" : "text-[#9F2241]"} text-center group-hover:text-white text-[14px] sm:text-[22px] md:text-[22px] lg:text-[22px] py-4`}>{item.title}</h3>
                            <div className='bg-white h-auto sm:h-[400px] md:h-[400px] lg:h-[400px] rounded-b-[15px] flex flex-col items-center p-8'>
                                <img src={`/images/products/${item.images[0].image}`} className="max-h-32 w-auto!" alt="sim" />
                                <div className="py-4">
                                    {
                                        item.discount > 0 ?
                                            <h3 className="text-[12px] line-through sm:text-[40px] md:text-[40px] lg:text-[40px] sm:leading-10 md:leading-10 lg:leading-10 text-[#9F2241] font-bold mx-auto">
                                                ${item.price}MXN
                                            </h3>
                                            :
                                            ""
                                    }
                                    <h2 className="text-[30px] sm:text-[70px] md:text-[70px] lg:text-[70px] sm:leading-[70px] md:leading-[70px] lg:leading-[70px] text-[#9F2241] font-bold mx-auto">
                                        ${item.price - item.discount}MXN
                                    </h2>
                                </div>
                                <a
                                    className={`${selectedSim === idx ? "bg-[#9B264A] text-white" : "bg-transparent text-[#9B264A]"} border text-center border-[#9B264A] hover:text-black rounded-[50px] py-2 px-2 sm:px-12 md:px-12 lg:px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6`}
                                >
                                    <span className="absolute w-80 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-[#9B264A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative  transition duration-300 group-hover:text-white ease">{selectedSim === idx ? "Seleccionado" : "Seleccionar"}</span>
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Notificacion
                title={notifTitle}
                text={notifText}
                url={notifUrl}
                alt={false}
                noTopMargin={true} />

            {
                planes.length > 0 ?
                    <section className="sm:px-0 md:px-0 lg:px-0 px-4 py-10">
                        <h2 className="text-[50px] text-[#9B264A] text-center pb-10">2. Selecciona un paquete</h2>
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
                                    <SwiperSlide key={idx} onClick={() => handleClickPlan(idx)} className={`${selectedPlan === idx ? "shadow-2xl bg-[#B85564]" : "bg-[#E3D3BD]"} cursor-pointer hover:bg-[#B85564] transition-all group rounded-[20px] p-1 relative`}>

                                        <div className='relative'>
                                            <p className='bg-[#F3F3F3] rounded-[40px] py-0.5 px-4 absolute -bottom-3 right-2'>{item.vigencia}</p>
                                            <h3 className={`${selectedPlan === idx ? "text-white" : "text-[#9F2241]"} text-center group-hover:text-white text-[14px] sm:text-[22px] md:text-[22px] lg:text-[22px] py-4`}>{sim[selectedSim].title}</h3>
                                        </div>

                                        <div className='bg-white h-auto sm:h-[400px] md:h-[400px] lg:h-[400px] rounded-b-[15px] flex flex-col p-8'>
                                            <p className='text-[18px] sm:text-[25px] md:text-[25px] lg:text-[25px] text-[#9F2241]'>Paquete <strong>{item.cantidad}</strong></p>
                                            <hr className='border-[#D7D7D7] my-4' />
                                            <ul>
                                                {HtmlParser(item.perks)}
                                            </ul>
                                            <h2 className='text-[30px] sm:text-[70px] md:text-[70px] lg:text-[70px] text-[#9F2241] font-bold mx-auto'><span className='text-[12px] sm:text-[60px] md:text-[60px] lg:text-[60px]'>$</span>{item.plan}.<sup>00</sup> </h2>
                                            <a
                                                className={`${selectedPlan === idx ? "bg-[#9B264A] text-white" : "bg-transparent text-[#9B264A]"} border text-center border-[#9B264A] hover:text-black rounded-[50px] py-2 px-2 sm:px-12 md:px-12 lg:px-12 flex items-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer mx-auto mt-6`}

                                            >
                                                <span className="absolute w-80 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-[#9B264A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                                <span className="relative  transition duration-300 group-hover:text-white ease">{selectedPlan === idx ? "Seleccionado" : "Seleccionar"}</span>
                                            </a>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </section>
                    :
                    ""
            }

            {selectedPlan !== "" ?
                <section className="py-1 px-4 sm:px-0 md:px-0 lg:px-0">
                    <div className="max-w-4xl mx-auto my-14">
                        <h2 className="text-[50px] text-[#9B264A] text-center">3. Información del titular</h2>

                        <div className="flex gap-6 flex-col mx-auto max-w-[500px] mt-8">
                            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 w-full">
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-[#9B2649]" htmlFor="name">Nombre</label>
                                    <input id="name" name="name" type="text" className="flex-1 bg-white border-[#9B2649] placeholder:text-[#ABABAB] border rounded-[15px] p-2" placeholder="Ingresa tu nombre." required />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-[#9B2649]" htmlFor="lastname">Apellido</label>
                                    <input id="lastname" name="lastname" type="text" className="flex-1 bg-white border-[#9B2649] placeholder:text-[#ABABAB] border rounded-[15px] p-2" placeholder="Ingresa tu apellido." required />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 w-full">
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-[#9B2649]" htmlFor="name">Correo electrónico</label>
                                    <input id="email" name="email" type="email" className="flex-1 bg-white border-[#9B2649] placeholder:text-[#ABABAB] border rounded-[15px] p-2" placeholder="Ingresa tu correo electrónico." required />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-[#9B2649]" htmlFor="name">Número telefonico</label>
                                    <input id="phone" name="phone" type="tel" className="flex-1 bg-white border-[#9B2649] placeholder:text-[#ABABAB] border rounded-[15px] p-2" placeholder="Ingresa tu número actual." required />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Calle</label>
                                    <input name="calle" id="calle" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa la calle." required />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Colonía</label>
                                    <input name="colonia" id="colonia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu colonia." required />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Alcaldia</label>
                                    <input name="alcaldia" id="alcaldia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu alcaldia." required />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">C.P.</label>
                                    <input name="postal" id="postal" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu código postal." required />
                                </div>
                            </div>

                            <button
                                type='submit'
                                className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-full overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                            >
                                <span className="absolute w-200 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-white transition duration-300 group-hover:text-white ease">Enviar</span>
                            </button>
                        </div>
                    </div>
                </section>
                :
                ""
            }



        </form>
    )
}
export default PlanesConserva