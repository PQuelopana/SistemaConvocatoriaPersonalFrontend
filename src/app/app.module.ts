import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CallListFormComponent } from './components/call/call-list-form/call-list-form.component';
import { LoginComponent } from './components/login/login.component';
import { UserNewComponent } from './components/user/user-new/user-new.component';
import { UserNewConsultComponent } from './components/user/user-new-consult/user-new-consult.component';
import { UserCredentialsComponent } from './components/user/user-credentials/user-credentials.component';
import { ApplicationRegulationsComponent } from './components/application-regulations/application-regulations.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserCasefileComponent } from './components/user/user-casefile/user-casefile.component';
import { ConvocatoriaListadoComponent } from './components/call/registro/convocatoria-listado/convocatoria-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    CallListFormComponent,
    LoginComponent,
    UserNewComponent,
    UserNewConsultComponent,
    UserCredentialsComponent,
    ApplicationRegulationsComponent,
    UserEditComponent,
    UserCasefileComponent,
    ConvocatoriaListadoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
