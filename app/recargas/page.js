import Beneficios from "../components/Beneficios";
import Continua from "../components/Continua";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notificacion from "../components/Notificacion";
import PestanaFlotante from "../components/PestanaFlotante";
import Servicios from "../components/Servicios";
import TiraSimple from "../components/TiraSimple";

const notifTitle = "Olvídate de hacer tus recargas mes a mes, Sin penalizaciones ni comisiones ocultas.";
const notifText = "Adquiere tu línea del Bienestar con Renovación Automática y beneficios especiales.";
const notifUrl = "#";

export default function Recargas() {

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <Notificacion
        title={notifTitle}
        text={notifText}
        url={"/recargas_ysb"}
        alt={false} />
      <Servicios />      
      <TiraSimple alt={true} />
      <Beneficios/>
      <Continua/>
      <Footer/>
    </main>
  );
}
