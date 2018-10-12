import { Component, OnInit } from '@angular/core';
import { URLSearchParams, Http,  Headers } from '@angular/http';

@Component({  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  router;
  constructor (private http: Http ){  
  }

  ngOnInit() {
  }

  sendMail(){
    let urlSearchParams = new URLSearchParams(); 
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    urlSearchParams.append('mailfrom', 'bpalter@aol.com');
    urlSearchParams.append('mailfromname', 'Rafael Gonzalez');

    urlSearchParams.append('mailto', 'glainskurt@gmail.com');   
    urlSearchParams.append('subject', 'mail from Contac Us Page');
    urlSearchParams.append('mail', 'This is a mail test');

    this.http.post('https://us-central1-hr-staff.cloudfunctions.net/SendMail', urlSearchParams, {headers :headers, params:urlSearchParams}).subscribe(data => {
      console.log('mail sended from app!!');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }
}
