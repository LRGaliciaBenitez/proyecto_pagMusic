import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./librarySlice";
import albumsReducer from "./searchSlice";
import viewAlbumReducer from "./viewalbumSlice";

const store = configureStore({
    reducer: {
        library: libraryReducer,
        search: albumsReducer,
        viewAlbum: viewAlbumReducer,
    }
})


export default store;