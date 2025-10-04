import React from "react";
import Song from "../song_components/song";
import Imagen from "../../assets/album3.jpg";
import styled from "styled-components";

const ContainerLibrary = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const H2 = styled.h2`
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    width: 100%;
    margin-left: 30px;
    margin-bottom: 20px;

    @media (min-width: 738px) {
        width: 80%;
    }
`;

const ContainerSongs = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
    gap: 20px;
    justify-items: center;

    @media (min-width: 738px) {
        width: 80%;
    }
`;


const Library = ( {playlist} ) => {

    return(
        <ContainerLibrary>
            <H2>Library</H2>
            <ContainerSongs>
                { playlist.length > 0 ? (
                   playlist.map(c => (
                        <Song 
                        imagen={c.strAlbumThumb || Imagen}
                        name={c.strAlbum}
                        key={c.idAlbum}
                        artista={c.strArtist}
                        duracion={c.duracion  || null}
                        />
                )) 
            ): (
                <p>Aún no se han agregado canciones</p>
            )}
            </ContainerSongs>
        </ContainerLibrary>
    )
}

export default Library;