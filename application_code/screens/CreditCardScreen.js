import React, {Fragment} from 'react';
import { View,StyleSheet,Text } from 'react-native'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { creditCardSmsActions } from '../store/actions';
import moment from 'moment';
import { HomeScreenUpperSection } from '../loaders/HomeScreenLoader';
import HeaderPart from '../components/CreditCardScreen/HeaderPart'; 
import ContentPart from '../components/CreditCardScreen/ContentPart';

class CreditCardScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){ 
    alert('test');
    let firstDateOfMonth = moment().startOf('month').format("YYYY-MM-DD"); 
    this.props.smsActions(firstDateOfMonth);
  }
 

  render() {
    const {navigate} = this.props.navigation;
    const currentMonth = moment().startOf('month').format('MMMM');
    return (
      <Fragment>
        {
          (this.props.smsDataLoading)?<HomeScreenUpperSection />:<View style={styles.mainView}><HeaderPart messages={this.props.all_data} currentMonth={currentMonth}/><ContentPart messages={this.props.all_data}/></View>
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
  return { smsDataLoading: state.creditCardData.is_loading,all_data:state.creditCardData.all_messages }
}

const mapDispatchToProps = dispatch => {
    return {
      smsActions: (month) => {  
        dispatch(creditCardSmsActions.loadCreditCardSms(month,month));
      }
    }
}
 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCardScreen);
