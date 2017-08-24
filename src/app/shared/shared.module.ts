import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        MdInputModule,
        MdSnackBarModule
    ],
    exports: [
        CommonModule,
        MdButtonModule,
        MdInputModule,
        MdSnackBarModule
    ]
})
export class SharedModule {}
