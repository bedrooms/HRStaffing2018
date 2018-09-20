import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  router;
  constructor (r: Router){
    // this.router = r;
    // console.log(this.router.url);
  }

  ngOnInit() {
  }

}
