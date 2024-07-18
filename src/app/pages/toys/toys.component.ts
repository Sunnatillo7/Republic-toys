import { Component, inject, OnInit } from '@angular/core';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardToysComponent } from '../../components/card-toys/card-toys.component';
import { ShareRouteService } from '../../services/shareRoute.service';
import { DataToysService } from '../../services/dataToys.service';


export interface IToys {
  article: string,
  id?: number,
  name: string,
  src: string,
  data?: {
    Articul: string,
    EAN: number,
    size: number,
    paageSize: number,
    typePacking: string,
    multipackTypeL: string,
    PackageQuantity: number
  }
}

@Component({
  selector: 'app-toys',
  standalone: true,
  imports: [PaginationComponent, CardToysComponent],
  templateUrl: './toys.component.html',
  styleUrl: './toys.component.scss'
})
export class ToysComponent implements OnInit {
  totalItems: number = 100;
  itemsPerPage: number = 12;
  activePage: number = 1

  sharedRouteService = inject(ShareRouteService)
  dataToys = inject(DataToysService)

  onPageChange(page: number) {
    console.log('Current page:', page);
    this.activePage = page



  }

  ngOnInit(): void {
    this.sharedRouteService.page.subscribe(data => {
      console.log(data, 'Array');
      this.checkedArr.push(data)

    })

    this.dataToys.firsPage.subscribe(data => {
      this.firstPage = data
    })

    this.dataToys.secondPage.subscribe(data =>{
      this.secodPage = data
    })
  }

  checkedArr = ['Boys', 'Wheelchairs and swings']



  firstPage: IToys[] = [




  ]
  secodPage :IToys[] = [
  
  ]


}
