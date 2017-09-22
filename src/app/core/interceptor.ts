import { InjectionToken } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

export interface Interceptor {
  process: Observable<Response>;
}

export const OK_INTERCEPTORS: InjectionToken<Interceptor[]> = new InjectionToken<Interceptor>('OK_INTERCEPTORS');
export const KO_INTERCEPTORS: InjectionToken<Interceptor[]> = new InjectionToken<Interceptor>('KO_INTERCEPTORS');
