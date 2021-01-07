import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './areas/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { TextFilterPipe } from './shared/pipes/textFilter.pipe';
import { StatusFilterPipe } from './shared/pipes/statusFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TextFilterPipe,
    StatusFilterPipe
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
