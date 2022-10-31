import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})


export class NotificacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  mensaje = "";

  cerrarMensaje(){
    //vizualizarMensaje = false;
  }
}
