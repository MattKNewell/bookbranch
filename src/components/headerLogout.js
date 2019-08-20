/*
Sources I used:
1.) https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums
*/

// Import libraries for making a component
import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

class HeaderLogout extends Component {

    async resetKey() {
        try {
          await AsyncStorage.removeItem('userObject');
          const value = await AsyncStorage.getItem('userObject');
          Actions.LogIn();
        } catch (error) {
        }
      }

    _logout(){
        this.resetKey();
        Actions.Main();
    }

        render(){
        return (
          <View style={styles.viewStyle}>
            <Image
              style={styles.imageStyle}
                source={require('bookbranch/img/Bookbranch_Tree2.png')}>
              </Image>
              <TouchableOpacity onPress={() => Linking.openURL('https://bookbran.ch').catch((err)=>alert('bad'))}>
                <Text style={styles.textStyle}>BookBranch</Text>
              </TouchableOpacity>
      
            <TouchableOpacity style = {styles.buttonStyle} onPress={() => this.resetKey()}>
                <Text style = {{fontSize: 10, marginLeft: 1, marginTop: 3, fontWeight: 'bold', color: '#ffffff'}}>Logout</Text>
            </TouchableOpacity>
          </View>
        );
      }
    };




const styles = {
  viewStyle: {
    backgroundColor: '#499920',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: -30,
    marginLeft: -150
  },
  imageStyle: {
    height: 20,
    width: 20,
    paddingTop: 20,
    margin: 10,
    marginTop: 15,
    alignSelf: 'flex-start',
    borderRadius: 15
  },
  buttonStyle: {
    width: 40,
    height: 23,
    backgroundColor: '#499920',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
    marginLeft: 280,
    marginTop: -34,
    alignSelf: 'center',
  }
};
export default HeaderLogout;
