import {Component, ElementRef, AfterViewInit} from 'angular2/core';

@Component({
    selector: 'coverslider',
    template: `
      <a class="coverslider__nav coverslider__nav--left" (click)="pageno = pageno - 1" [hidden]="pageno == 0">&lt;</a>
      <div *ngFor="let page of pages; let i = index" class="coverpage" [ngStyle]="{'background-image': 'url(' + page.image + ')'}" [class.current]="pageno == i">
        <div class="table">
          <div class="table__cell table__cell--vmiddle">
            <h1><a [attr.href]="pages[pageno].uri">{{ page.heading }}</a></h1>
            <h3><a [attr.href]="pages[pageno].uri">{{ page.description }}</a></h3>
          </div>
        </div>
      </div>
      <a class="coverslider__nav coverslider__nav--right" (click)="pageno = pageno + 1" [hidden]="pageno == pages.length - 1">&gt;</a>'
    `
})
export class AppCoverslider {
  pageno = 0;
  pages = [
    {
      image: '/images/landingpage-sustainableagriculture.jpg',
      heading: 'Sustainable Agriculture',
      description: 'We can do it.',
      uri: '/category/sustainable-agriculture'
    },
    {
      image: '/images/landingpage-soupkitchen.jpg',
      heading: 'World Hunger',
      description: 'We can end it.',
      uri: '/category/world-hunger'
    },
    {
      image: '/images/landingpage-animalcruelty.jpg',
      heading: 'Animal Cruelty',
      description: 'We can stop it.',
      uri: '/category/animal-cruelty'
    },
    {
      image: '/images/landingpage-coralreef.jpg',
      heading: 'The Environment',
      description: 'We can save it.',
      uri: '/category/environmentalism'
    }
  ]
  constructor(private el:ElementRef){}
  ngAfterViewInit() {
    var self = this
      , hammer = new window.Hammer(self.el.nativeElement);
    hammer.on('swiperight', function(e) {
      if(self.pageno > 0) {
        self.pageno--;
      }
    });
    hammer.on('swipeleft', function(e) {
      if(self.pageno < self.pages.length) {
        self.pageno++;
      }
    });
  }
}
