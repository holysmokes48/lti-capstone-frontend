import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpGeneralService } from '../shared/http-service/httpgeneral.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient, private httpService: HttpGeneralService) { }

  feedbackData: FormData[]=[]

  getAllFeedback(){
    return this.httpService.get('/getAllFeedbacks')
  }

  createFeedback(data:any){
    this.feedbackData.push(data)
    this.httpService.post('/createFeedback',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }

  /*

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

  */
}
