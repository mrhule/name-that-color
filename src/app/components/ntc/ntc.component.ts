/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ntc',
  templateUrl: './ntc.component.html',
  styleUrls: ['./ntc.component.css']
})
export class NtcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Color } from '../../data-model/color';

//Declare Name That Color
declare var ntc: any;

@Component({
  selector: 'app-ntc',
  templateUrl: './ntc.component.html',
  styleUrls: ['./ntc.component.css']
})

export class NtcComponent implements OnInit {
    private prefix: string;
    private hex: string;

    ngOnInit(): void {
    }

    hexChange(newValue: string) {
        this.hex = newValue;
        this.getColorName(newValue);
        
    }

    prefixChange(newValue: string){
        this.prefix = newValue;        
    }

    getColorName = function (color: string) {
        let match = ntc.name(color);
        //66563E
        
        let sass = '$'+ this.prefix.toLowerCase().replace(" ", "-")+ '-' + match[1].toLowerCase().replace(" ", "-") + ': #' + this.hex  + ';';

        let matchedColor = [
            new Color(match[0], match[1], match[2], sass)
        ];
        this.colors = matchedColor;
        
    }

    selected: string;
    states: string[] = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Dakota',
      'North Carolina',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ];

    getPrefix(event:any){
      console.log(event.target.value);
    }


}//OnIt


