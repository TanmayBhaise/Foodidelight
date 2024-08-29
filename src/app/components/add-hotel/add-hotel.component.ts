import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';
import { hotel } from 'src/app/interface/hotel';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent {

  hotelForm: hotel = {
    name: '',
    description: '',
    currentPrice: 0,
    standardPrice: 0,
    discount: 0,
    image: ''
  };


  constructor(private hotelService: HotelService, private router:Router) {

  }

  ngOnInit() {
  // this.hotelService.addHotel()
  }

  addHotel() {
    this.hotelService.addHotel(this.hotelForm).subscribe(result => {
      alert("Data saved successfully");
      this.router.navigateByUrl("/");
    })
  }

}
