import React, {Component} from "react";
import "./song.css";

class Song extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="song">
                <img className="song__img" src={this.props.imagen} alt={this.props.name}/>
                <div className="song__divisor">
                    <p className="nombreCancion">{this.props.name}</p>
                    <p className="artistaCancion">Artista: {this.props.artista}</p>
                    <p className="duracionCancion">Duración: {this.props.duracion}</p>
                </div>
            </div>
        )
    }
}

export default Song;