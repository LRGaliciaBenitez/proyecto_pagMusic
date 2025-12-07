import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
    name: "Library",
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            state.push(action.payload);
        },
        removeSong: (state, action) => {
            return state.filter((song) => song.idAlbum !== action.payload);
        }
    }
})

export const { addSong, removeSong } = librarySlice.actions;

export default librarySlice.reducer;