import { StackNavigator } from 'react-navigation';
import MonitorScreen from './screens/MonitorScreen';
import ControllerScreen from './screens/ControllerScreen';
import SelectModeScreen from './screens/SelectModeScreen';
import PatientScreen from './screens/PatientScreen';

const routes = {
  ControllerScreen: {screen: ControllerScreen},
  MonitorScreen: {screen: MonitorScreen},
  SelectModeScreen: {screen: SelectModeScreen},
  PatientScreen: {screen: PatientScreen}
}

const config = {
  initialRouteName: 'SelectModeScreen',
  headerMode: 'screen'
}

export default StackNavigator(routes, config);
