import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  router = inject(Router)

pageNames = ['Toys', '360° Showroom', 'About Us', 'Contact', 'Documents for B2B sales', 'FAQ']


goToPage(item:string){
 if(item === 'Toys'){
  this.router.navigate(['toys'])
 }
 if(item === '360° Showroom'){
  this.router.navigate(['showroom'])
 }
 if(item ===  'About Us'){
  this.router.navigate(['about-us'])
 }
 if(item === 'Documents for B2B sales'){
  this.router.navigate(['document-b2b'])
 }
}
}
