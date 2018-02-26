import { StackNavigator } from 'react-navigation';
import MonitorScreen from './screens/MonitorScreen';
import ControllerScreen from './screens/ControllerScreen';
import SelectModeScreen from './screens/SelectModeScreen';

const routes = {
  'ControllerScreen' : {screen: ControllerScreen},
  'MonitorScreen' : {screen: MonitorScreen},
  'SelectModeScreen': {screen: SelectModeScreen}
}

const config = {
  'initialRouteName': 'SelectModeScreen',
  headerMode: 'screen'
}

export default RootNavigator = StackNavigator(routes, config);
