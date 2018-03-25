import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocatorComponent } from './locator/locator.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { Material } from './material.module';
import { MappingService } from './mapping.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { RoutesModule } from './routes/routes.module';



@NgModule({
  declarations: [
    AppComponent,
    LocatorComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    Material,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5o-m31EBdmqeQOWVF4vIO-OycP5TKPMA',
      libraries: ['places']
    })
  ],
  providers: [MappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
