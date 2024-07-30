sap.ui.define([
    "com/uisample/project1/controller/BaseController",
      "sap/ui/core/mvc/Controller"
],
function (BaseController,Controller) {
    "use strict";

    return BaseController.extend("com.uisample.project1.controller.Login", {
        onInit: function () {
            var that = this;
            this.getRouter = this.getOwnerComponent().getRouter();
            this.getRouter.getRoute("RouteView1");

        },
        onPressLogin: function(oData)
        {
           // var getRouter = this.getOwnerComponent;
           this.getRouter.navTo("dashboard");
            // let oRouter = sap.ui.core.UIComponent.getRouterFor(this);  
            // oRouter.getRouter.navTo("dashboard"); 
            
        }
    });
});
