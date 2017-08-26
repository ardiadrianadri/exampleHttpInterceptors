import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concatMap';

import { Interceptor } from './process';

@Injectable()
export class Process403Service extends Subject<string> implements Interceptor {

    private _initProcess: Observable<Response>;

    set process ( initProcess: Observable<Response> ) {
        this._initProcess = initProcess;
    }

    get process (): Observable<Response> {
        return this._initProcess
        .concatMap((response: Response) => {
            return Observable.of(response);
        })
        .do((response: Response) => {
            if (response.status === 403) {
                this.next(response.json().msg);
            }
        });
    }
}
