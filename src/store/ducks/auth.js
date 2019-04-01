import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    signInRequest: ['email', 'password'],
    signInSuccess: ['token'],
    signOut: null,
    roleSuccess: ['role'],
    initCheckSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    authChecked: false,
    signedIn: false,
    token: null,
    role: null
});

/* Reducers */

export const success = (state, { token }, role ) => state.merge({ signedIn: true, token, role: role });

export const logOut = state => state.merge({signedIn: false, token: null});

export const checkSuccess = state => state.merge({ authChecked: true });

export const roleSuccess = (state, role) => state.merge({ role })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SIGN_IN_SUCCESS]: success,
    [Types.SIGN_OUT]: logOut,
    [Types.INIT_CHECK_SUCCESS]: checkSuccess,
    [Types.ROLE_SUCCESS]: roleSuccess
});
