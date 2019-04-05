import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import ClientActions from '../ducks/client';
import NavigationService from '../../services/navigation';
 
export function* createClient({ name, email, address }) {

    try {

        const role = 'client';
        
        yield call(api.post, 'register', { name, email, address, role })

        yield put(ClientActions.createClientSuccess());

        NavigationService.navigate('Client');
        
    } catch(e) {
        alert(e);
    }


}

export function* getClients() {
    try {

        const { data } = yield call(api.get, 'clients')

        yield put(ClientActions.getClientSuccess(data));

    } catch(e) {
        alert(e);
    }
}

export function* getClientReport({ id, first_date, second_date }) {
    const { data } = yield call(api.post, `timeworkedclientreport/${id}`, { first_date, second_date });
 
    yield put(ClientActions.getClientReportSuccess(data.rows));
} 

