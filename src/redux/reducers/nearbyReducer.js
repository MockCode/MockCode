import { ControllerValues, ACTIONS} from "../actions/nearbyActions"
import { combineReducers } from 'redux'


const initialState = {
    controllerValues : [{
        controllerValueType: ControllerValues.HEART_RATE,
        value: 0
    }]
}


function NearbyReducer(state = initialState, action) {
  switch (action.type) {

  case ACTIONS.UPDATE_HEART_RATE:
    console.log("reduced heart rate")
    return { state }

  default:
    return state
  }
}

const MockApp = combineReducers({
    NearbyReducer
});

export default MockApp;