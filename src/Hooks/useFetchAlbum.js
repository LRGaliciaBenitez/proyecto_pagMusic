import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAlbum = (idAlbum) => {

    const [album, setAlbum] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancel = false;

        const cargaFeth = async () => {

            setCargando(true);

            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/album.php?m=${idAlbum}`);
                if(!cancel) {
                    setAlbum(response.data.album ? response.data.album[0] : null);
                    setError(null); 
                }
            } catch(error) {
                if(!cancel) {
                    setError(error);
                    setAlbum([]); 
                }
            } finally {
                if(!cancel) {
                    setCargando(false);
                }
            }
        };

        if(idAlbum) cargaFeth();

        return () => { cancel = true; };
    }, [idAlbum]);

    return { album,error,cargando };
}

export default useFetchAlbum;