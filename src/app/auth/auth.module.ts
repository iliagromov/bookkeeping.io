import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { BackendService } from '../shared/services/backend.service';

@NgModule({
    declarations:[
        AuthComponent,
        LoginComponent,
        RegistrationComponent,
    ],
    imports:[
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase, 'ang_firebase_test'),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule
    ],
    providers: [BackendService],
})
export class AuthModule {}