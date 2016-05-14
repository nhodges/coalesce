import {Component} from 'angular2/core';
@Component({
    selector: 'coverslider',
    template: `
      <a class="coverslider__nav coverslider__nav--left" (click)="pageno = pageno - 1" [hidden]="pageno == 0">&lt;</a>
      <div *ngFor="let page of pages; let i = index" class="coverpage" [ngStyle]="{'background-image': 'url(' + page.image + ')'}" [class.current]="pageno == i">
        <div class="table">
          <div class="table__cell table__cell--vmiddle">
            <h1>{{ page.heading }}</h1>
            <h3>{{ page.description }}</h3>
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
      description: 'We can do it.'
    },
    {
      image: '/images/landingpage-soupkitchen.jpg',
      heading: 'World Hunger',
      description: 'We can end it.'
    },
    {
      image: '/images/landingpage-animalcruelty.jpg',
      heading: 'Animal Cruelty',
      description: 'We can stop it.'
    }
  ]
}
