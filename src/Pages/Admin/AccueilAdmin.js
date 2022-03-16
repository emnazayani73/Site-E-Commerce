import Axios from "axios";
import React, { useState } from "react";
import "./File.css";
import Header from "../../Components/Header";

function AccueilAdmin() {
  const [State, setState] = useState({
    NomProduit: "",
    PrixProduit: "",
  });

  const [preview, setPreview] = useState([]);
  let arrayofFiles = [];

  const onSelectFile = (e) => {
    for (var i = 0; i < e.target.files.length; i++) {
      arrayofFiles.push(e.target.files[i]);
    }

    let images = [];
    arrayofFiles.map((e) => {
      const blob = new Blob([e]);
      const ImageUrl = URL.createObjectURL(blob);
      images.push(ImageUrl);
    });
    setPreview(images);
    console.log(images);
  };

  const handlechange = (e) => {
    const value = e.target.value;
    setState({
      ...State,
      [e.target.name]: value,
    });
  };

  const SaveProduit = () => {
    preview.map((url) => {
      const newproduit = {
        ImageProduit: url,
        NomProduit: State.NomProduit,
        PrixProduit: State.PrixProduit,
      };
      console.log({ newproduit });
      Axios.post("http://localhost:3001/AjoutProduit", newproduit);
    });
  };

  return (
    <div>
      <Header />
      <center>
        <div className="flex flex-col h-[500px] justify-center mt-32 bg-rose-100 w-[550px] rounded">
          <div className="flex flex-row w-96  mt-4 w-full justify-center h-full">
            <input
              type="file"
              Name="ImageProduit"
              class="foo"
              onChange={onSelectFile}
            />
            {preview.map((img, index) => (
              <div key={index}>
                <img src={img} id={index} alt="pic1" width="250" height="250" />
                <button id={index} key={index}>
                  Close
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-row w-96 w-full justify-center h-full">
            <label className="text-white text-2xl flex flex-row w-48 mt-4 text-violet-100">
              Nom Produit
            </label>
            <input
              type="text"
              Name="NomProduit"
              className="rounded  mt-4 h-[50px]"
              onChange={handlechange}
            />
            {State.NomProduit}
          </div>
          <div className="flex flex-row w-96 w-full justify-center h-full">
            <label className="text-white text-2xl flex flex-row w-48 mt-4 text-violet-100">
              Prix Produit
            </label>
            <input
              type="text"
              onChange={handlechange}
              Name="PrixProduit"
              className="rounded  mt-4 h-[50px]"
            />
            {State.PrixProduit}
          </div>
          <div className="flex flex-rox w-full justify-center mt-12">
            <button onClick={SaveProduit}>
              <span>Envoyer</span>
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default AccueilAdmin;
