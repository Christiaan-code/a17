import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HoldableButtonComponent } from './holdable-button/holdable-button.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HoldableButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a17';
}
