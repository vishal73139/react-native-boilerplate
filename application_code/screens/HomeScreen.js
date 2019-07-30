/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { View,StyleSheet,Text } from 'react-native'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { smsActions } from '../store/actions';
import moment from 'moment';
import { HomeScreenUpperSection } from '../loaders/HomeScreenLoader';
import HeaderPart from '../components/HomeScreenComponents/HeaderPart'; 
import ContentPart from '../components/HomeScreenComponents/ContentPart';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){ 
    let firstDateOfMonth = moment().startOf('month').format("YYYY-MM-DD"); 
    this.props.smsActions(firstDateOfMonth);
  }
 

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Fragment>
        {
          (this.props.smsDataLoading)?<HomeScreenUpperSection />:<View style={styles.mainView}><HeaderPart messages={this.props.all_data}/><ContentPart messages={this.props.all_data}/></View>
        }
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({ 
  mainView: {
    flex:1,backgroundColor:'#282828',
  }
});


function mapStateToProps(state) {
  return { smsDataLoading: state.smsData.is_loading,all_data:state.smsData.all_messages }
}

const mapDispatchToProps = dispatch => {
    return {
      smsActions: (month) => {  
        dispatch(smsActions.loadSms(month));
      }
    }
}
 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
