import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperPaginationComponent } from '../../components/swiper-pagination/swiper-pagination.component';
import { CardToysComponent } from '../../components/card-toys/card-toys.component';
import { ClientCardComponent } from '../../components/client-card/client-card.component';
import { QuestionPanelComponent } from '../../components/question-panel/question-panel.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SwiperPaginationComponent, CardToysComponent, ClientCardComponent, QuestionPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {


  }

}
