import Hero from "./Hero";

export default function Main() {
  return (
    <main className="main">
      <Hero />

      <section id="inicio">
        <h1>Stephen Curry</h1>
        <p>
          Stephen Curry joga como armador (guard) no Golden State Warriors da NBA.
        </p>
      </section>

      <section id="sobre">
        <h2>Sobre</h2>
        <p>
          Wardell Stephen Curry II é um basquetebolista norte-americano que atua como armador no Golden State Warriors da National Basketball Association. Muitos jogadores e analistas o consideram como o melhor arremessador da história do esporte.
        </p>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <p>Email: StephenCurry@email.com</p>
      </section>
    </main>
  );
}