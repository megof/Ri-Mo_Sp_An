import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatTabsModule, 
    RouterLink, 
    MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  tabs = [
    {
      link: '/',
      name: 'Home'
    },
    {
      link: '/users',
      name: 'users'
    },
    {
      link: '/inventory',
      name: 'inventory'
    },
    {
      link: '/cards',
      name: 'cards'
    },
    {
      link: '/login',
      name: 'login?'
    },
    {
      link: '/register',
      name: 'register?'
    }
  ]
}
