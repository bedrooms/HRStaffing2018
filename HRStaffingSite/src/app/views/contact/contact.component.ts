import { Component, OnInit } from '@angular/core';
import { URLSearchParams, Http,  Headers } from '@angular/http';
import { MailService } from '../../shared/service/mailService';

@Component({  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  subject: string = "Contact Us Mail";
  mail: string;
  senderName: string;
  message: string;
  allowSubmit: boolean = false;

  router;
  constructor (private http: Http, private _mailService: MailService ){  
  }

  ngOnInit() {
  }

  sendMail(){
    // let urlSearchParams = new URLSearchParams(); 
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Origin', '*');

    // urlSearchParams.append('mailfrom', this.mail);
    // urlSearchParams.append('mailfromname', this.senderName);
    // urlSearchParams.append('mail', this.message);

    // // LOCAL http://localhost:5000/hr-staff/us-central1/SendMail
    // // SERVER https://us-central1-hr-staff.cloudfunctions.net/SendMail

    // this.http.post('https://us-central1-hr-staff.cloudfunctions.net/SendMail', urlSearchParams, {headers :headers, params:urlSearchParams}).subscribe(
    //   data => {
    //     this.senderName = undefined;
    //     this.message = undefined;
    //     this.mail = undefined;
    //     this.allowSubmit = false;
    //   },
    //   error => console.log("Error -->", error)
    // )
    this._mailService.sendMail(this.mail,this.senderName,this.message,this.subject).then(data => {
      console.log("data -->", data);
      if(data.ok){
          this.senderName = undefined;
          this.message = undefined;
          this.mail = undefined;
          this.allowSubmit = false;
        }
      }
    );
   
  }

  onChange() {
    if((this.mail == undefined || this.mail == "") || 
       (this.senderName == undefined || this.senderName == "") || 
       (this.message == undefined || this.message == "")){
        this.allowSubmit = false;
    } else{
      this.allowSubmit = true;
    }

  }
}
