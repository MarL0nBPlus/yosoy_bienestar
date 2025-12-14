
import PestanaFlotante from "@/app/components/PestanaFlotante";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FeaturedProducts from "../../components/product/FeaturedProducts";
import ProductFeat from "../../components/product/ProductFeat";
import ProductMain from "../../components/product/ProductMain";
import { ProductsCopies } from "../../Products";

export default async function ProductPage({ params }) {

  const { id } = await params;
  const data = ProductsCopies.find(product => product.id === id);

  return (
    <main>
      <PestanaFlotante/>
      <Header />
      <ProductMain product={data} />
      <ProductFeat product={data} />
      <FeaturedProducts />
      <Footer />
    </main>
  );
} 