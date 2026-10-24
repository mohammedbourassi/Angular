import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home-app/home-component/home-component';
import { AboutComponent } from '../about-app/about-component/about-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
