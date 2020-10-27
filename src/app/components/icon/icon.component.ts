import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'fc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input () iconName: string;
  public iconUnicode: string;

  //unicodes for the icons
  private readonly iconMap = {
    'Donlon': 9729,
    'Enchai': 9730,
    'Jebing': 9728,
    'Sapir': 9732,
    'Lerbin': 9733,
    'Pingasor': 9731,
    'Space pod': 9737,
    'Space rocket': 9736,
    'Space shuttle': 9735, 
    'Space ship': 9734,
    'Refresh': 9738
  };

  constructor(private sanitized: DomSanitizer) { }

  ngOnInit(): void {
     this.iconUnicode = '&#' + this.iconMap[this.iconName] + ';';
  }

}
