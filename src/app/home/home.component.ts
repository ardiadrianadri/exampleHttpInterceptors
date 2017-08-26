import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { HttpCustom } from '../core/httpCustom.service';
import { Process403Service } from '../core/process-403.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'interceptor-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private _403Subscription: Subscription;
    constructor(
        private _snackBar: MdSnackBar,
        private _router: Router,
        private _http: HttpCustom,
        private _process403: Process403Service
    ) {}

    ngOnInit() {
        this._403Subscription = this._process403.subscribe(
            (msg: string) => {
                this._snackBar.open(msg, 'close');
            }
        );
    }

    ngOnDestroy() {
        if (this._403Subscription) {
            this._403Subscription.unsubscribe();
        }
    }

    sim401 () {
        this._http.get('/mock/401')
        .subscribe();
    }

    sim403 () {
        this._http.get('/mock/403')
        .subscribe();
    }

    sim500 () {
        this._http.get('/mock/500')
        .subscribe();
    }

    sim200 () {
        this._http.get('/mock/200')
        .subscribe();
    }
}
