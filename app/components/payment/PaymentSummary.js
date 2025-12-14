"use client"
import { useState } from "react";
import { useSearchParams } from 'next/navigation';

const options = [
    { label: 'tarjetas', value: 'card' },
    { label: 'plataformas', value: 'paypal' },
    { label: 'other', value: 'cash' },
];

const optionsSeguros = [
    { caption: 'Básica', value: 'basica', image: 'memmed-1.png', price: 192 },
    { caption: 'Plus', value: 'plus', image: 'memmed-1.png', price: 292 },
];

const PaymentSummary = ({ order }) => {
    const [selectedValuePayment, setSelectedValuePayment] = useState('card');
    const [membresiaCheck, setMembresiaCheck] = useState(false);
    const [selectedMembType, setSelectedMembType] = useState('');
    const [precioMemb, setPrecioMemb] = useState(0);
    const searchParams = useSearchParams();
    const quantity = searchParams.get('qty')

    const handlePaymentChange = (event) => {
        setSelectedValuePayment(event.target.value);
    };

    //Si seleccionan la opcion de añadir membresia
    const handleMembresiaChange = (event) => {
        if (event.target.checked === true) {
            setSelectedMembType('basica');
            setPrecioMemb(192);
        }
        else {
            setSelectedMembType('');
            setPrecioMemb(0);
        }

        setMembresiaCheck(event.target.checked);
    };

    const handlePrecioMembChange = (event) => {
        setSelectedMembType(event.target.value)
        if (event.target.value === 'basica') {
            setPrecioMemb(192);
        }
        else setPrecioMemb(292);

    };


    return (
        <section>
            <form className='product-form flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between'>
                <div className="flex-1 flex flex-col gap-6 p-8">

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Nombre</label>
                            <input name="name" id="name" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu nombre." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Apellido</label>
                            <input name="apellido" id="apellido" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu apellido." />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Número telefonico</label>
                            <input name="phone" id="phone" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu número telefonico." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Correo electrónico</label>
                            <input name="email" id="email" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="email" placeholder="Ingresa tu correo electrónico." />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Calle</label>
                            <input name="calle" id="calle" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa la calle." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Colonía</label>
                            <input name="colonia" id="colonia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu colonia." />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Alcaldia</label>
                            <input name="alcaldia" id="alcaldia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu alcaldia." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">C.P.</label>
                            <input name="postal" id="postal" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu código postal." />
                        </div>
                    </div>

                    <h2 className="text-[25px] text-[#B85564] font-bold my-12">Formas de pago</h2>
                    {options.map((option) => (
                        <div key={option.value} className={`py-2`}>
                            <div className={`border-3 gap-2 border-[#E1E1E1] rounded-[10px] py-3 px-2 sm:px-10 md:px-10 lg:px-10 flex flex-col sm:flex-row mg:flex-row lg:flex-row justify-between items-center`}>

                                {
                                    option.value === "card" ?
                                        <>
                                            <div className='flex text-left gap-2 items-center'>

                                                <input
                                                    type="radio"
                                                    id={option.value}
                                                    name="payment" // All radios in a group share the same name
                                                    value={option.value}
                                                    checked={selectedValuePayment === option.value}
                                                    onChange={handlePaymentChange}
                                                />
                                                <label className='color-label' htmlFor={option.value}><span className={`payment`}></span></label>
                                                <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">Tarjetas bancarias</p>
                                            </div>
                                            <div className="flex sm:flex-row mg:flex-row lg:flex-row gap-2">
                                                <img src="/images/visa.svg" alt="logo" />
                                                <img src="/images/mastercard.svg" alt="logo" />
                                                <img src="/images/expo.svg" alt="logo" />
                                                <img src="/images/amex.svg" alt="logo" />
                                            </div>
                                        </>
                                        : option.value === "paypal" ?
                                            <>
                                                <div className='flex text-left gap-2 items-center'>

                                                    <input
                                                        type="radio"
                                                        id={option.value}
                                                        name="payment" // All radios in a group share the same name
                                                        value={option.value}
                                                        checked={selectedValuePayment === option.value}
                                                        onChange={handlePaymentChange}
                                                    />
                                                    <label className='color-label' htmlFor={option.value}><span className={`payment`}></span></label>
                                                    <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">Plataformas de pago</p>
                                                </div>
                                                <div className="flex sm:flex-row mg:flex-row lg:flex-row gap-2">
                                                    <img src="/images/pp.svg" alt="logo" />
                                                    <img src="/images/mercado.svg" alt="logo" />
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className='flex text-left gap-2 items-center'>

                                                    <input
                                                        type="radio"
                                                        id={option.value}
                                                        name="payment" // All radios in a group share the same name
                                                        value={option.value}
                                                        checked={selectedValuePayment === option.value}
                                                        onChange={handlePaymentChange}
                                                    />
                                                    <label className='color-label' htmlFor={option.value}><span className={`payment`}></span></label>
                                                    <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">Genera una referencia de pago</p>
                                                </div>
                                                <span className="material-symbols-outlined text-[44px]! text-[#BA9560]">
                                                    request_quote
                                                </span>
                                            </>
                                }
                            </div>
                        </div>
                    ))}


                    <hr className="border-[#BA9560] -mb-12" />
                    <a className="p-3 border border-[#BA9560] rounded-[15px] text-#4D3A11 block w-fit mx-auto bg-white" href="#">Forma de pago</a>
                    <p className="mt-3 text-[#777777] text-center max-w-[660px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum  sapien lectus, luctus eget lacinia in, ultricies a diam.</p>

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Número de tarjeta</label>
                            <input name="card" id="card" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa el número de tu tarjeta." />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Nombre en la tarjeta</label>
                            <input name="cardname" id="cardname" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa el nombre en la tarjeta." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Vigencia</label>
                            <input name="vigencia" id="vigencia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa la vigencia." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">CVV</label>
                            <input name="ccv" id="ccv" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa el CCV." />
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-8 pb-12 bg-[#F2F2F2] flex flex-col gap-6">
                    <h2 className="text-[25px] text-[#B85564] font-bold my-12">Detalle de tu pedido</h2>

                    {Array.from({ length: quantity }, (_, index) => (
                        <div key={index} className="flex justify-between items-center w-full flex-col sm:flex-row md:flex-row lg:flex-row gap-2">
                            <div className="flex gap-4 items-center">
                                <img className="max-w-[50px]" src={`/images/products/${order.images[0].image}`} alt="product" />
                                <p className="max-w-60">{order.title}</p>
                            </div>
                            <h3 className="ml-16 sm:ml-0 md:ml-0 lg:ml-0">${order.discount ? order.price - order.discount : order.price} MXN</h3>
                        </div>

                    ))}

                    <hr className="my-8 opacity-30" />

                    <div className="flex gap-2 sm:gap-8 md:gap-8 lg:gap-8 items-start">
                        <span className="material-symbols-outlined text-[44px]! text-[#9B264A] mt-6">
                            loyalty
                        </span>
                        <div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Número de teléfono</label>
                                <input name="phone" id="phone" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu número celular actual." />
                            </div>
                            <div className="flex gap-2 mt-2">
                                <span className="material-symbols-outlined text-[#BA9560]">
                                    info
                                </span>
                                <p className="text-[#4D3A11]">Son los 16 a 18 dígitos que están atrás de tu tarjeta SIM, debajo del código de barras atrás de tu tarjeta SIM que terminan en F.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 opacity-30" />

                    <div className={`border gap-2 border-[#9B2649] rounded-[10px] py-3 px-2 sm:px-10 md:px-10 lg:px-10 flex flex-col sm:flex-row mg:flex-row lg:flex-row justify-between items-center`}>
                        <div className='flex text-left gap-2 items-center'>
                            <input
                                type="checkbox"
                                id="membresia"
                                name="membresia" // All radios in a group share the same name
                                checked={membresiaCheck}
                                onChange={handleMembresiaChange}
                            />
                            <label className='color-label' htmlFor="membresia"><span className={`payment`}></span></label>
                            <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">Membresía de Salud</p>
                        </div>
                        <span className="material-symbols-outlined text-[44px]! text-[#BA9560]">
                            request_quote
                        </span>
                    </div>

                    {
                        membresiaCheck ? (
                            <div className="flex flex-col gap-2 ml-20">

                                {optionsSeguros.map((option) => (
                                    <div key={option.value} className={`py-2`}>

                                        <div className='flex felx-col w-full'>
                                            <input
                                                type="radio"
                                                id={option.value}
                                                name="membresiatype" // All radios in a group share the same name
                                                value={option.value}
                                                checked={selectedMembType === option.value}
                                                onChange={handlePrecioMembChange}
                                            />
                                            <label className='price-label w-full gap-2 rounded-[10px] py-3 px-2 sm:px-4 md:px-4 lg:px-4 cursor-pointer flex flex-col sm:flex-row mg:flex-row lg:flex-row justify-between items-center' htmlFor={option.value}>
                                                <div className="flex gap-2 items-center">
                                                    <img className="max-w-12" src={`/images/products/${option.image}`} alt="" />
                                                    <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">{option.caption}</p>
                                                </div>
                                                <div className="flex sm:flex-row mg:flex-row lg:flex-row gap-2">
                                                    ${option.price} MXN
                                                </div>
                                            </label>

                                        </div>


                                    </div>
                                ))}
                            </div>
                        )
                            :
                            ""
                    }

                    <div className="flex flex-col gap-4 items-end">
                        {order.discount ?
                            <>
                                <div className="flex gap-4 items-center">
                                    <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-right">Descuento</h3>
                                    <p>${order.discount} MXN</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-right">Costo con descuento</h3>
                                    <p>${((order.price - order.discount) * quantity) + Number(precioMemb)} MXN</p>
                                </div>
                            </>
                            :
                            <div className="flex gap-4 items-center">
                                <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-right">Costo</h3>
                                <p>${(order.price * quantity) + Number(precioMemb)} MXN</p>
                            </div>
                        }

                        <button
                            type="submit"
                            className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                        >
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-300 group-hover:text-white ease">Comprar</span>
                        </button>
                    </div>

                </div>
            </form>
        </section>
    )
}
export default PaymentSummary