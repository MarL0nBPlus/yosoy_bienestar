import Continua from "../components/Continua";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JumbotronRecargas from "../components/JumbotronRecargas";
import PestanaFlotante from "../components/PestanaFlotante";
import PuntosMap from "../components/recargas/PuntosMap";
import RecargaMenu from "../components/recargas/RecargaMenu";
import RecargaPuntos from "../components/recargas/RecargaPuntos";
import Servicios from "../components/Servicios";
import TiraSimple from "../components/TiraSimple";

export default function RecargasPuntos() {

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <JumbotronRecargas />
      <RecargaMenu active={2}/>
      <RecargaPuntos />
      <PuntosMap />
      <div className="bg-linear-to-b from-[#F2F2F2] to-white">
        <Continua />
        <Servicios />
      </div>
      <Footer />
    </main>
  );
}
