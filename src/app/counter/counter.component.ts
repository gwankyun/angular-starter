import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div nz-row>
      <div nz-col nzSpan="12">
        <input nz-input placeholder="Basic usage" [(ngModel)]="value" />
      </div>
      <div nz-col nzSpan="12">
        <button nz-button nzType="primary" (click)="onDec()">-</button>
        <button nz-button nzType="primary" (click)="onReset()">50</button>
        <button nz-button nzType="primary" (click)="onInc()">+</button>
      </div>
    </div>
    <nz-slider [(ngModel)]="value"></nz-slider>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  value: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  onInc(): void {
    this.value++;
  }

  onDec(): void {
    this.value--;
  }

  onReset(): void {
    this.value = 50;
  }

}
