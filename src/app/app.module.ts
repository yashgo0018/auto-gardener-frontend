import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ApiService } from './services/apis.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
