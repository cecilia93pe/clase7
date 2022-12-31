import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-view',
  templateUrl: './technology-view.component.html',
  styleUrls: ['./technology-view.component.css']
})
export class TechnologyViewComponent {
  bgColor: string = ''
  title: string = 'space launch 101'
  numberSection: string = '03'

  constructor () {
    this.init()
  }

  setBgImage () {
    const width = window.innerWidth; // I actually encapsulated this with service
    if (width >= 1440) {
      this.bgColor = './../../../../assets/images/technology/background-technology-desktop.jpg';
    } else if (width >= 768 && width < 1440) {
      this.bgColor = './../../../../assets/images/technology/background-technology-tablet.jpg';
    } else {
      this.bgColor = './../../../../assets/images/technology/background-technology-mobile.jpg'
    }
    console.log(this.bgColor)
  }

  init () {
    this.setBgImage()
  }
}
