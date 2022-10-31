import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-sphynx',
  templateUrl: './seccion-sphynx.component.html',
  styleUrls: ['./seccion-sphynx.component.css']
})
export class SeccionSphynxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataSphynx = [
    {
      renderizar: false,
      img: '/assets/images/Sphynx.png',
      titulo: 'Sphynx',
      descripcion:
        'Hace generaciones que se conocen gatos sin pelo; se dice que los aztecas tenían gatos sin pelo. El sphynx es el primer gato sin pelo que ha sido criado específicamente por ese rasgo. El programa de reproducción comenzó en 1966 en Ontario, Canadá, cuando una gata doméstica tuvo un gatito macho sin pelo. Sin embargo, la mayoría de los sphynx actuales descienden de tres gatitos sin pelo encontrados en Toronto en 1978.',
      lista: [
        {
          pais: 'Canada',
          salud:
            'Esta raza es propensa a los problemas cutáneos, incluyendo el desarrollo de erupciones y de infecciones por hongos. Hay que llevar cuidado y proteger al sphynx de las quemaduras solares. Como todos los gatos, los sphynx necesitan vacunación que los proteja de las enfermedades y chequeos veterinarios anuales.',
         aseo: ' Los dueños deben prestar mucha atención y mantener la piel del sphynx limpia y elástica. Este gato debe bañarse o limpiarse con una esponja cada semana para retirar las secreciones oleosas. También hay que limpiarle las orejas regularmente para retirar las secreciones y evitar así las infecciones de oído.',
        },{pais: 'Escocia',
        salud:
          'Estos gatos pueden sufrir una dolorosa enfermedad articular degenerativa durante toda su vida. Esta enfermedad se debe a que la mutación del fold escocés afecta negativamente al cartílago; se ve sobre todo en cómo se pliega el cartílago de la oreja hacia delante. A medida que la enfermedad avanza, las articulaciones se endurecen, los huesos se fusionan y el movimiento se vuelve más difícil y doloroso. El gato pasa de una ligera cojera a mostrarse reacio a moverse.',
        aseo: 'El pelaje denso y corto del fold escocés es fácil de cuidar, no necesita ningún tratamiento especial, pero sí un cepillado para retirarle el pelo muerto. Al fold escocés le cuesta limpiarse las orejas, por lo que su dueño debe retirarle la cera o suciedad depositadas en el oído externo para evitar infecciones.',
    }],
    },
  ];

  element!: boolean;
    showData(titulo: String) {
      let array = this.dataSphynx.map((x, y, z) => {
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
