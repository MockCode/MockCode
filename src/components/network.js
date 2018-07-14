import React from 'react'
import {Platform, AppState} from 'react-native'
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
            lastReceivPayload: temp
        }
    }

    _handleAppStateChange = (nextAppState) => {
        let nearbyApi = store.getState().NearbyApi.nearbyApi;
        if(this.state.appState.match(/active/)
            && (nextAppState === 'inactive'|| nextAppState === 'background')) {
            console.log("unsubscribing.");
            nearbyApi.unpublish();
            nearbyApi.unsubscribe();
        } else {
            console.log("resubscribing.");
            nearbyApi.subscribe();
        }
    }

    componentDidMount() {
        state = store.getState()
        var nearbyApi = state.NearbyApi.nearbyApi;
        if (nearbyApi != undefined) {

            if (Platform.OS != 'Jest') {
                nearbyApi.connect(API_KEYS.nearby)
            }

            nearbyApi.onConnected(message => {
                //TODO: dispatch successful connect action
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
                // console.log(m)
            })
            nearbyApi.onPublishSuccess(message => {
                console.log(message, "psucess");
            });

            nearbyApi.onPublishFailed(message => {
                console.log("FAILED TO SEND PAYLOAD.");
            });

            nearbyApi.onFound(message => {
                console.log("GOTCHA!", message);
                let m = JSON.parse(message);
                let messageTimeStamp = new Date(m.timeStamp);
                if (messageTimeStamp > this.state.lastReceivPayload[m.type]) {
                    console.log("Updating: ", m.type, " with timestamp: ", m.timeStamp);
                    store.dispatch(On_Message_Found(message));
                    let temp = Object.assign({}, this.state.lastReceivPayload);
                    temp[m.type]= new Date(m.timeStamp);
                    this.setState({
                        lastReceivPayload: temp
                    });
                }
            });

            nearbyApi.onLost(message => {
                console.log("LOST PAYLOAD! RESEND PLS!", message);
            });

            nearbyApi.onSubscribeFailed(() => {
                console.log("SUBSCRIBE FAILED!");
            });

            nearbyApi.onDisconnected(message => {
                console.log("NEARBY API DISCONNECTED.");
            });
        }
        AppState.addEventListener('change', this._handleAppStateChange);
    };

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        console.log("network is about to be destroyed");
        // TODO: unsubscribe and disconnect
    };

    render() {
        return (
            null
        )
    }
}
