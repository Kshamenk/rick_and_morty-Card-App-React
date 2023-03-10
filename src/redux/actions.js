export const ADD_CHARACTER = 'ADD_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';

export const addCharacter = (character) => {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
};

export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
};

export const filterCards = (status) => {
  return {
    type: FILTER_CARDS,
    payload: status,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER_CARDS,
    payload: id,
  };
};