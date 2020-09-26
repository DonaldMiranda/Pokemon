import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { DetailsComponent } from './Components/details/details.component';
import { ErrorComponent } from './Components/error/error.component';



const routes: Routes = [
{path:'',component:CatalogComponent},
{path:'Catalog',component:CatalogComponent},
{path:'Pokemon/:idPokemon/:name',component:DetailsComponent},
{path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
