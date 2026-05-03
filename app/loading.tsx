import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className={styles.skeleton} aria-hidden="true" />
        ))}
      </ul>
      <p className={styles.message}>Loading products...</p>
    </div>
  );
}
