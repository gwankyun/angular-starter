import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button nz-button nzType="primary" nzBlock="true" (click)="onOutput()">+1</button>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() input: number = 0;
  @Output() output = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onOutput(): void {
    this.output.emit(this.input + 1);
  }
  
}
