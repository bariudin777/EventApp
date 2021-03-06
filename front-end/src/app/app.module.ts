// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FormModalComponent } from './event/new-event/form-modal/form-modal.component';
//routes
import { appRoutes } from './routes';
import { HomeComponent } from './home/home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import { EventCenterComponent } from './home/home/event-center/event-center.component';
import { NewEventComponent } from './event/new-event/new-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatStepperModule} from '@angular/material/stepper'
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { BaseFormComponent } from './event/new-event/forms/base-form/base-form.component';
import { SimpleFormComponent } from './event/new-event/forms/simple-form/simple-form.component';
import { BirthdayFormComponent } from './event/new-event/forms/birthday-form/birthday-form.component';
import { RecommendationPopupComponent } from './recommendation-popup/recommendation-popup/recommendation-popup.component';
import { ModalRecommendationsComponent } from './event/new-event/form-modal/modal-recommendations/modal-recommendations.component';
import { InfoDialogComponent } from './dialog-manager/info-dialog/info-dialog.component';
import { AboutComponent } from './home/home-page-utils/about/about.component';
import { PicnicFormComponent } from './event/new-event/forms/picnic-form/picnic-form.component';
import { OrganizeTripFormComponent } from './event/new-event/forms/organize-trip-form/organize-trip-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PicnicCompleteFormComponent } from './event/new-event/forms/end-point-forms/picnic-complete-form/picnic-complete-form.component';
import { BirthdayCompleteFormComponent } from './event/new-event/forms/end-point-forms/birthday-complete-form/birthday-complete-form.component';
import { OrganizeCompleteFormComponent } from './event/new-event/forms/end-point-forms/organize-complete-form/organize-complete-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    HomeComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    EventCenterComponent,
    NewEventComponent,
    FormModalComponent,
    BaseFormComponent,
    SimpleFormComponent,
    BirthdayFormComponent,
    RecommendationPopupComponent,
    ModalRecommendationsComponent,
    InfoDialogComponent,
    AboutComponent,
    PicnicFormComponent,
    OrganizeTripFormComponent,
    AboutUsComponent,
    PicnicCompleteFormComponent,
    BirthdayCompleteFormComponent,
    OrganizeCompleteFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule, 
    MatInputModule, 
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
