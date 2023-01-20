import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewComponent } from '../review/review.component';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  allRestaurants: Restaurant[] = [];
  revAverages: number[]=[];
  tempRevnum: number =0;
  tempRevAmt=0;
  reviewComp? : ReviewComponent;
 allReviewAvg: Review[]=[];

  constructor(private restaurantService: RestaurantService, private reviewService: ReviewService, private router:Router){
    
   }
  ngOnInit(): void {
    
    this.restaurantService.getRestaurants().subscribe(
      (response) => {this.allRestaurants = response},
      (error)=>console.log(error)
      ); 
    
      
    
       
  }
}
