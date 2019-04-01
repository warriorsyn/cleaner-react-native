import { call, put } from 'redux-saga/effects';
import api from '../../services/api';


import ProductActions from '../ducks/product';
import NavigationService from '../../services/navigation';

export function* getProducts() {
    const { data } = yield call(api.get, 'product')

    yield put(ProductActions.getProductsSuccess(data));
}

export function* createProducts({ name, code, quantity }) {
    yield call(api.post, 'product', { name, code, quantity })
    NavigationService.navigate('Product')
}