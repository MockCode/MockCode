import { StackNavigator } from 'react-navigation';
import ButtonScreen from './screens/ButtonScreen';
import DestScreen from './screens/DestScreen';

const routes = {
  'button': { screen: ButtonScreen },
  'dest': { screen: DestScreen }
}

export default RootNavigator = StackNavigator(routes);
