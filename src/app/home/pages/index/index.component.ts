import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, Subject, from } from 'rxjs';
import { throttleTime, filter, map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // this.crearObs().subscribe( num => {
    //   console.log('desde el subscribe', num);
    // });
    // this.crearObs2().subscribe( num => {
    //   console.log(num);
    // });
    // this.obsEvent().subscribe((data) => {
    //   console.log(data);
    // });
    // this.clickEvent();
    // this.subjectTest();
    // this.testFilterOperator();
    // this.testPluckOp();

  }

  crearObs() {
    const observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    });
    return observable$;
  }

  crearObs2() {
    const observable$ = new Observable((observer) => {
      let num = 0;
      const interval = setInterval(() => {
        observer.next(num);
        num++;
        if (num > 5) {
          console.log('Complete.... :(');
          observer.complete();
          clearInterval(interval);
        }
      } , 2000);
    });
    return observable$;
  }

  obsEvent() {
    const observable$ = fromEvent(document, 'mousemove');
    observable$.pipe(throttleTime(500));
    return observable$;
  }

  clickEvent() {
    const observable$ = fromEvent(document, 'click');
    const resultado = observable$.pipe(throttleTime(5000));

    resultado.subscribe((data) => {
      console.log(data);
    });
  }

  subjectTest() {
    const subject$ = new Subject();

    const $observer1 = subject$.subscribe(
        data => console.log('Observer 1: ', data)
    );

    subject$.next(1);
    subject$.next(2);

    const $observer2 = subject$.subscribe(
        data => console.log('--> Observer 2: ', data),
        error => console.error(error),
        () => 'Observer 2 completed!'
    );

    subject$.next(3);

    $observer2.unsubscribe();

    subject$.next(4);
  }

  testFilterOperator() {
    const observable$ = from([1, 3, 4, 6, 7, 43]);

    observable$.pipe(
        filter(num => num % 2 === 0),
        map(num => num ** 2)
        ).subscribe(
          num => console.log(num),
        );
  }

  testPluckOp() {
    const observable$ = from([
      { nombre: 'richard', edad: 12 },
      { nombre: 'jhon', edad: 20 },
      { nombre: 'carlos', edad: 18 },
      { nombre: 'juan', edad: 30 },
    ]);
    observable$.pipe(
      pluck('nombre')
    ).
    subscribe((data) => {
      console.log(data);
    });
  }

  // testSwitchMap() {
  //   const observable1$ = from(['A', 'B', 'C']);
  //   const observable2$ = from([1, 2, 3]);
  //   observable1$.switchMap(
  //     () => observable2$,
  //     (x, y) => ' ' + x + y
  //   )
  //   .subscribe((data) => {
  //     console.log(data);
  //   });
  // }

}
