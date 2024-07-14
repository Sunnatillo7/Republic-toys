import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

pageNames = ['Toys →', '360° Showroom →', 'About Us →', 'Contact →', 'Documents for B2B sales →', 'FAQ →']
}
