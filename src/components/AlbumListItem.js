import React from 'react';
import { View, Text} from 'react-native';

class AlbumListItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        console.log(this.props.album);

        const { album } = this.props;
        

        return (

        <View>
            <Text> {album.title} </Text>
        </View>

        )
    }


}

export default AlbumListItem;