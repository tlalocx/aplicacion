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
      img: 'assets/images/Bosque-de-noruega.png',
      titulo: 'Bosque de Noruega',
      descripcion:
        'A los gatos bosque de Noruega les encanta la gente y se desarrollan mejor con compañía humana. A veces, pueden ser muy insistentes pidiendo atención. En otras ocasiones, puede que se muestren bastante independientes. Están acostumbrados a la vida al aire libre y muy bien adaptados al vagabundeo y a la caza; también se dice que son excelentes escaladores. Pueden ser compañeros muy gratificantes, por su naturaleza enormemente amistosa y juguetona. Es una raza de desarrollo lento y puede que no alcance la madurez hasta los cuatro años.',
    },
    {
      img: 'assets/images/Fold.png',
      titulo: 'Fold Escoces',
      descripcion:
        'El fold escocés, llamado así por sus orejas dobladas hacia adelante (fold en inglés significa pliegue o doblez), se consideró en un principio una mutación natural en Escocia en la década de los sesenta. Numerosos veterinarios y jueces británicos decidieron que las orejas dobladas de esta raza eran una deformidad indeseable e imposibilitarían que el gato se limpiara las orejas. Las deformidades de la columna vertebral, las patas traseras y la cola también aparecieron al cruzar estos gatos de orejas dobladas entre sí. Por este motivo, el órgano rector de la asociación británica de amigos de los gatos decidió no permitir el registro del fold escocés. La raza es popular en los Estados Unidos y en otros países.',
    },
    {
      img: '/assets/images/Sphynx.png',
      titulo: 'Sphynx',
      descripcion:
        'Hace generaciones que se conocen gatos sin pelo; se dice que los aztecas tenían gatos sin pelo. El sphynx es el primer gato sin pelo que ha sido criado específicamente por ese rasgo. El programa de reproducción comenzó en 1966 en Ontario, Canadá, cuando una gata doméstica tuvo un gatito macho sin pelo. Sin embargo, la mayoría de los sphynx actuales descienden de tres gatitos sin pelo encontrados en Toronto en 1978.',
    },
  ];
}
