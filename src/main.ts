import 'zone.js/dist/zone';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiper.template.html',
  styleUrls: ['./swiper-styles.scss'],
})
export class App implements AfterViewInit {
  name = 'Swiper Demo';
  //swiperEl: any;
  swiperParams: any;
  @ViewChild('swiperContainer', { static: false })
  swiperElement: ElementRef;
  swiperEl: any;

  onSwiperInit() {
    console.log('swiper init called');
  }

  onIndexChanged() {
    console.log('index changes called');
  }

  slideChange() {
    console.log('slide change called');
  }

  sliderreachbegining() {
    console.log('reach begining called');
  }

  sliderReachEnd() {
    console.log('slide reach end called');
  }

  sliderFromEdge() {
    console.log('slide form edge called');
  }

  ngAfterViewInit() {
    this.swiperEl = this.swiperElement.nativeElement;
    // swiper parameters
    this.swiperParams = {
      // array with CSS styles
      // injectStyles: [
      //   `
      // :host(.my-swiper) {
      //   background-color: red;
      //   color: blue;
      // }
      // `,
      // ],
      injectStylesUrls: ['./styles.scss'],
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: true,
      scrollbar: true,
      pagination: true,
      breakpoints: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        468: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        568: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 40,
        },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 35,
        },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 25,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };

    Object.assign(this.swiperEl, this.swiperParams);
    console.log(typeof this.swiperEl);
    console.log(this.swiperEl);
    this.swiperEl.initialize();
  }
}

bootstrapApplication(App);
