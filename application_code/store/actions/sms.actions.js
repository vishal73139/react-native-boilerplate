import { smsConstants } from '../../constants';
import SmsAndroid  from 'react-native-get-sms-android';
import _ from 'lodash';
import moment from 'moment';
import { readPaidMessage, readMoneyReceivedMessage, findMoneyFromMessage, findSenderDetails } from '../../helpers/smsLogics.helper';

export const smsActions = {
    loadSms
};


function loadSms(comingMonth) {
    return dispatch => {

        dispatch(sms_loading());

        /* List SMS messages matching the filter */ 
		let convertodate = new Date(comingMonth); 
		var filter = {
		    box: 'inbox', 
		    indexFrom: 0,
		    minDate:convertodate.getTime()
		};

	    SmsAndroid.list(JSON.stringify(filter), (fail) => {
	    	dispatch(sms_error());
		},
	    (count, smsList) => { 
	    	var arr = JSON.parse(smsList);
	    	var onlyPaidAndReceivedMessageLists = [];
	    	console.log(arr);
	    	_.map(arr,function(data){
	    		let usedMessageStack = {messageType:'',messageData:'',messageTime:'',messageTimeStamp:0,messageOnlyTime:'',messageSender:'',messageMoney:0};
	    		let isPaidMessage = readPaidMessage(data.body);
	    		let isReceiveMessage = (!isPaidMessage)?readMoneyReceivedMessage(data.body):false; 
	    		if(isPaidMessage || isReceiveMessage)
	    		{
	    			usedMessageStack.messageType = (isPaidMessage)?'Paid':'Received';
	    			usedMessageStack.messageData = data.body;
	    			usedMessageStack.messageTime = moment(data.date).format("DD/MM/YYYY");
	    			usedMessageStack.messageTimeStamp = Number(data.date);
	    			usedMessageStack.messageOnlyTime = moment(data.date).format("hh:mm:ss a");
	    			usedMessageStack.messageSender = findSenderDetails(data.address);
	    			usedMessageStack.messageMoney = findMoneyFromMessage(data.body);

	    			onlyPaidAndReceivedMessageLists.push(usedMessageStack);
	    		}
 
	    	}); 
	    	dispatch(sms_success(onlyPaidAndReceivedMessageLists));
	    });
    
    };

    function sms_loading() { return { type: smsConstants.SMS_READ_REQUEST_LOADING } }
    function sms_success(data) { return { type: smsConstants.SMS_READ_REQUEST_SUCCESS, data:data } }
    function sms_error() { return { type: smsConstants.SMS_READ_REQUEST_FAILURE } }
}