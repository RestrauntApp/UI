import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  allRestaurants: Restaurant[] = [];
 

  constructor(private restaurantService: RestaurantService, private reviewService: ReviewService){
    
   }
  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(
      (response) => this.allRestaurants = response,
      (error)=>console.log(error)
      );
    
      this.allRestaurants.forEach(element=> (this.reviewService.getRestAverage(element.restId).subscribe(
        (revNum: number)=>element.avgRevNum=revNum )));
  }
}
