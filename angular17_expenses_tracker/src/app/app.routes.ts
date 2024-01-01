import { Routes } from '@angular/router';

// Pages components
import { HomeComponent } from './pages/home/home.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add', component: AddTransactionComponent },
];


