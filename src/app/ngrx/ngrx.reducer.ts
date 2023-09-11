import {AuthState} from "./ngrx.state";
import { createReducer, on } from '@ngrx/store';
import {
    loadAuth,
    loadAuthFailure,
    loadAuthSuccess,
    removeAuth,
    setAuth
} from "./ngrx.actions";

export const initialState: AuthState = {
    auth: null,
    error: null,
    status: 'pending',
};

export const NgrxReducer = createReducer(

    initialState,

    on(setAuth,(state) => ({ ...state, status: 'loading' })),

    on(removeAuth, (state) => ({
        ...state,
        auth: null,
    })),

    on(loadAuth, (state) => ({ ...state, status: 'loading' })),

    on(loadAuthSuccess, (state, { auth }) => ({
        ...state,
        auth: auth,
        error: null,
        status: 'success',
    })),

    on(loadAuthFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
);