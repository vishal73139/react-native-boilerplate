import { combineReducers } from 'redux'

import {userReducers} from './users.reducer';
import {smsReducers} from './sms.reducer';
import {creditCardSmsReducers} from './creditCardSms.reducer';

const allAppReducers = combineReducers({
  userData:userReducers,
  smsData:smsReducers,
  creditCardData:creditCardSmsReducers
})

export default allAppReducers