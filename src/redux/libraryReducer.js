const inicialState = [];

const libraryReducer = (state = inicialState, action) => {
  switch (action.type ) {
    case "ADD_SONG":
        return [...state, action.payload];
    case "REMOVE_SONG":
        return state.filter((song) => song.idAlbum !== action.payload);
    default:
        return state;
  }
};

export default libraryReducer;

