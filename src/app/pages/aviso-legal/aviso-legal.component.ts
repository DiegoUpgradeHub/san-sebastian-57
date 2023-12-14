import { Component } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.scss']
})
export class AvisoLegalComponent {

  website: string = 'website.com';
  mail: string = 'diegoperez.developer@gmail.com';
  companyName: string = 'Restaurante San Sebastián 57';
  companyAddress: string = 'Av. de San Sebastián, 57, 38005 Santa Cruz de Tenerife, España';

}
