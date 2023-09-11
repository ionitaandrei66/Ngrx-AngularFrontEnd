import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState, AuthState} from "./ngrx.state";


// Define selectAuth with the correct type annotation
export const selectAuth = (state: AppState) => state.auth;

// Use createFeatureSelector to narrow down the state to AuthState
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Use selectAuthState in createSelector to correctly type state
export const GetAuth = createSelector(
    selectAuthState,
    (state: AuthState) => state.auth
);