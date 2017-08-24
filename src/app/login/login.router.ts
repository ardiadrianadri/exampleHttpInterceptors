import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

export const routes: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: LoginComponent }
]);
