import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RefTableComponent } from './ref/reftable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceholderComponent} from './placeholder/placeholder.component';




export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'reference-details/:id', component: RefTableComponent },
    { path: 'placeholder-details', component: PlaceholderComponent }
];
