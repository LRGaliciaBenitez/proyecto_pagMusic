export const addSong = (song) => ({
    type: "ADD_SONG",
    payload: song
});

export const removeSong = (idAlbum) => ({
    type: "REMOVE_SONG",
    payload: idAlbum
})
