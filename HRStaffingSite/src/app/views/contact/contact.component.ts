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

  router;
  constructor (private http: Http ){  
  }

  ngOnInit() {
  }

  sendMail(){
    let urlSearchParams = new URLSearchParams(); 
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');

    urlSearchParams.append('mailfrom', 'bpalter@aol.com');
    urlSearchParams.append('mailfromname', this.senderName);

    urlSearchParams.append('mailto', 'glainskurt@gmail.com');   
    urlSearchParams.append('subject', 'mail from Contac Us Page');
    urlSearchParams.append('mail', this.message);

    this.http.post('https://us-central1-hr-staff.cloudfunctions.net/SendMail', urlSearchParams, {headers :headers, params:urlSearchParams}).subscribe(
      data => console.log('mail sended from app!!', data),
      error => console.log("Error -->", error),
      () => console.log("Complete Subscription -->", JSON.stringify(Subscription))
    )
  }
}
