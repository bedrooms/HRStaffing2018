import { Component, OnInit } from '@angular/core';
import { URLSearchParams, Http,  Headers } from '@angular/http';
import { Subscription } from 'rxjs';

@Component({  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mail: string;
  senderName: string;
  message: string;
  allowSubmit: boolean = false;

  router;
  constructor (private http: Http ){  
  }

  ngOnInit() {
    console.log("allowSubmit -->", this.allowSubmit);
  }

  sendMail(){
    let urlSearchParams = new URLSearchParams(); 
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');

    urlSearchParams.append('mailfrom', this.mail);
    urlSearchParams.append('mailfromname', this.senderName);
    urlSearchParams.append('mail', this.message);

    // LOCAL http://localhost:5000/hr-staff/us-central1/SendMail
    // SERVER https://us-central1-hr-staff.cloudfunctions.net/SendMail

    this.http.post('https://us-central1-hr-staff.cloudfunctions.net/SendMail', urlSearchParams, {headers :headers, params:urlSearchParams}).subscribe(
      data => console.log('mail sended from app!!', data),
      error => console.log("Error -->", error),
      () => console.log("Complete Subscription -->", JSON.stringify(Subscription))
    )
  }

  onChange() {
    console.log('Changing...' );
    if((this.mail == undefined || this.mail == "") || 
       (this.senderName == undefined || this.senderName == "") || 
       (this.message == undefined || this.message == "")){
        this.allowSubmit = false;
    } else{
      console.log("this.message -->", this.message);
      this.allowSubmit = true;
    }

  }
}
