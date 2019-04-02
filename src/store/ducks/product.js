import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    getProductsRequest: null,
    getProductsSuccess: ['data'],
    createProductsRequest: ['name', 'code', 'quantity'],
    getOrdersRequest: null,
    getOrdersSuccess: ['data'],
    getProductByIdRequest: ['id'],
    getProductByIdSuccess: ['data'],
    createOrderRequest: ['product_id', 'quantity']
});

export const ProductTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    products: [],
    orders: [],
    single: []
});

/* Reducers */

// export const success = (state, { token }, role ) => state.merge({ signedIn: true, token, role: role });

export const getProduct = (state, data) => state.merge({ products: data })
 
export const getOrders = (state, data) => state.merge({ orders: data  })

export const getById = (state, data) => state.merge({ single: data })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_PRODUCTS_SUCCESS]: getProduct,
    [Types.GET_ORDERS_SUCCESS]: getOrders,
    [Types.GET_PRODUCT_BY_ID_SUCCESS]: getById
});
