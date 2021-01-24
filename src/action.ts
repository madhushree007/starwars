import axios from 'axios';
import { Dispatch } from 'redux';
import { SET_LOADING, SET_PLAYER_CARD, StarShipI, StarWarsDispatchTypes } from './types/actionTypes';

export function set_loading(loading: boolean): StarWarsDispatchTypes {
  return {
    type: SET_LOADING,
    loading
  }
}

export function set_player_card(playersCard: StarShipI): StarWarsDispatchTypes {
  return {
    type: SET_PLAYER_CARD,
    playersCard
  }
}

// export function set_computer_card(computersCard) {
//   return {
//     type: 'SET_COMPUTER_CARD',
//     computersCard
//   }
// }

// export function setCardFlip(isCardFlipped) {
//   return {
//     type: "SET_FLIPPED",
//     isCardFlipped
//   }
// }

// export function setGameState(playGame) {
//   return {
//     type: "SET_GAME_STATE",
//     playGame
//   }
// }

export function fetchSWInfo() {
  return async (dispatch: Dispatch<StarWarsDispatchTypes>) => {
    dispatch(set_loading(true));

    const res = await axios.get('https://swapi.dev/api/starships/9/');
    dispatch(set_player_card(res.data));

    dispatch(set_loading(false));
  }
}