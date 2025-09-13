import React from "react";
import "./styles.css";


const SongResults = ( {key, imagen, agregarCancion, cancion} ) => {
    if(!cancion) return null;

    return (
        <div className="songResults" key={key}>
            <img className="songResults__img" src={imagen} alt={cancion.name}/>
            <div className="songResults__divisor">
                <p className="nombreCancionResults">{cancion.name}</p>
                <p className="artistaCancionResults">Artista: {cancion.artista}</p>
                <p className="duracionCancionResults">Duración: {cancion.duracion}</p>
            </div>
            <button 
            id="btnAddSong" 
            onClick={() => {
                agregarCancion(cancion)
            }} 
            >Agregar Canción</button>
        </div>
    )
}

export default SongResults;