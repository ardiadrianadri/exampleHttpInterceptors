import { NgModule, SkipSelf, Optional } from '@angular/core';
import { ConnectionBackend, XHRBackend } from '@angular/http';

import { HttpCustomService } from './http-custom.service';

@NgModule({
  providers: [
    HttpCustomService,
    { provide: ConnectionBackend, useExisting: XHRBackend }
  ]
})
export class CoreModule {
  constructor( @SkipSelf() @Optional() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module should only be injected once');
    }
  }
}
