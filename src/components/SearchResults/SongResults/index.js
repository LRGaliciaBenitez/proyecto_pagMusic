import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";


const SongResults = ( {key, imagen, agregarAlbum, album, setMostrarResultados} ) => {

    const navigate = useNavigate();

    return (
        <div className="songResults" key={key}>
            <img className="songResults__img" src={imagen} alt={album.strAlbum}/>
            <div className="songResults__divisor">
                <p className="nombreCancionResults">Álbum: {album.strAlbum}</p>
                <p className="artistaCancionResults">Artista: {album.strArtist}</p>
                <p className="duracionCancionResults">Año: {album.intYearReleased}</p>
                <p>Genero: {album.strStyle}</p>
            </div>
            <button 
            id="btnAddSong" 
            onClick={() => {
                agregarAlbum(album)
            }} 
            >Agregar Álbum</button>
            <button
            onClick={() => {
                navigate(`/album/${album.idAlbum}`)
                setMostrarResultados(false)
            }}
            >Ver Álbum</button>
        </div>
    )
}

export default SongResults;