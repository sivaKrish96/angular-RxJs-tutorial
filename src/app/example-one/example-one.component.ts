import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  observable!: Observable<String>;
  emittedValue!: String;

  constructor() { }

  observer = {
    next: (value: String) => console.log(value),
    error: (error: String) => console.log(error),
    complete: () => console.log('completed')
  }

  ngOnInit(): void {
    this.observable = new Observable<String>((observer) => {
      try {
        observer.next('Hello Angular !!!')
        setInterval(() => {
          observer.next('Siva')
        }, 2000)
        setInterval(() => {
          observer.next('Raman')
        }, 3000)
      } catch (error) {
        observer.error(error)
      }
    })

    this.observable.subscribe((data) => {
      this.emittedValue = data
    })

  }
}
