import React from 'react';
import { View, Text, Image , Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


class AlbumListItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

 

    render(){

        console.log(this.props.album);

        const { album } = this.props;
        

        return (

        <Card>
            <CardSection>
                <View>
                    <Image style={styles.thumbNail} source={{uri: album.thumbnail_image}}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}> {album.title} </Text>
                    <Text> {album.artist} </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={styles.albumImage} source={{uri: album.image}} />
            </CardSection>

            <CardSection>
                <Button 
                onPress={() => Linking.openURL(album.url)}
                info={album}
                />
            </CardSection>
        </Card>

        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbNail: {
        height: 50,
        width: 50
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null

    }
}


export default AlbumListItem;