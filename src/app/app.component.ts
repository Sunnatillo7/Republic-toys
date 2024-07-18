import { AfterViewChecked, AfterViewInit, Component, ElementRef, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { CardToysComponent } from './components/card-toys/card-toys.component';
import { AsyncPipe } from '@angular/common';
import { title } from 'process';
import { ShareRouteService } from './services/shareRoute.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



interface IQueryParam {
  name: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatTooltipModule, MatIconModule, FooterComponent, HeaderFooterComponent, CardToysComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  route = inject(ActivatedRoute)
  private router = inject(Router)
  activePage = ''
  isActive = 1

  @ViewChild('inp') inp!: ElementRef
  pagesName = ['Toys', '360° Showroom', 'About Us', 'Contacts']

  qParam = 'home'

  shareRouteService = inject(ShareRouteService)

  formGroup = new FormGroup({
    constructors: new FormControl(false),
    cars: new FormControl(false),
    girls: new FormControl(false),
    mentalDevelopment: new FormControl(false),
    sportToys: new FormControl(false),
  })




  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.activePage = data['title']

      // console.log(this.inp, 'INP');


    })

  }


  submit() {
    if (this.formGroup.controls.cars.value) {
      this.shareRouteService.page.next('Cars')
    }
     if (this.formGroup.controls.constructors.value) {
      this.shareRouteService.page.next('Constructors')
    }
     if (this.formGroup.controls.girls.value) {
      this.shareRouteService.page.next('Girls')
    }
     if (this.formGroup.controls.mentalDevelopment.value) {
      this.shareRouteService.page.next('Mental Development')
    }
     if (this.formGroup.controls.sportToys.value) {
      this.shareRouteService.page.next('Sport toys')
    }

    


  }



  // goToPages(item:string){
  // if(item === '360° Showroom'){
  //   this.router.navigate(['showroom'], {queryParams:{title:'showroom'}})
  //   this.isActive = true

  // }
  // if(item === 'Contacts'){
  //   this.router.navigate(['contact'], {queryParams:{title:'contact'}})
  //   this.isActive = true

  // }
  // if(item === 'About Us'){
  //   this.router.navigate(['about-us'])
  //   this.isActive = true

  // }
  // if(item === 'Toys'){
  //   this.router.navigate(['toys'],{queryParams:{title:'toys'}})
  //   this.isActive = true

  // }


  // }
  goToToys() {
    this.router.navigate(['toys'], { queryParams: { title: 'toys' } })
    this.isActive = 2
  }
  goToShowroom() {
    this.router.navigate(['showroom'], { queryParams: { title: 'showroom' } })
    this.isActive = 3
  }
  goToAboutUs() {
    this.router.navigate(['about-us'], { queryParams: { title: 'about-us' } })
    this.isActive = 4
  }
  goToContact() {
    this.router.navigate(['contact'], { queryParams: { title: 'contatc' } })
    this.isActive = 5
  }
}
