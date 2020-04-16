import { NgModule } from "@angular/core";
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './layout/layout.component';
import { UserHeaderComponent } from 'src/app/core/_header/user/user.component';

@NgModule({
    declarations: [HomeComponent, UserLayoutComponent, UserHeaderComponent],
    imports: [CommonModule, MainRoutingModule],
    exports: []
})

export class MainUserModule { }