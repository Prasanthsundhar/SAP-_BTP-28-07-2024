sap.ui.define([
    "com/uisample/project1/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/DateFormat",
    "sap/m/MessageToast",
    "sap/ui/integration/library",
    "sap/ui/core/Core",
    'sap/f/library',
    "sap/f/GridContainerSettings",
    "sap/f/GridContainerItemLayoutData",
    "sap/f/GridContainer"
],
function (BaseController,JSONModel,DateFormat,MessageToast,library,Core,GridContainerSettings,GridContainerItemLayoutData,GridContainer) {
    "use strict";

    return BaseController.extend("com.uisample.project1.controller.Dashboard", {
        onInit: function () {
            var that = this;
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("dashboard");

        }
    });
});
