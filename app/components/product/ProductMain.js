"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Modal } from '../Modal';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ProductForm from './ProductForm';



const ProductMain = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const colors = product.colors;
    const imgProduct = product.images;

    const openImage = (img) => {
        setIsModalOpen(true)
        setModalImage(img)
    }

    return (
        <section className='pb-20'>
            <div className='max-w-7xl mx-auto flex gap-2 pb-12 pt-52 sm:pt-44 md:pt-44 lg:pt-44'>
                <a href="/">YSB</a>
                <span>/</span>
                <a href="">Productos</a>
                <span>/</span>
                <a href="#">{product.title}</a>
            </div>
            <div className='max-w-6xl mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between'>
                {
                    imgProduct.length > 1 ? (
                        <div className='max-w-[552px]'>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                {imgProduct.map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className='border-2 border-[#F2F2F2] overflow-hidden max-h-[550px] p-4 relative'>
                                            <button onClick={() => openImage(item.image)} className="bg-[#EDEDED] text-[#B85564] rounded-full p-2 w-8 h-8 flex justify-center items-center absolute top-1 right-1 cursor-pointer hover:bg-[#9B264A] hover:text-white transition-all">
                                                <span className="material-symbols-outlined text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]!">
                                                    zoom_in
                                                </span>
                                            </button>
                                            <img className='w-[60%] mx-auto' src={`/images/products/${item.image}`} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="swiperThumb mt-4"
                            >
                                {imgProduct.map((item, idx) => (
                                    <SwiperSlide className='border-2 border-[#BA9560] overflow-hidden'>
                                        <img src={`/images/products/${item.image}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )
                        :
                        <div className='border-2 border-[#F2F2F2] overflow-hidden max-h-[550px] p-4 relative'>
                            <button onClick={() => openImage(imgProduct[0].image)} className="bg-[#EDEDED] text-[#B85564] rounded-full p-2 w-8 h-8 flex justify-center items-center absolute top-1 right-1 cursor-pointer hover:bg-[#9B264A] hover:text-white transition-all">
                                <span className="material-symbols-outlined text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]!">
                                    zoom_in
                                </span>
                            </button>
                            <img className='w-[60%] mx-auto' src={`/images/products/${imgProduct[0].image}`} />
                        </div>
                }

                <div className='max-w-[552px] bg-[#F5F5F566] p-6 rounded-[10px] flex flex-col gap-6'>
                    <h2 className='text-[#4A4A4A] font-bold text-[30px]'>{product.title}</h2>
                    <div className='flex gap-4 items-start'>
                        {product.discount ?
                            <>
                                <p className='text-[#4A4A4A] font-medium text-[25px] line-through'>${product.price}.<sup>00</sup></p>
                                <p className='text-[#4A4A4A] font-bold text-[40px]'>${product.price - product.discount}.<sup>00</sup></p>
                            </>
                            :
                            <p className='text-[#4A4A4A] font-bold text-[40px]'>${product.price}.<sup>00</sup></p>
                        }

                    </div>
                    <p className='text-[#777777]'>
                        {product.description}
                    </p>

                    <hr />

                    <ProductForm colors={colors} id={product.id}/>
                </div>
            </div>

            <Modal
                title={product.title}
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                }}
            >
                <img src={`/images/products/${modalImage}`} alt={product.title} />
            </Modal>

        </section >
    )
}
export default ProductMain