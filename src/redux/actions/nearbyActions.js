import DeviceInfo from 'react-native-device-info'

export const ACTIONS = {
    UPDATE_HEART_RATE: "UPDATE_HEART_RATE",
    UPDATE_BLOOD_PRESSURE: "UPDATE_BLOOD_PRESSURE",
    UPDATE_O2SAT: "UPDATE_O2_SAT",
	  UPDATE_ETCO2: "UPDATE_ET_CO2",
	  UPDATE_WAVEFORM: "UPDATE_WAVEFORM",
		HELLO_RESPONSE: "HELLO_RESPONSE",
		HELLO_REQUEST: "HELLO_REQUEST",
    UPDATE_FACE: "UPDATE_FACE"
}

export function Update_Store(slider, value) {
  return { type: slider, value: value }
}

export function Update_Value(type, value) {
  return (dispatch, getState) => {
    let m = { message: value, type: type, timeStamp: new Date() };
    getState().NearbyApi.nearbyApi.publish(JSON.stringify(m))
    return dispatch(Update_Store(type, value));
  }
}

export function On_Message_Found(message) {
  return (dispatch, getState) => {
		let m = JSON.parse(message);
		if (m.type === ACTIONS.HELLO_REQUEST) {
			let response_m = {
				message: DeviceInfo.getDeviceName(),
				type: ACTIONS.HELLO_RESPONSE,
				timeStamp: new Date()
			}
			getState().NearbyApi.nearbyApi.publish(JSON.stringify(response_m))
			return dispatch(Update_Store(ACTIONS.HELLO_RESPONSE, m.message))
		}
		else if (m.type === ACTIONS.HELLO_RESPONSE) {
			return dispatch({type: m.type, value: m.message})
		}
		else {
			return dispatch(Update_Store(m.type, m.message)) 
		}
	} 
}