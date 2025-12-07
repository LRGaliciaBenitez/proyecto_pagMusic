import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../../redux/librarySlice";


const ConatinerSong = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;

    &:hover {
        background-color: #f0f0f0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
        transition: all 0.3s ease;
        cursor: pointer;
    }
`;

const ContainerIMG = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const ContainerResultsDivisor = styled.div`
    width: 100%;
    min-height: 140px;
    margin: 10px 0;

    @media (min-width: 738px) {
        min-height: 170px;
    }
`;

const TextoDescriptivo = styled.p`
    margin-bottom: 5px;
    font-size: clamp(0.8rem, 2vw, 1rem);
    font-weight: bold;
    text-align: center;
`;

const Boton = styled.button`
    padding: 8px 16px;
    font-size: clamp(0.8rem, 2vw, 1rem);
    border: none;
    border-radius: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const SongResults = ( {imagen, album, setMostrarResultados} ) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.library);

    const existe = () => {
        if (playlist.find(c => c.idAlbum === album.idAlbum)) {
            alert(`El álbum ${album.strAlbum} ya es parte de tu Library`);
        } else  {
            alert(`El álbum ${album.strAlbum} ha sido agregado a tu Library`);
            dispatch(addSong(album))
        }

    };

    return (
        <ConatinerSong>
            <ContainerIMG src={imagen} alt={album.strAlbum} />
            <ContainerResultsDivisor>
                <TextoDescriptivo>Álbum: {album.strAlbum}</TextoDescriptivo>
                <TextoDescriptivo>Artista: {album.strArtist}</TextoDescriptivo>
                <TextoDescriptivo>Año: {album.intYearReleased}</TextoDescriptivo>
                <TextoDescriptivo>Genero: {album.strStyle}</TextoDescriptivo>
            </ContainerResultsDivisor>
            <Boton
            id="btnAddSong" 
            onClick={existe}
            >Agregar Álbum</Boton>
            <Boton
            onClick={() => {
                navigate(`/album/${album.idAlbum}`)
                setMostrarResultados(false)
            }}
            >Ver Álbum</Boton>
        </ConatinerSong>
    )
}

export default SongResults;