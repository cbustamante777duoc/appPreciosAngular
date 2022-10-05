import { Component } from '@angular/core';
import { Productos } from 'src/app/model/productos';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

  listaProductos: Productos[] = [
    {
      titulo: 'STARTER',
      pre: 14,
      correo: false,
      bandwidth: '250 GB Bandwidth',
      caracteristicaUno: '5 gb Disk space',
      caracteristicaDos: 'Support 24/7',
    },
    {
      titulo: 'SUPER PREMIUM',
      pre: 25,
      correo: true,
      bandwidth: '250 GB Bandwidth',
      caracteristicaUno: '10 gb Disk space',
      caracteristicaDos: 'Support 24/7'
    },
    {
      titulo: 'ULTIMATE PREMIUM',
      pre: 34,
      correo: true,
      bandwidth: 'Unlimited Bandwidth',
      caracteristicaUno: 'Unlimited Disk space',
      caracteristicaDos: 'Support 24/7'
    },
    {
      titulo: 'Unlimited Preference',
      pre: 120,
      correo: true,
      bandwidth: 'unlimited for ever',
      caracteristicaUno: 'Unlimited Disk space',
      caracteristicaDos: 'Support 24/7'
    }
  ];

  mostrarTabla:boolean = false;

  showContent():void{
    this.mostrarTabla = !this.mostrarTabla;
  }

}
