import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 40px",
        backgroundColor: "#111",
        color: "white",
        width: "100vw",
        boxSizing: "border-box",
        position: "relative",
        left: "0",
        margin: "0",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>Pelo Discos®</h1>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Inicio
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Catálogo
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contacto
        </a>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;

