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

export function* getOrders() {
    const { data } = yield call(api.get, 'order');
    yield put(ProductActions.getOrdersSuccess(data));
}

export function* getById({ id }) {
    const { data } = yield call(api.get, `product/${id}`);
    yield put(ProductActions.getProductByIdSuccess(data));
}

export function* createOrder({ product_id, quantity }) {
    yield call(api.post, 'order', { product_id, quantity });
    NavigationService.navigate('WorkerProduct')
}