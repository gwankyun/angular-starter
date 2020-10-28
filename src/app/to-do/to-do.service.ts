import { Injectable } from '@angular/core';
import { ToDo } from './to-do';
import { current, produce } from 'immer';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  data: ToDo [] = [];

  constructor() { }

  getData(): ToDo [] {
    return this.data;
  }

  add(toDo: ToDo): ToDo [] {
    this.data = produce(this.data, draft => {
      draft.push({ id: toDo.id, content: toDo.content, level: toDo.level, deleted: false });
    });
    return this.data;
  }

  remove(toDo: ToDo): ToDo [] {
    const index = this.data.findIndex(x => x.id === toDo.id);
    if (index !== -1) {
      this.data = produce(this.data, draft => {
        // draft.splice(index, 1);
        draft[index].deleted = true;
      });
    }
    return this.data;
  }

  set(index: number, item: ToDo): ToDo [] {
    this.data = produce(this.data, draft => {
      draft[index] = item;
    });
    return this.data;
  } 
}
