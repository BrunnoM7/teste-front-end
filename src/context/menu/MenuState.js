import React, { useReducer } from 'react'

import api from '../../services/api'

import MenuReducer from './MenuReducer'
import MenuContext from './MenuContext'

import {
  GET_MENU,
  ADD_MENU_ITEM,
  UPDATE_MENU_ITEM,
  DELETE_MENU_ITEM,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types'

const MenuState = props => {
  const initialState = {
    menu: [],
    current: {},
    loading: false
  }

  const [state, dispatch] = useReducer(MenuReducer, initialState);

  // get menu
  const getMenu = async () => {
    // setLoading();
    try {
      const res = await api.get('/menu.json');

      dispatch({
        type: GET_MENU,
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    }
  }
  // add menu item


  // TODO:
  // update menu item
  // delete menu item
  // set loading
  // set current
  // clear current

  return <MenuContext.Provider
    value={{
      menu: state.menu,
      current: state.current,
      loading: state.loading,
      getMenu
    }}
  >
    {props.children}
  </MenuContext.Provider>
}

export default MenuState;