
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GestionComponent } from './esecretaria/gestion/gestion.component';
import { FormacionComponent } from './esecretaria/formacion/formacion.component';
import { ComunicacionComponent } from './esecretaria/comunicacion/comunicacion.component';
import { TecnicasComponent } from './esecretaria/tecnicas/tecnicas.component';


import { ApplicationRef } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

// import { BibiografiaComponent } from './bibiografia/bibiografia.component';
import { QuillModule } from 'ngx-quill';
import { InvestigacionesComponent } from './persona/investigaciones/investigaciones.component';
import { DocumentosComponent } from './persona/documentos/documentos.component';
import { NoticiasComponent } from './persona/noticias/noticias.component';
import { ProyectosComponent } from './persona/proyectos/proyectos.component';
import { IndicadoresComponent } from './persona/indicadores/indicadores.component';
import { BibliografiaComponent } from './persona/bibliografia/bibliografia.component';
import { GestionDocumentosComponent } from './admon/gestion-documentos/gestion-documentos.component';
import { GestionProyectosComponent } from './admon/gestion-proyectos/gestion-proyectos.component';
import { GestionNoticiasComponent } from './admon/gestion-noticias/gestion-noticias.component';


// import { TagInputModule } from 'ngx-chips';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
 import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        // PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        // ModalUploadComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        BusquedaComponent,
        GestionComponent,
        FormacionComponent,
        ComunicacionComponent,
        TecnicasComponent,
        // BibiografiaComponent,
        InvestigacionesComponent,
        DocumentosComponent,
        NoticiasComponent,
        ProyectosComponent,
        IndicadoresComponent,
        BibliografiaComponent,
        GestionDocumentosComponent,
        GestionProyectosComponent,
        GestionNoticiasComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule,
        QuillModule,
       // TagInputModule,
       // BrowserAnimationsModule,
       // ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD5HQHieWifkYkbHFEa7BuBe8hqok823IA'
          })
    ]
})
export class PagesModule { }
