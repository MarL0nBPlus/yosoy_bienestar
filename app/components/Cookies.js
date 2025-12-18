// components/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies'; // A library for easy client-side cookie access

export default function CookieConsent() {
    const cookies = useCookies();
    const [isVisible, setIsVisible] = useState(false);
    const [isSecondVisible, setIsSecondVisible] = useState(false);

    useEffect(() => {
        // Check if the consent cookie is set when the component mounts on the client
        if (!cookies.get('cookie_consent')) {
            setIsVisible(true);
        }
    }, [cookies]);

    const acceptCookies = () => {
        // Set the cookie on the client side when the user accepts
        cookies.set('cookie_consent', 'accepted', { expires: 365 });
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            <div className="z-50 fixed bottom-0 left-0 right-0 bg-[#898888] text-white p-4 rounded-3xl m-2 shadow-2xl">
                <div className='max-w-7xl mx-auto flex items-start gap-8'>
                    <span className="material-symbols-outlined text-[80px]!">
                        cookie
                    </span>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[20px] text-white font-bold'>Acepta el siguiente aviso antes de seguir navegando</h3>
                        <p className="text-sm">
                            I AM ABUNDANCE utiliza cookies propias y de terceros así como los datos de la conexión del cliente o usuario para conocer el operador de acceso y, en su caso, asociarlo a su condición de cliente Yo Soy Bienestar (YSB). <span><a className='text-[#9B264A] hover:underline hover:text-[#6e1a33] font-bold cursor-pointer' onClick={()=>setIsSecondVisible(true)}>Ver más</a></span>.
                        </p>
                        <div className='flex gap-4'>
                            <button
                                onClick={acceptCookies}
                                className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                            >
                                <span className="absolute w-[500px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-white transition duration-300 group-hover:text-white ease">Aceptar cookies</span>
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="text-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                            >
                                <span className="absolute w-[500px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-white transition duration-300 group-hover:text-white ease">Ver preferencias</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                isSecondVisible ?
                    (
                        <div className="z-50 fixed bottom-0 left-0 right-0 bg-[#9B264A] text-white p-4 rounded-3xl m-2 shadow-2xl">
                            <div className='max-w-7xl mx-auto flex items-start gap-8'>
                                <span className="material-symbols-outlined text-[80px]!">
                                    emergency_home
                                </span>
                                <div className='flex flex-col gap-4'>
                                    <h3 className='text-[20px] text-white font-bold'>Revise el siguiente aviso antes de seguir navegando en nuestro sitio web</h3>
                                    <p className="text-sm">
                                        I AM ABUNDANCE utiliza cookies propias y de terceros así como los datos de la conexión del cliente o usuario para conocer el operador de acceso y, en su caso, asociarlo a su condición de cliente Yo Soy Bienestar (YSB). Estas cookies serán utilizadas con la finalidad de gestionar y recabar información sobre la utilización del portal, mejorar nuestros servicios y mostrarte publicidad personalizada relacionada con tus preferencias en base a un perfil elaborado a partir de tus hábitos y el análisis de tu comportamiento dentro de la web (por ejemplo, secciones visitadas, consultas realizadas o links visitados). Pulsa Aceptar si autorizas todas estas cookies. También puedes Configurar o rechazar las cookies y consultar la Política de cookies, si deseas obtener información detallada sobre cómo YSB las utiliza, o cómo deshabilitarlas.<span><a className='text-[#ECCA98] hover:underline hover:text-[#ECCA98] font-bold' href=""> Más información</a></span>.
                                    </p>
                                    <div className='flex gap-4'>
                                        <button
                                            className="text-white border border-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                                        >
                                            <span className="absolute w-[500px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                            <span className="relative text-white transition duration-300 group-hover:text-white ease">Ver más planes</span>
                                        </button>
                                        <button
                                        onClick={()=>setIsSecondVisible(false)}
                                            className="text-white border border-white bg-[#9B264A] hover:text-black rounded-[50px] py-2 px-12 flex items-center justify-center w-fit overflow-hidden uppercase text-[17px] relative group cursor-pointer"

                                        >
                                            <span className="absolute w-[500px] h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                            <span className="relative text-white transition duration-300 group-hover:text-white ease">Cerrar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    ""
            }

        </div>
    );
}
