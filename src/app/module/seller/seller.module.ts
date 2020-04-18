import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from 'src/app/core/_header/main/main.component';
import { CreateComponent } from './product-list/create/create.component';
import { MarkdownModule } from 'ngx-markdown';
import { PipeModule } from 'src/app/app-pipe.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProductListComponent,
        ProductDetailComponent,
        LayoutComponent,
        MainComponent,
        CreateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SellerRoutingModule,
        MarkdownModule.forChild(),
        PipeModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ProductListComponent,
        ProductDetailComponent
    ]
})

export class SellerViewModule { }
