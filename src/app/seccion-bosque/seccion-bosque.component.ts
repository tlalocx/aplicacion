import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-seccion-bosque',
  templateUrl: './seccion-bosque.component.html',
  styleUrls: ['./seccion-bosque.component.css']
})
export class SeccionBosqueComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  dataBosque = [
    {
      renderizar: true,
      img: 'assets/images/Bosque-de-noruega.png',
      titulo: 'Bosque de Noruega',
      descripcion:
        'A los gatos bosque de Noruega les encanta la gente y se desarrollan mejor con compañía humana. A veces, pueden ser muy insistentes pidiendo atención. En otras ocasiones, puede que se muestren bastante independientes. Están acostumbrados a la vida al aire libre y muy bien adaptados al vagabundeo y a la caza; también se dice que son excelentes escaladores. Pueden ser compañeros muy gratificantes, por su naturaleza enormemente amistosa y juguetona. Es una raza de desarrollo lento y puede que no alcance la madurez hasta los cuatro años.',
      lista: [
        {
          pais: 'Escandinavia',
          salud:
            'El bosque de Noruega parece ser una raza robusta y no se tiene constancia de problemas hereditarios importantes. Nice',
          aseo: 'El bosque de Noruega necesita bastantes cuidados. Si se le acostumbra al cepillo y al peine desde pequeñito, acabará disfrutando del aseo habitual como parte de la relación entre gato y humano.',
        },
        {
          pais: 'Canada',
          salud: 'Buena',
          aseo: 'Mucho'
        },
      ],
    }]
    
    element!: boolean;
    showData(titulo: String) {
      let array = this.dataBosque.map((x, y, z) => {
        if (x.titulo === titulo) {
          if (x.renderizar === false) {
            x.renderizar = true;
          } else {
            x.renderizar = false;
          }
        }
        return x;
      });
    }
  
    mensaje = '';
    
    visualizarMensaje = false;
    notificacion(valor: boolean, titulo: String) {
      this.showData(titulo);
      this.mensaje = 'Se cerro la ventana de ' + titulo;
      this.visualizarMensaje = true;
    }
  
      
    visualizarMensaje2 = false;
    notificacion2(busqueda: String) {
      this.showData(busqueda);
      this.mensaje = 'Se esta buscando por ' + busqueda;
      this.visualizarMensaje2 = true;
    }
  
    cerrarNotificacion(){
      this.visualizarMensaje = false;
    }
  
    filtro(busqueda:any){
     
    }
}
