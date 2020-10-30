import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { Observable, Subscriber, of, interval, fromEvent } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getFromEvent();
  }

  getData(): void {
    const observable = new Observable((observer: Subscriber<string>) => {
      observer.next('A');
      observer.next('B');
      observer.next('C');
      observer.complete();
    });

    let observer = observable.subscribe((data: string) => {
      console.log(`data: ${data}`);
    });

    observer.unsubscribe();
  }

  getOf(): void {
    const observable = of(1, 2, 3, 4, 5).
      pipe(
        map((v) => v * 2),
        filter((v) => v < 10));

    let observer = observable.subscribe({
      next: x => console.log(`data: ${x}`),
      complete: () => console.log(`complete`)
    });
  }

  getInterval(): void {
    const observable = interval(1000).pipe(take(10));

    let observer = observable.subscribe({
      next: x => console.log(`data: ${x}`),
      complete: () => console.log(`complete`)
    });
  }

  getFromEvent(): void {
    const el = document.getElementById('yes');
    if (el) {
      const click = fromEvent(el, 'click');
      click.subscribe({
        next: (x) => console.log(`click`)
      });
    }
  }
}
