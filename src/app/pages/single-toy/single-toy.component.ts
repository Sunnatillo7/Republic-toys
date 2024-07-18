import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataToysService } from '../../services/dataToys.service';
import { IToys } from '../toys/toys.component';
import { map } from 'rxjs';
import { SwiperPaginationComponent } from '../../components/swiper-pagination/swiper-pagination.component';
import { CardToysComponent } from "../../components/card-toys/card-toys.component";

@Component({
  selector: 'app-single-toy',
  standalone: true,
  imports: [SwiperPaginationComponent, CardToysComponent],
  templateUrl: './single-toy.component.html',
  styleUrl: './single-toy.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SingleToyComponent implements OnInit {
  private route = inject(ActivatedRoute)
  dataToys = inject(DataToysService)

  toyId = this.route.snapshot.params['id']
  singleArr: IToys[] = []
  relatedArr: IToys[] = []



  ngOnInit(): void {

    this.dataToys.firsPage.subscribe(data => {
      this.singleArr = data.filter(item => item.id === +this.toyId)

      this.relatedArr = data.filter(item => item.id !== this.toyId)
    })







  }
}
