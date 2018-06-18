import { StackNavigator } from 'react-navigation';
import MonitorScreen from './screens/MonitorScreen';
import ControllerScreen from './screens/ControllerScreen';
import SelectModeScreen from './screens/SelectModeScreen';
import PatientScreen from './screens/PatientScreen';
import TestMonitorScreen from './screens/TestMonitorScreen';

const routes = {
  ControllerScreen: {screen: ControllerScreen},
  MonitorScreen: {screen: TestMonitorScreen},
  SelectModeScreen: {screen: SelectModeScreen},
  PatientScreen: {screen: PatientScreen}
}

const config = {
  initialRouteName: 'SelectModeScreen',
  headerMode: 'screen'
}

export default RootNavigator = StackNavigator(routes, config);
