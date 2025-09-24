
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // <-- Add this line
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { TeamComponent } from './components/team/team.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ServiceComponent,
    AboutComponent,
    PhotoGalleryComponent,
    TeamComponent,
    WhyChooseUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) // <-- Correct usage here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }