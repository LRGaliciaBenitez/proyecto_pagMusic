import React from "react";
import styled from "styled-components";

const ContainerSong = styled.div`
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

const SongIMG = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const SongDivisor = styled.div`
    width: 100%;
    margin: 10px 0;
`;

const TextoDescriptivo = styled.p`
    margin-bottom: 5px;
    font-size: clamp(0.8rem, 2vw, 1rem);
    font-weight: bold;
    text-align: center;
`;


const Song = ({ imagen, name, artista, duracion, key }) => {

    return (
        <ContainerSong>
            <SongIMG src={imagen} alt={name}/>
            <SongDivisor>
                <TextoDescriptivo>{name}</TextoDescriptivo>
                <TextoDescriptivo>Artista: {artista}</TextoDescriptivo>
                <TextoDescriptivo>Duración: {duracion}</TextoDescriptivo>
            </SongDivisor>
        </ContainerSong>
    )

}

export default Song;