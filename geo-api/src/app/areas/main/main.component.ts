import { Component, OnInit } from '@angular/core';
import { GeoApiService } from '../../shared/services/geo-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loaded: boolean;
  items: any;

  constructor(private geoApiService: GeoApiService) { }

  ngOnInit(): void {
    this.loaded = false;
    this.geoApiService.getData().subscribe((result)=> {
      this.items = result.containeditems;
      console.log(this.items);
      this.loaded = true;
    })
  }

  getStatus(status){
    return ( status === 'Gyldig' ? 'valid' : 'retired');
  }

}
