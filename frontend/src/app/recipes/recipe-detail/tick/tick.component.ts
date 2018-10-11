import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.scss']
})
export class TickComponent implements OnInit {

  constructor() {
  }

  ticked: boolean = false;
  @Input() enabled: boolean = true;
  @Output() onTickChange = new EventEmitter<boolean>();

  ngOnInit() {
  }

  toggle() {
    if (!this.enabled) {
      return;
    }
    this.ticked = !this.ticked;
    if (this.onTickChange) {
      this.onTickChange.next(this.ticked);
    }
  }

}
