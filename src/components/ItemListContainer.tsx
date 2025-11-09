interface Props {
  greeting: string;
}

function ItemListContainer({ greeting }: Props) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontSize: "1.5rem",
        fontWeight: "500",
      }}
    >
      <h2>{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
