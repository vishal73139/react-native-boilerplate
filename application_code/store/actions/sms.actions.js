import { smsConstants } from '../../constants';
import SmsAndroid  from 'react-native-get-sms-android';

export const smsActions = {
    loadSms
};


function loadSms() {
    return dispatch => {
        dispatch(sms_loading());
        /* List SMS messages matching the filter */
		var filter = {
		    box: 'inbox', 
		    indexFrom: 0
		};

	    SmsAndroid.list(JSON.stringify(filter), (fail) => {
	        dispatch(sms_error());
	    },
	    (count, smsList) => {
	    	let smsData = {count:count,smsList:smsList};
	    	dispatch(sms_success(smsData));
	    });
    };

    function sms_loading() { return { type: smsConstants.SMS_READ_REQUEST_LOADING } }
    function sms_success(data) { return { type: smsConstants.SMS_READ_REQUEST_SUCCESS, data:data } }
    function sms_error() { return { type: smsConstants.SMS_READ_REQUEST_FAILURE } }
}