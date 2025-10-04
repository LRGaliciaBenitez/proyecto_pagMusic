import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #1e1e1e;
    color: white;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Enlace = styled(Link)`
    text-decoration: unset;
    color: white;

    &:visited {
        color: white;
    }

    @media (min-width: 768px) {
        width: 30%;
    }
`;

const H1 = styled.h1`
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
`;

const ContainerSearch = styled.div`
    display: none;

    @media (min-width: 768px) {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`;

const InputSearch = styled.input`

    @media (min-width: 768px) {
        padding: 5px 10px;
        font-size: 1rem;
        border: none;
        border-radius: 20px;
        outline: none;
        width: 200px;
    }

    @media (min-width: 1200px) {
        width: 300px;
    }
`;

const Icon = styled.i`
    cursor: pointer;
    font-size: clamp(1rem, 2vw, 1.5rem);

    @media (min-width: 768px) {

        &:hover {
            color: #bbb;
        }
    }
`;

const ContainerIcons = styled.div`
    display: flex;
    gap: 15px;

    @media (min-width: 768px) {
        width: 30%;
        justify-content: flex-end;
    }
`;

const Header = ( { setBusqueda, setMostrarResultados, busqueda } ) => {

    const handleKeyEnter = (e) => {
        if(e.key === "Enter" && busqueda.trim() !== "") {
            setMostrarResultados(true)
        }
    };
    
    return (
        <HeaderContainer>
            <Enlace to="/">
                <H1>Tuni Music</H1>
            </Enlace>
            <ContainerSearch>
                <InputSearch 
                type="text" 
                name="inputSearch" 
                id="inputSearch"
                onChange={(e) => setBusqueda(e.target.value)}
                onKeyDown={handleKeyEnter}
                />
                <Icon
                className="bi bi-search"
                onClick={() => {
                    if(busqueda.trim() !== "") setMostrarResultados(true);
                }}
                ></Icon>
            </ContainerSearch>
            <ContainerIcons>
                <Icon className="bi bi-bell"></Icon>
                <Icon className="bi bi-gear-fill"></Icon>
                <Icon className="bi bi-person-circle"></Icon>
            </ContainerIcons>
        </HeaderContainer>
    )
}

export default Header;