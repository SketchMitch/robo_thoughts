import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsViewComponent } from './components/panels-view/panels-view.component';
import { VideoFeedComponent } from './components/video-feed/video-feed.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ImuComponent } from './components/imu/imu.component';
import { DvlComponent } from './components/dvl/dvl.component';
import { DepthComponent } from './components/depth/depth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    PanelsViewComponent,
    VideoFeedComponent,
    ImuComponent,
    DvlComponent,
    DepthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
