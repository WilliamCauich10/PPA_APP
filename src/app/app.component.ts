import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfirmPage } from '../pages/confirm/confirm';
import { UserServiceProvider } from '../providers/user-service/user-service';
//
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Badge } from '@ionic-native/badge';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AboutPage;
  users: any[] = [];
  Total;
  constructor(private push: Push,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private badge: Badge, public userService: UserServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushSetup();
    });
  }
  pushSetup(){
    const options: PushOptions = {
       android: {
         senderID: '132596228515'
       },
       ios: {
           alert: 'true',
           badge: true,
           sound: 'false'
       }
    };

    const pushObject: PushObject = this.push.init(options);


    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
