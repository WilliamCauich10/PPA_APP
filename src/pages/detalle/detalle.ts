import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
documentos:any[];
  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams) {
  	this.documentos =this.navParams.get("doc");
  	console.log(this.documentos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
    // for (var i = 0; i < this.documentos.length; ++i) {
          // console.log(this.documentos[0].DETA_CREATED_BY);
      // }
  }

   cerrar_sin_parametros(){
  	this.viewCtrl.dismiss();
  }

}
