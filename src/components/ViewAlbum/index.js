import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchViewalbum } from "../../redux/viewalbumSlice";

const ConatinerViewAlbum = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const AlbumIMG = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    @media (min-width: 600px) {
        width: 300px;
        height: 300px;
    }
`;

const ContainerAlbum1 = styled.div`
    width: 90%;
    max-width: 600px;
    text-align: center;
    margin-bottom: 20px;
`;

const TextAlbum = styled.p`
    margin: 5px 0;
    font-size: clamp(14px, 2vw, 18px);
    color: #333;

    &:first-child {
        font-weight: bold;
        font-size: clamp(16px, 2.5vw, 20px);
    }
`;

const ContainerDescripcion = styled.div`
    width: 90%;
    max-width: 600px;
    text-align: justify;
    margin-bottom: 20px;
    font-size: clamp(14px, 2vw, 18px);
    color: #555;
    box-sizing: border-box;
`;



const ViewAlbum = () => {

    const { idAlbum } = useParams();

    const dispatch = useDispatch();

    const { results, loading, error } = useSelector((state) => state.viewAlbum);

    const album = results[0];

    useEffect(() => {
        dispatch(fetchViewalbum(idAlbum))
    }, [idAlbum, dispatch]);

    const renderInformacion = () => {
        if(loading) return(<p className="cargError">Cargando...</p>);
        if(error) return(<p className="cargError">{error}</p>);
        if(!album) return null;

        return (
             <ConatinerViewAlbum>
                 <AlbumIMG src={album.strAlbumThumb} alt={album.strArtist}/>
                 <ContainerAlbum1>
                     <TextAlbum>{album.strAlbum}</TextAlbum>
                     <TextAlbum>Artista: {album.strArtist}</TextAlbum>
                     <TextAlbum>Año de álbum: {album.intYearReleased}</TextAlbum>
                     <TextAlbum>Género del álbum: {album.strStyle}</TextAlbum>
                 </ContainerAlbum1>
                 <ContainerDescripcion>
                     <p>{album.strDescriptionEN ? album.strDescriptionEN : "No hay descripción del album"}</p>
                 </ContainerDescripcion>
             </ConatinerViewAlbum>
         )
    }

    return (
        <>
            {renderInformacion()}
        </>
    )
}

export default ViewAlbum;