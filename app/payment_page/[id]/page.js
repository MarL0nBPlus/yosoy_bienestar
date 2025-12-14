import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PaymentJumbutron from "@/app/components/payment/PaymentJumbutron";
import PaymentSummary from "@/app/components/payment/PaymentSummary";
import {
  ProductsCopies

} from "@/app/Products";
export default async function PaymentPage({ params }) {

  const { id } = await params;
  const data = ProductsCopies.find(product => product.id === id);

  return (
    <main>
      <Header />      
      <PaymentJumbutron title={"Completa tu compra"} text={"Estas a unos pasos de vivir lo mejor de la red de las y los mexicanos"} />
      <PaymentSummary order={data}/>
      <Footer />
    </main>
  );
}