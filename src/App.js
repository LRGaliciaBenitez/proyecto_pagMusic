import React, {Component} from "react";
import Header from "./components/HEADER/header";
import ContainerSongs from "./components/song_components/container_songs";

class App extends Component {

  componentDidMount() {
    console.log("La app se cargo correctamente");
  }


  render() {
    return(
      <div className="App">
        <Header />
        <ContainerSongs />
      </div>
    )
  }
}

export default App;