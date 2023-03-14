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
    
    return this.httpService.post('/createFeedback',data)
    
  }

  deleteFeedback(id: number){
    return this.httpService.delete(`/deleteFeedbackById/${id}`);
  }

  /*

  getAllFeedback(){
    return this.http.get('http://localhost:8055/foodDeliveryAppClient/getAllFeedbacks')
  }

  createFeedback(data:any){
    this.feedbackData.push(data)
    this.http.post('http://localhost:7080/foodDeliveryAppClient/createFeedback',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }

  */
}
