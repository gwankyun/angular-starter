import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../to-do/to-do'

@Component({
  selector: 'app-to-do-item',
  template: `
    <div nz-row>
      <div nz-col nzSpan="20">
        <!-- <span nz-typography><mark>[ITEM]</mark></span> -->
        <button nz-button nzType="text" nzBlock="true" (click)="onEdit()">
          {{ toDo.content }}
        </button>
      </div>
      <div nz-col nzSpan="4">
        <button nz-button nzType="primary" (click)="onRemove()">-</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ToDoItemComponent implements OnInit {
  @Input() toDo: ToDo;
  @Output() edit = new EventEmitter<ToDo>();
  @Output() remove = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.edit.emit(this.toDo);
  }

  onRemove(): void {
    this.remove.emit(this.toDo);
  }
}
