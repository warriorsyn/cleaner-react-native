import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    createClientRequest: ['name', 'email', 'address'],
    createClientSuccess: null,
    getClientRequest: null,
    getClientSuccess: ['data'],
    getClientReportRequest: ['id', 'first_date', 'second_date'],
    getClientReportSuccess: ['data'],
});

export const ClientTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    registered: false,
    data: [],
    report: [],
});

/* Reducers */

// export const registerSuccess = state => state.merge({ signedIn: true, token });
export const registerSuccess = state => state.merge({ registered: true })
export const getSuccess = (state, data) => state.merge({ data })
export const clientReportSuccess = (state, report) => state.merge({ report });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CREATE_CLIENT_SUCCESS]: registerSuccess,
    [Types.GET_CLIENT_SUCCESS]: getSuccess,
    [Types.GET_CLIENT_REPORT_SUCCESS]: clientReportSuccess
});
