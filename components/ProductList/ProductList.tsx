import { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductList.module.css";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <ul className={styles.list}>
      {products.map((product, index) => (
        <li key={product.articleNumber} className={styles.item}>
          <ProductCard product={product} priority={index === 0} />
        </li>
      ))}
    </ul>
  );
}
