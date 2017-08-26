import { InjectionToken } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

export interface Interceptor {
    process: Observable<Response>;
}

export const INTERCEPTORS: InjectionToken<Interceptor> = new InjectionToken<Interceptor>('INTERCEPTORS');
export const ERROR_INTERCEPTORS: InjectionToken<Interceptor> = new InjectionToken<Interceptor>('ERROR_INTERCEPTORS');

