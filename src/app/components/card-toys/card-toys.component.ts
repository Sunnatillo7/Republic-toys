import { Component, inject, Input } from '@angular/core';
import { IToys } from '../../pages/toys/toys.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-toys',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-toys.component.html',
  styleUrl: './card-toys.component.scss'
})
export class CardToysComponent {
  router = inject(Router)
  route = inject(ActivatedRoute)

  @Input() toysItem?: IToys


  goToSinglePage(id: number | undefined) {
    this.router.navigate(['single-toy', id])
  }

}
