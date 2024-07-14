import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper-pagination',
  standalone: true,
  imports: [],
  templateUrl: './swiper-pagination.component.html',
  styleUrl: './swiper-pagination.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperPaginationComponent  {
@Input() withPagination:boolean = false

}
