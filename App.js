import React, {Fragment, Component} from 'react';
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

async function requestSmsPermission(){
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
		    return granted === PermissionsAndroid.RESULTS.GRANTED;
		  } catch (err) {
		   return false; 
		  }
		}

export default class App extends Component<{}> {

constructor(props){
	super(props);
	this.state={
		permissionGranted:false
	}
 
}	
 componentDidMount = () => { 
    var homeScreenThis = this;
	if (Platform.OS === 'android') { 
        requestSmsPermission().then(function(didGetPermission: boolean){
        	if (didGetPermission) 
        	{
        		homeScreenThis.permissionGranted(true);
        	}
        	else
        	{
        		homeScreenThis.permissionGranted(false);
        	}

        });
    }else{
        alert('IOS device found');
    }	

 }

 permissionGranted = (value) => {
 	this.setState({permissionGranted:value});
 }



  render() {
    return (
      <Provider store={store}>
	      <Fragment>
		      <StatusBar barStyle="dark-content" />
		      {(this.state.permissionGranted)?<Navigation />:null}
	      </Fragment>  
      </Provider>
    );
  }
}