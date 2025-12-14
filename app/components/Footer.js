const clientes = [
    {
        name: "Recarga de tiempo aire",
        url: "/recargas_ysb"
    },
    {
        name: "Recargas CFE Internet",
        url: "/recargas_cfe"
    },
    {
        name: "Planes postpago",
        url: "#"
    },
    {
        name: "Preguntas frecuentes",
        url: "#"
    },
    {
        name: "Pago de factura",
        url: "#"
    },
]

const ayuda = [
    {
        name: "Preguntas frecuentes",
        url: "#"
    },
    {
        name: "Mapa de cobertura",
        url: "#"
    },
    {
        name: "Tutoriales de configuración",
        url: "#"
    },
]

const empresas = [
    {
        name: "Cómo aplicar",
        url: "#"
    },
    {
        name: "Pago de factura",
        url: "#"
    },
    {
        name: "Solicitar factura",
        url: "#"
    },
    {
        name: "Paquetes disponibles",
        url: "#"
    },
    {
        name: "Armalo a tu medida",
        url: "#"
    },
]

const legales = [
    {
        name: "Derechos mínimos de usuarios",
        url: "#"
    },
    {
        name: "Contrato de Adhesión Telefónica",
        url: "#"
    },
    {
        name: "Código de neutralidad de Red",
        url: "#"
    },
    {
        name: "Buscador de Tarifas IFT",
        url: "#"
    },
    {
        name: "Para robo y extravío, escríbenos",
        url: "#"
    },
    {
        name: "Seguridad y Justicia",
        url: "#"
    },
    {
        name: "Protocolo de alerta común",
        url: "#"
    },
    {
        name: "Términos y condiciones",
        url: "#"
    },
    {
        name: "Aviso de privacidad",
        url: "#"
    },
]

const Footer = () => {
    return (
        <section>
            <div className="bg-[#FFF9F3] py-6 px-4 sm:px-0 md:px-0 lg:px-0">
                <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
                    <div>
                        <img className="w-full mb-4" src="/images/logo-footer.svg" alt="logo" />
                        <div className="flex gap-4 justify-center items-center">
                            <a href="#"><img className="max-h-[18px]" src="/images/facebook.svg" alt="social" /></a>
                            <a href="#"><img className="max-h-[18px]" src="/images/insta.svg" alt="social" /></a>
                            <a href="#"><img className="max-h-[18px]" src="/images/twit.svg" alt="social" /></a>
                            <a href="#"><img className="max-h-[18px]" src="/images/in.svg" alt="social" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#9B264A] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] mb-4">Clientes</h3>
                        <ul className="list-disc pl-4">
                            {
                                clientes.map((item, idx) => (
                                    <li key={idx}><a className="text-[#777777] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px] hover:text-[#9b264a] transition-all" href={item.url}>{item.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#9B264A] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] mb-4">Ayuda rapida</h3>
                        <ul className="list-disc pl-4">
                            {
                                ayuda.map((item, idx) => (
                                    <li key={idx}><a className="text-[#777777] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px] hover:text-[#9b264a] transition-all" href={item.url}>{item.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#9B264A] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] mb-4">Empresas</h3>
                        <ul className="list-disc pl-4">
                            {
                                empresas.map((item, idx) => (
                                    <li key={idx}><a className="text-[#777777] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px] hover:text-[#9b264a] transition-all" href={item.url}>{item.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#555555] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] mb-4">Legales</h3>
                        <ul className="">
                            {
                                legales.map((item, idx) => (
                                    <li key={idx}><a className="text-[#777777] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px] hover:text-[#9b264a] transition-all" href={item.url}>{item.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#C6A87C80] py-6 px-4 sm:px-0 md:px-0 lg:px-0">
                <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
                    <p className="text-[#8E6202] text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] mb-6">Compra 100% Segura</p>
                    <div className="flex gap-4 justify-center items-center flex-col sm:flex-row md:flex-row lg:flex-row">
                        <img className="max-h-[30px]" src="logo.svg" alt="logo" />
                        <img className="max-h-[30px]" src="/images/mastercard.svg" alt="logo" />
                        <img className="max-h-[30px]" src="/images/visa.svg" alt="logo" />
                        <img className="max-h-[30px]" src="/images/norton.svg" alt="logo" />
                        <img className="max-h-[30px]" src="/images/macafi.svg" alt="logo" />
                    </div>
                    <p className="my-8 text-center text-[#535353] text-[12px]">
                        © 2025 Yo Soy Bienestar es marcas registradas a nombre de I AM ABUNDANCE y/o sus compañías afiliadas.  Internet para el Bienestar, es una marca registrada de PROMTEL. <br />
                        Todas las demás marcas son propiedad de sus respectivos dueños.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Footer