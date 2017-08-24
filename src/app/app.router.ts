import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'error-page', loadChildren: './error-page/error-page.module#ErrorPageModule'},
    { path: 'success', loadChildren: './success/success.module#SuccessModule' }
]);
