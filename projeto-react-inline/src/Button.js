export default function Button() {
  const estilo = {
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px"
  };

  return <button style={estilo}>Clique aqui</button>;
}