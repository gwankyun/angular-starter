import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NativeComponent implements OnInit {

  checkbox: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChange(c: boolean) {
    console.log(`${c}`);
  }

}
