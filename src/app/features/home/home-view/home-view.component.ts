import { Component } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {
  bgColor: string = ''

  constructor () {
    this.init()
  }

  setBgImage () {
    const width = window.innerWidth; // I actually encapsulated this with service
    if (width >= 1440) {
      this.bgColor = './../../../../assets/images/home/background-home-desktop.jpg';
    } else if (width >= 768 && width < 1440) {
      this.bgColor = './../../../../assets/images/home/background-home-tablet.jpg';
    } else {
      this.bgColor = './../../../../assets/images/home/background-home-mobile.jpg'
    }
    console.log(this.bgColor)
  }

  init () {
    this.setBgImage()
  }
}
