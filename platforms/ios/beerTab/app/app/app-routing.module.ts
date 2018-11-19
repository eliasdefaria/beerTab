import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//openTab:items)", pathMatch: "full" },
    { path: "home", component: HomeComponent, outlet: "homeTab"},
    { path: "items", component: ItemsComponent, outlet:"openTab" },
    { path: "item/:id", component: ItemDetailComponent, outlet:"openTab" },
    { path: "stock", component: StockComponent, outlet:"homeTab"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
