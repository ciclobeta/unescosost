import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
// import { PagesModule } from './pages/pages.module';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
// import { ReactiveFormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';

// mapa
// import { ApplicationRef } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

// editor
// import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule,
       // ReactiveFormsModule,
    ServiceModule,
    SharedModule,
    // QuillModule,
    // AgmCoreModule.forRoot({
    //  apiKey: 'AIzaSyD5HQHieWifkYkbHFEa7BuBe8hqok823IA'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
