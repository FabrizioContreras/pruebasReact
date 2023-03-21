import React, { useEffect, useState } from "react";
import RickAndMortyService from "../../services/RickAndMorty.service";
import Card from "../public/Card";

export const Cards = () => {

  const [mascotas,setMascotas]= useState([]);

  useEffect(()=>{
    RickAndMortyService.getAllCharacters()
      .then((data) => setMascotas(data.results ))
      .catch((error) => console.log(error));
  },[mascotas])

  const cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardsList}
        </div>
      </div>
    </div>
  );
};
