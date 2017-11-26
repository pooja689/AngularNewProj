import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatabindingComponent implements OnInit {

  nm = 'android';
  data = '';
  isAl = false;

  plc = {
    txt: 'Your name'
  }
  ;
  constructor() { }

  ngOnInit() {
  }

  dt() {
    return new Date();
  }

  tglAlt() {
    this.isAl = !this.isAl;
  }

  onCardClick(str: string) {
    this.nm = str;
  }
}
