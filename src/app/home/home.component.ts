import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { HttpCustomService } from '../core/http-custom.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'interceptor-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(
      private _snackBar: MdSnackBar,
      private _http: HttpCustomService
    ) {}

    sim401 () {
        this._http.get('/mock/401').subscribe();
    }

    sim403 () {
      //this._http.get('/mock/403');
      this._snackBar.open('Simulation of 403 error', 'close');
    }

    sim500 () {
        this._http.get('/mock/500').subscribe();
    }

    sim200 () {
        this._http.get('/mock/200').subscribe();
    }
}
