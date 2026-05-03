"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Something went wrong</h2>
      <p className={styles.message}>
        We could not load the products. Please try again.
      </p>
      <button type="button" className={styles.button} onClick={reset}>
        Try again
      </button>
    </div>
  );
}
