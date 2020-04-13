import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProductListComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SellerRoutingModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ProductListComponent,
        ProductDetailComponent
    ]
})

export class SellerViewModule {}