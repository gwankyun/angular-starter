import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div nz-row>
      <div nz-col nzSpan="2">
        {{ counter }}
      </div>
      <div nz-col>
        <app-child
          [input]="counter"
          (output)="onChildOutput($event)">
        </app-child>
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChildOutput(output: number): void {
    this.counter = output;
  }

}
