import React from "react";
import "./styles.css";
import Song from "../song_components/song";
import Imagen from "../../assets/album3.jpg";

const Library = ( {playlist} ) => {

    return(
        <div className="containerLibrary">
            <h2>Library</h2>
            <div className="containerLibrary__songs">
                { playlist.length > 0 ? (
                   playlist.map(c => (
                        <Song 
                        imagen={Imagen}
                        name={c.name}
                        key={c.key}
                        artista={c.artista}
                        duracion={c.duracion}
                        />
                )) 
            ): (
                <p>Aún no se han agregado canciones</p>
            )}
            </div>
        </div>
    )
}

export default Library;