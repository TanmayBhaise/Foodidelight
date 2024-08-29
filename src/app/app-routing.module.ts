import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditHotelComponent } from './components/edit-hotel/edit-hotel.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "update/:id",
    component: EditHotelComponent
  },
  {
    path: "add-hotel",
    component: AddHotelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
