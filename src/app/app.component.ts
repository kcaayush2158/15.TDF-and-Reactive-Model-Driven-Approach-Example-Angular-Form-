import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics =['java','javascript'];
  topichasError = true;
  userModel = new User('','rob@gmail.com',2,' default','morning',true);
submitted=false;
errorMesage ;
      constructor(private _enrollmentService :EnrollmentService){}

  validTopic(value){
    if(value === 'default'){
      this.topichasError=true;
      console.log("error is true");
    }else{
      this.topichasError=false;
      console.log("error is false");
    }
  }

  onSubmit(userForm){
console.log(userForm);
  }
}
