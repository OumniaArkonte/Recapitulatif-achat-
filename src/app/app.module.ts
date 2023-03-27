import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecapitulatifCreateComponent } from './view/recapitulatif/recapitulatif-create/recapitulatif-create.component';
import { RecapitulatifListComponent } from './view/recapitulatif/recapitulatif-list/recapitulatif-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RecapitulatifCreateComponent,
    RecapitulatifListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
