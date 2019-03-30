import { StatisticsComponent } from './statistics/statistics.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddComponent},
  { path: 'statistics', component: StatisticsComponent },
  { path: 'account', component: AccountComponent },
  
  { path: '**', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
