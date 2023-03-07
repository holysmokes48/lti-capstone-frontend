import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  feedbackData: FormData[]=[]

  getAllFeedback(){
    return this.http.get('/feedback')
  }

  createFeedback(data:any){
    this.feedbackData.push(data)
    this.http.post('/createfeedback',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }
}
