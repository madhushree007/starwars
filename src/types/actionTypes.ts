export const SET_LOADING = 'SET_LOADING';
export const SET_PLAYER_CARD_PEOPLE = 'SET_PLAYER_CARD_PEOPLE';
export const SET_PLAYER_CARD_STARSHIPS = 'SET_PLAYER_CARD_STARSHIPS';
export const SET_PLAYER_CARD_PLANETS = 'SET_PLAYER_CARD_PLANETS';
export const SET_COMPUTER_CARD_PEOPLE = 'SET_COMPUTER_CARD_PEOPLE';
export const SET_COMPUTER_CARD_STARSHIPS = 'SET_COMPUTER_CARD_STARSHIPS';
export const SET_COMPUTER_CARD_PLANETS = 'SET_COMPUTER_CARD_PLANETS';
export const SET_FLIPPED = 'SET_FLIPPED';
export const SET_GAME_STATE = 'SET_GAME_STATE';
export const SET_PLAYER_SCORE = 'SET_PLAYER_SCORE';
export const SET_COMPUTER_SCORE = 'SET_COMPUTER_SCORE';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SET_PLAY_OPTION = 'SET_PLAY_OPTION';

export type PeopleI = {
  name: string,
  height: number,
  mass: number,
  gender: string
}

export type StarShipI = {
  name: string,
  model: number,
  cost_in_credits: number,
  crew: string
}

export type PlanetsI = {
  name: string,
  rotation_period: number,
  orbital_period: number,
  diameter: string
}

export interface SetLoading {
  type: typeof SET_LOADING,
  loading: boolean
}

export interface SetPlayerCardPeople {
  type: typeof SET_PLAYER_CARD_PEOPLE,
  playerCardPeople: PeopleI
}

export interface SetComputerCardPeople {
  type: typeof SET_COMPUTER_CARD_PEOPLE,
  computerCardPeople: PeopleI
}

export interface SetPlayerCardStarShip {
  type: typeof SET_PLAYER_CARD_STARSHIPS,
  playerCardStarShip?: StarShipI
}

export interface SetComputerCardStarShip {
  type: typeof SET_COMPUTER_CARD_STARSHIPS,
  computerCardStarShip: StarShipI
}

export interface SetPlayerCardPlanets {
  type: typeof SET_PLAYER_CARD_PLANETS,
  playerCardPlanets?: PlanetsI
}

export interface SetComputerCardPlanets {
  type: typeof SET_COMPUTER_CARD_PLANETS,
  computerCardPlanets: PlanetsI
}

export interface SetCardFlipped {
  type: typeof SET_FLIPPED,
  isFlipped: boolean
}

export interface SetGameState {
  type: typeof SET_GAME_STATE,
  playGame: boolean
}

export interface SetPlayerScore {
  type: typeof SET_PLAYER_SCORE,
}

export interface SetComputerScore {
  type: typeof SET_COMPUTER_SCORE,
}

export interface UserLogin {
  type: typeof USER_LOGIN,
  username: string
}

export interface UserLogout {
  type: typeof USER_LOGOUT
}

export interface SetPlayOption {
  type: typeof SET_PLAY_OPTION
  playOption: string
}

export type StarWarsDispatchTypes = SetLoading | SetPlayerCardPeople | SetComputerCardPeople | SetPlayerCardStarShip | SetComputerCardStarShip | SetPlayerCardPlanets | SetComputerCardPlanets | SetCardFlipped | SetGameState | SetPlayerScore | SetComputerScore | UserLogin | UserLogout | SetPlayOption