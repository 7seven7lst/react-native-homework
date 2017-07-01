import { AppRegistry} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import SearchScreen from './components/SearchScreen.js';
import AboutScreen from './components/AboutScreen.js';

const App = StackNavigator({
  Search: {screen: SearchScreen},
  About: {screen: AboutScreen},
});

AppRegistry.registerComponent('homework', () => App);
