import { createAction, props } from '@ngrx/store';
import {AuthModel} from "./ngrx.state";

export const setAuth = createAction('[load Credentials] Set Auth', props<{ auth:{username: string, password:string} }>());

export const removeAuth = createAction('[remove Action] Remove Auth');

export const loadAuth = createAction('[load Credentials] Load Auth');

export const loadAuthSuccess = createAction(
    '[Auth API] Auth Load Success',
    props<{ auth: AuthModel | null }>()
);

export const loadAuthFailure = createAction(
    '[Auth API] Auth Load Failure',
    props<{ error: string }>()
);