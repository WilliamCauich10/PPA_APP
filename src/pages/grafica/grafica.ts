import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController,reorderArray } from 'ionic-angular';
import { Chart } from 'chart.js';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@IonicPage()
@Component({
  selector: 'page-grafica',
  templateUrl: 'grafica.html',
})
export class GraficaPage {
  users: any[] = [];
   qp = [];
   qp2 =[];
  //grafica
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('barCanvas2') barCanvas2;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  barChart: any;
  barChart2: any;
  doughnutChart: any;
  // 
  grafif: string="";
	gaming: string = "1";
  // 
  	compras:any[];
  	compara: boolean=false;
	testRadioOpen: boolean;
	testRadioResult;
// 
  public event = {
    timeStarts: new Date().toISOString(),
    timeEnds: new Date().toISOString()
  }
// 

  constructor(public navCtrl: NavController, public userService: UserServiceProvider, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }
  GenerarGrafica(Tipo,FechaStart,FechaEnd,user2) {
    this.qp =[];
    // this.users=[];
    console.log(user2);
    //Datos de busqueda
    this.userService.getGraficar(Tipo,FechaStart.substring(0,10),FechaEnd.substring(0,10)+1)
    .subscribe(
      (data) => {
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
    // this.ionViewDidLoad(Tipo,FechaStart.substring(0,10),FechaEnd.substring(0,10));

     for (var i = 1; i < 12; ++i) {
       this.qp.push(0);
    }
    for (var re of this.users) {
        this.qp[re.MUNI_MUNICIPIO-1]= re.total;
      }
    // Generar
    this.barChart = new Chart(this.barCanvas2.nativeElement, {
            type: 'bar',
            data: {
                labels: ["1","2","3","4","5","6","7","8","9","10","11"
                ],
                datasets: [{
                    label: 'Total',
                    data: this.qp,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(68, 225, 33, 0.2)',
                        'rgba(127, 56, 68, 0.2)',
                        'rgba(5, 252, 136, 0.2)',
                        'rgba(5, 61, 252, 0.2)',
                        'rgba(199, 0, 57, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(68, 225, 33, 1)',
                        'rgba(127, 56, 68, 1)',
                        'rgba(5, 252, 136, 1)',
                        'rgba(5, 61, 252, 1)',
                        'rgba(199, 0, 57, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
    //
  }
  // 
  showConfirm(Tipo,FechaStart,FechaEnd) {
    this.userService.getGraficar(Tipo,FechaStart.substring(0,10),FechaEnd.substring(0,10)+1)
              .subscribe(
                (data) => {
                  this.users = data['results'];
                },
                (error) =>{
                  console.error(error);
                }
              )
              console.log(this.users);
    let confirm = this.alertCtrl.create({
      title: 'Generar Grafica',
      message: 'Desea generar la grafica con los valores: insertados ?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            
            console.log('Agree clicked');
            this.GenerarGrafica(Tipo,FechaStart,FechaEnd,this.users);
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
  }  

}
