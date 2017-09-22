import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';

import { Interceptor } from './interceptor';

@Injectable()
export class Interceptor401Service implements Interceptor {

  private _process: Observable<Response>;

  set process (initProcess: Observable<Response>) {
    this._process = initProcess;
  }

  get process (): Observable<Response> {
    return this._process
    .concatMap(
      (response: Response) => {
        return Observable.of(response)
        .do(
          (res: Response) => {
            if (res.status === 401) {
              this._router.navigateByUrl('/login');
            }
          }
        );
      }
    );
  }
  constructor (private _router: Router) {}
}
