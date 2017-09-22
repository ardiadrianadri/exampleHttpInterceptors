import { Injectable } from '@angular/core';
import { RequestOptions, ConnectionBackend, Http, Response, RequestOptionsArgs, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpCustomService extends Http {

  constructor (
    protected _connectionBackend: ConnectionBackend,
    protected _options: RequestOptions
  ) {
    super(_connectionBackend, _options);
  }

  request (url: string | Request, options?: RequestOptions ): Observable<Response> {

    return super.request(url, options);
  }
}
