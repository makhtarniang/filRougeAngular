import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http';
import { AppComponent } from './app.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CMComponent } from './cm/cm.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthService } from './auth.service';
import { from } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { InterceptorProvider } from 'src/Interceptor';
import {MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from 'src/appmateriel.module';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { AdduserComponent } from './user/adduser/adduser.component';


@NgModule({
  declarations: [
    AppComponent,
    FormateurComponent,
    ApprenantComponent,
    CMComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    ProfilComponent,
    AddProfilComponent,
    EditProfilComponent,
    AdduserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [InterceptorProvider],
  
  bootstrap: [AppComponent]
})
export class AppModule { }