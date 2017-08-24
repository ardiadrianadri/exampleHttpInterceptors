import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routes } from './home.router';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        routes
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}
