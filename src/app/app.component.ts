import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aplicacion';

  dataGatos = [
    {
      renderizar: true,
      img: 'assets/images/Bosque-de-noruega.png',
      titulo: 'Bosque de Noruega',
      descripcion:
        'A los gatos bosque de Noruega les encanta la gente y se desarrollan mejor con compañía humana. A veces, pueden ser muy insistentes pidiendo atención. En otras ocasiones, puede que se muestren bastante independientes. Están acostumbrados a la vida al aire libre y muy bien adaptados al vagabundeo y a la caza; también se dice que son excelentes escaladores. Pueden ser compañeros muy gratificantes, por su naturaleza enormemente amistosa y juguetona. Es una raza de desarrollo lento y puede que no alcance la madurez hasta los cuatro años.',
      lista: [{ pais: "Escandinavia", salud: 'El bosque de Noruega parece ser una raza robusta y no se tiene constancia de problemas hereditarios importantes. Nice', aseo:"El bosque de Noruega necesita bastantes cuidados. Si se le acostumbra al cepillo y al peine desde pequeñito, acabará disfrutando del aseo habitual como parte de la relación entre gato y humano." }]
    },
    {
      renderizar: true,
      img: 'assets/images/Fold.png',
      titulo: 'Fold Escoces',
      descripcion:
        'El fold escocés, llamado así por sus orejas dobladas hacia adelante (fold en inglés significa pliegue o doblez), se consideró en un principio una mutación natural en Escocia en la década de los sesenta. Numerosos veterinarios y jueces británicos decidieron que las orejas dobladas de esta raza eran una deformidad indeseable e imposibilitarían que el gato se limpiara las orejas. Las deformidades de la columna vertebral, las patas traseras y la cola también aparecieron al cruzar estos gatos de orejas dobladas entre sí. Por este motivo, el órgano rector de la asociación británica de amigos de los gatos decidió no permitir el registro del fold escocés. La raza es popular en los Estados Unidos y en otros países.',
      lista: [{ pais: "Escocia", salud: 'Estos gatos pueden sufrir una dolorosa enfermedad articular degenerativa durante toda su vida. Esta enfermedad se debe a que la mutación del fold escocés afecta negativamente al cartílago; se ve sobre todo en cómo se pliega el cartílago de la oreja hacia delante. A medida que la enfermedad avanza, las articulaciones se endurecen, los huesos se fusionan y el movimiento se vuelve más difícil y doloroso. El gato pasa de una ligera cojera a mostrarse reacio a moverse.', aseo:"El pelaje denso y corto del fold escocés es fácil de cuidar, no necesita ningún tratamiento especial, pero sí un cepillado para retirarle el pelo muerto. Al fold escocés le cuesta limpiarse las orejas, por lo que su dueño debe retirarle la cera o suciedad depositadas en el oído externo para evitar infecciones."}]
    },
    {
      renderizar: true,
      img: '/assets/images/Sphynx.png',
      titulo: 'Sphynx',
      descripcion:
        'Hace generaciones que se conocen gatos sin pelo; se dice que los aztecas tenían gatos sin pelo. El sphynx es el primer gato sin pelo que ha sido criado específicamente por ese rasgo. El programa de reproducción comenzó en 1966 en Ontario, Canadá, cuando una gata doméstica tuvo un gatito macho sin pelo. Sin embargo, la mayoría de los sphynx actuales descienden de tres gatitos sin pelo encontrados en Toronto en 1978.',
      lista: [{ pais: "Canada", salud: 'Esta raza es propensa a los problemas cutáneos, incluyendo el desarrollo de erupciones y de infecciones por hongos. Hay que llevar cuidado y proteger al sphynx de las quemaduras solares. Como todos los gatos, los sphynx necesitan vacunación que los proteja de las enfermedades y chequeos veterinarios anuales.', aseo:" Los dueños deben prestar mucha atención y mantener la piel del sphynx limpia y elástica. Este gato debe bañarse o limpiarse con una esponja cada semana para retirar las secreciones oleosas. También hay que limpiarle las orejas regularmente para retirar las secreciones y evitar así las infecciones de oído."}]
    },
  ];

  element!: boolean;
  showData(titulo:String) {
    let array = this.dataGatos.map((x,y,z) =>{
      if(x.titulo === titulo){
       if(x.renderizar === false){
        x.renderizar = true;
      }else{
        x.renderizar= false;
      }
      }
      return x;
    });
  }
  mensaje = "";
  visualizarMensaje = false;
  something(valor: boolean, titulo: String){
    this.showData(titulo);
    this.mensaje = "Se cerro la ventana de " + titulo;
    this.visualizarMensaje = true;
  }

}
