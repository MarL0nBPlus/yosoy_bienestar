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
const notifUrl = "#";

const formTitle = "3. Información del titular"

export default function ConservaNumero() {

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <Notificacion
        title={notifTitle}
        text={notifText}
        url={"/recargas_ysb"}
        alt={true} />
      <ConservaMenu active ={0} />
      <PlanesConserva />
      <div className="bg-linear-to-b from-[#F2F2F2] to-white">
        <Notificacion
          title={notifTitle}
          text={notifText}
          url={"/recargas_ysb"}
          alt={false}
          noTopMargin={true} />
        <TipoSim />
        <FormTitular title={formTitle}/>
        <Servicios />
      </div>
      <Faqs />
      <WhatsApp />
      <Footer />
    </main>
  );
}
