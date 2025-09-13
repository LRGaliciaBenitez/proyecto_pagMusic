import React from "react";
import "./styles.css";
import SongResults from "./SongResults/index";
import imagen from "../../assets/album4.jpg";


const SearchResults = ( { busqueda, mostrar, setMostrarResultados, agregarCancion } ) => {

    const listaCanciones = [
        { id: 1, artista: "Ed Sheeran", name: "Shape of You", duracion: "4:20" },
        { id: 2, artista: "The Weeknd", name: "Blinding Lights", duracion: "3:50" },
        { id: 3, artista: "Coldplay", name: "Yellow", duracion: "4:00" },
        { id: 4, artista: "Dua Lipa", name: "Levitating", duracion: "3:23" },
        { id: 5, artista: "Billie Eilish", name: "Bad Guy", duracion: "3:14" },
        { id: 6, artista: "Maroon 5", name: "Memories", duracion: "3:09" },
        { id: 7, artista: "Adele", name: "Hello", duracion: "4:55" },
        { id: 8, artista: "Imagine Dragons", name: "Believer", duracion: "3:24" },
        { id: 9, artista: "Shawn Mendes", name: "Stitches", duracion: "3:27" },
        { id: 10, artista: "Justin Bieber", name: "Peaches", duracion: "3:18" },
        { id: 11, artista: "Ariana Grande", name: "Positions", duracion: "2:52" },
        { id: 12, artista: "Bruno Mars", name: "24K Magic", duracion: "3:46" },
        { id: 13, artista: "Lady Gaga", name: "Rain On Me", duracion: "3:02" },
        { id: 14, artista: "Post Malone", name: "Circles", duracion: "3:35" },
        { id: 15, artista: "Taylor Swift", name: "Love Story", duracion: "3:55" },
        { id: 16, artista: "Katy Perry", name: "Roar", duracion: "3:43" },
        { id: 17, artista: "Selena Gomez", name: "Lose You to Love Me", duracion: "3:26" },
        { id: 18, artista: "Drake", name: "God's Plan", duracion: "3:18" },
        { id: 19, artista: "Demi Lovato", name: "Sorry Not Sorry", duracion: "3:23" },
        { id: 20, artista: "Ed Sheeran", name: "Perfect", duracion: "4:40" }
    ];

    const filtradas = busqueda ? listaCanciones.filter(c => 
        c.name.toLowerCase().includes(busqueda.toLowerCase()) || 
        c.artista.toLowerCase().includes(busqueda.toLowerCase())
    ) : [];

    return (
        <div className={`SearchResults ${mostrar ? "activo" : "oculto"}`}>
            <i 
            className="bi bi-x-lg"
            onClick={() => setMostrarResultados(false)}
            ></i>
            <h2>Resultados de la busqueda</h2>
            <div className={filtradas.length > 0 ? "SearchResults__container" : "no-grid"}>
                {
                    filtradas.length > 0 ? (
                        filtradas.map((c) => (
                        <SongResults
                            key={c.id}
                            cancion={c}
                            imagen={imagen}
                            agregarCancion={agregarCancion}
                        />
                    ))
                ) : (
                    <p id="SearchResults__container--error">No se encontro ninguna cancion o artista</p>
                )
                    
                }
            </div>
        </div>
    )
}

export default SearchResults;