import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkeletonComponent } from './components/layout/skeleton/skeleton.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BannerComponent } from './components/portfolio/banner/banner.component';
import { AboutComponent } from './components/portfolio/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialNetworksComponent } from './components/portfolio/social-networks/social-networks.component';
import { ExperienceComponent } from './components/portfolio/experience/experience.component';
import { EducationComponent } from './components/portfolio/education/education.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PortfolioComponent } from './components/portfolio/portfolio/portfolio.component';
import { InterceptorService } from './services/interceptor.service';
import { TextEditorComponent } from './components/shared/text-editor/text-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    BannerComponent,
    AboutComponent,
    SocialNetworksComponent,
    ExperienceComponent,
    EducationComponent,
    LoginComponent,
    SignupComponent,
    PortfolioComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppRoutingModule,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
