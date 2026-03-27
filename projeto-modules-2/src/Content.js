import styles from "./Content.module.css";

export default function Content() {
  return (
    <main className={styles.content}>
      <h2>Sobre o jogador</h2>

      <p>
        Stephen Curry é um dos maiores jogadores da história do basquete,
        conhecido por sua precisão incrível nos arremessos de três pontos.
      </p>

      <p>
        Atuando pelo Golden State Warriors, ele revolucionou a forma como o
        jogo é jogado na NBA, influenciando atletas ao redor do mundo.
      </p>
    </main>
  );
}