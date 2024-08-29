import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent implements OnInit {

  constructor(private hotelService: HotelService, private activatedRout: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {}

  hotelId:any;
  hotelForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required]],
    currentPrice: ['', [Validators.required]],
    standardPrice: ['', [Validators.required]],
    discount: ['', [Validators.required]],
    image: ['', [Validators.required]]
  });

  ngOnInit() {
    this.hotelId = this.activatedRout.snapshot.paramMap.get('id');

    this.hotelService.getHotelById(this.hotelId).subscribe(result => {
      this.hotelForm.patchValue(result);
    });
  }

  editHotel(){
    if (this.hotelForm.invalid) {
      alert('Please provide all field with valid input')
      return
    }

    this.hotelService.updateHotel(this.hotelForm.value).subscribe(result => {
      alert("Hotel details updated successfully");
      this.router.navigateByUrl("/");
    });
  }


}
