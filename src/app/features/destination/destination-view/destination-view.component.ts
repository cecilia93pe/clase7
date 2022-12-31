import { Component } from '@angular/core';
const destinationData = require('./destination-view.constants.json')

@Component({
  selector: 'app-destination-view',
  templateUrl: './destination-view.component.html',
  styleUrls: ['./destination-view.component.css']
})
export class DestinationViewComponent {
  bgColor: string = ''
  title: string = 'pick your destination'
  numberSection: string = '01'
  destinations: any = destinationData.destinations

  constructor () {
    console.log(this.destinations, 'destination')
    this.init()
  }

  setBgImage () {
    const width = window.innerWidth; // I actually encapsulated this with service
    if (width >= 1440) {
      this.bgColor = './../../../../assets/images/destination/background-destination-desktop.jpg';
    } else if (width >= 768 && width < 1435) {
      this.bgColor = './../../../../assets/images/destination/background-destination-tablet.jpg';
    } else {
      this.bgColor = './../../../../assets/images/destination/background-destination-mobile.jpg'
    }
    console.log(this.bgColor)
  }

  init () {
    this.setBgImage()
  }

}
