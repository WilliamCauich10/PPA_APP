import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
//actuali
import { Refresher }  from "ionic-angular";
//
import { UserServiceProvider } from '../../providers/user-service/user-service';
// 
import { Badge } from '@ionic-native/badge';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// 
import { DetallePage } from '../detalle/detalle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 users: any[] = [];
 PTotal: any[] = [];
 Total;
 // p ="holis";
 public id;

  constructor(private modalCtrl: ModalController,public navCtrl: NavController, public userService: UserServiceProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private badge: Badge) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ionViewDidLoad(){
    //Principal docs
    this.userService.getUsers()
    .subscribe(
      (data) => {
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
    //Total Principal
    this.userService.getTotal()
    .subscribe(
      (data) => {
        //this.PTotal = data['results'];
        this.Total = data['results'].length;
        // console.log(this.Total);
      },
      (error) =>{
        console.error(error);
      }
    )
    this.badge.set(this.Total);
    // console.log(this.users);
  }
  recargar( refresher:Refresher ){
    console.log("Inicio del refresh");
    setTimeout( ()=>{
          console.log("Termino el refresh");
          this.ionViewDidLoad();
          refresher.complete();
    },1500)

  }
  openPage(pagina){
  	console.log(pagina);
  }
  DetalleDocumento(Documento:any){
    let modal = this.modalCtrl.create(DetallePage, 
      {doc: Documento});
    modal.present();
    console.log(Documento);
  }
  salir(){
    // rootPage;
  }
}
