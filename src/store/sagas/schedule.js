import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { ToastActionsCreators } from 'react-native-redux-toast';

import ScheduleActions from '../ducks/schedule';
import NavigationService from '../../services/navigation';
 

export function* getSchedules() {
    const { data } = yield call(api.get, 'schedule')

    yield put(ScheduleActions.getScheduleSuccess(data))

}

export function* createSchedule({ work, observe, date_time, worker_id, client_id, checklist, address  }) {

    try {
        yield call(api.post, 'schedule', { work, observe, date_time, worker_id, client_id, checklist, address  });
        // console.log(work, observe, date_time, worker_id, client_id, checklist)
        
        yield put(ToastActionsCreators.displayInfo('Schedule created!'))
        // console.log(address)
        NavigationService.navigate('Schedule');

    } catch(e) {
        yield put(ToastActionsCreators.displayError('Something went wrong!'))
    }
}

export function* getWorkersSchedule() {
    const { data } = yield call(api.get, 'userschedule')

    yield put(ScheduleActions.getWorkersScheduleSuccess(data))  

}

export function* getScheduleById({ id }) {
    const { data } = yield call(api.get, `schedule/${id}`);

    yield put(ScheduleActions.getScheduleByIdSuccess(data));
}

export function* finishSchedule({ time_worked, id, finished_job, client_id }) {
   try {
    const status = 1;
    yield call(api.put, `finish/${id}`, { status })
    yield call(api.post, `timeworked/schedule/${id}`, { time_worked, finished_job, client_id })
    
    NavigationService.navigate('Schedule');
   } catch(e) {
       console.log(e.response)
   }
}