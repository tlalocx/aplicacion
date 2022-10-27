import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css'],
})
export class Componente1Component implements OnInit, OnChanges, OnDestroy {
  private _property = "";
  
  @Input()
  dataGato: any;

  @Output() emmiter = new EventEmitter<boolean>();
  @Output() busqueda = new EventEmitter<String>();
  fDataGatoLista: any;

  constructor() {}

  ngOnInit(): void {
    this.fDataGatoLista = this.dataGato.lista;
  }

  ngOnChanges(): void {
    debugger;
  }
  ngOnDestroy(): void {
    debugger;
  }

  emitSomething() {
    this.emmiter.emit(false);
  }

  applyFilter(filterValue: string) {
    
    if (!filterValue) this.ngOnInit(); // Si no se da valores
    else {
      for (let object of this.dataGato.lista) {
      
        if (object.pais.includes(filterValue)) {
          this.fDataGatoLista = [];
          this.fDataGatoLista.push({
            pais: object.pais,
            salud: object.salud,
            aseo: object.aseo,
          });
          break;
        }
      }
      this.busqueda.emit(filterValue);
    }
  }
get property(){
  return this._property;
}
set property(filterValue:String){
  if (!filterValue) this.ngOnInit(); // Si no se da valores
    else {
      for (let object of this.dataGato.lista) {
      
        if (object.pais.includes(filterValue)) {
          this.fDataGatoLista = [];
          this.fDataGatoLista.push({
            pais: object.pais,
            salud: object.salud,
            aseo: object.aseo,
          });
          break;
        }
      }
      this.busqueda.emit(filterValue);
    }
}


}
