import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { current, produce } from 'immer';
import { ToDo } from './to-do';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-to-do',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div nz-row>
      <div nz-col nzSpan="20">
        <input nz-input placeholder="Basic usage" [(ngModel)]="inputValue" />
      </div>
      <div nz-col nzSpan="4">
        <button nz-button nzType="primary" nzBlock="true" (click)="onAdd()">+</button>
      </div>
    </div>
    <nz-list nzBordered nzHeader="Header" nzFooter="Footer">
      <nz-list-item *ngFor="let item of data">
        <app-to-do-item [toDo]="item"
          (edit)="onEdit($event)"
          (remove)="onRemove($event)">
        </app-to-do-item>
      </nz-list-item>
    </nz-list>
    <nz-drawer [nzClosable]="false" [nzVisible]="visible" nzPlacement="right" nzTitle="編輯" (nzOnClose)="onClose(edit)">
      <app-to-do-drawer [toDo]="edit"></app-to-do-drawer>
    </nz-drawer>
  `,
  styles: [
  ]
})
export class ToDoComponent implements OnInit {
  data: ToDo [] = [];
  inputValue: string = "";
  inputIndex: number = 0;
  visible: boolean = false;
  editValue: string = "";
  editId: number = -1;
  edit?: ToDo = undefined;

  constructor(public toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    console.log("onAdd");
    this.data = this.toDoService.add({ id: this.inputIndex, content: this.inputValue, level: 0 });
    this.inputIndex++;
    this.inputValue = '';
  }

  onRemove(item: ToDo): void {
    this.data = this.toDoService.remove(item);
  }

  onEdit(item: ToDo): void {
    this.visible = true;
    this.edit = { id: item.id, content: item.content, level: item.level };
  }

  onClose(item?: ToDo): void {
    this.visible = false;
    if (item) {
      const index = this.data.findIndex(x => x.id === item.id);
      console.log(`index: ${index}`);
      if (index !== -1) {
        this.data = this.toDoService.set(index, this.edit);
      }
    }
  }
}
