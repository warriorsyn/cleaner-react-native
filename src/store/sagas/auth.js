import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage';

import AuthActions from '../ducks/auth';
import NavigationService from '../../services/navigation';

 

export function* init() {
    const token = yield call([AsyncStorage, 'getItem'], '@cleaner:token');

    if(token) {
        yield put(AuthActions.signInSuccess(token));
    }

    yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
    try {
            
        const response = yield call(api.post, 'login', {email, password})

        yield call([AsyncStorage, 'setItem'], '@cleaner:token', response.data.token.token);
        yield call([AsyncStorage, 'setItem'], '@cleaner:role', response.data.user.role)
        yield call([AsyncStorage, 'setItem'], '@cleaner:user', response.data.user.name)
        yield put(AuthActions.signInSuccess(response.data.token.token));
        yield put(AuthActions.roleSuccess(response.data.user.role));
        NavigationService.navigate('Main');
        
    } catch(err) {
        yield put(ToastActionsCreators.displayError('Email and/or password are incorrect!'))
    }
}

export function* signOut () {
    yield call([AsyncStorage, 'clear']);
    NavigationService.navigate('Signin');
}

