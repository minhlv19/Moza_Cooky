/**
 * @format
 */

import {AppRegistry} from 'react-native';

//import App from './App';
import { YellowBox } from 'react-native';
import {name as appName} from './app.json';
 import Main from "./src/theme/main/Main";
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Main);
