import { StatisticsComponent } from './statistics/statistics.component';
import { AddComponent } from './add/add.component';
import { LoginSiteComponent } from './login-site/login-site.component'
import { IndexComponent } from './index/index.component';
import { StreamComponent } from './stream/stream.component';
import { AccountComponent } from './account/account.component';
import { AccstatisticsComponent } from './account/accstatistics/accstatistics.component';
import { AccfinanceComponent } from './account/accfinance/accfinance.component';
import { AccprintsComponent } from './account/accprints/accprints.component';
import { AccsettingsComponent } from './account/accsettings/accsettings.component';
import { AdminComponent } from './admin/admin.component';
import { AdprintsComponent } from './admin/adprints/adprints.component';
import { AdusersComponent } from './admin/adusers/adusers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginSiteComponent },
  { path: 'add', component: AddComponent},
  { path: 'statistics', component: StatisticsComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: '', redirectTo: 'prints', pathMatch: 'full' },

    { path: 'prints', component: AdprintsComponent },
    { path: 'users', component: AdusersComponent },

    { path: '**', redirectTo: 'prints', pathMatch: 'full' }
  ]},
  { path: 'account', component: AccountComponent, children: [
    { path: '', redirectTo: 'prints', pathMatch: 'full' },
    
    { path: 'prints', component: AccprintsComponent },
    { path: 'statistics', component: AccstatisticsComponent },
    { path: 'finance', component: AccfinanceComponent },
    { path: 'settings', component: AccsettingsComponent },

    { path: '**', redirectTo: 'history', pathMatch: 'full' }
  ]},

  { path: '**', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
