import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
users: any[] = [];
Token:any[];
Usuario:any[];
numero;
myForm: FormGroup;
  constructor(public alertCtrl: AlertController, public formBuilder: FormBuilder, public navCtrl: NavController,public nav: NavController, public navParams: NavParams,public userService: UserServiceProvider) {
  	this.Token =this.navParams.get("tok");
    this.Usuario =this.navParams.get("user");
  	console.log(this.Token);
  	 this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    this.userService.getNumero(this.Usuario)
    .subscribe(
      (data) => {
        this.users = data['results'];
        for (var re of this.users) {
          this.numero= re.USDE_TELEFONO;
        }
        console.log(this.numero);
        //enviar el token sms
        // this.userService.getEnviar(this.Token,this.numero)
        // .subscribe(
        //   (data) => {
        //   },
        //   (error) =>{
        //     console.error(error);
        //   }
        // )
        // this.nav.push(ConfirmPage, {tok: this.users});
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  verificar(){
  	console.log("token:"+this.Token);
  	this.nav.push(TabsPage);
  }
  saveData(){
    console.log(this.myForm.value);
    if (this.Token == this.myForm.value.token) {
    	this.verificar();
    }else{
    	let alert = this.alertCtrl.create({
	      title: 'Error',
	      subTitle: 'Los datos son incorrectos!',
	      buttons: ['Aceptar']
	    });
	    alert.present();
    }
  }
  private createMyForm(){
	  return this.formBuilder.group({
		    token: ['', Validators.required],
		  });
	}
}
