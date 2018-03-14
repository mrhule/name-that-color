import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../data-model/color';


@Injectable()
export class GetColorsService {
  
  constructor(
    private http: HttpClient
  ) { }

  colorURL:string = 'assets/data/colors.json';

  getColorFile(){    
    return this.http.get(this.colorURL);
  }

}
