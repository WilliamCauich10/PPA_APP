import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// Paginas
// import { BarVerticalPage } from '../pages/bar-vertical/bar-vertical';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetallePage } from '../pages/detalle/detalle';
import { GraficaPage } from '../pages/grafica/grafica';
import { ConfirmPage } from '../pages/confirm/confirm';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// HTTP Module
import { HttpClientModule } from '@angular/common/http';
// Prividers
import { UserServiceProvider } from '../providers/user-service/user-service';
// 
import { Badge } from '@ionic-native/badge';
// push 
import { Push } from '@ionic-native/push';
// Grafica
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations/animations';
// import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetallePage,
    GraficaPage,
    ConfirmPage
    // GoogleChart
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetallePage,
    GraficaPage,
    ConfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Badge,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
