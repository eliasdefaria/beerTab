import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "stock",
    moduleId: module.id,
    templateUrl: "./stock.component.html",
})
export class StockComponent implements OnInit {
    carterSwitch: boolean = false;
    eliasSwitch: boolean = false;
    mattSwitch: boolean = false;

    constructor(
    ) { }

    ngOnInit(): void {

      console.log("stock component initialized")
    }

    chooseUser(user: string){
      if(user === 'carter'){
        this.carterSwitch = true;
        this.eliasSwitch = false;
        this.mattSwitch = false;
      }
      else if(user === 'elias'){
        this.carterSwitch = false;
        this.eliasSwitch = true;
        this.mattSwitch = false;
      }
      else{
        this.carterSwitch = false;
        this.eliasSwitch = false;
        this.mattSwitch = true;
      }
    }


}
