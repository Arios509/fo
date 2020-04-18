import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
 import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerViewModule } from './module/seller/seller.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/_helpers/auth-interceptor';
import { MainUserModule } from './module/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SellerViewModule,
    MainUserModule,
    MarkdownModule.forRoot(),
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
