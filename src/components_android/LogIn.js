//The tree background image is taken from this open source website: https://www.pexels.com/photo/countryside-dawn-daylight-environment-286305/

import React, { Component } from 'react';
import { Button, AppRegistry, View, Text, TouchableNativeFeedback, ImageBackground, TextInput} from 'react-native';
import AttributesDetail from './AttributesDetail';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Platform } from 'react-native';
//import axios from 'axios'; // used for http requests

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        username: '',
        password: ''
    };
  }

  render() {
    return (
      <ImageBackground source={require('bookbranch/img/dawn-daylight.jpg')} style={{width: '100%', height: '100%'}}>
        <View>
            <Header headerText={'Bookbranch'} />
            <Text
                style = {{fontSize: 20, fontWeight: 'bold', marginTop: 5,marginLeft: 155}}>
                Log In</Text>
            <TextInput
                style={{opacity: 0.70,backgroundColor: '#ffffff',marginTop: 10, marginLeft: 30, height: 40, width: 300, borderColor: 'black', borderWidth: 1}}
                placeholder=" Username"
                placeholderTextColor="gray"
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
            />
            <TextInput
                style={{opacity: 0.70,backgroundColor: '#ffffff',marginLeft: 30, height: 40, width: 300, borderColor: 'black', borderWidth: 1}}
                placeholder=" Password"
                secureTextEntry = {true}
                placeholderTextColor="gray"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
            />
            <View style = {styles.ButtonStyle1}>
                    <TouchableNativeFeedback /*onPress={() => Actions.attList()}*/>
                        <Text style = {styles.TextStyle1}>Login</Text>
                    </TouchableNativeFeedback>
                </View>
                <View style = {styles.ButtonStyle2}>
                    <TouchableNativeFeedback /*onPress={() => Actions.attList()}*/>
                        <Text style = {styles.TextStyle2}>Register</Text>
                    </TouchableNativeFeedback>
                </View>
                <View style = {styles.ButtonStyle3}>
                    <TouchableNativeFeedback onPress={() => Actions.Main()}>
                        <Text style = {styles.TextStyle3}>Browse As Guest</Text>
                    </TouchableNativeFeedback>
                </View>

        </View>
      </ImageBackground>
    );
  }
}

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
        marginLeft: 50,
        position: 'absolute'
    },

    TextStyle2: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 40,
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

export default LogIn;