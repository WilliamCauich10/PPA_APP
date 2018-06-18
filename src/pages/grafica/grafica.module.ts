import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraficaPage } from './grafica';
// import { BarHorizontalPage } from './grafica';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    GraficaPage,
    // BarHorizontalPage,
  ],
  imports: [
    // NgxChartsModule,
    IonicPageModule.forChild(GraficaPage),
  ],
})
export class GraficaPageModule {}
