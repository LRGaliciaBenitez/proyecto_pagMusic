import React from "react";
import "./song.css";


const Song = ({ imagen, name, artista, duracion, key }) => {

    return (
        <div className="song" key={key}>
            <img className="song__img" src={imagen} alt={name}/>
            <div className="song__divisor">
                <p className="nombreCancion">{name}</p>
                <p className="artistaCancion">Artista: {artista}</p>
                <p className="duracionCancion">Duración: {duracion}</p>
            </div>
        </div>
    )

}

export default Song;