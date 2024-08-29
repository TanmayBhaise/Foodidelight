import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';
import { hotel } from 'src/app/interface/hotel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private hotelService:HotelService, private router:Router) {}
  hotelList:hotel[] = [];
  ngOnInit() {
   this.getData();
  }

  getData() {
    this.hotelService.getHotelData().subscribe(result => {
      console.log(result);
      this.hotelList = result;
    });
  }

  editData(event: string) {
    this.router.navigateByUrl("/update/"+event);
  }

  deleteData(event: string) {
    this.hotelService.deleteHotel(event).subscribe(result => {
      alert("Data has been Deleted successfully");
      this.getData();
    });
  }
}
