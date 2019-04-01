import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    getScheduleRequest: null,
    getScheduleSuccess: ['data'],
    createScheduleRequest: ['work', 'observe', 'date_time', 'worker_id', 'client_id', 'checklist'],
    getWorkersScheduleRequest: null,
    getWorkersScheduleSuccess: ['data'],
    getScheduleByIdRequest: ['id'],
    getScheduleByIdSuccess: ['data'],
    finishScheduleRequest: ['id', 'time_worked'],
});

export const ScheduleTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    data: [],
    workerData: [],
    scheduleById: []
});

/* Reducers */

// export const registerSuccess = state => state.merge({ signedIn: true, token });

export const getSuccess = (state, data) => state.merge({ data })

export const getScheduleById = (state, data) => state.merge({ scheduleById: data })

export const getWorkerScheduleSuccess = (state, data) => state.merge({ workerData: data })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_SCHEDULE_SUCCESS]: getSuccess,
    [Types.GET_WORKERS_SCHEDULE_SUCCESS]: getWorkerScheduleSuccess,
    [Types.GET_SCHEDULE_BY_ID_SUCCESS]: getScheduleById
});
