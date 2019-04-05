import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import HoursActions from '../ducks/hours';

export function* getHoursReport({ id, first_date, second_date }) {
    const { data } = yield call(api.post, `timeworkedreport/${id}`, { first_date, second_date });
 
    yield put(HoursActions.getHoursReportSuccess(data.rows));
} 

