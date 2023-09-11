import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Store } from '@ngrx/store';
import {GetAuth} from "../../ngrx/ngrx.selectors";
import { setAuth} from "../../ngrx/ngrx.actions";
import {Subject, takeUntil} from "rxjs";
import { Router} from "@angular/router";
import {AuthModel} from "../../ngrx/ngrx.state";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {
    form: FormGroup;
    auth$ = this.store.select(GetAuth);
    private destroy$ = new Subject<boolean>();

    constructor(private fb: FormBuilder,private store: Store, private router: Router) {
        this.form= this.fb.group({
            username: [null, [Validators.required,Validators.minLength(3)]],
            password: [null,[Validators.required,Validators.minLength(6)]],
        });
    }

    ngOnInit(): void {
        this.auth$.pipe(takeUntil(this.destroy$)).subscribe((res)=>{
            if(res?.username){
                this.router.navigate(['login']);
            }
        })
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
    }

    sendRegister() {
        const data : AuthModel | null = {
            username:this.form.controls['username']?.value,
            password:this.form.controls['password']?.value,
        };
        this.store.dispatch(setAuth({auth: data}));
    }
}
