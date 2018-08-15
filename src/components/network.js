import React from 'react'
import {Platform, AppState, Alert, NetInfo} from 'react-native'
import {API_KEYS} from '../api'
import {On_Message_Found, ACTIONS} from '../redux/actions/nearbyActions'
import DeviceInfo from 'react-native-device-info'

export class NetworkComp extends React.Component {
    constructor(){
        super();
        let temp = {}
        Object.keys(ACTIONS).forEach(function(key) {
            temp[key]= new Date(0);
        });
        this.state = {
            appState: AppState.currentState,
            lastReceivPayload: temp,
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

    updateTimeStamps = (type, timeStamp) => {
        console.log("Updating: ", type, " with timestamp: ", timeStamp);
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
                if (messageTimeStamp > this.state.lastReceivPayload[m.type]) {
                    this.updateTimeStamps(m.type, messageTimeStamp);
                    store.dispatch(On_Message_Found(m));
                }
            });
        }
        AppState.addEventListener('change', this._handleAppStateChange);
        NetInfo.addEventListener('connectionChange', this._handleNetworkChange);
    };

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        NetInfo.removeEventListener('connectionChange', this._handleNetworkChange);
        nearbyApi.unpublish();
        nearbyApi.unsubscribe();
        nearbyApi.disconnect();
        console.log("network is about to be destroyed");
    };

    render() {
        return (
            null
        )
    }
}
