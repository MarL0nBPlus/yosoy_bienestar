import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JumbotronRecargas from "../components/JumbotronRecargas";
import PestanaFlotante from "../components/PestanaFlotante";
import ConsultaApp from "../components/recargas/ConsultaApp";
import ConsultaFeat from "../components/recargas/ConsultaFeat";
import RecargaMenu from "../components/recargas/RecargaMenu";
import WhatsApp from "../components/WhatsApp";

export default function ConsultaSaldo() {

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <JumbotronRecargas />
      <RecargaMenu active={1}/>
      <ConsultaApp/>
      <ConsultaFeat/>
      <Faqs/>
      <WhatsApp/>
      <Footer />
    </main>
  );
}
