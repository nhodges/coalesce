System.register(['angular2/platform/browser', './app.coverslider'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_coverslider_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_coverslider_1_1) {
                app_coverslider_1 = app_coverslider_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_coverslider_1.AppCoverslider);
        }
    }
});
//# sourceMappingURL=main.js.map