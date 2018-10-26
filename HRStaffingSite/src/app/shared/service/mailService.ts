import {Injectable} from '@angular/core';
import { URLSearchParams, Http,  Headers } from '@angular/http';

@Injectable()

export class MailService {

    constructor (private http: Http ){  
    }

    sendMail(mail:string, senderName: string, message: string, subject: string, contactNumber?: string):Promise<any>{
        let urlSearchParams = new URLSearchParams(); 
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
    
        urlSearchParams.append('mailfrom', mail);
        urlSearchParams.append('mailfromname', senderName);
        urlSearchParams.append('mail', message);
        urlSearchParams.append('subject', subject);
        urlSearchParams.append('contactNumber', contactNumber);
    
        // LOCAL http://localhost:5000/hr-staff/us-central1/SendMail
        // SERVER https://us-central1-hr-staff.cloudfunctions.net/SendMail

        return new Promise (resolve => {
            this.http.post('https://us-central1-hr-staff.cloudfunctions.net/SendMail', urlSearchParams, {headers :headers, params:urlSearchParams})
            .toPromise()
            .then(
              data => {
                resolve(data);
              },
              error => {              
                  console.log("Error -->", error)
                }
            )
        })

       
      }
  }