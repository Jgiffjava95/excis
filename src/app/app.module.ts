import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDrawerContainer} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { ExcisHomeComponent } from './excis-home/excis-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { AudioService } from './services/audio.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExcisHomeComponent,
    LaunchPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
