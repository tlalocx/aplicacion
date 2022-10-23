import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component implements OnInit {
  @Input() dataGato: any;
  @Output() emmiter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  
  emitSomething(value: string) {
    this.emmiter.emit(value);
  }

}
