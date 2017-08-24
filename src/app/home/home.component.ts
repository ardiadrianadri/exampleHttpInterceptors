import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'interceptor-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor( private _snackBar: MdSnackBar) {}

    sim401 () {
        console.log('Simulation of 401 error');
    }

    sim403 () {
        console.log('Simulation of 402 error');
    }

    sim500 () {
        this._snackBar.open('Simulation of 500 error', 'close');
    }

    sim200 () {
        console.log('Simulation of 200 OK');
    }
}
