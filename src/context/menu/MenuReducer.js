import {
  GET_MENU,
  // ADD_MENU_ITEM,
  // UPDATE_MENU_ITEM,
  // DELETE_MENU_ITEM,
  // SET_LOADING,
  // SET_CURRENT,
  // CLEAR_CURRENT
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case GET_MENU:
      return { 
        ...state,
        menu: action.payload,
        loading: false
      }
    default:
      return state;
  }
}