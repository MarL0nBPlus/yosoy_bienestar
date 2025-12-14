import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const Avisos = () => {
    return (

        <Swiper
            slidesPerView={1}
            className="avisosSwiper"
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            modules={[Autoplay]}
        >


            <SwiperSlide >
                <div className='bg-[#9B264A] flex justify-center items-start sm:items-center md:items-center lg:items-center gap-1 sm:gap-8 md:gap-8 lg:gap-8 py-2 px-4 flex-col sm:flex-row md:flex-row lg:flex-row sm:px-0 md:px-0 lg:px-0'>
                    <span className="material-symbols-outlined text-white">
                        sd_card
                    </span>
                    <p className='text-white text-[17px]'>Obtén un <strong>SIM</strong> Gratis en el <strong>Zócalo</strong> de la <strong>Ciudad de México</strong> o Haciendo tu portabilidad</p>
                    <a className='text-white uppercase text-[17px] underline font-bold' href="#">AQUÍ</a>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className='bg-[#008E60] flex justify-center items-start sm:items-center md:items-center lg:items-center gap-1 sm:gap-8 md:gap-8 lg:gap-8 py-2 px-4 flex-col sm:flex-row md:flex-row lg:flex-row sm:px-0 md:px-0 lg:px-0'>
                    <img className='max-w-[120px]' src="/images/cfe.svg" alt="cfe" />
                    <p className='text-white text-[17px]'>Adquiere hoy tus paquetes de 6 y 12 meses de CFE Internet.</p>
                    <a className='text-white uppercase text-[17px] underline font-bold' href="#">COMPRA AQUÍ</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-[url(/images/bg-rectangle.svg)] bg-right bg-contain bg-no-repeat flex justify-center items-start sm:items-center md:items-center lg:items-center gap-1 sm:gap-8 md:gap-8 lg:gap-8 px-4 flex-col sm:flex-row md:flex-row lg:flex-row sm:px-0 md:px-0 lg:px-0'>
                    <img src="/images/all-logos.png" alt="logos" />
                    <p className='text-[#B08A52] text-[17px] bg-cover'>Paga en 3 MSI en compras de $1,500 o más.</p>
                    <div className='px-4 py-2'>
                        <p className='text-white text-[17px]'>+ Envío gratis en celulares y accesorios*</p>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>


    )
}
export default Avisos