import { StarShipI, StarWarsDispatchTypes } from './types/actionTypes';

interface DefaultStateI {
  loading: boolean,
  playerCard?: StarShipI

}

const defaultState: DefaultStateI = {
  loading: false
};

const Reducer = (state: DefaultStateI = defaultState, action: StarWarsDispatchTypes): DefaultStateI => {
  return state;
}

export default Reducer;