"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StockComponent = /** @class */ (function () {
    function StockComponent() {
        this.carterSwitch = false;
        this.eliasSwitch = false;
        this.mattSwitch = false;
    }
    StockComponent.prototype.ngOnInit = function () {
        console.log("stock component initialized");
    };
    StockComponent.prototype.chooseUser = function (user) {
        if (user === 'carter') {
            this.carterSwitch = true;
            this.eliasSwitch = false;
            this.mattSwitch = false;
        }
        else if (user === 'elias') {
            this.carterSwitch = false;
            this.eliasSwitch = true;
            this.mattSwitch = false;
        }
        else {
            this.carterSwitch = false;
            this.eliasSwitch = false;
            this.mattSwitch = true;
        }
    };
    StockComponent = __decorate([
        core_1.Component({
            selector: "stock",
            moduleId: module.id,
            templateUrl: "./stock.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], StockComponent);
    return StockComponent;
}());
exports.StockComponent = StockComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBTzdEO0lBS0k7UUFKQSxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQVksS0FBSyxDQUFDO0lBR3hCLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFHLElBQUksS0FBSyxRQUFRLEVBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7YUFDSSxJQUFHLElBQUksS0FBSyxPQUFPLEVBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7YUFDRztZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQTdCUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztPQUNXLGNBQWMsQ0FnQzFCO0lBQUQscUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdG9ja1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdG9jay5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY2FydGVyU3dpdGNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgZWxpYXNTd2l0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtYXR0U3dpdGNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwic3RvY2sgY29tcG9uZW50IGluaXRpYWxpemVkXCIpXG4gICAgfVxuXG4gICAgY2hvb3NlVXNlcih1c2VyOiBzdHJpbmcpe1xuICAgICAgaWYodXNlciA9PT0gJ2NhcnRlcicpe1xuICAgICAgICB0aGlzLmNhcnRlclN3aXRjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxpYXNTd2l0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXR0U3dpdGNoID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHVzZXIgPT09ICdlbGlhcycpe1xuICAgICAgICB0aGlzLmNhcnRlclN3aXRjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsaWFzU3dpdGNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXR0U3dpdGNoID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLmNhcnRlclN3aXRjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsaWFzU3dpdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF0dFN3aXRjaCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ==