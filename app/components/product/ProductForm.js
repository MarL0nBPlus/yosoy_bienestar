import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductForm = ({ initialQuantity = 1, onQuantityChange, colors, id, price, type, isTech }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [selectedColor, setSelectedColor] = useState('default');
    const router = useRouter()

    const handleChangeColor = (event) => {
        setSelectedColor(event.target.value);
    };

    const handleIncrement = (e) => {
        e.preventDefault();
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            if (onQuantityChange) {
                onQuantityChange(newQuantity);
            }
            return newQuantity;
        });
    };

    const handleDecrement = (e) => {
        e.preventDefault();
        setQuantity(prevQuantity => {
            const newQuantity = Math.max(1, prevQuantity - 1); // Ensure quantity doesn't go below 1
            if (onQuantityChange) {
                onQuantityChange(newQuantity);
            }
            return newQuantity;
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
            if (onQuantityChange) {
                onQuantityChange(value);
            }
        } else if (e.target.value === '') { // Allow clearing the input temporarily
            setQuantity('');
            if (onQuantityChange) {
                onQuantityChange(0); // Or handle as desired when empty
            }
        }
    };

    return (
        <form className='product-form'>
            {
                colors ? (
                    <div>
                        <h2 className='text-[#777777] my-2'>Color</h2>
                        <div className='flex gap-1'>
                            {colors.map((option) => (
                                <div key={option.value}>
                                    <input
                                        type="radio"
                                        id={option.value}
                                        name="color" // All radios in a group share the same name
                                        value={option.value}
                                        checked={selectedColor === option.value}
                                        onChange={handleChangeColor}
                                    />
                                    <label className='color-label' htmlFor={option.value}><span className={`${option.value}`}></span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                )
                    :
                    ""
            }
            {!isTech ?
                <div>
                    <h2 className='text-[#777777] my-2'>Cantidad</h2>
                    <div className='flex gap-1'>
                        <div className='justify-center bg-white py-2 px-4 rounded-[50px] gap-2 shadow-2xs' style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='text-[#9B2649] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] cursor-pointer' onClick={handleDecrement}>-</button>
                            <input
                                id='quantity'
                                type="number"
                                className='border border-[#9B2649] text-[#9B2649] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] rounded-[5px] bg-linear-to-t from-[#F2F2F2] to-white'
                                value={quantity}
                                onChange={handleChange}
                                min="1"
                                style={{ width: '50px', textAlign: 'center' }}
                            />
                            <button className='text-[#9B2649] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] cursor-pointer' onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                </div>
                :
                ""
            }


            {/*
                        <button
                            type="submit"
                            className="text-[#9B264A] border border-[#9B264A] bg-white hover:text-black rounded-[50px] py-2 px-12 my-4 flex items-center justify-center w-full overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                        >
                            <span className="absolute w-[1000px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative transition duration-300 group-hover:text-white ease">agregar</span>
                        </button>
                        */}

            <button type="button"
                onClick={() => router.push(`/payment_page/${id}?qty=${quantity}&price=${price}&type=${type}&color=${selectedColor}`)}
                className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 my-4 flex items-center justify-center w-full overflow-hidden uppercase text-[17px] relative group cursor-pointer"

            >
                <span className="absolute w-[1000px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease">lo quiero</span>
            </button>
        </form>


    );
};

export default ProductForm;