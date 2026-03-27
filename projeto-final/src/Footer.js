import avatar from "./img/meu avatar.png";
export default function Footer() {

  return (
    <footer className="footer">
      <img src={avatar} alt="Meu avatar" />
      <p>Integrante: Keila Lima</p>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </footer>
  );
}