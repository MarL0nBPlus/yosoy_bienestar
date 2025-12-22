"use client"

import { useState } from 'react';
import AccordionItem from './AccordionItem';

const faqs = [
    {
        question: "¿Cómo me puedo cambiar a Yo Soy Bienestar?",
        answer: "Puedes hacer tu portabilidad sin costo y tendrías tu número de siempre en tu nueva SIM de Internet para el bienestar en 24 horas. Contamos con promociones que ofrecen el doble de gigabytes como beneficio durante dos meses. Escríbenos por WhatsApp o Chat web para más información."
    },
    {
        question: "¿La portabilidad de mi línea a internet para el Bienestar tiene algún costo?",
        answer: "Cambiarte a Internet para el Bienestar, no tiene ningún costo para ti, sólo debes de comprar tu SIM con un paquete activo esperar de 24 a 48 horas y listo, ya podrás usar tu línea Yo Soy Bienestar con tu mismo número."
    },
    {
        question: "¿Cómo hacer mi portabilidad?",
        answer: `Para hacer tu portabilidad, sólo debes de diseñar los siguientes pasos y obtén tu SIM Internet para el Bienestar para completar tu proceso de portabilidad.
<br><br>
<ol class="list-decimal ml-4">
<li>Aumenta un nip de portabilidad llamando o mandando un mensaje de texto con la palabra NIP al 051. El sistema te regresará la llamada o un mensaje con tu NIP de portabilidad. No olvides solicitarlo desde el número que deseas portar.<br>
</li>
<li>Descarga la app de Internet para bienestar.<br>
</li>
<li>Abre el app de Internet para el bienestar. Selecciona la opción de porta tu número y completa tus datos.<br>
</li>
</ol>
<br><br>
Tu portabilidad será efectiva en las próximas 24 horas a 48 horas.
Y ¡listo! dedícate a disfrutar de la mejor velocidad y beneficios.`
    },
    {
        question: "¿Cual es su cobertura en México?",
        answer: `Internet para el bienestar. Tiene una infraestructura compartida con Atlán Redes, la cual nos ayuda a garantizar que cubrimos el 95% de la ciudades y pueblos en México y hasta un 80% de las carreteras.
Conoce nuestra cobertura completa aquí en "cobertura" y pueblos mágicos disponibles.`
    },
    {
        question: "¿Quienes son en Yo Soy Bienestar?",
        answer: `
        <ul class="list-disc ml-4">
        <li>Somos un grupo empresarial que brinda servicios de TI y comunicación de calidad y accesibles para todo México.
</li>
        <br><br>
<li>Nuestro grupo cuenta con más de 30 años de experiencia en comercialización e implementación de servicios móviles. actualmente yo soy bienestar. Es un operador muy virtual con una alianza estratégica con Atlán Redes, Gobierno Federal y Gobiernos Estatales.
</li>
<br><br>
<li>Contamos con capacidad financiera y tecnológica propia. También brindamos servicios de valor agregado.
</li>
<br><br>
<li>Estamos dedicados a mejorar la calidad de vida de las personas a través de la comunicación y apoyando las mejoras en servicios de salud, educación y atención primaria, entre otras orgullosos de ser parte de la comunidad del gran pueblo mexicano.
</li>
</ul>
`
    },
    {
        question: "¿Porque Yo Soy Bienestar ofrece Internet para el Bienestar?",
        answer: "Yo Soy Bienestar, es un licenciatarios de Internet para el Bienestar. Contamos con los permisos para ofrecer y comercializar los servicios de Internet y telefonía para todos los mexicanos del gobierno, bajo el programa de Internet para el bienestar a un precio accesible y con cobertura nacional."
    }
]
const Faqs = () => {

    const [activeIndex, setActiveIndex] = useState(null); // null means no item is open

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle or close
    };

    return (
        <section className="sm:px-0 md:px-0 lg:px-0 px-4 pt-20">

            <div className="max-w-5xl mx-auto">
                <h2 className="text-[50px] text-[#9B264A] text-center">Preguntas frecuentes</h2>
            </div>
            <div className="max-w-4xl mx-auto my-4">
                <p className="text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-center">Descubre la mayoría de las preguntas que no shacen sobre internet para el Bienestar en este listado o escríbenos al chat.</p>
            </div>

            <div className='mt-14'>
                {faqs.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isFaq={true}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>

        </section>
    )
}

export default Faqs