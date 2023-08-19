function Pokemons({ name, type, img }) {
  name;
  img;
  type;
  return (
    <>
      <div className="col-4 mt-3">
        <div className="my-card text-center border rounded-5">
          <h5 className="fs-3 fw-bold">{name}</h5>
          <img src={img} alt="Imagen de Pokemon" />
          <p className="fs-5 m-0">Type: {type}</p>
        </div>
      </div>
    </>
  );
}
export default Pokemons;
