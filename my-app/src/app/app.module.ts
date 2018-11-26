import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsPipe } from './products/products.pipe';
import { ProductsService } from './products/products.service';
import { RatingComponent } from './products/rating/rating.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { DetailComponent } from './products/detail/detail.component';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {AuthService} from './auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    WelcomeComponent,
    DetailComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path : "home", component : WelcomeComponent },
      { path : "products", component : ProductsComponent, canActivate : [AuthGuard] },
      {path : "products/:id", component: DetailComponent, canActivate : [AuthGuard]},
      { path : "login", component : LoginComponent },
      { path : "", redirectTo : "home", pathMatch : "full" },
      { path : "**", redirectTo : "home" }                                                                                                                                                                                       

    ])
  ],
  providers: [ProductsService, AuthService, CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
