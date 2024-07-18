import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-question-panel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './question-panel.component.html',
  styleUrl: './question-panel.component.scss',
  animations: [
    trigger('slideToggle', [
      state('closed', style({
        height: '0px',
        overflow: 'hidden',
        padding: '0 10px'
      })),
      state('open', style({
        height: '*',
        padding: '10px'
      })),
      transition('closed <=> open', [
        animate('600ms ease-in-out')
      ])
    ])
  ]
})
export class QuestionPanelComponent {
isOpen = false

@Input() question!: string
@Input() answer!: string



togglePanel() {
  this.isOpen = !this.isOpen;
}
}
