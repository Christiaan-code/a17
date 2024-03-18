import { Component, Signal, computed } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MyService } from './my.service'
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component'
import { CustomCardComponent } from './custom-card/custom-card.component'
import { LoadingSpinner2Component } from './loading-spinner-2/loading-spinner-2.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingSpinnerComponent, LoadingSpinner2Component, CustomCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private myService: MyService) {}
  title: string = 'a17'

  items1: Signal<string[] | null> = this.myService.items1
  items2: Signal<number[] | null> = this.myService.items2

  loaded1: Signal<boolean> = computed(() => {
    return this.items1() !== null
  })

  loaded2: Signal<boolean> = computed(() => {
    return this.items2() !== null
  })
}
