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
                    this.page = 1;
                }
            };
            AppCoverslider = __decorate([
                core_1.Component({
                    selector: 'coverslider',
                    template: '<a class="coverslider__nav coverslider__nav--left" (click)="page = page - 1" [hidden]="page == 1">&lt;</a><div class="coverpage" [class.current]="page == 1">{{ muffin }}</div><div class="coverpage" style="background-image: url(/images/landingpage-soupkitchen.jpg);" [class.current]="page == 2"></div><a class="coverslider__nav coverslider__nav--right" (click)="page = page + 1" [hidden]="page == 2">&gt;</a>'
                }), 
                __metadata('design:paramtypes', [])
            ], AppCoverslider);
            exports_1("AppCoverslider", AppCoverslider);
        }
    }
});
//# sourceMappingURL=app.coverslider.js.map