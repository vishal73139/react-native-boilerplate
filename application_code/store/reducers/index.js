import { combineReducers } from 'redux'

import {userReducers} from './users.reducer';
import {smsReducers} from './sms.reducer';

const allAppReducers = combineReducers({
  userData:userReducers,
  smsData:smsReducers
})

export default allAppReducers