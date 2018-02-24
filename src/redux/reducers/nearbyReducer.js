import { ControllerValues, ACTIONS} from "../actions/nearbyActions"
import { combineReducers } from 'redux'
import { NearbyAPI } from "react-native-nearby-api";

import API_KEYS from '../../api'


const initialState = {
    nearbyApi: new NearbyAPI(true),
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

  case ACTIONS.MESSAGE_FOUND:
    console.log(value)
  default:
    return state
  }
}

const MockApp = combineReducers({
    NearbyReducer
});

export default MockApp;