import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth/auth.guard';


export const appRoutes: Routes = [
    //sign up route
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },

    // sign in route
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    //home route
    {
        //path: 'home', component: HomeComponent,canActivate:[AuthGuard],
        path: 'home', component: HomeComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];