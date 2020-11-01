import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngComponentOutlet',
  template: `
    ngComponentOutlet
  `
})
export class NgComponentOutlet implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  checkbox: boolean = false;
  items: number[] = [1, 2, 3];
  ngComponentOutlet = NgComponentOutlet;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: boolean): void {
    this.checkbox = value;
  }

}
