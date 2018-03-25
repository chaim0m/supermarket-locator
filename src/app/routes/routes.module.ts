import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocatorComponent } from '../locator/locator.component';
import { PreferencesComponent } from '../preferences/preferences.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: LocatorComponent},
  { path: 'preferences', component: PreferencesComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutesModule { }
