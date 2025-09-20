import {Fragment} from "react";
import "./styles.css";
import SongResults from "./SongResults/index";
import imagen from "../../assets/album4.jpg";
import useFetch from "../../Hooks/useFetch";


const SearchResults = ( { busqueda, mostrar, setMostrarResultados, agregarAlbum } ) => {

    const { albums,error,carga } = useFetch(busqueda);

    const renderInformacion = () => {
        if(carga) return(<p id="SearchResults__container--error">Cargando...</p>)
        if(error) return(<p id="SearchResults__container--error">Error: ${error.message}</p>)
        if(!albums || albums.length === 0) return(<p id="SearchResults__container--error">No se encontro ninguna canción o artista</p>)

        return (
            <>
                {
                    albums.map((c) => (
                            <SongResults
                                key={c.idAlbum}
                                album={c}
                                imagen={c.strAlbumThumb || imagen}
                                agregarAlbum={agregarAlbum}
                                setMostrarResultados={setMostrarResultados}
                            />
                    ))   
                }
            </>
        )
    }

    return (
        <div className={`SearchResults ${mostrar ? "activo" : "oculto"}`}>
            <i 
            className="bi bi-x-lg"
            onClick={() => setMostrarResultados(false)}
            ></i>
            <h2>Resultados de la busqueda</h2>
            <div className={albums.length > 0 ? "SearchResults__container" : "no-grid"}>
                {renderInformacion()}
            </div>
        </div>
    )
}

export default SearchResults;