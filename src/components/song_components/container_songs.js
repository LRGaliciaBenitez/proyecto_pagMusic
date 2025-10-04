import React from "react";
import Song from "./song";
import Album from "../../assets/imagen_album.jpeg";
import Album2 from "../../assets/album2.jpeg";
import Album3 from "../../assets/album3.jpg";
import Album4 from "../../assets/album4.jpg";
import Album5 from "../../assets/abbey-road-the-beatles-1969.jpg";
import styled from "styled-components";

const ConatinerInfoPlaylist = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const H1 = styled.h1`
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    width: 100%;
    margin-left: 30px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        width: 80%;
    }
`;

const ContainerMusic = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;

    @media (min-width: 768px) {
        width: 80%;
    }
`;

const ContainerSongs = () => {
    
    return (
        <ConatinerInfoPlaylist>
            <H1>Tu playlist</H1>
            <ContainerMusic>
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
            </ContainerMusic>
        </ConatinerInfoPlaylist>
    )
}

export default ContainerSongs;