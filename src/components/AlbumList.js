import React , { Component } from 'react';
import { View, Text , ListView} from 'react-native';
import axios from 'axios';


class AlbumList extends React.Component {

    constructor(props){
        super(props);
        //albums starts off as an empty array
        this.state = { albums : [] };
    }

    componentWillMount(){
       
        axios.get('https:/rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({albums: res.data}))
            .catch(err => console.log('bad stuff', err))
        
    }

  
    render(){

        console.log('in the render function');

        console.log('length of albums:', this.state.albums.length);
        
        
        

        return (
            <View>
                <Text > Album List!!! </Text>
              
            </View>
        );

    }
}

export default AlbumList;