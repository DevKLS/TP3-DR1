import styles from "./Card.module.css";
import Button from "./Button";

export default function Card() {
  return (
    <div className={styles.card}>
      <img 
        src="https://i.pinimg.com/736x/71/45/f6/7145f613508ae64e4a079d9d84fd868c.jpg" 
        alt="Rio de Janeiro" 
        className={styles.image}
      />

      <h2 className={styles.title}>Rio de Janeiro - Cristo Redentor </h2>

      <p className={styles.text}>
        Cristo Redentor é uma estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, dentro do Parque Nacional da Tijuca.
      </p>

      <Button />
    </div>
  );
}