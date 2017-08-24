import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routes } from './success.router';

import { SuccessComponent } from './success.component';

@NgModule({
    imports: [
        SharedModule,
        routes
    ],
    declarations: [
        SuccessComponent
    ]
})
export class SuccessModule {}
