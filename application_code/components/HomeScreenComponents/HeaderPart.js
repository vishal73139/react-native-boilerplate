import React, {Fragment} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default HomeScreenHeaderPart = () => {
	return (
	<View style={styles.mainScreenUpperView}>

        <Text style={styles.mainScreenUpperViewText}>Money Spent</Text>
        <Text style={styles.mainScreenUpperViewMoney}><Icon name="rupee" size={40} color="#fff"></Icon> 5,400</Text>

        <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
          
          <View style={{flex: 1,textAlign:'center',flexDirection: 'row'}}>
            <View style={styles.circle}>
              <Icon name="arrow-up" size={20} color="#fff" regular></Icon>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color:'#fff', marginTop:0,marginLeft:5,fontSize:20,fontWeight:'bold'}}><Icon name="rupee" size={15} color="#fff"></Icon> 7,400</Text>
              <Text style={{color:'#fff'}}>PAY</Text>
            </View>
          </View>

          <View style={{flex: 1,textAlign:'center',flexDirection: 'row'}}>
            <View style={styles.circle}>
                <Icon name="arrow-down" size={20} color="#fff" regular></Icon>
            </View>
             <View style={{alignItems: 'center'}}>
                <Text style={{color:'#fff', marginTop:0,marginLeft:5,fontSize:20,fontWeight:'bold'}}><Icon name="rupee" size={20} color="#fff"></Icon> 2,000</Text>
                <Text style={{color:'#fff',marginLeft:5}}>RECEIVE</Text>
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