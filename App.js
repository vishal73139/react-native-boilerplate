import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import { StatusBar,PermissionsAndroid,Alert,Platform } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './application_code/screens/HomeScreen';
import ProfileScreen from './application_code/screens/ProfileScreen';
import store from './application_code/store/store.js';

const TabNavigator = createStackNavigator({
  Home: {
        screen: HomeScreen, 
        navigationOptions: {
            header: null,
        },
    },
  Profile: ProfileScreen,
});

const Navigation = createAppContainer(TabNavigator);

export default class App extends React.Component {

 componentDidMount = () => { 
 	
 	 async function requestSmsPermission() {
		  try {
		    const granted = await PermissionsAndroid.request(
		      PermissionsAndroid.PERMISSIONS.READ_SMS,
		      {
		        title: 'Sms Read Permission',
		        message:'',
		        buttonNeutral: 'Ask Me Later',
		        buttonNegative: 'Cancel',
		        buttonPositive: 'OK',
		      },
		    );
		    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
		      console.log('You can read the sms');
		    } else {
		      console.log('sms permission denied');
		    }
		  } catch (err) {
		    console.warn(err);
		  }
		}

	if (Platform.OS === 'android') {
        //Calling the permission function
        requestSmsPermission();
    }else{
        alert('IOS device found');
    }	

 }



  render() {
    return (
      <Provider store={store}>
	      <Fragment>
		      <StatusBar barStyle="dark-content" />
		      <Navigation />
	      </Fragment>  
      </Provider>
    );
  }
}