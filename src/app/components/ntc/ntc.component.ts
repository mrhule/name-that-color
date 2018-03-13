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
import { NgForm } from '@angular/forms';
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


}//OnIt


