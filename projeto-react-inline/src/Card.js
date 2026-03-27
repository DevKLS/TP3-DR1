export default function Card() {
  const estilo = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px"
  };

  return <div style={estilo}>Sou um Card</div>;
}