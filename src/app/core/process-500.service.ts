import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concatMap';

import { Interceptor } from './process';

@Injectable()
export class Process500Service implements Interceptor {

    private _initProcess: Observable<Response>;

    constructor( private _router: Router ) {}

    set process (initProcess: Observable<Response>){
        this._initProcess = initProcess;
    }

    get process (): Observable<Response> {
        return this._initProcess
        .concatMap((response: Response) => {
            return Observable.of(response);
        })
        .do((response: Response) => {
            if (response.status === 500 ) {
                this._router.navigateByUrl('/error-page');
            }
        });
    }
}
