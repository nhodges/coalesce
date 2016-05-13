import {Component} from 'angular2/core';
@Component({
    selector: 'coverslider',
    template: '<a class="coverslider__nav coverslider__nav--left" (click)="page = page - 1" [hidden]="page == 1">&lt;</a><div class="coverpage" [class.current]="page == 1">{{ muffin }}</div><div class="coverpage" style="background-image: url(/images/landingpage-soupkitchen.jpg);" [class.current]="page == 2"></div><a class="coverslider__nav coverslider__nav--right" (click)="page = page + 1" [hidden]="page == 2">&gt;</a>'
})
export class AppCoverslider {
  page = 1
}
