"use client"
import { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { createPaymentSession } from "@/app/services/paymentService";

const options = [
    { label: 'tarjetas', value: 'card' },
    { label: 'other', value: 'cash' },
];

const optionsSeguros = [
    { caption: 'Básica', value: 'basica', image: 'memmed-1.png', price: 39 },
    { caption: 'Plus', value: 'plus', image: 'memmed-2.png', price: 102 },
];

const PaymentSummary = ({ order, productId }) => {

    if (!order) {
        return (
            <section className="p-8 text-center">
                <p className="text-red-600">
                    No se encontró información del producto.
                </p>
            </section>
        );
    }

    console.log("productId:", productId);

    const [selectedValuePayment, setSelectedValuePayment] = useState('card');
    const [membresiaCheck, setMembresiaCheck] = useState(false);
    const [selectedMembType, setSelectedMembType] = useState('');
    const [precioMemb, setPrecioMemb] = useState(0);
    const searchParams = useSearchParams();
    const quantity = searchParams.get('qty');
    const finalPrice = order.isBundle ? (order.price + Number(searchParams.get('price'))) : searchParams.get('price');
    const image = order.variant ? order.variant.find(variant => String(variant.id) === searchParams.get('type')).image : order.images[0].image;

    const [nombre, setNombre] = useState(searchParams.get('nombre') ? searchParams.get('nombre') : "");
    const [apellido, setApellido] = useState(searchParams.get('apellido') ? searchParams.get('apellido') : "");
    const [email, setEmail] = useState(searchParams.get('email') ? searchParams.get('email') : "");
    const [telefono, setTelefono] = useState(searchParams.get('telefono') ? searchParams.get('telefono') : "");
    const [calle, setCalle] = useState(searchParams.get('calle') ? searchParams.get('calle') : "");
    const [colonia, setColonia] = useState(searchParams.get('colonia') ? searchParams.get('colonia') : "");
    const [alcaldia, setAlcaldia] = useState(searchParams.get('alcaldia') ? searchParams.get('alcaldia') : "");
    const [cp, setCp] = useState(searchParams.get('cp') ? searchParams.get('cp') : "");

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }
    const handleApellido = (e) => {
        setApellido(e.target.value)
    }
    const handleCorreo = (e) => {
        setEmail(e.target.value)
    }
    const handleTelefono = (e) => {
        setTelefono(e.target.value)
    }
    const handleCalle = (e) => {
        setCalle(e.target.value)
    }
    const handleColonia = (e) => {
        setColonia(e.target.value)
    }
    const handleAlcaldia = (e) => {
        setAlcaldia(e.target.value)
    }
    const handleCp = (e) => {
        setCp(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const payload = {
            name: formData.get("name"),
            apellido: formData.get("apellido"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            calle: formData.get("calle"),
            colonia: formData.get("colonia"),
            alcaldia: formData.get("alcaldia"),
            postal: formData.get("postal"),

            quantity: Number(quantity),
            basePrice: Number(finalPrice),
            discount: order.discount || 0,

            membresia: membresiaCheck,
            membresiaType: selectedMembType,
            membresiaPrice: precioMemb,

            total:
                order.discount
                    ? ((finalPrice - order.discount) * quantity) + Number(precioMemb)
                    : (finalPrice * quantity) + Number(precioMemb),
        };

        try {
            const result = await createPaymentSession({
                productId,
                payload,
            });

            if (result?.paymentUrl) {
                window.location.href = result.paymentUrl;
            } else {
                alert("No se pudo generar la URL de pago");
            }
        } catch (error) {
            console.error(error);
            alert("Error al procesar el pago");
        }
    };

    const handlePaymentChange = (event) => {
        setSelectedValuePayment(event.target.value);
    };

    //Si seleccionan la opcion de añadir membresia
    const handleMembresiaChange = (event) => {
        if (event.target.checked === true) {
            setSelectedMembType('basica');
            setPrecioMemb(39);
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
            setPrecioMemb(39);
        }
        else setPrecioMemb(102);

    };

    const formatterUS = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <section>
            <form onSubmit={handleSubmit} className='product-form flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between'>
                <div className="flex-1 flex flex-col gap-4 p-8">

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Nombre</label>
                            <input onChange={handleNombre} value={nombre} name="name" id="name" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu nombre." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Apellido</label>
                            <input onChange={handleApellido} value={apellido} name="apellido" id="apellido" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu apellido." />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Número telefónico</label>
                            <input onChange={handleTelefono} value={telefono} name="phone" id="phone" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu número telefonico." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Correo electrónico</label>
                            <input onChange={handleCorreo} value={email} name="email" id="email" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="email" placeholder="Ingresa tu correo electrónico." />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Calle</label>
                            <input onChange={handleCalle} value={calle} name="calle" id="calle" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa la calle." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Colonía</label>
                            <input onChange={handleColonia} value={colonia} name="colonia" id="colonia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu colonia." />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Alcaldia</label>
                            <input onChange={handleAlcaldia} value={alcaldia} name="alcaldia" id="alcaldia" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu alcaldia." />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">C.P.</label>
                            <input onChange={handleCp} value={cp} name="postal" id="postal" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa tu código postal." />
                        </div>
                    </div>

                    <h2 className="text-[25px] text-[#B85564] font-bold mt-12">Formas de pago</h2>
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


                    <div className="mt-10">
                        <hr className="border-[#BA9560] -mb-7" />
                        <a className="p-3 border border-[#BA9560] rounded-[15px] text-#4D3A11 block w-fit mx-auto bg-white" href="#">Forma de pago</a>
                    </div>

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
                        <div key={index} className="flex flex-col gap-4">
                            {order.isBundle ?
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center w-full flex-col sm:flex-row md:flex-row lg:flex-row gap-2">
                                        <div className="flex gap-4 items-center">
                                            <img className="max-w-[50px]" src={`/images/products/${order.images[0].image}`} alt="product" />
                                            <p className="max-w-60">{order.title}</p>
                                        </div>
                                        <h3 className="ml-16 sm:ml-0 md:ml-0 lg:ml-0">{formatterUS.format(order?.discount ? order.price - order.discount : order.price)} MXN</h3>
                                    </div>
                                    <div className="flex justify-between items-center w-full flex-col sm:flex-row md:flex-row lg:flex-row gap-2">
                                        <div className="flex gap-4 items-center">
                                            <img className="max-w-[50px]" src={`/images/products/${image}`} alt="product" />
                                            <p className="max-w-60">Paquete de Gigabytes</p>
                                        </div>
                                        <h3 className="ml-16 sm:ml-0 md:ml-0 lg:ml-0">{formatterUS.format(Number(searchParams.get('price')))} MXN</h3>
                                    </div>
                                </div>
                                :
                                <div className="flex justify-between items-center w-full flex-col sm:flex-row md:flex-row lg:flex-row gap-2">
                                    <div className="flex gap-4 items-center">
                                        <img className="max-w-[50px]" src={`/images/products/${image}`} alt="product" />
                                        <p className="max-w-60">{order.title}</p>
                                    </div>
                                    <h3 className="ml-16 sm:ml-0 md:ml-0 lg:ml-0">{formatterUS.format(Number(searchParams.get('price')))} MXN</h3>
                                </div>
                            }

                        </div>
                    ))}

                    <hr className="my-8 opacity-30" />

                    <div className="flex gap-2 sm:gap-8 md:gap-8 lg:gap-8 items-start">
                        <span className="material-symbols-outlined text-[44px]! text-[#9B264A] mt-6">
                            loyalty
                        </span>
                        <div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Ingresa tu cupón</label>
                                <input name="phone" id="phone" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" type="text" placeholder="Ingresa el cupón." />
                            </div>
                            <div className="flex gap-2 mt-2">
                                <span className="material-symbols-outlined text-[#BA9560]">
                                    info
                                </span>
                                <p className="text-[#4D3A11]">Se enviará un código mediante un mensaje de texto a este número para verificar y activar el eSIM.</p>
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
                                                    {formatterUS.format(option.price)} MXN
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
                        <div className="flex gap-4 items-center">
                            <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-right">Costo</h3>
                            <p>{formatterUS.format((Number(finalPrice) * quantity))} MXN</p>
                        </div>

                        {
                            //si tiene descuento
                            order?.discount > 0 ?
                                <div className="flex gap-4 items-center">
                                    <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-right">Descuento</h3>
                                    <p>{formatterUS.format(order?.discount)} MXN</p>
                                </div>
                                :
                                ""
                        }

                        {
                            //si tiene costo de envio
                            order?.envio > 0 ?
                                <div className="flex gap-4 items-center">
                                    <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-right">Costo de envio</h3>
                                    <p>{formatterUS.format(order.envio)} MXN</p>
                                </div>
                                :
                                ""
                        }                        

                        <div className="flex gap-4 items-center">
                            <h3 className="text-[#9B2649] font-bold text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-right">Costo total</h3>
                            <p>{formatterUS.format(order.envio + Number(finalPrice) + Number(precioMemb))} MXN</p>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                        >
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-60 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-300 group-hover:text-white ease">Comprar</span>
                        </button>
                    </div>

                </div>
            </form>
        </section>
    )
}
export default PaymentSummary