import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {AppState} from "./ngrx.state";
import {NgrxService} from "./ngrx.service";
import {
    loadAuth,
    loadAuthFailure,
    loadAuthSuccess,
    setAuth
} from "./ngrx.actions";


@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private ngrxService: NgrxService
    ) {}

    // Run this code when a loadTodos action is dispatched
    loadAuth$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadAuth),
            switchMap(() =>
                // Call the getTodos method, convert it to an observable
                from(this.ngrxService.getAuth()).pipe(
                    // Take the returned value and return a new success action containing the todos
                    map((data) => loadAuthSuccess({ auth: data })),
                    // Or... if it errors return a new failure action containing the error
                    catchError((error) => of(loadAuthFailure({ error })))
                )
            )
        )
    );

    saveAuth$ = createEffect(() =>
        this.actions$.pipe(
            ofType(setAuth),
            switchMap((data) =>
                // Call the getTodos method, convert it to an observable
                from(this.ngrxService.registerAuth(data.auth)).pipe(
                    // Take the returned value and return a new success action containing the todos
                    map((data) => loadAuthSuccess({ auth: data })),
                    // Or... if it errors return a new failure action containing the error
                    catchError((error) => of(loadAuthFailure({ error })))
                )
            )
        )
    );

}