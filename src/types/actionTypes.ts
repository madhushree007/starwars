export const SET_LOADING = 'SET_LOADING';
export const SET_PLAYER_CARD = 'SET_PLAYER_CARD';
export const SET_COMPUTER_CARD = 'SET_COMPUTER_CARD';
export const SET_FLIPPED = 'SET_FLIPPED';
export const SET_GAME_STATE = 'SET_GAME_STATE';
export const SET_PLAYER_SCORE = 'SET_PLAYER_SCORE';
export const SET_COMPUTER_SCORE = 'SET_COMPUTER_SCORE';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';



export type StarShipI = {
  name: string,
  height: number,
  mass: number,
  gender: string
}

export interface SetLoading {
  type: typeof SET_LOADING,
  loading: boolean
}

export interface SetPlayerCard {
  type: typeof SET_PLAYER_CARD,
  playerCard: StarShipI
}

export interface SetComputerCard {
  type: typeof SET_COMPUTER_CARD,
  computerCard: StarShipI
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

export type StarWarsDispatchTypes = SetLoading | SetPlayerCard | SetComputerCard | SetCardFlipped | SetGameState | SetPlayerScore | SetComputerScore | UserLogin | UserLogout