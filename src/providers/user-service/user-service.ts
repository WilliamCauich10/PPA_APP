import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
	IP="localhost";
  // IP ="192.168.43.195";//cel
  // IP="192.168.1.70";
	getUsers() {
		return this.http.get('http://'+this.IP+'/PPA_Movil/index.php/PPA_Proyecto/correo/');
	}
  getTotal() {
    return this.http.get('http://'+this.IP+'/PPA_Movil/index.php/PPA_Proyecto/Total/');
  }
  getGraficar(tipo,fecha1,fecha2) {
    return this.http.get('http://'+this.IP+'/PPA_Movil/index.php/PPA_Proyecto/Grafica/'+tipo+'/'+fecha1+'/'+fecha2);
  }
  getGrafica(){
    return this.http.get('http://'+this.IP+'/PPA_Movil/index.php/PPA_Proyecto/Grafica/');
  }
  getNumero(usuario){
    return this.http.get('http://'+this.IP+'/PPA_Movil/index.php/PPA_Proyecto/Numero/'+usuario);
  }
  getSms(){
    return this.http.get('http://'+this.IP+'/PPA_Movil/index.php/PPA_Proyecto/Sms/');
  }
  getEnviar(token, numero){
    return this.http.get('http://'+this.IP+'/PPA_Movil/index.php/PPA_Proyecto/EnviadoSMS/'+token+'/'+numero);
  }
  getlogin(usuario, contraseña){
    return this.http.get('http://'+this.IP+'/PPA_Movil/index.php/PPA_Proyecto/Login/'+usuario+'/'+contraseña);
  }

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

}
