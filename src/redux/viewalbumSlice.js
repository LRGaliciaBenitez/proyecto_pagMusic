import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchViewalbum = createAsyncThunk("viewAlbum/viewalbumFetch", 
    async(idAlbum) => {
        const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/album.php?m=${idAlbum}`);
        return response.data.album || [];
    }
)

const viewalbumSlice = createSlice({
    name: "viewAlbum",
    initialState: {
        results: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchViewalbum.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchViewalbum.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(fetchViewalbum.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default viewalbumSlice.reducer;

