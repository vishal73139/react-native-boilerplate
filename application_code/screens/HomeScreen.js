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
import HeaderPart from '../components/HomeScreen/HeaderPart'; 
import ContentPart from '../components/HomeScreen/ContentPart';
import MonthPopup from '../components/MonthPopup';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
    this.state = {
      seletedMonth:moment().startOf('month').format('MMMM'),
      shortMonthformat:moment().startOf('month').format('MMM'),
      showMonthPopup:false
    } 
  }

  componentDidMount(){ 
    let firstDateOfMonth = moment().startOf('month').format("YYYY-MM-DD");  
    let lastDateOfMonth = moment().endOf('month').format("YYYY-MM-DD");
    //alert(lastDateOfMonth);
    this.props.smsActions(firstDateOfMonth,lastDateOfMonth);
  }
 
 componentWillReceiveProps(nextprops){
  //alert(nextprops.all_data);
 }

// Month Pop Up Action Functions 
 openMonthPopup = () => {
  this.setState({
    showMonthPopup:true
  });
 }

 monthPopupCancelButton = () => {
    this.setState({
      showMonthPopup:false
    });
 }

 monthPopupOkButton = (monthname) => { 
  const month = moment(monthname,'MMMM');
  const startMonthDate = moment(month).startOf('month').format('YYYY-MM-DD');
  const endMonthDate = moment(month).endOf('month').format('YYYY-MM-DD');  
    this.setState({
      showMonthPopup:false,
      seletedMonth:moment(month).startOf('month').format('MMMM'),
      shortMonthformat:moment(month).endOf('month').format('MMM'),
    },()=>{
      this.props.smsActions(startMonthDate,endMonthDate);
    });
 }
// End Here 

  render() {
    const {navigate} = this.props.navigation;
    const currentMonth = this.state.seletedMonth; 
    return (
      <Fragment>
        {
          (this.props.smsDataLoading)?<HomeScreenUpperSection />:<View style={styles.mainView}><HeaderPart messages={this.props.all_data} currentMonth={currentMonth} openMonthPopup={this.openMonthPopup} shortMonthformat={this.state.shortMonthformat}/><ContentPart messages={this.props.all_data}/></View>
        }
        <MonthPopup visible={this.state.showMonthPopup} monthPopupCancelButton={this.monthPopupCancelButton} monthPopupOkButton={this.monthPopupOkButton} seletedMonth={this.state.seletedMonth}/>
        
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
      smsActions: (month,enddateOfmonth) => {  
        dispatch(smsActions.loadSms(month,enddateOfmonth));
      }
    }
}
 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
