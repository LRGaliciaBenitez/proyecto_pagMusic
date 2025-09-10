import React, {Component} from "react";
import "./header.css";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return (
            <header>
                <h1 className="header__h1">Tuni Music</h1>
                <div className="header__container_buscador">
                    <input type="text" name="inputSearch" id="inputSearch"></input>
                    <i class="bi bi-search"></i>
                </div>
                <div className="header__container_icons">
                    <i class="bi bi-bell"></i>
                    <i class="bi bi-gear-fill"></i>
                    <i class="bi bi-person-circle"></i>
                </div>
            </header>
        )
    }
}

export default Header;