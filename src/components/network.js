import React from 'react'
import {Platform, AppState, Alert, NetInfo} from 'react-native'
import {API_KEYS} from '../api'
import {On_Message_Found, ACTIONS} from '../redux/actions/nearbyActions'
import DeviceInfo from 'react-native-device-info'

export class NetworkComp extends React.Component {
    constructor(){
        super();
        let actionTimeStamps = {}
        Object.keys(ACTIONS).forEach(function(key) {
            actionTimeStamps[key]= new Date(0);
        });
        this.state = {
            appState: AppState.currentState,
            lastReceivPayload: actionTimeStamps,
            deviceOnlineTimeStamps: {},
            intervalId: null
        }
    }

    _handleAppStateChange = (nextAppState) => {
        let nearbyApi = store.getState().NearbyApi.nearbyApi;
        if(this.state.appState.match(/active/)
            && (nextAppState === 'inactive'|| nextAppState === 'background')) {
            nearbyApi.unpublish();
            nearbyApi.unsubscribe();
        } else {
            nearbyApi.subscribe();
        }
    }

    _handleNetworkChange = (connectionInfo) => {
        if(connectionInfo.type === "none"){
            Alert.alert("No Internet Connection",
                "Please reconnect to a network in order to communicate " +
                "with other devices.",
                [{text: 'Cancel'},
                {text: 'OK'}
                ],
                {cancelable: false}
            )
        }
    }

    sendDeviceOnlineUpdate() {
        let nearbyApi = store.getState().NearbyApi.nearbyApi;
        let message = {
            type: "DEVICE_ONLINE",
            message: DeviceInfo.getUniqueID(),
            timeStamp: new Date()
        }
        nearbyApi.publish(JSON.stringify(message));
    }

    updateTimeStamps = (type, timeStamp) => {
        let temp = Object.assign({}, this.state.lastReceivPayload);
        temp[type]= new Date(timeStamp);
        this.setState({
            lastReceivPayload: temp
        });
    }

    componentDidMount() {
        state = store.getState()
        var nearbyApi = state.NearbyApi.nearbyApi;
        if (nearbyApi != undefined) {

            if (Platform.OS != 'Jest') {
                nearbyApi.connect(API_KEYS.nearby)
            }

            nearbyApi.onConnected(message => {
                console.log("Connected to Nearby.");
                nearbyApi.subscribe();
            });

            nearbyApi.onSubscribeSuccess(() => {
                let m = {
                    type:ACTIONS.HELLO_REQUEST,
                    message: DeviceInfo.getDeviceName(),
                    timeStamp: new Date()
                }
                nearbyApi.publish(JSON.stringify(m));
            });

            nearbyApi.onPublishSuccess(message => {
                console.log(message, "psucess");
            });

            nearbyApi.onFound(message => {
                let m = JSON.parse(message);
                let messageTimeStamp = new Date(m.timeStamp);
                if (m.type === "DEVICE_ONLINE"){
                    console.log("Device Id: ", m.message, ", Time: ", messageTimeStamp);
                    let temp = Object.assign({}, this.state.deviceOnlineTimeStamps);
                    temp[m.message] = messageTimeStamp;
                    this.setState({
                        deviceOnlineTimeStamps: temp
                    });
                    return;
                }
                if (messageTimeStamp > this.state.lastReceivPayload[m.type]) {
                    this.updateTimeStamps(m.type, messageTimeStamp);
                    store.dispatch(On_Message_Found(m));
                }
            });
        }
        AppState.addEventListener('change', this._handleAppStateChange);
        NetInfo.addEventListener('connectionChange', this._handleNetworkChange);
        let intervalId = setInterval(this.sendDeviceOnlineUpdate, 1000*45);
        this.setState({intervalId: intervalId});

    };

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        NetInfo.removeEventListener('connectionChange', this._handleNetworkChange);
        clearInterval(this.state.intervalId);
        nearbyApi.unpublish();
        nearbyApi.unsubscribe();
        nearbyApi.disconnect();
    };

    render() {
        return (
            null
        )
    }
}
