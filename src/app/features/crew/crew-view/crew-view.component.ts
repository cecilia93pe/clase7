import { Component } from '@angular/core';

@Component({
  selector: 'app-crew-view',
  templateUrl: './crew-view.component.html',
  styleUrls: ['./crew-view.component.css']
})
export class CrewViewComponent {
  bgColor: string = ''
  title: string = 'meet your crew'
  numberSection: string = '02'

  constructor () {
    this.init()
  }

  setBgImage () {
    const width = window.innerWidth; // I actually encapsulated this with service
    if (width >= 1440) {
      this.bgColor = './../../../../assets/images/crew/background-crew-desktop.jpg';
    } else if (width >= 768 && width < 1440) {
      this.bgColor = './../../../../assets/images/crew/background-crew-tablet.jpg';
    } else {
      this.bgColor = './../../../../assets/images/crew/background-crew-mobile.jpg'
    }
    console.log(this.bgColor)
  }

  init () {
    this.setBgImage()
  }
}
