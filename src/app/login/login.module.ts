import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routes } from './login.router';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        SharedModule,
        routes
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}
