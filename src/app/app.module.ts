import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CardItemComponent } from './components/card-item/card-item.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ModalItemComponent } from './components/modal-item/modal-item.component';


@NgModule({
  declarations: [
    AppComponent, 
    CardItemComponent,
    GlobalErrorComponent,
    PaginationComponent,
    ModalItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
