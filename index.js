//import a library that helps create a component

import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a component

const App = () => (
    <Text> Some Text </Text>
);

//render it to the device
//implicit return, automatically returns app.

//the first argument is the name of the application. in this case, it is 'albums'
//the second argument is a function that returns the first component of the application.

AppRegistry.registerComponent('albums', () => App)