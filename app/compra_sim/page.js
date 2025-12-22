import ConservaMenu from "../components/conserva/ConservaMenu";
import PlanesConserva from "../components/conserva/PlanesConserva";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notificacion from "../components/Notificacion";
import PestanaFlotante from "../components/PestanaFlotante";
import Servicios from "../components/Servicios";
import WhatsApp from "../components/WhatsApp";

const notifTitle = "Olvídate de hacer tus recargas mes a mes, Sin penalizaciones ni comisiones ocultas.";
const notifText = "Adquiere tu línea del Bienestar con Renovación Automática y beneficios especiales.";
const notifUrl = "/recargas_ysb";

const formTitle = "3. Información del titular"

export default function ConservaNumero() {

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <Notificacion
        title={notifTitle}
        text={notifText}
        url={notifUrl}
        alt={true} />
      <ConservaMenu active ={0} />
      <PlanesConserva />
      <div className="bg-linear-to-b from-[#F2F2F2] to-white">
        <Servicios />
      </div>
      <Faqs />
      <WhatsApp />
      <Footer />
    </main>
  );
}
