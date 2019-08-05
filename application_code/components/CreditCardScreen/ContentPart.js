import React, {Fragment} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import _ from "lodash";


export default HomeScreenContentPart = (props) => {
  let isDateChanged = 0;
  let showDate = '';
return (
	<View style={{flex:4}}>
      <ScrollView style={{paddingLeft:10,paddingRight:20}}> 
          {
            _.map(props.messages,(message)=>{ 
              isDateChanged = (showDate != message.messageTime)?true:false;
              showDate = message.messageTime;
              return (<View>
                {(isDateChanged)?<Text style={{marginTop:20,fontSize:20,fontWeight:'bold',color:'#ccc'}}>{showDate}</Text>:null}
                {(message.messageMoney > 0)?<TouchableOpacity style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                    <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                      <View style={styles.innercircle}>
                        <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>{message.messageSender.substring(0, 1).toUpperCase()}</Text>
                      </View>
                      <View>
                        <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>{message.messageSender.toUpperCase()}</Text>
                        <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>{message.messageOnlyTime}</Text>
                      </View>
                    </View>
                     <View style={{flex:1,alignItems: 'center'}}>

                      <Text style={(message.messageType == 'Paid')?{fontSize:18,fontWeight:'bold',color:'white'}:{fontSize:18,fontWeight:'bold',color:'green'}}> <Icon name="rupee" size={20} color={(message.messageType == 'Paid')?"white":"green"}></Icon> {message.messageMoney} </Text>
                    </View>
                </TouchableOpacity>:null}
                </View>);
              
            })
          } 
          </ScrollView>
      </View>);
}

const styles = StyleSheet.create({ 
	innercircle:{
	  width: 50,
	    height: 50,
	    borderRadius: 50/2,
	    backgroundColor: '#000',
	    justifyContent: 'center',
	    alignItems: 'center'
	}
});
