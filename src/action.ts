import axios from 'axios';
import { Dispatch } from 'redux';
import { SET_COMPUTER_CARD, SET_COMPUTER_SCORE, SET_FLIPPED, SET_GAME_STATE, SET_LOADING, SET_PLAYER_CARD, SET_PLAYER_SCORE, StarShipI, StarWarsDispatchTypes, USER_LOGIN, USER_LOGOUT } from './types/actionTypes';

export function set_loading(loading: boolean): StarWarsDispatchTypes {
  return {
    type: SET_LOADING,
    loading
  }
}

export function set_player_card(playerCard: StarShipI): StarWarsDispatchTypes {
  return {
    type: SET_PLAYER_CARD,
    playerCard
  }
}

export function set_computer_card(computerCard: StarShipI): StarWarsDispatchTypes {
  return {
    type: SET_COMPUTER_CARD,
    computerCard
  }
}

export function set_card_flip(isFlipped: boolean): StarWarsDispatchTypes {
  return {
    type: SET_FLIPPED,
    isFlipped
  }
}

export function set_game_state(playGame: boolean): StarWarsDispatchTypes {
  return {
    type: SET_GAME_STATE,
    playGame
  }
}

export function set_player_score(): StarWarsDispatchTypes {
  return {
    type: SET_PLAYER_SCORE
  }
}

export function set_computer_score(): StarWarsDispatchTypes {
  return {
    type: SET_COMPUTER_SCORE
  }
}

export function user_login(username: string): StarWarsDispatchTypes {
  return {
    type: USER_LOGIN,
    username
  }
}

export function user_logout(): StarWarsDispatchTypes {
  return {
    type: USER_LOGOUT
  }
}

export function fetchSWInfo() {
  return async (dispatch: Dispatch<StarWarsDispatchTypes>) => {
    dispatch(set_loading(true));

    let randNum1 = Math.floor(Math.random() * 15) + 1;
    const res1 = await axios.get(`https://swapi.dev/api/people/${randNum1}/`);
    dispatch(set_player_card(res1.data));

    let randNum2 = Math.floor(Math.random() * 15) + 1;
    const res2 = await axios.get(`https://swapi.dev/api/people/${randNum2}/`);
    dispatch(set_computer_card(res2.data));

    if (res1 && res2 && res1.data.mass > res2.data.mass) {
      dispatch(set_player_score());
    } else if (res1 && res2 && res2.data.mass > res1.data.mass) {
      dispatch(set_computer_score());
    }

    dispatch(set_loading(false));
  }
}