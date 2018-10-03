import { Component } from '@angular/core';
import { HeaderSearchComponent } from '../header-search/header-search.component';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import {SlideshowModule, IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  imageUrls: (string | IImage)[] = [
    { url: 'assets/images/slider3.jpg'},
    { url: 'assets/images/slider4.jpg' },
    { url: 'assets/images/slider2.jpg' },    
    { url: 'assets/images/slider6.jpg'},    
    { url: 'assets/images/slider11.jpg' }
  ];
  height: string = '800px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = false;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';

  public imageSources: string[] = [
    'assets/images/11.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg'
 ];

  constructor (private r: Router){

  }

}
