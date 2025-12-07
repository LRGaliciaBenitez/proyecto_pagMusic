import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAlbums = createAsyncThunk("search/fetchAlbums", 
    async (busqueda) => {
        const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${busqueda}`)
        return response.data.album || [];
    }
)

const albumsSlice = createSlice({
    name: "search",
    initialState: {
        results: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbums.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(fetchAlbums.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default albumsSlice.reducer;