//The tree background image is taken from this open source website: https://www.pexels.com/photo/countryside-dawn-daylight-environment-286305/

import React from 'react';
import { View, Text, ImageBackground, TouchableNativeFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
//This will need to be changed to a class component later

const MainMenu= () => {
    return (
        <View>
            
            <ImageBackground source={require('bookbranch/img/dawn-daylight.jpg')} style={{width: '100%', height: '100%'}}>
            <Header headerText={'Bookbranch'} />
                <View style = {styles.ButtonStyle1}>
                    <TouchableNativeFeedback onPress={() => Actions.FindNewBook()}>
                        <Text style = {styles.TextStyle1}>Find Your Next Book</Text>
                    </TouchableNativeFeedback>
                </View>
                <View style = {styles.ButtonStyle2}>
                    <TouchableNativeFeedback onPress={() => Actions.ReviewBook()}>
                        <Text style = {styles.TextStyle2}>Review A Book</Text>
                    </TouchableNativeFeedback>
                </View>
                <View style = {styles.ButtonStyle3}>
                    <TouchableNativeFeedback onPress={() => Actions.SearchBook()}>
                        <Text style = {styles.TextStyle3}>Search For A Book</Text>
                    </TouchableNativeFeedback>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = {

    ButtonStyle1: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 30,
        width: 140,
        elevation: 1,
        marginLeft: 220,
        marginRight: 5,
        marginTop: 210,
        position: 'absolute'       
    },

    ButtonStyle2: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 30,
        width: 140,
        elevation: 1,
        marginLeft: 220,
        marginRight: 5,
        marginTop: 270,
        position: 'absolute'       
    },

    ButtonStyle3: {
        zIndex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 30,
        width: 140,
        elevation: 1,
        marginLeft: 220,
        marginRight: 5,
        marginTop: 330,
        position: 'absolute'       
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 5,
        position: 'absolute'
    },

    TextStyle2: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 20,
        position: 'absolute'
    },

    TextStyle3: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 10,
        position: 'absolute'
    }
};

export default MainMenu;