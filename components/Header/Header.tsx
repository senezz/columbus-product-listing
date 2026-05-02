import NextImage from "next/image";
import type { Image as ImageType } from "@/lib/types";
import styles from "./Header.module.css";

type Props = { logo: ImageType };

export default function Header({ logo }: Props) {
  return (
    <header className={styles.header}>
      <NextImage src={logo.url} alt={logo.altText} width={120} height={40} />
      <button className={styles.cartButton} aria-label="Cart" type="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </button>
    </header>
  );
}
