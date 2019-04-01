import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    getProductsRequest: null,
    getProductsSuccess: ['data'],
    createProductsRequest: ['name', 'code', 'quantity']
});

export const ProductTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    products: [] 
});

/* Reducers */

// export const success = (state, { token }, role ) => state.merge({ signedIn: true, token, role: role });

export const getProduct = (state, data) => state.merge({ products: data })
 
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_PRODUCTS_SUCCESS]: getProduct
});
