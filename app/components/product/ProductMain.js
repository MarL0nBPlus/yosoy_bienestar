"use client"
import React, { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSearchParams } from 'next/navigation';

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
    const [finalPrice, setFinalPrice] = useState(product.variant ? product.variant[0].price : product.price);
    const [typeId, setTypeId] = useState(product.variant ? product.variant[0].id : "");
    const [singleImage, setSingleImage] = useState(product.images[0].image)

    const searchParams = useSearchParams();
    const [selected, setSelected] = useState(0);

    const colors = product.colors;
    const imgProduct = product.images;

    useEffect(() => {
        if (searchParams.get('type') !== null) {
            setFinalPrice(product.variant[searchParams.get('type')].price);
            setTypeId(product.variant[searchParams.get('type')].id);
            setSingleImage(product.variant[searchParams.get('type')].image);
            setSelected(searchParams.get('type'));
        }
    }, [])

    const openImage = (img) => {
        setIsModalOpen(true)
        setModalImage(img)
    }

    const handleChange = (event) => {
        setFinalPrice(product.variant[event.target.value].price);
        setTypeId(product.variant[event.target.value].id);
        setSingleImage(product.variant[event.target.value].image);
        setSelected(event.target.value);
    };

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
                        <div className='flex-1 max-w-[552px]'>
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
                                            <img className='w-[90%] mx-auto' src={`/images/products/${item.image}`} />
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
                        <div className='flex-1 max-w-[552px] border-2 border-[#F2F2F2] overflow-hidden max-h-[550px] p-4 relative'>
                            <button onClick={() => openImage(singleImage)} className="bg-[#EDEDED] text-[#B85564] rounded-full p-2 w-8 h-8 flex justify-center items-center absolute top-1 right-1 cursor-pointer hover:bg-[#9B264A] hover:text-white transition-all">
                                <span className="material-symbols-outlined text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]!">
                                    zoom_in
                                </span>
                            </button>
                            <img className='w-[90%] object-contain h-full mx-auto' src={`/images/products/${singleImage}`} />
                        </div>
                }

                <div className='flex-1 max-w-[552px] bg-[#F5F5F566] p-6 rounded-[10px] flex flex-col gap-6'>
                    <h2 className='text-[#4A4A4A] font-bold text-[30px]'>{product.title}</h2>
                    <div className='flex gap-4 items-start'>
                        {product.discount ?
                            <>
                                <p className='text-[#4A4A4A] font-medium text-[25px] line-through'>${finalPrice}.<sup>00</sup></p>
                                <p className='text-[#4A4A4A] font-bold text-[40px]'>${finalPrice - product.discount}.<sup>00</sup></p>
                            </>
                            :
                            <p className='text-[#4A4A4A] font-bold text-[40px]'>${finalPrice}.<sup>00</sup></p>
                        }

                    </div>
                    <p className='text-[#777777]'>
                        {product.description}
                    </p>

                    <hr />

                    {product.variant ? (
                        <div>
                            <h2 className='text-[#777777] my-2'>Tipo</h2>
                            <div className='justify-center bg-white py-2 px-4 rounded-[50px] gap-2 shadow-2xs w-fit'>
                                <div className='flex gap-1'>
                                    <select value={selected} onChange={handleChange} className='text-[#9B2649] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] rounded-[5px]' name='tipo' id='tipo'>
                                        {
                                            product.variant.map((item, idx) => (
                                                <option
                                                    value={idx}
                                                    key={idx}
                                                >
                                                    {item.plan} {product.isTech ? "GB" : ""}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                        </div>
                    ) : ""}

                    {product.legend ?
                        <p className="flex gap-2 items-start ml-4 mb-4">
                            <span className="material-symbols-outlined text-[27px]! text-[#BA9560] mt-2">
                                error
                            </span>

                            {product.legend}
                        </p>
                        :
                        ""
                    }
                    <ProductForm colors={colors} id={product.id} price={finalPrice} type={typeId} isTech={product.isTech}  />
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