import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";

const Details = () => {
  const [mascota, setMascota] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    RickAndMortyService.getCharactersById(id).then((data) => setMascota(data));
  }, []);

  return (
    <div className="row g-0 mt-4 mb-4">
      <div className="col-md-3">
        <img
          src={mascota.image}
          className="img-fluid rounded-start imgDetalle"
          alt="img del mascota"
        />
      </div>
      <div className="col-md-8 detallemascota">
        <div className="card-body">
          <h5 className="card-title">{mascota.name}</h5>
          <p className="card-text">
            <small className=""> Specie: {mascota.species}</small>
          </p>
          <p className="card-text">
            <small className=""> Status: {mascota.status}</small>
          </p>
          <p className="card-text">
            <small className=""> Gender: {mascota.gender}</small>
          </p>
          <p className="card-text">
            <small className=""> Created: {mascota.created}</small>
          </p>
        </div>
        <div className="btn-group" style={{ marginLeft: "15px" }}>
          <button type="button" className="btn btn-sm btn-outline-secondary">
            <Link to={"/"} className="nav-link px-2 text-success">
              Inicio
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
