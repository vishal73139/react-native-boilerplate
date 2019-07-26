import { smsConstants } from '../../constants';


let initialState = {
  is_loading:true,
  is_failed:false,
  all_messages:[]
};


export function smsReducers(state = initialState, action) {
  switch (action.type) {
    case smsConstants.SMS_READ_REQUEST_LOADING:
      return {...state,is_loading:true,all_messages:[],is_failed:false};
    case smsConstants.SMS_READ_REQUEST_SUCCESS:
      return {...state,is_loading:false,all_messages:action.data,is_failed:false};
    case smsConstants.SMS_READ_REQUEST_FAILURE:
      return {...state,is_loading:false,all_messages:[],is_failed:true};
    default:
      return state
  }
}