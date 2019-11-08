import React, {Fragment} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import _ from "lodash";
import moment from "moment";


export default HomeScreenHeaderPart = (props) => {
  let rsKey = ['messageMoney'];
  var totalCount = _.sumBy(rsKey, _.partial(_.sumBy, props.messages));

	return (
	<View style={styles.mainScreenUpperView}>
        <View style={{flex:2}}>
          <View style={{flexDirection:'row'}}><Text style={styles.mainScreenUpperViewText}>{props.currentMonth}'s</Text><Text style={{ color:'#fff',fontSize:18,marginTop:3}}> Expenses</Text></View>
          <Text style={styles.mainScreenUpperViewMoney}><Icon name="rupee" size={40} color="#fff"></Icon> {totalCount.toFixed(2)}</Text>
          <View style={{flex: 1, flexDirection: 'row',marginTop:20,display:'none'}}>  
            
            <View style={{flex: 1,textAlign:'center',flexDirection: 'row'}}>
              <View style={styles.circle}>
                <Icon name="arrow-up" size={20} color="#fff" regular></Icon>
              </View> 
              <View>
                <Text style={{color:'#fff', marginTop:5,marginLeft:5,fontSize:15,fontWeight:'bold',alignItems: 'center'}}><Icon name="rupee" size={15} color="#fff"></Icon> {totalCount.toFixed(2)}</Text>
                <Text style={{color:'#fff',marginLeft:10}}>Paid</Text>
              </View>
            </View>

            <View style={{flex: 1,textAlign:'center',flexDirection: 'row'}}>
              <View style={styles.circle}>
                  <Icon name="arrow-down" size={20} color="#fff" regular></Icon>
              </View>
               <View>
                  <Text style={{color:'#fff', marginTop:5,marginLeft:5,fontSize:15,fontWeight:'bold'}}><Icon name="rupee" size={15} color="#fff"></Icon> 0</Text>
                  <Text style={{color:'#fff',marginLeft:10}}>Received</Text>
                </View>
              </View>
          </View>  
        </View>
        <View style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
          <TouchableOpacity onPress={()=>{
            props.openMonthPopup();
          }} style={{backgroundColor:'white',paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:10,borderRadius:10,marginBottom:15}}> 
          <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'center'}}><EvilIconsIcon name="calendar" size={30} color="#000" regular></EvilIconsIcon><Text>{props.shortMonthformat}</Text></View>   
          </TouchableOpacity>
        </View>
      </View>
);
}

const styles = StyleSheet.create({ 
  mainScreenUpperView: {
    borderBottomLeftRadius:20,borderBottomRightRadius:20,flex:1,backgroundColor:'#F55044',paddingLeft:30,paddingTop:30,flexDirection:'row'
  },
  mainScreenUpperViewText:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold',
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