import { Routes } from '@angular/router';
import { HOMEComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { FormUserComponent } from './components/form-user/form-user.component';

export const routes: Routes = [
    { path: 'home', component: HOMEComponent },
    { path: 'users', component: UsersComponent },
    { path: 'usersForm/:id', component: FormUserComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

];
