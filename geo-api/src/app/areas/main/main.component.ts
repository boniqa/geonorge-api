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
  searchText: string = '';
  switch: string = 'all';

  constructor(private geoApiService: GeoApiService) { }

  ngOnInit(): void {
    this.loaded = false;
    this.geoApiService.getData().subscribe((result)=> {
      this.items = result.containeditems;
      this.loaded = true;
    })
  }

  getStatus(status){
    return ( status === 'Gyldig' ? 'valid' : 'retired' );
  }

  changeValue(e){
    this.switch = e.target.value;
  }

}
