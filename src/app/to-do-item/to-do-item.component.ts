import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../to-do/to-do'

@Component({
  selector: 'app-to-do-item',
  template: `
    <div class="test" nz-row>
      <div nz-col nzSpan="20">
        <!-- <span nz-typography><mark>[ITEM]</mark></span> -->
        <button nz-button nzType="text" nzBlock="true" (click)="onEdit()">
          <div>
            {{ toDo.content }}
          </div>
        </button>
      </div>
      <div nz-col nzSpan="4">
        <button nz-button nzType="primary" (click)="onRemove()">-</button>
      </div>
    </div>
    <div class="deleted">
      111
    </div>
  `,
  styles: [
    `
      .test {
        text-decoration: line-through;
      }
    `
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
