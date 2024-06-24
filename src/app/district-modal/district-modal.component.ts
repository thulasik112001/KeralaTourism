import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-district-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './district-modal.component.html',
  styleUrl: './district-modal.component.scss'
})
export class DistrictModalComponent {
@Input() district: any;
selectedDistrict: any;

  constructor(public modal: NgbActiveModal) { }

}
