import Continua from "../components/Continua";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JumbotronRecargas from "../components/JumbotronRecargas";
import PestanaFlotante from "../components/PestanaFlotante";
import PlanesCFE from "../components/recargas/PlanesCFE";
import RecargaMenu from "../components/recargas/RecargaMenu";
import RecargaSubmenu from "../components/recargas/RecargaSubmenu";
import Servicios from "../components/Servicios";
import TiraSimple from "../components/TiraSimple";

export default function RecargasCFE() {

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <JumbotronRecargas />
      <RecargaMenu active={0}/>
      <RecargaSubmenu active={1}/>
      <PlanesCFE />
      <div className="bg-linear-to-b from-[#F2F2F2] to-white">
        <TiraSimple alt={true} />
        <Continua />
        <Servicios />
      </div>
      <Footer />
    </main>
  );
}
