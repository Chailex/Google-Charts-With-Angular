import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SchoolComponent } from './pages/school/school.component';
import { RapidoComponent } from './pages/rapido/rapido.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { ApollotyreComponent } from './pages/apollotyre/apollotyre.component';
import { LanguageComponent } from './pages/language/language.component';
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'school', component: SchoolComponent},
  { path: 'rapido', component: RapidoComponent},
  { path: 'stocks', component: StocksComponent},
  { path: 'apollotyre', component: ApollotyreComponent},
  { path: 'language', component: LanguageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
