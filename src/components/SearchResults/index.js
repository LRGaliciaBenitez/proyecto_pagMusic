import SongResults from "./SongResults/index";
import imagen from "../../assets/album4.jpg";
import useFetch from "../../Hooks/useFetch";
import styled, { css } from "styled-components";

const SearchResultsWrapper = styled.div`
    width: 100%;
    position: absolute;
    transform: translateX(-100%);
    opacity: ${({mostrar}) => (mostrar ? "1" : "0")};
    transform: ${({mostrar}) => (mostrar ? "translateX(0)" : "translateX(-100%)")};
    transition: left 0.3s ease-in-out, opacity 0.3s ease-in-out;
    background-color: white;
    min-height: 100vh;
    z-index: 1000;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items:center;
`;

const Icon = styled.i`
    align-self: flex-end;
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    cursor: pointer;

    &:hover {
        color: red;
    }
`;

const H2 = styled.h2`
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    margin-bottom: 20px;
`;

const ContainerInformacion = styled.div`
    width: 100%;
    ${({albums}) => 
    albums.length > 0
        ? css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            justify-items: center;
        ` 
        : css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
    };
`;

const TextoError = styled.p`
    color: red;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
`;



const SearchResults = ( { busqueda, mostrar, setMostrarResultados} ) => {

    const { albums,error,carga } = useFetch(busqueda);

    const renderInformacion = () => {
        if(carga) return( <TextoError>Cargando...</TextoError>)
        if(error) return( <TextoError>Error: ${error.message}</TextoError>)
        if(!albums || albums.length === 0) return( <TextoError>No se encontro ninguna canción o artista</TextoError>)

        return (
            <>
                {
                    albums.map((c) => (
                            <SongResults
                                key={c.idAlbum}
                                album={c}
                                imagen={c.strAlbumThumb || imagen}
                                setMostrarResultados={setMostrarResultados}
                            />
                    ))   
                }
            </>
        )
    }

    return (
        <SearchResultsWrapper mostrar={mostrar}>
            <Icon
            className="bi bi-x-lg"
            onClick={() => setMostrarResultados(false)}
            ></Icon>
            <H2>Resultados de la busqueda</H2>
            <ContainerInformacion albums={albums}>
                {renderInformacion()}
            </ContainerInformacion>
        </SearchResultsWrapper>
    )
}

export default SearchResults;