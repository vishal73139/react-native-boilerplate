import React, {Fragment} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import _ from "lodash";
import moment from "moment";



export default MonthPopup = (props) => {
	const monthDetails = moment.months();
	return (
	<View>	
		<View>
			<View style={styles.dialogContentView}>
			  <Dialog
			    visible={props.visible}
			    dialogAnimation={new SlideAnimation({
			      slideFrom: 'bottom',
			    })}
			    dialogTitle={<DialogTitle title="Select Month" />}
			    footer={
				      <DialogFooter style={styles.dialogContentView}>
				        <DialogButton
				          text="Cancel"
				          style={{color:'#000',fontSize:11}}
				          onPress={() => {
				          	props.monthPopupCancelButton();
				          }}
				        />
				        
				      </DialogFooter>
				    }
			  >
			    <DialogContent>
			    	<View style={{width:175,height:150}}>
				      <ScrollView >
				      	{
				      		_.map(monthDetails,(monthname)=>{
				      			return(
				      					<TouchableOpacity style={{padding:10, alignItems: 'center',justifyContent: 'center'}} onPress={()=>{
				      						props.monthPopupOkButton(monthname)
				      					}}>
								      		<View> 
								      			{(props.seletedMonth == monthname)?<Text style={{color:'#F55044'}}>{monthname}</Text>:<Text>{monthname}</Text>}
								      		</View>
								      	</TouchableOpacity>
				      			)
				      		})
				      	}
				      	
			      	 </ScrollView>
			      </View>
			    </DialogContent>
			  </Dialog>
			</View>
		</View>
	</View> 
	);
}

const styles = StyleSheet.create({
  dialogContentView: {
    paddingLeft: 18,
    paddingRight: 18,
  },
});