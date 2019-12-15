//IMPORTS NECESARIOS
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR COMPONENTES
import { ErrorComponent } from './components/error/error.component';
import { CallListFormComponent } from './components/call/call-list-form/call-list-form.component';
import { LoginComponent } from './components/login/login.component';
import { UserNewConsultComponent } from './components/user/user-new-consult/user-new-consult.component';
import { UserNewComponent } from './components/user/user-new/user-new.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserCredentialsComponent } from './components/user/user-credentials/user-credentials.component';
import { UserCasefileComponent } from './components/user/user-casefile/user-casefile.component';
import { ApplicationRegulationsComponent } from './components/application-regulations/application-regulations.component';
//import { LoginComponent } from './components/login/login.component';

//DEFINIR RUTAS
const appRoutes: Routes = [
	{path: '', component: CallListFormComponent},
	{path: 'calllist', component: CallListFormComponent},
	{path: 'login', component: LoginComponent},
	{path: 'newuserconsult', component: UserNewConsultComponent},
	{path: 'newuser', component: UserNewComponent},
	{path: 'edituser', component: UserEditComponent},
	{path: 'credentialsuser', component: UserCredentialsComponent},
	{path: 'casefileuser', component: UserCasefileComponent},
	{path: 'applicationregulations', component: ApplicationRegulationsComponent},	
	{path: '**', component: ErrorComponent}
];

//EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);