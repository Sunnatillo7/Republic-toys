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
      this.checkedArr.push(data)

    })

    this.dataToys.firsPage.subscribe(data => {
      this.firstPage = data
      this.filteredPage = this.firstPage
    })

    this.dataToys.secondPage.subscribe(data => {
      this.secodPage = data
    })
  }

  filterResults(value: string) {
    if (!value) {
    this.filteredPage = this.firstPage
    return
    }
    this.filteredPage = this.firstPage.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  }

  checkedArr = ['Boys', 'Wheelchairs and swings']

  filteredPage: IToys[] = []

  firstPage: IToys[] = []
  secodPage: IToys[] = []


}
