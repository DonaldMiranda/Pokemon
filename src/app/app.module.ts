import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { DetailsComponent } from './Components/details/details.component';
import{ HttpClientModule} from '@angular/common/http';
import { ProgressBarComponent } from './Components/progress-bar/progress-bar.component';
import { ItemGenerationComponent } from './Components/item-generation/item-generation.component';
import { FiltroNamePipe } from './Pipes/filtro-name.pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { ErrorComponent } from './Components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    DetailsComponent,
    ProgressBarComponent,
    ItemGenerationComponent,
    FiltroNamePipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
