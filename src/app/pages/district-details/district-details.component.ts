import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchserviceService } from '../../services/fetchservice.service';

@Component({
  selector: 'app-district-details',
  standalone: true,
  imports: [],
  templateUrl: './district-details.component.html',
  styleUrl: './district-details.component.scss'
})
export class DistrictDetailsComponent {
  districtName: string = '';
  district: any;

  constructor(private route: ActivatedRoute, private fetchDataService: FetchserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.districtName = params['name'];
      this.getDistrictDetails(this.districtName);
    });
  }

  async getDistrictDetails(name: string) {
    try {
      const response = await fetch(`https://star-butter-weaver.glitch.me/districts?name=${name}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      this.district = data[0];
      console.log(this.district);
    }
    catch (error) {
      console.error('Error fetching', error);
    }
  }
}
