import { Component } from "@angular/core";

@Component({
    selector: "calculator",
    template: `
        <GridLayout rows="auto,*" columns="*">
        <!--Dispalyer-->
        <StackLayout row="0" style="font-size:60;color:#fff;height:120;background-color:rgba(0,0,0,0.8);text-align:right;vertical-align:bottom;">
        <Label text="99" ></Label>
        </StackLayout>
    
        <keyboard row="1"></keyboard>
        </GridLayout>
    `
})


export class AppComponent {
    public counter: string = '';
 }
