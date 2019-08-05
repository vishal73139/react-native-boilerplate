import { creditCardSmsConstants } from '../../constants';


let initialState = {
  is_loading:true,
  is_failed:false,
  all_messages:[]
};


export function creditCardSmsReducers(state = initialState, action) {
  switch (action.type) {
    case creditCardSmsConstants.CREDIT_CARD_SMS_READ_REQUEST_LOADING:
      return {...state,is_loading:true,all_messages:[],is_failed:false};
    case creditCardSmsConstants.CREDIT_CARD_SMS_READ_REQUEST_SUCCESS:
      return {...state,is_loading:false,all_messages:action.data,is_failed:false};
    case creditCardSmsConstants.CREDIT_CARD_SMS_READ_REQUEST_FAILURE:
      return {...state,is_loading:false,all_messages:[],is_failed:true};
    default:
      return state
  }
}