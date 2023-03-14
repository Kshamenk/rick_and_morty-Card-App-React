import { ADD_CHARACTER, DELETE_CHARACTER, FILTER_CARDS, ORDER_CARDS } from "./actions"

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload ],
        allCharacters: [...state.allCharacters, action.payload ],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => {
          return char.id !== action.payload;
        }),
      };
    case FILTER_CARDS:     // en una variable guardp el valor del resultado q me da filtrar el state de todos los char
      const filteredCharacters = state.allCharacters.filter((char) => {
        return char.gender === action.payload;    //compara el genero c el valor del payload que recibio como accion
      });
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    case ORDER_CARDS:
      const sortedCharacters = [...state.allCharacters].sort((a, b) => { //usamos el metodo sort, hacemos una comparacion de a y b
        if (action.payload === "Ascendente") { 
          return a.id - b.id; // si es ascendente q retorne el id de a menos el id de b
        } else if (action.payload === "Descendente") {   //la función devuelve la diferencia de los IDs en orden inverso (b.id - a.id)
          return b.id - a.id;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: sortedCharacters,
      };
    default:
      return {...state};
  }
}

export default reducer;