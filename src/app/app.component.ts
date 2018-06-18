import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfirmPage } from '../pages/confirm/confirm';
import { UserServiceProvider } from '../providers/user-service/user-service';
//
import { Badge } from '@ionic-native/badge';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AboutPage;
  users: any[] = [];
  Total;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private badge: Badge, public userService: UserServiceProvider) {
    this.userService.getTotal()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
        this.Total = data['results'].length;
        console.log(this.Total);
    // console.log(data['results'].length);
      },
      (error) =>{
        console.error(error);
      }
    )
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });
    // this.badge.set(this.Total);
  }
}
