import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { EventCenterComponent } from './home/home/event-center/event-center.component';
import { NewEventComponent } from './event/new-event/new-event.component';
import { SimpleFormComponent } from './event/new-event/forms/simple-form/simple-form.component';
import { PicnicCompleteFormComponent } from './event/new-event/forms/end-point-forms/picnic-complete-form/picnic-complete-form.component';
import { BirthdayCompleteFormComponent } from './event/new-event/forms/end-point-forms/birthday-complete-form/birthday-complete-form.component';


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
    },

    {
        path:'event-center', component:EventCenterComponent
    },

    {
        path:'new-event', component:NewEventComponent
    },

    {
        path:'simple-form',component:SimpleFormComponent
        
    },
    {
        path:'picnic-form',component:PicnicCompleteFormComponent
        
    },
    {
        path:'birthday-form',component:BirthdayCompleteFormComponent
        
    },
    {
        path:'new-mail',redirectTo:'/home',pathMatch:'full'
        
    },
    



];