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
    { url: 'assets/images/1.jpg', caption: 'The first slide', href: '#config' },
    { url: 'assets/images/2.jpg', clickAction: () => alert('custom click function') },
    { url: 'assets/images/3.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },    
    { url: 'assets/images/4.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },    
    { url: 'assets/images/6.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' }
  ];
  height: string = '800px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
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
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg'
 ];

  constructor (r: Router){
    r.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        console.log("event HEADER-->", event);
        console.log("event.url HEADER-->", event.url);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  

}
