import { combineReducers } from "redux";
import { toastReducer as toast } from 'react-native-redux-toast';

import { reducer as auth } from "./auth";
import { reducer as client } from './client';
import { reducer as worker } from './worker';
import { reducer as schedule } from './schedule';
import { reducer as product } from './product';
import { reducer as hours } from './hours';
export default combineReducers({
    auth,
    client,
    worker,
    schedule,
    product,
    hours,
    toast
});