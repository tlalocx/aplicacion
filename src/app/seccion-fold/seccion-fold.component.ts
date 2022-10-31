import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-fold',
  templateUrl: './seccion-fold.component.html',
  styleUrls: ['./seccion-fold.component.css']
})
export class SeccionFoldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataFold = [
    {
      renderizar: false,
      img: 'assets/images/Fold.png',
      titulo: 'Fold Escoces',
      descripcion:
        'El fold escocés, llamado así por sus orejas dobladas hacia adelante (fold en inglés significa pliegue o doblez), se consideró en un principio una mutación natural en Escocia en la década de los sesenta. Numerosos veterinarios y jueces británicos decidieron que las orejas dobladas de esta raza eran una deformidad indeseable e imposibilitarían que el gato se limpiara las orejas. Las deformidades de la columna vertebral, las patas traseras y la cola también aparecieron al cruzar estos gatos de orejas dobladas entre sí. Por este motivo, el órgano rector de la asociación británica de amigos de los gatos decidió no permitir el registro del fold escocés. La raza es popular en los Estados Unidos y en otros países.',
      lista: [
        {
          pais: 'Escocia',
          salud:
            'Estos gatos pueden sufrir una dolorosa enfermedad articular degenerativa durante toda su vida. Esta enfermedad se debe a que la mutación del fold escocés afecta negativamente al cartílago; se ve sobre todo en cómo se pliega el cartílago de la oreja hacia delante. A medida que la enfermedad avanza, las articulaciones se endurecen, los huesos se fusionan y el movimiento se vuelve más difícil y doloroso. El gato pasa de una ligera cojera a mostrarse reacio a moverse.',
          aseo: 'El pelaje denso y corto del fold escocés es fácil de cuidar, no necesita ningún tratamiento especial, pero sí un cepillado para retirarle el pelo muerto. Al fold escocés le cuesta limpiarse las orejas, por lo que su dueño debe retirarle la cera o suciedad depositadas en el oído externo para evitar infecciones.',
        },
        {
          pais: 'Nicaragua',
          salud:
            'Estos gatos pueden sufrir una dolorosa enfermedad articular degenerativa durante toda su vida. Esta enfermedad se debe a que la mutación del fold escocés afecta negativamente al cartílago; se ve sobre todo en cómo se pliega el cartílago de la oreja hacia delante. A medida que la enfermedad avanza, las articulaciones se endurecen, los huesos se fusionan y el movimiento se vuelve más difícil y doloroso. El gato pasa de una ligera cojera a mostrarse reacio a moverse.',
          aseo: 'El pelaje denso y corto del fold escocés es fácil de cuidar, no necesita ningún tratamiento especial, pero sí un cepillado para retirarle el pelo muerto. Al fold escocés le cuesta limpiarse las orejas, por lo que su dueño debe retirarle la cera o suciedad depositadas en el oído externo para evitar infecciones.',
        }
      ],
    },];

    element!: boolean;
    showData(titulo: String) {
      let array = this.dataFold.map((x, y, z) => {
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
