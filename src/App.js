import { useState } from "react";
import Header from "./components/HEADER/header";
import ContainerSongs from "./components/song_components/container_songs";
import SearchResults from "./components/SearchResults/index";
import Library from "./components/Library/index";
import ViewAlbum from "./components/ViewAlbum/index";
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [busqueda, setBusqueda] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);

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