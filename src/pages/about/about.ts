import { Component } from '@angular/core';
import { NavController,reorderArray, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ConfirmPage } from '../confirm/confirm';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 users: any[] = [];
 token;
myForm: FormGroup;
  constructor(public alertCtrl: AlertController,public formBuilder: FormBuilder, public navCtrl: NavController,public nav: NavController, public userService: UserServiceProvider) {
  		this.myForm = this.createMyForm();
  }
   saveData(){
    console.log(this.myForm.value);
    // console.log(this.myForm.value.name);// para obtener el valor del campo
    // this.login();
    this.comprobar(this.myForm.value.name, this.myForm.value.password);
  }
  comprobar(usuario,contraseña){
    this.userService.getlogin(usuario,contraseña)
    .subscribe(
      (data) => {
        this.users = data['results'];
        console.log(this.users);
        if (this.users) {
          this.login(usuario);
        }else{
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Usuario | Contraseña incorrectos',
            buttons: ['Aceptar']
          });
          alert.present();
   //  console.log('token enviado');
        }
        // this.nav.push(ConfirmPage, {tok: this.users});
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  login(usuario){
  	this.userService.getSms()
    .subscribe(
      (data) => {
        this.users = data['results'];
        // console.log(this.users);
        this.nav.push(ConfirmPage, {tok: this.users, user: usuario});
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  	private createMyForm(){
	  return this.formBuilder.group({
		    name: ['', Validators.required],
		    password: ['', Validators.required],
		  });
	}


}
