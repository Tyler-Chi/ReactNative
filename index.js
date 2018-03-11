//import a library that helps create a component

import React from 'react';
import { Text, AppRegistry , View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component

const App = () => (
    <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
    </View>
);

//render it to the device
//implicit return, automatically returns app.

//the first argument is the name of the application. in this case, it is 'albums'
//the second argument is a function that returns the first component of the application.

AppRegistry.registerComponent('albums', () => App)