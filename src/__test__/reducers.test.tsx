import reducer from '../Reducer';
import * as types from '../types/actionTypes';

describe('reducer', () => {
  it('should handle SET_LOADING', () => {
    expect(
      reducer(undefined, {
        type: types.SET_LOADING,
        loading: true
      })
    ).toEqual(
      {
        loading: true,
        isFlipped: false,
        playGame: true,
        computerScore: 0,
        playerScore: 0,
        playOption: 'people'
      }
    )
  })
  it('should handle SET_PLAYER_CARD_PEOPLE', () => {
    expect(
      reducer(undefined, {
        type: types.SET_PLAYER_CARD_PEOPLE,
        playerCardPeople: {
          name: 'Madhu',
          height: 174,
          mass: 333,
          gender: 'Female'

        }
      })
    ).toEqual(
      {
        loading: false,
        isFlipped: false,
        playGame: true,
        playerCardPeople: {
          name: 'Madhu',
          height: 174,
          mass: 333,
          gender: 'Female'

        },
        computerScore: 0,
        playerScore: 0,
        playOption: 'people'
      }
    )
  })
})