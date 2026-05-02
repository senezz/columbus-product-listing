import { getProducts } from "@/lib/api";

export default async function Page() {
  const { title, products } = await getProducts();

  return (
    <main>
      <h1>{title}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.articleNumber}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
}
