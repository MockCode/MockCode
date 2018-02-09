import { StackNavigator } from 'react-navigation';
import ButtonScreen from './screens/ButtonScreen';
import DestScreen from './screens/DestScreen';
import MonitorScreen from './screens/MonitorScreen';
import ControllerScreen from './screens/ControllerScreen';


const routes = {
  'button': { screen: ButtonScreen },
  'dest': { screen: DestScreen },
  'Controller' : {screen: ControllerScreen},
  'Monitor' : {screen: MonitorScreen}
}

export default RootNavigator = StackNavigator(routes);
