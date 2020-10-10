import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../to-do/to-do'

@Component({
  selector: 'app-to-do-drawer',
  template: `
    <div *ngIf="toDo">
      <input nz-input placeholder="Basic usage" [(ngModel)]="toDo.content" />
      <nz-slider nzMin="0" nzMax="9" [(ngModel)]="toDo.level"></nz-slider>
    </div>
  `,
  styles: [
  ]
})
export class ToDoDrawerComponent implements OnInit {
  @Input() toDo: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
