sap.ui.define(
    [
        "com/uisample/project1/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/ui/Device"
    ],
    function (BaseController, JSONModel, Device) {
        "use strict";

        return BaseController.extend("com.uisample.project1.controller.AppUnified", {
            onInit: function () {
                this.oOwnerComponent = this.getOwnerComponent();
                this.oRouter = this.oOwnerComponent.getRouter();
               // this.oRouter.attachRouteMatched(this.onRouteMatched, this);
               // this.fetchMasterData();
              //  this.userSettingsData();
            },
            // onRouteMatched: function (oEvent) {
            //     let route = oEvent.getParameters().name;

            //     if (route === "manage-properties") {
            //         this.getModel().getData().genericTitle = "Manage Properties";
            //     } else if (route === "manage-sales-properties") {
            //         this.getModel().getData().genericTitle = "Manage Sales Properties";
            //     } else if (route === "manage-lease-properties") {
            //         this.getModel().getData().genericTitle = "Manage Lease Properties";
            //     }
            //     this.getModel().refresh();          
            // },
            onPressLogo: function () {
                this.onPressHome();
            }
        }
        );
    }
);
