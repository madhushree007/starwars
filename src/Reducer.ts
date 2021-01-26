import { SET_COMPUTER_CARD, SET_COMPUTER_SCORE, SET_FLIPPED, SET_GAME_STATE, SET_LOADING, SET_PLAYER_CARD, SET_PLAYER_SCORE, StarShipI, StarWarsDispatchTypes, USER_LOGIN, USER_LOGOUT } from './types/actionTypes';

export interface DefaultStateI {
  loading: boolean,
  username?: string,
  playerCard?: StarShipI,
  computerCard?: StarShipI,
  isFlipped: boolean,
  playGame: boolean,
  playerScore: number,
  computerScore: number
}

const defaultState: DefaultStateI = {
  loading: false,
  isFlipped: false,
  playGame: true,
  playerScore: 0,
  computerScore: 0
};

const Reducer = (state: DefaultStateI = defaultState, action: StarWarsDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case SET_PLAYER_CARD: {
      return {
        ...state,
        playerCard: action.playerCard
      }
    }
    case SET_COMPUTER_CARD: {
      return {
        ...state,
        computerCard: action.computerCard
      }
    }
    case SET_FLIPPED: {
      return {
        ...state,
        isFlipped: action.isFlipped
      }
    }
    case SET_GAME_STATE: {
      return {
        ...state,
        playGame: action.playGame
      }
    }
    case SET_PLAYER_SCORE: {
      return {
        ...state,
        playerScore: state.playerScore + 1
      }
    }
    case SET_COMPUTER_SCORE: {
      return {
        ...state,
        computerScore: state.computerScore + 1
      }
    }
    case USER_LOGIN: {
      return {
        ...state,
        username: action.username
      }
    }
    case USER_LOGOUT: {
      return {
        ...state,
        username: ''
      }
    }
    default: {
      return state;
    }
  }
}

export default Reducer;