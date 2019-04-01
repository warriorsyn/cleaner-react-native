import { call, put } from 'redux-saga/effects';
import api from '../../services/api';


import WorkerActions from '../ducks/worker';
import NavigationService from '../../services/navigation';
 
export function* createWorker({ name, email, password }) {

    try {

        const role = 'worker';
        
        yield call(api.post, 'register', { name, email, password, role })

        yield put(WorkerActions.createWorkerSuccess());

        NavigationService.navigate('Worker');
        
    } catch(e) {
        alert(e);
    }


}

export function* getWorkers() {
    try {

        const { data } = yield call(api.get, 'workers')

        yield put(WorkerActions.getWorkerSuccess(data));

    } catch(e) {
        alert(e);
    }
}