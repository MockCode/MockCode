import { StackNavigator } from 'react-navigation';
import ButtonScreen from './screens/ButtonScreen';
import DestScreen from './screens/DestScreen';
import MonitorScreen from './screens/MonitorScreen';
import ControllerScreen from './screens/ControllerScreen';
import SelectModeScreen from './screens/SelectModeScreen';

const routes = {
  'button': { screen: ButtonScreen },
  'dest': { screen: DestScreen },
  'ControllerScreen' : {screen: ControllerScreen},
  'MonitorScreen' : {screen: MonitorScreen},
  'SelectModeScreen': {screen: SelectModeScreen}
}

const config = {
  'initialRouteName': 'SelectModeScreen'
}

export default RootNavigator = StackNavigator(routes, config);
