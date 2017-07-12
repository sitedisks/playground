"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = '';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "calculator",
        template: "\n        <GridLayout rows=\"auto,*\" columns=\"*\">\n        <!--Dispalyer-->\n        <StackLayout row=\"0\" style=\"font-size:60;color:#fff;height:120;background-color:rgba(0,0,0,0.8);text-align:right;vertical-align:bottom;\">\n        <Label text=\"99\" ></Label>\n        </StackLayout>\n    \n        <keyboard row=\"1\"></keyboard>\n        </GridLayout>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFpQjFDLElBQWEsWUFBWTtJQWZ6QjtRQWdCVyxZQUFPLEdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRixJQUVFO0FBRlcsWUFBWTtJQWZ4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLGlYQVNUO0tBQ0osQ0FBQztHQUdXLFlBQVksQ0FFdkI7QUFGVyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNhbGN1bGF0b3JcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sKlwiIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgPCEtLURpc3BhbHllci0tPlxyXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgc3R5bGU9XCJmb250LXNpemU6NjA7Y29sb3I6I2ZmZjtoZWlnaHQ6MTIwO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjgpO3RleHQtYWxpZ246cmlnaHQ7dmVydGljYWwtYWxpZ246Ym90dG9tO1wiPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiOTlcIiA+PC9MYWJlbD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgXHJcbiAgICAgICAgPGtleWJvYXJkIHJvdz1cIjFcIj48L2tleWJvYXJkPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgIGBcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjb3VudGVyOiBzdHJpbmcgPSAnJztcclxuIH1cclxuIl19