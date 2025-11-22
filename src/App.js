import { useEffect, useState } from "react";
import Header from "./components/HEADER/header";
import ContainerSongs from "./components/song_components/container_songs";
import SearchResults from "./components/SearchResults/index";
import Library from "./components/Library/index";
import ViewAlbum from "./components/ViewAlbum/index";
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [busqueda, setBusqueda] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);
  // const [playlist, setPlaylist] = useState([]);

  // const agregarAlbum = (album) => {
  //   setPlaylist(prev => {
    
  //     const existe = prev.some(c => c.idAlbum === album.idAlbum);

  //     if (existe) {
  //       alert(`La canción ${album.strAlbum} ya es parte de tu Library`);
  //       return prev;
  //     } else {
  //       alert(`La canción ${album.strAlbum} ha sido agregada a tu Library`);
  //       return [...prev, album];
  //     }
  //   });
  // };

  // useEffect(() => {
  //   console.log(`Se axtualizo la biblioteca: ${playlist}`);
  // }, [playlist]);

  function MainPage() {
    return (
      <>
        <SearchResults 
        busqueda={busqueda} 
        mostrar={mostrarResultados} 
        setMostrarResultados={setMostrarResultados}
        />
        <ContainerSongs />
        <Library 
        />
      </>
    )
  }

  return (
    <div className="App">
      <Header 
      setBusqueda={setBusqueda} 
      setMostrarResultados={setMostrarResultados}
      busqueda={busqueda}
      />
      <Routes>
        <Route 
          path="/" 
          element={ <MainPage /> } 
        />
        <Route 
          path="/album/:idAlbum"
          element={
            <>
              <SearchResults 
              busqueda={busqueda} 
              mostrar={mostrarResultados} 
              setMostrarResultados={setMostrarResultados}
              // agregarAlbum={agregarAlbum}
              />
              <ViewAlbum />
            </>
          }
        />
      </Routes>
      
      
    </div>
  )
}

export default App;