import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import useFetchAlbum from "../../Hooks/useFetchAlbum";

const ViewAlbum = () => {

    const { idAlbum } = useParams();

    const { album,error,cargando } = useFetchAlbum(idAlbum);

    const renderInformacion = () => {
        if(cargando) return(<p className="cargError">Cargando...</p>);
        if(error) return(<p className="cargError">{error.message}</p>);
        
        return (
            <div className="containerViewAlbum">
                <img src={album.strAlbumThumb} alt={album.strArtist}></img>
                <div className="containerViewAlbum__container1">
                    <p>{album.strAlbum}</p>
                    <p>Artista: {album.strArtist}</p>
                    <p>Año de álbum: {album.intYearReleased}</p>
                    <p>Género del álbum: {album.strStyle}</p>
                </div>
                <div className="containerViewAlbum__descripcion">
                    <p>{album.strDescriptionEN ? album.strDescriptionEN : "No hay descripción del album"}</p>
                </div>
            </div>
        )
        
    }

    return (
        <>
            {renderInformacion()}
        </>
    )
}

export default ViewAlbum;