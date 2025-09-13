import React from "react";
import "./container_songs.css";
import Song from "./song";
import Album from "../../assets/imagen_album.jpeg";
import Album2 from "../../assets/album2.jpeg";
import Album3 from "../../assets/album3.jpg";
import Album4 from "../../assets/album4.jpg";
import Album5 from "../../assets/abbey-road-the-beatles-1969.jpg";

const ContainerSongs = () => {
    
    return (
        <div className="mainContainerSongs">
            <h1 className="titulo__playlist">Tu playlist</h1>
            <div className="containerSongs">
                <Song 
                    imagen={Album}
                    name="Un verano sin ti"
                    artista="Bad bunny"
                    duracion="2:14"
                />
                <Song 
                    imagen={Album2}
                    name="Perro negro"
                    artista="Bad bunny"
                    duracion="2:43"
                />
                <Song 
                    imagen={Album3}
                    name="Smells Like Teen Spirit"
                    artista="Nirvana"
                    duracion="5:00"
                />
                <Song 
                    imagen={Album4}
                    name="Starboy"
                    artista="The weeknd"
                    duracion="4:30"
                    />
                <Song 
                    imagen={Album5}
                    name="Here Comes The Sun"
                    artista="The Beatles"
                    duracion="3:05"
                />
            </div>
        </div>
    )
}

export default ContainerSongs;