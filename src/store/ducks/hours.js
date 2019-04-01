import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    getHoursReportRequest: ['id'],
    getHoursReportSuccess: ['data'],
    
});

export const HoursTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    report: []
});

/* Reducers */

export const hoursReportSuccess = (state, data) => state.merge({ report: data });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_HOURS_REPORT_SUCCESS]: hoursReportSuccess
});
