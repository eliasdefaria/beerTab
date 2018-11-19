import { Component, OnInit } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit(): void {
    }

    drinkBeer(): void{
      dialogs.prompt({
        title: "Drink a beer!",
        message: "What're ya sippin' friend?",
        okButtonText: "Shotgun it pussy!",
        inputType: "text"
      }).then( data => {
        console.log(data.result + ' Input:' + data.text)
      }, error => {
        console.log(error)
      })
    }
}
