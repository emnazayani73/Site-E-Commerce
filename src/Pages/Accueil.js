import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Style.css";

const slideImages = [
  { url: "https://static-cse.canva.com/blob/655843/posters.jpg" },
  { url: "https://static-cse.canva.com/blob/655843/posters.jpg" },
  { url: "https://static-cse.canva.com/blob/655843/posters.jpg" },
];

const Slideshow = () => {
  const [Produits, setProduits] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/produits").then((response) => {
      setProduits(response.data);
    }, []);
    console.log(Produits);
  });

  return (
    <div className="slide-container mt-">
      <Slide>
        {slideImages?.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              className="belfgesem"
              style={{ backgroundImage: `url("${slideImage.url}")` }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
      <div className="flex flex-row justify-around  justify-between p-4 ml-10">
        {Produits.map((val, key) => {
          return (
            <div className="ml-10 w-96 " key={key}>
              {console.log(val.ImageProduit)}
              <img className="w-48 " src={val.ImageProduit} alt="image" />
              <p>{val.NomProduit}</p>
              <span>{val.PrixProduit}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slideshow;
