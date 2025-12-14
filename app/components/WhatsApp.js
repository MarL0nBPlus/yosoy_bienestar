const WhatsApp = () => {
    return (
        <div className='bg-[#0FA82B] flex justify-center items-center gap-1 sm:gap-8 md:gap-8 lg:gap-8 py-2 flex-col sm:flex-row md:flex-row lg:flex-row'>
            <img src="/images/whatsapp_white.svg" alt="whatsaap" />
            <p className='text-white text-[17px] text-center'>Pregunta a nuestro asistente en Whatsapp, <strong>para resolver todas tus dudas</strong></p>
            <a className='text-white uppercase text-[17px] underline font-bold' href="#">AQUÍ</a>
        </div>
    )
}
export default WhatsApp