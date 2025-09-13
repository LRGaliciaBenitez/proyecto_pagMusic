import React, { useEffect, useState } from "react";
import Header from "./components/HEADER/header";
import ContainerSongs from "./components/song_components/container_songs";
import SearchResults from "./components/SearchResults/index";
import Library from "./components/Library/index";

const App = () => {

  const [busqueda, setBusqueda] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [playlist, setPlaylist] = useState([]);

  const agregarCancion = (cancion) => {
    setPlaylist(prev => {
    
      const existe = prev.some(c => c.id === cancion.id);

      if (existe) {
        alert(`La canción ${cancion.name} ya es parte de tu Library`);
        return prev;
      } else {
        alert(`La canción ${cancion.name} ha sido agregada a tu Library`);
        return [...prev, cancion];
      }
    });
};

useEffect(() => {
  console.log(`Se axtualizo la biblioteca: ${playlist}`);
}, [playlist]);

  return (
    <div className="App">
      <Header 
      setBusqueda={setBusqueda} 
      setMostrarResultados={setMostrarResultados}
      busqueda={busqueda}
      />
      <SearchResults 
      busqueda={busqueda} 
      mostrar={mostrarResultados} 
      setMostrarResultados={setMostrarResultados}
      agregarCancion={agregarCancion}
      />
      <ContainerSongs />
      <Library 
      playlist={playlist}
      />
    </div>
  )
}

export default App;