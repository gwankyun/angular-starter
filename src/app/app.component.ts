import { Component } from '@angular/core';
import { Observable, of } from 'rxjs'
// import { of } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div nz-row>
      <nz-tabset>
        <nz-tab nzTitle="開關">
          <nz-switch [(ngModel)]="switchValue"></nz-switch>
        </nz-tab>
        <nz-tab nzTitle="選擇器">
          <nz-select ngModel="A">
            <nz-option nzValue="A" nzLabel="A"></nz-option>
            <nz-option nzValue="B" nzLabel="B"></nz-option>
            <nz-option nzValue="C" nzLabel="C"></nz-option>
            <nz-option nzValue="D" nzLabel="D"></nz-option>
          </nz-select>
        </nz-tab>
        <nz-tab nzTitle="多選框">
          <label nz-checkbox [(ngModel)]="checked">Checkbox</label>
        </nz-tab>
        <nz-tab nzTitle="單選框">
          <nz-radio-group [(ngModel)]="radioValue">
            <label nz-radio nzValue="A">A</label>
            <label nz-radio nzValue="B">B</label>
            <label nz-radio nzValue="C">C</label>
            <label nz-radio nzValue="D">D</label>
          </nz-radio-group>
        </nz-tab>
        <nz-tab nzTitle="滑動輸入條">
          <nz-slider [(ngModel)]="value" [nzDisabled]="disabled"></nz-slider>
        </nz-tab>
        <nz-tab nzTitle="日期選擇框">
          <nz-date-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" [nzMode]="datePickerMode"></nz-date-picker>
          <nz-select [(ngModel)]="datePickerMode">
            <nz-option nzValue="date" nzLabel="date"></nz-option>
            <nz-option nzValue="week" nzLabel="week"></nz-option>
            <nz-option nzValue="month" nzLabel="month"></nz-option>
            <nz-option nzValue="year" nzLabel="year"></nz-option>
          </nz-select>
        </nz-tab>
        <nz-tab nzTitle="待辦">
          <app-to-do></app-to-do>
        </nz-tab>
        <nz-tab nzTitle="計數器">
          <app-counter></app-counter>
        </nz-tab>
        <nz-tab nzTitle="組件間交互">
          <app-parent></app-parent>
        </nz-tab>
        <nz-tab nzTitle="RxJS">
          <button nz-button nzType="primary" nzBlock="true" (click)="onOf()">of</button>
        </nz-tab>
      </nz-tabset>
    </div>
  `
})
export class AppComponent {
  title = 'angular-starter';
  disabled = false;
  value: number = 50;
  checked: boolean = false;
  radioValue: string = 'A';
  selectValue: string = 'A';
  switchValue: boolean = false;
  date: Date = null;
  datePickerMode: string = 'date';

  nums: Observable<number> = of(1, 2, 3);

  onChange(date: Date): void {
    console.log(`date: ${date}`);
  }

  onOf(): void {
    this.nums.subscribe({
      next(x) {
        console.log(`next: ${x}`);
      },
      error(e) {
        console.error(`error: ${e}`);
      },
      complete() {
        console.log(`complete`)
      }
    });
  }
}
