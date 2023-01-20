import { Component } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {


 constructor(private reviewService: ReviewService){}



public getAverageReview(restaurant: Restaurant){

  return this.reviewService.getRestAverage(restaurant.id);
}

}