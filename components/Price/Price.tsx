import { Promotion } from "@/lib/types";
import { formatPrice, calculateDiscountedPrice } from "@/lib/format";
import styles from "./Price.module.css";

type Props = {
  price: number;
  promotion?: Promotion | null;
};

export default function Price({ price, promotion }: Props) {
  if (!promotion) {
    return <span className={styles.price}>{formatPrice(price)}</span>;
  }

  const discountedPrice = calculateDiscountedPrice(price, promotion.percentage);

  return (
    <div className={styles.priceWithDiscount}>
      <span className={styles.discountedPrice}>{formatPrice(discountedPrice)}</span>
      <del className={styles.originalPrice}>{formatPrice(price)}</del>
      <span className={styles.badge}>-{promotion.percentage}%</span>
    </div>
  );
}
