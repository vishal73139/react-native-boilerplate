import React, {Fragment} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default HomeScreenContentPart = () => {
	return (
	<View style={{flex:3}}>
      <ScrollView style={{paddingLeft:10,paddingRight:20}}>
          <View style={{marginTop:20}}>
          <Text style={{color:'#ccc',fontWeight:'bold',fontSize:20}}> Today </Text>
            <View style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                  <View style={styles.innercircle}>
                    <Icon name="paypal" size={20} color="#fff" regular></Icon>
                  </View>
                  <View>
                    <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>Paypal</Text>
                    <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>12.08 AM</Text>
                  </View>
                </View>
                 <View style={{flex:1,alignItems: 'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'green'}}> + 2,000</Text>
                </View>
            </View>

             <View style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                  <View style={styles.innercircle}>
                    <Icon name="amazon" size={20} color="#fff" regular></Icon>
                  </View>
                  <View>
                    <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>Amazon</Text>
                    <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>1.08 AM</Text>
                  </View>
                </View>
                 <View style={{flex:1,alignItems: 'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'red'}}> - 1,000</Text>
                </View>
            </View>

            <View style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                  <View style={styles.innercircle}>
                    <Icon name="apple" size={20} color="#fff" regular></Icon>
                  </View>
                  <View>
                    <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>Apple</Text>
                    <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>5.08 AM</Text>
                  </View>
                </View>
                 <View style={{flex:1,alignItems: 'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'red'}}> - 2,000</Text>
                </View>
            </View>

             <View style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                  <View style={styles.innercircle}>
                    <Icon name="car" size={20} color="#fff" regular></Icon>
                  </View>
                  <View>
                    <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>Ola</Text>
                    <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>1.08 AM</Text>
                  </View>
                </View>
                 <View style={{flex:1,alignItems: 'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'green'}}> + 2,000</Text>
                </View>
            </View>

          </View>


          <View style={{marginTop:20}}>
          <Text style={{color:'#ccc',fontWeight:'bold',fontSize:20}}> 24th July </Text>
            <View style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                  <View style={styles.innercircle}>
                    <Icon name="paypal" size={20} color="#fff" regular></Icon>
                  </View>
                  <View>
                    <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>Paypal</Text>
                    <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>12.08 AM</Text>
                  </View>
                </View>
                 <View style={{flex:1,alignItems: 'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'green'}}> + 2,000</Text>
                </View>
            </View>

             <View style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                  <View style={styles.innercircle}>
                    <Icon name="amazon" size={20} color="#fff" regular></Icon>
                  </View>
                  <View>
                    <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>Amazon</Text>
                    <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>1.08 AM</Text>
                  </View>
                </View>
                 <View style={{flex:1,alignItems: 'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'red'}}> - 1,000</Text>
                </View>
            </View>

            <View style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                  <View style={styles.innercircle}>
                    <Icon name="apple" size={20} color="#fff" regular></Icon>
                  </View>
                  <View>
                    <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>Apple</Text>
                    <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>5.08 AM</Text>
                  </View>
                </View>
                 <View style={{flex:1,alignItems: 'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'red'}}> - 2,000</Text>
                </View>
            </View>

             <View style={{backgroundColor:'#343434',height:80,marginTop:10,borderRadius:20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
                <View style={{flex:2,marginLeft:5,flexDirection: 'row',alignItems: 'center'}}>
                  <View style={styles.innercircle}>
                    <Icon name="car" size={20} color="#fff" regular></Icon>
                  </View>
                  <View>
                    <Text style={{color:'#fff', marginTop:0,marginLeft:10,fontSize:18,fontWeight:'bold'}}>Ola</Text>
                    <Text style={{color:'#fff', marginTop:5,marginLeft:10,fontSize:10,fontWeight:'bold'}}>1.08 AM</Text>
                  </View>
                </View>
                 <View style={{flex:1,alignItems: 'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'green'}}> + 2,000</Text>
                </View>
            </View>

          </View>


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
