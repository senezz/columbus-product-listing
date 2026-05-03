import { getProducts } from "@/lib/api";
import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList/ProductList";

export default async function Page() {
  const { title, logo, products } = await getProducts();

  return (
    <>
      <Header logo={logo} />
      <main>
        <h1>{title}</h1>
        <ProductList products={products} />
      </main>
    </>
  );
}
