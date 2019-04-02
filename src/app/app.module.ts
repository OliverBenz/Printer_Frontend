import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AccountComponent } from './account/account.component';
import { AccstatisticsComponent } from './account/accstatistics/accstatistics.component';
import { AccfinanceComponent } from './account/accfinance/accfinance.component';
import { StreamComponent } from './stream/stream.component';
import { AccprintsComponent } from './account/accprints/accprints.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    StatisticsComponent,
    AccountComponent,
    AccstatisticsComponent,
    AccfinanceComponent,
    StreamComponent,
    AccprintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
