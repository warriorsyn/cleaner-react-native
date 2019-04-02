import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import HoursActions from '../ducks/hours';
import NavigationService from '../../services/navigation';

export function* getHoursReport({ id }) {
    const { data } = yield call(api.get, `timeworked/${id}`);
    yield put(HoursActions.getHoursReportSuccess(data[0].time, data[0]));
} 

