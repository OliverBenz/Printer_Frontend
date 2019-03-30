import { StatisticsComponent } from './statistics/statistics.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account/account.component';
import { AcchistoryComponent } from './account/acchistory/acchistory.component';
import { AccqueueComponent } from './account/accqueue/accqueue.component';
import { AccstatisticsComponent } from './account/accstatistics/accstatistics.component';
import { AccfinanceComponent } from './account/accfinance/accfinance.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddComponent},
  { path: 'statistics', component: StatisticsComponent },
  { path: 'account', component: AccountComponent, children: [
    { path: '', redirectTo: 'history', pathMatch: 'full' },

    { path: 'history', component: AcchistoryComponent},
    { path: 'queue', component: AccqueueComponent},
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
