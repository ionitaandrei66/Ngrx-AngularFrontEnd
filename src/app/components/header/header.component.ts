import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthModel} from "../../ngrx/ngrx.state";
import {Store} from "@ngrx/store";
import {GetAuth} from "../../ngrx/ngrx.selectors";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  data: AuthModel | null = null;
  auth$ = this.store.select(GetAuth);
  private destroy$ = new Subject<boolean>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.auth$.pipe(takeUntil(this.destroy$)).subscribe((res)=>{
      this.data = res;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
