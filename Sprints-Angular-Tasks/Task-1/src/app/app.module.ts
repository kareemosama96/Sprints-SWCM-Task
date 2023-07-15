import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMusicianComponent } from './add-musician/add-musician.component';
import { HomeComponent } from './home/home.component';
import { ListMusiciansComponent } from './list-musicians/list-musicians.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMusicianComponent,
    HomeComponent,
    ListMusiciansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
