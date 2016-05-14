System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppCoverslider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppCoverslider = class AppCoverslider {
                constructor() {
                    this.pageno = 0;
                    this.pages = [
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
                    ];
                }
            };
            AppCoverslider = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], AppCoverslider);
            exports_1("AppCoverslider", AppCoverslider);
        }
    }
});
//# sourceMappingURL=app.coverslider.js.map