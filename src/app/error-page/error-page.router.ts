import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorPageComponent } from './error-page.component';

export const routes: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ErrorPageComponent }
]);
