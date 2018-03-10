

//Import libraries for making a component
import React from 'react';
import { Text , View } from 'react-native';


//define the styling


// Make a component
const Header = () => {

    const { textStyle , viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}> Header </Text>
        </View>
    );
}

//the styles is basically one big object

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyCOntent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        marginTop: 16,
        paddingBottom: 5
    },
    textStyle: {
        fontSize: 20
    }
}



// Make the component available to other parts of the app

export default Header;