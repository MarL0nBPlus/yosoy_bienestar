import Banners from "./components/Banners";
import Beneficios from "./components/Beneficios";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import PestanaFlotante from "./components/PestanaFlotante";
import Planes from "./components/Planes";
import PromoBanner from "./components/PromoBanner";
import Servicios from "./components/Servicios";
import Soporte from "./components/Soporte";
import TiraHeader from "./components/TiraHeader";
import WhatsApp from "./components/WhatsApp";

export default function Home() {

  const junTitle = '¡Obtén gigas gratis y conserva tu mismo número!'
  const junCaption = `1. Telefonía que contratas 100% online, sin chip, sin papeleo, tecnología eSIM <br>
2. Membresías desde $199, con datos, llamadas y SMS en México, USA y Canadá <br>
3. Cobertura roaming hasta en 170 países y acceso a salas VIP de aeropuertos`
  const junCssClass = 'jumbotron-home'
  const junBtn = 'Ver más planes'
  const junBtnUrl = '/about'

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <Jumbotron title={junTitle} thecaption={junCaption} cssClass={junCssClass} junBtn={junBtn} junBtnUrl={junBtnUrl} />
      <TiraHeader />
      <Planes captions={true} />
      <Servicios />
      <Banners />
      <PromoBanner/>
      <Beneficios/>
      <Soporte/>
      <Faqs/>
      <WhatsApp/>
      <Footer/>
    </main>
  );
}
