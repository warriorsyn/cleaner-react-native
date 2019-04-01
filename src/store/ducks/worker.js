import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    createWorkerRequest: ['name', 'email', 'password'],
    createWorkerSuccess: null,
    getWorkerRequest: null,
    getWorkerSuccess: ['data']
});

export const WorkerTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    registered: false,
    data: []
});

/* Reducers */

// export const registerSuccess = state => state.merge({ signedIn: true, token });
export const registerSuccess = state => state.merge({ registered: true })
export const getSuccess = (state, data) => state.merge({ data })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CREATE_WORKER_SUCCESS]: registerSuccess,
    [Types.GET_WORKER_SUCCESS]: getSuccess
});
