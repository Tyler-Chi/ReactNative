import React , { Component } from 'react';
import { ScrollView, View, Text , ListView} from 'react-native';
import axios from 'axios';
import AlbumListItem from './AlbumListItem';


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

    renderAlbums(){

        return (

            this.state.albums.map(album => (
                <AlbumListItem album={album} key = {album.title}/>
            ))

        )
    }

  
    render(){

        console.log('state', this.state);

        return (
            <ScrollView>
 
               {this.renderAlbums()}
              
            </ScrollView>
        );

    }
}

export default AlbumList;