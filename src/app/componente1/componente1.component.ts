import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component implements OnInit, OnChanges, OnDestroy {
  @Input() 
   dataGato: any;
   
  @Output() emmiter = new EventEmitter<boolean>();  

   constructor() { }

  ngOnInit(): void {
    debugger;
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
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataGato.lista.filter = filterValue;
  }

}
