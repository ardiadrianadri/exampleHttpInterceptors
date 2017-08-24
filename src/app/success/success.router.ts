import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SuccessComponent } from './success.component';

export const routes: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: SuccessComponent}
]);