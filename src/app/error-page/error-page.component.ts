import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'error-page',
    templateUrl: './error-page.component.html'
})
export class ErrorPageComponent {

    constructor (private _router: Router) {}

    gohome () {
        this._router.navigateByUrl('/home');
    }
}
