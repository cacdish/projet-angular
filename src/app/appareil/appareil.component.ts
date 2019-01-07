import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

// appareilName: string = 'Machine à laver Thomson';
@Input() appareilName: string;
@Input() appareilStatus: string;
@Input() indexOfAppareil: number;
@Input() id: number;

  constructor(private appareilservice: AppareilService) { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if (this.appareilStatus === 'allumé') {
      return 'green';
    }else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilservice.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilservice.switchOffOne(this.indexOfAppareil);
  }

}
