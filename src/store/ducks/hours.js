import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    getHoursReportRequest: ['id'],
    getHoursReportSuccess: ['data', 'user'],
    
});

export const HoursTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    user: [],
    hour: []
});

/* Reducers */

export const hoursReportSuccess = (state, hour, user) => state.merge({ hour, user });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_HOURS_REPORT_SUCCESS]: hoursReportSuccess
});
