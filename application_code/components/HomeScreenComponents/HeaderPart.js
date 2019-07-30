import React, {Fragment} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import _ from "lodash";

export default HomeScreenHeaderPart = (props) => {
  let rsKey = ['messageMoney'];
  var totalCount = _.sumBy(rsKey, _.partial(_.sumBy, props.messages));

console.log(totalCount);

	return (
	<View style={styles.mainScreenUpperView}>

        <Text style={styles.mainScreenUpperViewText}>Money Spent</Text>
        <Text style={styles.mainScreenUpperViewMoney}><Icon name="rupee" size={40} color="#fff"></Icon> {totalCount}</Text>

        <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
          
          <View style={{flex: 1,textAlign:'center',flexDirection: 'row'}}>
            <View style={styles.circle}>
              <Icon name="arrow-up" size={20} color="#fff" regular></Icon>
            </View>
            <View>
              <Text style={{color:'#fff', marginTop:5,marginLeft:5,fontSize:15,fontWeight:'bold',alignItems: 'center'}}><Icon name="rupee" size={15} color="#fff"></Icon> {totalCount}</Text>
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
);
}

const styles = StyleSheet.create({ 
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