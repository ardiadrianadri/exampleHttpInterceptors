import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ConnectionBackend, XHRBackend } from '@angular/http';
import { HttpCustom } from './httpCustom.service';

import { INTERCEPTORS, ERROR_INTERCEPTORS } from './process';
import { Process401Service } from './process-401.service';
import { Process403Service } from './process-403.service';
import { Process500Service } from './process-500.service';
import { Process200Service } from './process-200.service';

@NgModule({
    providers: [
        HttpCustom,
        Process403Service,
        { provide: ConnectionBackend, useExisting: XHRBackend },
        { provide: ERROR_INTERCEPTORS, useClass: Process401Service, multi: true },
        { provide: ERROR_INTERCEPTORS, useExisting: Process403Service, multi: true },
        { provide: ERROR_INTERCEPTORS, useClass: Process500Service, multi: true },
        { provide: INTERCEPTORS, useClass: Process200Service, multi: true }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error ('The core module can only be imported once');
        }
    }
}
