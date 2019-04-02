import { StatisticsComponent } from './statistics/statistics.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { StreamComponent } from './stream/stream.component';
import { AccountComponent } from './account/account.component';
import { AccstatisticsComponent } from './account/accstatistics/accstatistics.component';
import { AccfinanceComponent } from './account/accfinance/accfinance.component';
import { AccprintsComponent } from './account/accprints/accprints.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddComponent},
  { path: 'statistics', component: StatisticsComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'account', component: AccountComponent, children: [
    { path: '', redirectTo: 'prints', pathMatch: 'full' },
    
    { path: 'prints', component: AccprintsComponent},
    { path: 'statistics', component: AccstatisticsComponent},
    { path: 'finance', component: AccfinanceComponent},

    { path: '**', redirectTo: 'history', pathMatch: 'full' }
  ]},

  { path: '**', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
