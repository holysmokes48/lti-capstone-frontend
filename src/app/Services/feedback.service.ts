import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  feedbackData: FormData[]=[]

  getAllFeedback(){
    return this.http.get('http://localhost:8055/foodDeliveryAppClient/getAllFeedbacks')
  }

  createFeedback(data:any){
    this.feedbackData.push(data)
    this.http.post('http://localhost:8055/foodDeliveryAppClient/createFeedback',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }
}
