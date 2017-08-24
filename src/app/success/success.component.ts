import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'success-page',
    templateUrl: './success.component.html'
})
export class SuccessComponent {

    constructor (private _router: Router) {}

    gohome () {
        this._router.navigateByUrl('/home');
    }
}