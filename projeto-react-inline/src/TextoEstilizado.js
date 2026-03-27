export default function TextoEstilizado() {
  const estilo = {
    backgroundColor: "#eee",
    color: "#333333",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "8px"
  };

  return (
    <p style={estilo}>
      Este é um texto estilizado usando inline styles em React.
    </p>
  );
}