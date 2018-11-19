"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("tns-core-modules/ui/dialogs");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.drinkBeer = function () {
        dialogs.prompt({
            title: "Drink a beer!",
            message: "What're ya sippin' friend?",
            okButtonText: "Shotgun it pussy!",
            inputType: "text"
        }).then(function (data) {
            console.log(data.result + ' Input:' + data.text);
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxREFBdUQ7QUFPdkQ7SUFFSTtJQUNJLENBQUM7SUFFTCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2IsS0FBSyxFQUFFLGVBQWU7WUFDdEIsT0FBTyxFQUFFLDRCQUE0QjtZQUNyQyxZQUFZLEVBQUUsbUJBQW1CO1lBQ2pDLFNBQVMsRUFBRSxNQUFNO1NBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQSxJQUFJO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEQsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBbkJRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQW9CekI7SUFBRCxvQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBkcmlua0JlZXIoKTogdm9pZHtcbiAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgdGl0bGU6IFwiRHJpbmsgYSBiZWVyIVwiLFxuICAgICAgICBtZXNzYWdlOiBcIldoYXQncmUgeWEgc2lwcGluJyBmcmllbmQ/XCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJTaG90Z3VuIGl0IHB1c3N5IVwiLFxuICAgICAgICBpbnB1dFR5cGU6IFwidGV4dFwiXG4gICAgICB9KS50aGVuKCBkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHQgKyAnIElucHV0OicgKyBkYXRhLnRleHQpXG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSlcbiAgICB9XG59XG4iXX0=