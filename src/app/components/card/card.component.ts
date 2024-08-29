import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';
import { hotel } from 'src/app/interface/hotel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() hotel!:hotel;
  @Output() editData = new EventEmitter<string>();
  @Output() deleteData = new EventEmitter<string>();

  editClick() {
    this.editData.emit(this.hotel.id);
  }

  deleteClick() {
    this.deleteData.emit(this.hotel.id);
  }
}
