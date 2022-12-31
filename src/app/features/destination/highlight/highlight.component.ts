import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent {
  @Input() destination: any = null
  activeSection = 'moon'
  selected = {
    images: {
      png: ''
    },
    name: '',
    description: '',
    distance: '',
    travel:''
  }

  constructor () {
    console.log(this.destination, 'this destination')
  }

  ngOnChanges () {
    console.log('jolii', this.destination)
    this.selected = this.destination[0]
  }

  onClickTab = ($event: any) => {
    const element = $event.target
    if (['moon', 'mars', 'europa', 'titan'].includes(element.textContent)) {
      const filtered = this.destination.filter((item:any) => item.name.toLowerCase() == element.textContent)[0]
      this.selected = filtered
      this.activeSection = filtered.name.toLowerCase()
    }
  }

}
