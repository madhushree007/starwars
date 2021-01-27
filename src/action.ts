import axios from 'axios';
import { Dispatch } from 'redux';
import { PeopleI, PlanetsI, SET_COMPUTER_CARD_PEOPLE, SET_COMPUTER_CARD_PLANETS, SET_COMPUTER_CARD_STARSHIPS, SET_COMPUTER_SCORE, SET_FLIPPED, SET_GAME_STATE, SET_LOADING, SET_PLAYER_CARD_PEOPLE, SET_PLAYER_CARD_PLANETS, SET_PLAYER_CARD_STARSHIPS, SET_PLAYER_SCORE, SET_PLAY_OPTION, StarShipI, StarWarsDispatchTypes, USER_LOGIN, USER_LOGOUT } from './types/actionTypes';
const BASE_URL = 'https://swapi.dev/api/';

export function set_loading(loading: boolean): StarWarsDispatchTypes {
  return {
    type: SET_LOADING,
    loading
  }
}

export function set_player_card_people(playerCardPeople: PeopleI): StarWarsDispatchTypes {
  return {
    type: SET_PLAYER_CARD_PEOPLE,
    playerCardPeople
  }
}

export function set_player_card_starships(playerCardStarShip: StarShipI): StarWarsDispatchTypes {
  return {
    type: SET_PLAYER_CARD_STARSHIPS,
    playerCardStarShip
  }
}

export function set_player_card_planets(playerCardPlanets: PlanetsI): StarWarsDispatchTypes {
  return {
    type: SET_PLAYER_CARD_PLANETS,
    playerCardPlanets
  }
}

export function set_computer_card_people(computerCardPeople: PeopleI): StarWarsDispatchTypes {
  return {
    type: SET_COMPUTER_CARD_PEOPLE,
    computerCardPeople
  }
}

export function set_computer_card_starships(computerCardStarShip: StarShipI): StarWarsDispatchTypes {
  return {
    type: SET_COMPUTER_CARD_STARSHIPS,
    computerCardStarShip
  }
}

export function set_computer_card_planets(computerCardPlanets: PlanetsI): StarWarsDispatchTypes {
  return {
    type: SET_COMPUTER_CARD_PLANETS,
    computerCardPlanets
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

export function play_option(playOption: string): StarWarsDispatchTypes {
  return {
    type: SET_PLAY_OPTION,
    playOption
  }
}



export function fetchSWInfo(playWith: string) {
  return async (dispatch: Dispatch<StarWarsDispatchTypes>) => {
    dispatch(set_loading(true));
    try {
      let randNum1 = Math.floor(Math.random() * 15) + 1;
      const res1 = await axios.get(`${BASE_URL}${playWith}/${randNum1}/`);
      if (playWith === 'people') dispatch(set_player_card_people(res1.data));
      else if (playWith === 'planets') dispatch(set_player_card_planets(res1.data));
      else if (playWith === 'starships') dispatch(set_player_card_starships(res1.data));

      let randNum2 = Math.floor(Math.random() * 15) + 1;
      const res2 = await axios.get(`${BASE_URL}${playWith}/${randNum2}/`);
      if (playWith === 'people') dispatch(set_computer_card_people(res2.data));
      else if (playWith === 'planets') dispatch(set_computer_card_planets(res2.data));
      else if (playWith === 'starships') dispatch(set_computer_card_starships(res2.data));

      // compares the MASS and set the points 
      if (playWith === 'people') {
        if (res1 && res2) {
          if (res1.data.mass > res2.data.mass) {
            dispatch(set_player_score());
          } else if (res2.data.mass > res1.data.mass) {
            dispatch(set_computer_score());
          }
        }
      }

      // compares the CREW and set the points 
      if (playWith === 'starships') {
        if (res1 && res2) {
          if (res1.data.crew > res2.data.crew) {
            dispatch(set_player_score());
          } else if (res2.data.crew > res1.data.crew) {
            dispatch(set_computer_score());
          }
        }
      }

      // compares the DIAMETER and set the points 
      if (playWith === 'planets') {
        if (res1 && res2) {
          if (res1.data.diameter > res2.data.diameter) {
            dispatch(set_player_score());
          } else if (res2.data.diameter > res1.data.diameter) {
            dispatch(set_computer_score());
          }
        }
      }
    } catch (e) {
      console.log('Error', e);
    }

    dispatch(set_loading(false));
  }
}