import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { SwiperPaginationComponent } from '../../components/swiper-pagination/swiper-pagination.component';
import { CardToysComponent } from '../../components/card-toys/card-toys.component';
import { ClientCardComponent } from '../../components/client-card/client-card.component';
import { QuestionPanelComponent } from '../../components/question-panel/question-panel.component';
import { VirtualRoomComponent } from '../../components/virtual-room/virtual-room.component';
import { CoopereteComponent } from '../../components/cooperete/cooperete.component';
import { DataToysService } from '../../services/dataToys.service';
import { IToys } from '../toys/toys.component';
import { SliderComponent } from "../../components/slider/slider.component";



interface IQuestion {
  question: string,
  answer: string
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SwiperPaginationComponent, CardToysComponent, ClientCardComponent, QuestionPanelComponent, VirtualRoomComponent, CoopereteComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {

  dataToys = inject(DataToysService)

  questionsArr: IQuestion[] = [
    {
      question: 'How do I know which line to choose?',
      answer: 'KiwiCo subscriptions are available across flexible options. Choose from 1, 3, 6, or 12 month plans. And once you get started, you can switch lines, pause, or cancel anytime!'
    },
    {
      question: 'Whats included in each crate?',
      answer: 'Asking the right questions in the right way and at the right time is a powerful combination. Do you know why? Questions transform your relationships and allow you to uncover customers’ deep, often hidden emotional needs. This idea of questions, first proposed by Socrates some 2,400 years ago, has helped people and organizations clarify intentions, expand thinking, and help opposing parties reach agreement ever since.'
    },
    {
      question: 'Why ask more questions ?',
      answer: 'Asking a lot of questions unlocks learning and improves interpersonal bonding. Questions are such powerful tools that they can be beneficial—perhaps particularly so—in circumstances when question asking goes against social norms.'
    },
    {
      question: 'What is Angular used for ?',
      answer: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.'
    },
  ]

  toys: IToys[] = []



  ngOnInit(): void {
    this.dataToys.firsPage.subscribe(data => {
      this.toys = data
    })

  }

}
