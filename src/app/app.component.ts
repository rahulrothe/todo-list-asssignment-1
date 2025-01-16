import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark as standalone
  imports: [RouterOutlet],  // Add this import
})
export class AppComponent {
  title = 'todo-list-app';
}
