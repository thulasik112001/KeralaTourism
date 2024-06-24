import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DistrictModalComponent } from '../district-modal/district-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from "../pipe/filter.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, RouterLink, FilterPipe,FormsModule]
})
export class HomeComponent {
  http=inject(HttpClient);
  districts:any=[];
  modalService = inject(NgbModal);
  toFilter: any;
  filteredDistricts: any[] | undefined;
  searchText: any;
  ngOnInit(): void {
    this.fetchDistricts();
  }
  fetchDistricts():void{
    this.http.get('https://star-butter-weaver.glitch.me/districts')
    .subscribe((districts:any)=>{
      this.districts=districts;
      this.filteredDistricts = [...districts];
      console.log(districts);
    });
    }

    searchDistricts(): void {
      this.filteredDistricts = this.districts.filter((district: { name: string; }) =>
        district.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    openModal(district: any): void {
      const modalRef = this.modalService.open(DistrictModalComponent, { windowClass: 'custom-modal' });
      modalRef.componentInstance.district = district;
    }

  }
