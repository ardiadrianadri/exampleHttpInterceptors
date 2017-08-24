import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routes } from './error-page.router';

import { ErrorPageComponent } from './error-page.component';

@NgModule({
    imports: [
        SharedModule,
        routes
    ],
    declarations: [
        ErrorPageComponent
    ]
})
export class ErrorPageModule {}
