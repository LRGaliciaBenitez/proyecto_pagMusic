import React from "react";
import "./header.css";

const Header = ( { setBusqueda, setMostrarResultados, busqueda } ) => {

    const handleKeyEnter = (e) => {
        if(e.key === "Enter" && busqueda.trim() !== "") {
            setMostrarResultados(true)
        }
    };
    
    return (
        <header>
            <h1 className="header__h1">Tuni Music</h1>
            <div className="header__container_buscador">
                <input 
                type="text" 
                name="inputSearch" 
                id="inputSearch"
                onChange={(e) => setBusqueda(e.target.value)}
                onKeyDown={handleKeyEnter}
                ></input>
                <i 
                className="bi bi-search"
                onClick={() => {
                    if(busqueda.trim() !== "") setMostrarResultados(true);
                }}
                ></i>
            </div>
            <div className="header__container_icons">
                <i class="bi bi-bell"></i>
                <i class="bi bi-gear-fill"></i>
                <i class="bi bi-person-circle"></i>
            </div>
        </header>
    )
}

export default Header;