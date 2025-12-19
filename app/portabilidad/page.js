import ConservaMenu from "../components/conserva/ConservaMenu";
import FormTitular from "../components/conserva/FormTitular";
import PlanesConserva from "../components/conserva/PlanesConserva";
import TipoSim from "../components/conserva/TipoSim";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notificacion from "../components/Notificacion";
import PestanaFlotante from "../components/PestanaFlotante";
import Servicios from "../components/Servicios";
import WhatsApp from "../components/WhatsApp";

const notifTitle = "Olvídate de hacer tus recargas mes a mes, Sin penalizaciones ni comisiones ocultas.";
const notifText = "Adquiere tu línea del Bienestar con Renovación Automática y beneficios especiales.";
const url = "/recargas_ysb";

const formTitle = "Estas a unos pasos de tener tu linea con el Bienestar"
const formText = "<strong>Completa el siguiente formulario y en menos de 24 horas</strong> podrás disfrutar de la mejor Red 4G LTE con la mayor cobertura y velocidad."

export default function ConservaNumero() {

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <Notificacion
        title={notifTitle}
        text={notifText}
        url={url}
        alt={false} />
      <ConservaMenu active={1} />
      <div className="bg-linear-to-b from-[#F2F2F2] to-white">
        <FormTitular title={formTitle} text={formText} />
        <Servicios />
      </div>
      <Faqs />
      <WhatsApp />
      <Footer />
    </main>
  );
}
