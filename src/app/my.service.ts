import { Injectable, Signal } from '@angular/core'
import { of, delay, Observable } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor() {}

  items1: Signal<string[] | null> = toSignal(this.getItems1(), { initialValue: null })
  items2: Signal<number[] | null> = toSignal(this.getItems2(), { initialValue: null })

  getItems1(): Observable<string[]> {
    return of(['Delayed content®']).pipe(delay(3000))
  }

  getItems2(): Observable<number[]> {
    return of([]).pipe(delay(3000))
  }
}
