import styles from "./ProductCard.module.css";

export default function ProductCard({ title, price }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p> {price} </p>
    </div>
  );
}
