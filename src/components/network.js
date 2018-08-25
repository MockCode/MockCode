import React from 'react'
import {Platform, AppState, Alert, NetInfo} from 'react-native'
import {API_KEYS} from '../api'
import {On_Message_Found, ACTIONS, Update_Store} from '../redux/actions/nearbyActions'
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
            sendOnlineIntervalId: null,
            checkOnlineIntervalId: null
        }
        this.checkOnlineDevices = this.checkOnlineDevices.bind(this);
    }

    handleAppStateChange = (nextAppState) => {
        let nearbyApi = store.getState().NearbyApi.nearbyApi;
        if(this.state.appState.match(/active/)
            && (nextAppState === 'inactive'|| nextAppState === 'background')) {
            nearbyApi.unpublish();
            nearbyApi.unsubscribe();
        } else {
            nearbyApi.subscribe();
        }
    }

    handleNetworkChange = (connectionInfo) => {
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

    checkOnlineDevices(){
        let currentTime = new Date();
        let deviceTimeStamps = Object.assign({}, this.state.deviceOnlineTimeStamps);
        Object.keys(deviceTimeStamps).forEach(
            function(key) {
                console.log("CHECKING ONLINE DEVICES!");
                let diff = currentTime.getTime() - deviceTimeStamps[key].getTime();
                let secondsBetweenDates = Math.abs(diff / 1000);
                console.log("Time between last update and now: ", secondsBetweenDates);
                if(secondsBetweenDates > 90.0){
                    delete deviceTimeStamps[key];
                    store.dispatch(Update_Store(ACTIONS.REMOVE_DEVICE, key));
                }
            }
        );
        this.setState({deviceOnlineTimeStamps: deviceTimeStamps});
    }

    sendDeviceOnlineUpdate() {
        let nearbyApi = store.getState().NearbyApi.nearbyApi;
        let message = {
            type: "DEVICE_ONLINE",
            message: DeviceInfo.getDeviceName(),
            timeStamp: new Date()
        }
        nearbyApi.publish(JSON.stringify(message));
    }

    updateTimeStamps = (type, timeStamp) => {
        let temp = Object.assign({}, this.state.lastReceivPayload);
        temp[type]= timeStamp;
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
                if (m.type === "DEVICE_ONLINE" ||
                    m.type === "HELLO_REQUEST" ||
                    m.type === "HELLO_RESPONSE")
                {
                    let temp = Object.assign({}, this.state.deviceOnlineTimeStamps);
                    temp[m.message] = messageTimeStamp;
                    this.setState({
                        deviceOnlineTimeStamps: temp
                    });
                }
                if (messageTimeStamp > this.state.lastReceivPayload[m.type] &&
                    m.type !== "DEVICE_ONLINE")
                {
                    this.updateTimeStamps(m.type, messageTimeStamp);
                    store.dispatch(On_Message_Found(m));
                }
            });
        }

        AppState.addEventListener('change', this.handleAppStateChange);
        NetInfo.addEventListener('connectionChange', this.handleNetworkChange);
        let sendOnlineIntervalId = setInterval(this.sendDeviceOnlineUpdate, 1000*30);
        let checkOnlineIntervalId = setInterval(this.checkOnlineDevices, 1000*90);
        this.setState({sendOnlineIntervalId: sendOnlineIntervalId});
        this.setState({checkOnlineIntervalId: checkOnlineIntervalId});

    };

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
        NetInfo.removeEventListener('connectionChange', this.handleNetworkChange);
        clearInterval(this.state.sendOnlineIntervalId);
        clearInterval(this.state.checkOnlineIntervalId);
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
