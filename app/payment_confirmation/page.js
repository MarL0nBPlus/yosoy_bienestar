import Footer from "../components/Footer";
import Header from "../components/Header";
import Confirmation from "../components/payment/Confirmation";
import PaymentJumbutron from "../components/payment/PaymentJumbutron";

export default function PaymentConfirmation() {

  return (
    <main>
      <Header />
      <PaymentJumbutron title={"¡Gracias por tu compra!"} text={"A continuación detalle de tu compra y vive lo mejor de la red de los mexicanos."}/>
      <Confirmation/>
      <Footer />
    </main>
  );
}