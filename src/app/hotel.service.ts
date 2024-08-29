import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hotel } from './interface/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient: HttpClient) { }

  getHotelData() {
    return this.httpClient.get<hotel[]>("http://localhost:3000/hotel");
  }

  getHotelById(id: string) {
    return this.httpClient.get<hotel[]>("http://localhost:3000/hotel/" + id);
  }

  updateHotel(hotel: hotel) {
    return this.httpClient.put("http://localhost:3000/hotel/" + hotel.id, hotel);
  }

  deleteHotel(id: string) {
    return this.httpClient.delete("http://localhost:3000/hotel/" + id);
  }

  addHotel(hotel: hotel) {
    return this.httpClient.post("http://localhost:3000/hotel", hotel);
  }
}
