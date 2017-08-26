import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response, RequestOptionsArgs, ConnectionBackend, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Interceptor, INTERCEPTORS, ERROR_INTERCEPTORS } from './process';

@Injectable()
export class HttpCustom extends Http {

    constructor (
        private _connectionBackend: ConnectionBackend,
        private _baseRequest: RequestOptions,
        @Optional() @Inject(INTERCEPTORS) private _interceptors: Interceptor[],
        @Optional() @Inject(ERROR_INTERCEPTORS) private _errors: Interceptor[]
    ) {
        super(_connectionBackend, _baseRequest);
    }

    request(url: string , options?: RequestOptionsArgs): Observable<Response> {

        const leng = (this._interceptors) ? this._interceptors.length : 0;
        const lengErr = (this._errors) ? this._errors.length : 0;

        let result: Observable<Response>;

        if (leng > 0) {
            this._interceptors[0].process = super.request(url, options);
            for (let i = 1; i < leng; i++) {
                this._interceptors[i].process = this._interceptors[ i - 1].process;
            }
            result = this._interceptors[leng - 1].process;
        } else {
            result = super.request(url, options);
        }

        if (lengErr > 0) {
            this._errors[0].process = result.catch(error => {
                return Observable.of(error);
            });
            for (let i = 1; i < lengErr; i++) {
                this._errors[i].process = this._errors [i - 1].process;
            }

            result = this._errors[ lengErr - 1 ].process;
        }

        return result;
    }
}
