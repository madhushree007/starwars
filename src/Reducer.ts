import { PeopleI, PlanetsI, SET_COMPUTER_CARD_PEOPLE, SET_COMPUTER_CARD_PLANETS, SET_COMPUTER_CARD_STARSHIPS, SET_COMPUTER_SCORE, SET_FLIPPED, SET_GAME_STATE, SET_LOADING, SET_PLAYER_CARD_PEOPLE, SET_PLAYER_CARD_PLANETS, SET_PLAYER_CARD_STARSHIPS, SET_PLAYER_SCORE, SET_PLAY_OPTION, StarShipI, StarWarsDispatchTypes, USER_LOGIN, USER_LOGOUT } from './types/actionTypes';

export interface DefaultStateI {
  loading: boolean,
  username?: string,
  playerCardPeople?: PeopleI,
  computerCardPeople?: PeopleI,
  playerCardStarShip?: StarShipI,
  computerCardStarShip?: StarShipI,
  playerCardPlanets?: PlanetsI,
  computerCardPlanets?: PlanetsI,
  isFlipped: boolean,
  playGame: boolean,
  playerScore: number,
  computerScore: number,
  playOption: string
}

const defaultState: DefaultStateI = {
  loading: false,
  isFlipped: false,
  playGame: true,
  playerScore: 0,
  computerScore: 0,
  playOption: 'people'
};

const Reducer = (state: DefaultStateI = defaultState, action: StarWarsDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case SET_PLAYER_CARD_PEOPLE: {
      return {
        ...state,
        playerCardPeople: action.playerCardPeople
      }
    }
    case SET_COMPUTER_CARD_PEOPLE: {
      return {
        ...state,
        computerCardPeople: action.computerCardPeople
      }
    }
    case SET_PLAYER_CARD_STARSHIPS: {
      return {
        ...state,
        playerCardStarShip: action.playerCardStarShip
      }
    }
    case SET_COMPUTER_CARD_STARSHIPS: {
      return {
        ...state,
        computerCardStarShip: action.computerCardStarShip
      }
    }
    case SET_PLAYER_CARD_PLANETS: {
      return {
        ...state,
        playerCardPlanets: action.playerCardPlanets
      }
    }
    case SET_COMPUTER_CARD_PLANETS: {
      return {
        ...state,
        computerCardPlanets: action.computerCardPlanets
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
    case SET_PLAY_OPTION: {
      return {
        ...state,
        playOption: action.playOption
      }
    }
    default: {
      return state;
    }
  }
}

export default Reducer;