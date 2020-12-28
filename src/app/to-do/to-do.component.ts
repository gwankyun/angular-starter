import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { produce } from 'immer';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoComponent implements OnInit {

  items: ToDo[] = [];
  edit: string = '';
  index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.items = produce(this.items, draft => {
      if (this.edit === '') {
        alert('內容為空！');
        return;
      }
      draft.push({ content: this.edit, id: this.index });
      this.edit = '';
      this.index++;
    });
  }

  onRemove(toDo: ToDo): void {
    this.items = produce(this.items, draft => {
      const idx = draft.findIndex(i => i.id === toDo.id);
      if (idx !== -1) {
        draft.splice(idx, 1);
      }
    })
  }

}
