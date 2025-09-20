import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (busqueda) => {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);
    const [carga, setCarga] = useState(true);

    useEffect(() => {

        const fetchAlbums = async () => {
            setCarga(true);

            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${busqueda}`);
                setAlbums(response.data.album || []);
                setError(null);
            } catch(error) {
                setError(error);
                setAlbums([]);
            } finally {
                setCarga(false);
            }  
        }

        if(busqueda) fetchAlbums();
        
    }, [busqueda]);

    return { albums, error, carga };
}

export default useFetch;

