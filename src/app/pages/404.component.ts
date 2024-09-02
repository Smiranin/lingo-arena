import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: '404',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <a class="text-blue-500 hover:text-blue-800" routerLink="/">
          Go to the dashboard
        </a>
      </p>
    </div>
  `
})
export class NotFoundComponent {

}
