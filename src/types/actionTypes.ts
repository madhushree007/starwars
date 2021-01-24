export const SET_LOADING = 'SET_LOADING';
export const SET_PLAYER_CARD = 'SET_PLAYER_CARD';

export type StarShipI = {
  name: string,
  model: string,
  manufacturer: string,
  crew: number
}

export interface SetLoading {
  type: typeof SET_LOADING,
  loading: boolean
}

export interface SetPlayerCard {
  type: typeof SET_PLAYER_CARD,
  playersCard: StarShipI
}

export type StarWarsDispatchTypes = SetLoading | SetPlayerCard