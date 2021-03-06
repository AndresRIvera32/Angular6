import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { HomeComponent} from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

const routes: Routes = [
    {path: '',redirectTo:'/clientes',pathMatch:'full'},
    {path: 'directivas', component: DirectivaComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
