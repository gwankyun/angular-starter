import { Component } from '@angular/core';
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  items: number[] = [1, 2, 3, 4, 5];

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
