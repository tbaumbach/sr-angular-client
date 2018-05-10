import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';

// Ordningen på all route spelar stor roll då matchning sker uppifrån och neråt. Skulle t.ex. '**' ligga först skulle den fånga alla olika adresser.
/*const appRoutes: Routes = [
  { path: 'game/:id',      component: GameComponent },
  { path: '',
    redirectTo: '/web',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent } //TODO skapa komponenten.
];*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  //  RouterModule.forRoot(
  //    appRoutes,
  //    { enableTracing: true } // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
