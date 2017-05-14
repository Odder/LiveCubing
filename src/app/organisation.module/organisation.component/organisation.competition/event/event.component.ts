import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../../models/models.event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() competitionId: string;
  @Input() event: Event;
  isNewRoundFormVisible = false;
  constructor() { }

  ngOnInit() {
  }

  toggleNewRoundForm = () => {
    this.isNewRoundFormVisible = !this.isNewRoundFormVisible;
  }
}
