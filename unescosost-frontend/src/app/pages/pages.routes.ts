import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import {GestionComponent} from './esecretaria/gestion/gestion.component';
import {FormacionComponent} from './esecretaria/formacion/formacion.component';
import {ComunicacionComponent} from './esecretaria/comunicacion/comunicacion.component';
import {TecnicasComponent} from './esecretaria/tecnicas/tecnicas.component';

import { ProfileComponent } from './profile/profile.component';

// Guards
import { LoginGuardGuard } from '../services/service.index';
import { AdminGuard } from '../services/service.index';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';

// import { BibiografiaComponent } from '../pages/bibiografia/bibiografia.component';
import { InvestigacionesComponent } from '../pages/persona/investigaciones/investigaciones.component';
import { DocumentosComponent } from '../pages/persona/documentos/documentos.component';
import { NoticiasComponent } from '../pages/persona/noticias/noticias.component';
import { ProyectosComponent } from '../pages/persona/proyectos/proyectos.component';
import { IndicadoresComponent } from '../pages/persona/indicadores/indicadores.component';
import { BibliografiaComponent } from '../pages/persona/bibliografia/bibliografia.component';
import { GestionDocumentosComponent } from '../pages/admon/gestion-documentos/gestion-documentos.component';
import { GestionProyectosComponent } from '../pages/admon/gestion-proyectos/gestion-proyectos.component';
import { GestionNoticiasComponent } from '../pages/admon/gestion-noticias/gestion-noticias.component';

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ VerificaTokenGuard ],
        data: { titulo: 'Noticias de la red' }
    },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'Proyectos' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Indicadores' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ AdminGuard ],
        data: { titulo: 'Mantenimiento de Usuarios' }
    },
    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },

    { path: 'investigaciones', component: InvestigacionesComponent, data: { titulo: 'Investigaciones' } },
    { path: 'documentos', component: DocumentosComponent, data: { titulo: 'Documentos en general' } },
    { path: 'noticias', component: NoticiasComponent, data: { titulo: 'Noticias' } },
    { path: 'proyectos', component: ProyectosComponent, data: { titulo: 'Proyectos' } },
    { path: 'indicadores', component: IndicadoresComponent, data: { titulo: 'Indicadores generales' } },
    { path: 'bibliografia', component: BibliografiaComponent, data: { titulo: 'Bibliografía' } },
    { path: 'gestiondocumentos', component: GestionDocumentosComponent, data: { titulo: 'Gestión de documentos' } },
    { path: 'gestionproyectos', component: GestionProyectosComponent, data: { titulo: 'Gestión de proyectos' } },
    { path: 'gestionnoticias', component: GestionNoticiasComponent, data: { titulo: 'Gestión de noticias' } },

    { path: 'gestion', component: GestionComponent, data: { titulo: 'Área administratica y económica' } },
    { path: 'formacion', component: FormacionComponent, data: { titulo: 'Formación (Capacity building)' } },
    { path: 'comunicacion', component: ComunicacionComponent, data: { titulo: 'Comunicación y difusión' } },
    { path: 'tecnicas', component: TecnicasComponent, data: { titulo: 'Área técnica' } },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
