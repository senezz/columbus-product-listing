import NextImage from "next/image";
import { Product } from "@/lib/types";
import Price from "@/components/Price/Price";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
  priority?: boolean;
};

export default function ProductCard({ product, priority = false }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <NextImage
          src={product.image.url}
          alt={product.image.altText}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
          priority={priority}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.brand}>
          <NextImage
            src={product.brandLogo}
            alt={product.brandName}
            width={80}
            height={20}
          />
        </div>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <Price price={product.price} promotion={product.promotion} />
      </div>
    </article>
  );
}
