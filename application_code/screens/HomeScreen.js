/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { View,StyleSheet } from 'react-native'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { smsActions } from '../store/actions';
import { HomeScreenUpperSection } from '../loaders/HomeScreen';
import { HomeHeaderPart,HomeContentPart } from '../components/HomeScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.smsActions();
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Fragment>
        {
          (this.props.smsDataLoading)?<HomeScreenUpperSection />:<View style={{flex:1,backgroundColor:'#282828'}}><HomeHeaderPart/><HomeContentPart/></View>
        }
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({ 
  mainView: {
    flex:1,backgroundColor:'#282828',
  },
  mainScreenUpperView: {
    borderBottomLeftRadius:20,borderBottomRightRadius:20,flex:1,backgroundColor:'#F55044',paddingLeft:30,paddingTop:30,
  },
  mainScreenUpperViewText:{
    color:'#fff',
    fontSize:18
  },
  mainScreenUpperViewMoney:{
     color:'#fff',
    fontSize:40,
    marginTop:10
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center'
},
innercircle:{
  width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
}
});

function mapStateToProps(state) {
  return { smsDataLoading: state.smsData.is_loading }
}

const actionCreators = {
    smsActions: smsActions.loadSms
}

export default connect(
  mapStateToProps,
  actionCreators
)(HomeScreen);
