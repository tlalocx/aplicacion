import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component implements OnInit {
  @Input() 
   dataGato: any;
   
  @Output() emmiter = new EventEmitter<boolean>();  

   constructor() { }

  ngOnInit(): void {
  }
  
  emitSomething() {
    this.emmiter.emit(false);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataGato.filter = filterValue;
  }

}
