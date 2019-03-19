import { createAppContainer, createStackNavigator } from 'react-navigation';
import Test from './Test';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Test: { screen: Test },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;