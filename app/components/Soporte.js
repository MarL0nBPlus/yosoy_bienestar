"use client";
import { useRef, useState } from "react";
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom';
import { sendEmail } from "../utils/actions";

const initialState = {
    success: "",
    errors: {
        nombre: "",
        apellido: "",
        correo: "",
        mensaje: "",
        telefono: "",
    }
};

const Soporte = () => {

    const [state, formAction] = useActionState(sendEmail, initialState);
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        mensaje: "",
        telefono: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <section id="soporte" className="sm:px-0 md:px-0 lg:px-0 px-4 pt-20">

            <div className="max-w-7xl mx-auto">
                <h2 className="text-[50px] text-[#9B264A]">¿Necesitas soporte?</h2>
            </div>
            <div className="max-w-7xl mx-auto my-4">
                <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px]">Si neceistas asistencia con tu recagra de tiempo aire, portabilidad o tienes más consultas sobre nuestro servicio comercial o servicio mensajerial, puedes escribirnos o marcarnos a los siguientes números y formularios de contacto.</p>
            </div>

            <div className="max-w-7xl mx-auto my-20 flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between gap-14">
                <div className="flex-1">
                    <p>
                        <strong>Ventas</strong>
                        <br />
                        +52 (56) 4469 7852
                        <br />
                        contacto@yosoybienestar.com
                        <br /><br />

                        <strong>Soporte Técnico</strong>
                        <br />
                        +52 (55) 9331 1394
                        <br /><br />

                        <strong>Atención a dudas y consultas</strong>
                        <br />
                        +52 (56) 9331 1394
                        <br /><br />
                        O marca desde tu linea YSB al *444
                        <br />
                        www.altanredes.com
                        <br />
                        www.internerparaelbienestar.mx</p>
                </div>
                <div className="flex-1">

                    <form className="flex flex-col gap-4" action={formAction}>

                        <div className="flex gap-2">
                            <div className="flex-1"><label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Nombre <span className="text-red-600">*</span></label>
                                <input onChange={handleChange} value={formData.nombre} name="nombre" type="text" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" />
                                {state.errors?.nombre && (
                                    <p className="text-red-500 text-[11px] -mt-2">{state.errors.nombre}</p>
                                )}
                            </div>
                            <div className="flex-1"><label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Apellido <span className="text-red-600">*</span></label>
                                <input onChange={handleChange} value={formData.apellido} name="apellido" type="text" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" />
                                {state.errors?.apellido && (
                                    <p className="text-red-500 text-[11px] -mt-2">{state.errors.apellido}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Correo electrónico <span className="text-red-600">*</span></label>
                                <input onChange={handleChange} value={formData.correo} name="correo" type="email" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" />
                                {state.errors?.correo && (
                                    <p className="text-red-500 text-[11px] -mt-2">{state.errors.correo}</p>
                                )}
                            </div>
                            <div className="flex-1">
                                <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Teléfono <span className="text-red-600">*</span></label>
                                <input onChange={handleChange} value={formData.telefono} name="telefono" type="tel" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" />
                                {state.errors?.telefono && (
                                    <p className="text-red-500 text-[11px] -mt-4 mb-4">{state.errors.telefono}</p>
                                )}
                            </div>
                        </div>



                        <label className="text-[#9B2649] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px]">Consulta a realizar <span className="text-red-600">*</span></label>
                        <textarea rows={6} onChange={handleChange} value={formData.mensaje} name="mensaje" type="text" className="bg-white py-2 px-4 border border-[#B85564] rounded-[15px] placeholder:text-[#ABABAB] w-full" placeholder="Ingresa aquí todas tus dudas o comentarios y en breve nos pondremos en contacto con usted al número telefónico que nos indicó." />
                        {state.errors?.mensaje && (
                            <p className="text-red-500 text-[11px] -mt-2">{state.errors.mensaje}</p>
                        )}



                        <SubmitButton />

                        {state?.success && <p className="text-green-600 text-center mt-2">{state.success}</p>}
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Soporte

function SubmitButton() {
    const { pending } = useFormStatus();

    return (

        <button
            type="submit"
            disabled={pending ? true : false}
            className="text-white rounded-4xl bg-[#9B2649] hover:text-black hover:bg-white border py-2 px-8 flex items-center w-full overflow-hidden relative group cursor-pointer text-center uppercase"

        >

            {pending ? (
                <span className="relative text-white transition duration-300 group-hover:text-black ease text-center uppercase w-full">
                    Procesando
                </span>
            ) : (
                <span className="relative text-white transition duration-300 group-hover:text-black ease text-center uppercase w-full">Enviar Consulta</span>
            )}

        </button>
    );
}