import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PaymentJumbutron from "@/app/components/payment/PaymentJumbutron";
import PaymentSummary from "@/app/components/payment/PaymentSummary";
import {
  ProductsCopies

} from "@/app/Products";
export default async function PaymentPage({ params, searchParams }) {

  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const { id } = resolvedParams;  
  
  const productId = resolvedSearchParams?.type;

  //const data = ProductsCopies.find(product => product.id === id);
  const data = ProductsCopies.find(
    product => String(product.id) === String(id)
  );

  console.log("productId (API):", productId);
  console.log("Producto encontrado:", data);

  return (
    <main>
      <Header />
      <PaymentJumbutron title={"Completa tu compra"} text={"Estas a unos pasos de vivir lo mejor de la red de las y los mexicanos"} />
      <PaymentSummary order={data} productId={productId} />
      <Footer />
    </main>
  );
}