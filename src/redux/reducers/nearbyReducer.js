import { ACTIONS } from "../actions/nearbyActions"
import { combineReducers } from 'redux'
import { NearbyAPI } from "react-native-nearby-api";

const ControllerValues = {
  HEART_RATE: "HEART_RATE"
}

const initialState = {
    nearbyApi: new NearbyAPI(true),
    devices: new Set(),
    controllerValues : [{
        controllerValueType: ControllerValues.HEART_RATE,
        value: 0
    },{
      controllerValueType: ControllerValues.BLOOD_PRESSURE,
      value: 0
    },{
      controllerValueType: ControllerValues.O2Sat,
      value: 0
    },{
      controllerValueType: ControllerValues.EtC02,
      value: 0
    },{
      controllerValueType: ControllerValues.Waveform,
      value: 0
    }]
}



function NearbyApi(state = initialState, action) {
  switch (action.type) {
  case ACTIONS.MESSAGE_FOUND:
    return state;
  case ACTIONS.HELLO_RESPONSE:
    state.devices.add(action.value);
    return state
  default:
    return state
  }
}

function HeartRate(state = 80, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_HEART_RATE:
      return action.value
    // case ACTIONS.UPDATE_WAVEFORM:
    //   if (action.value == "Compressions In-Progress") {
    //     return "--";
    //   } else {
    //     return 0;
    //   }
    default:
      return state
  }
}

function bloodPressure(state = '120/78', action) {
  switch (action.type) {
    case ACTIONS.UPDATE_BLOOD_PRESSURE:
      return action.value
    default:
      return state
  }
}

function O2Sat(state = 96, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_O2SAT:
      return action.value
    default:
      return state
  }
}

//Ideally this action just changes the source state for the image, not sure how the formatting should go
function face(state = 'normal', action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FACE:
      return action.value
    default:
      return state
  }
}

function EtC02(state= 25, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_ETCO2:
      return action.value
    default:
      return state
  }
}

function Waveform(state = 'Normal Sinus Rhythm', action) {
  switch (action.type) {
    case ACTIONS.UPDATE_WAVEFORM:
      return action.value
    default:
      return state
  }
}

const MockApp = combineReducers({
    NearbyApi,
    HeartRate,
    bloodPressure,
    O2Sat,
    EtC02,
    Waveform,
    face,
});

export default MockApp;
