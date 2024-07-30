sap.ui.define(
    [
      "sap/ui/core/mvc/Controller"
    ],
    function (
      Controller
    ) {
      return Controller.extend("com.uisample.project1.controller.BaseController", {
        onInit: function () {
          console.log("test")
        },
        getRouter: function () {
          return sap.ui.core.UIComponent.getRouterFor(this);
        }
        // handleRoute: function (name, routeMatch) {
        //   const detailsRoute = this.oRouter.getRoute(name);
        //   if (detailsRoute) {
        //     detailsRoute.attachMatched(routeMatch, this);
        //   }
        // },
  
        // getModel: function (sName) {
        //   return this.getView().getModel(sName);
        // },
  
        // setModel: function (oModel, sName) {
        //   return this.getView().setModel(oModel, sName);
        // },
        // getId: function (sName) {
        //   return this.getView().byId(sName);
        // },
  
        // getResourceBundle: function (text) {
        //   return this.getOwnerComponent()
        //     .getModel("i18n")
        //     .getResourceBundle()
        //     .getText(text);
        // },
        // encode: function (value) {
        //   return btoa(value);
        // },
        // decode: function (value) {
        //   return atob(value);
        // },
        // setStorage: function (name, sContext) {
        //   jQuery.sap.require("jquery.sap.storage");
        //   var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.session);
        //   oStorage.put(name, sContext);
        // },
        // getStorage: function (name) {
        //   jQuery.sap.require("jquery.sap.storage");
        //   var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.session);
        //   return oStorage.get(name);
        // },
        // showLoading: function (status) {
        //   this.getView().setBusy(status);
        // },
        // getCurrentDateWithFormat: function () {
        //   var d = new Date(),
        //     month = "" + (d.getMonth() + 1),
        //     day = "" + d.getDate(),
        //     year = d.getFullYear();
  
        //   if (month.length < 2) month = "0" + month;
        //   if (day.length < 2) day = "0" + day;
        //   return [year, month, day].join("-");
        // },
        // getUtcDate: function (val) {
        //   if (val) {
        //     var dateString = val.substr(6);
  
        //     var d = new Date(parseInt(dateString)),
        //       month = "" + (d.getMonth() + 1),
        //       day = "" + d.getDate(),
        //       year = d.getFullYear();
  
        //     if (month.length < 2) {
        //       month = "0" + month;
        //     }
        //     if (day.length < 2) {
        //       day = "0" + day;
        //     }
        //     return [day, month, year].join("-");
        //   } else {
        //     return "";
        //   }
        // },
        // toDateFormat: function (date) {
        //   if (date) {
        //     return new Date(date).toLocaleDateString().replace(/\//g, "-");
        //   } else {
        //     //
        //   }
        // },
        // JsonToDate: function (date) {
        //   if (date) {
        //     return new Date(
        //       parseInt(date.toLocaleString().substr(6))
        //     ).toLocaleDateString();
        //   } else {
        //     return "";
        //   }
        // },
  
        // tofixed: function (val) {
        //   if (val) {
        //     var getData = +val;
        //     return getData.toFixed(3);
        //   } else {
        //     return "";
        //   }
        // },
        // onPressHome: function () {
        //   this.getRouter().navTo("dashboard");
        // },
  
        // /* Date Formate Change */
        // getDateFormats(key, date) {
        //   if (key && date) {
        //     let oModel = this.getModel();
        //     let userSettings = oModel.getData().userSettings;
        //     let dateConv, fDate;
        //     if (date != undefined) {
        //       //date.slice(date.indexOf("(") + 1, date.indexOf(")"))
        //       dateConv = new Date(date);
        //       dateConv = dateConv == "Invalid Date" ? new Date(new Date(parseInt(date.match(/\d+/)[0])).toISOString().slice(0, 10)) : dateConv;
        //       let options = {
        //         year: "numeric",
        //         month: "short",
        //         day: "numeric",
        //       };
        //       let numeric = function () {
        //         //Numeric
        //         options.month = "2-digit";
        //         options.day = "2-digit";
        //         fDate = dateConv.toLocaleDateString("en-IN", options);
        //         fDate = fDate.replaceAll("/", " ");
        //         userSettings.dateFormat = "dd-MM-yyyy";
        //       };
        //       if (key == 1) {
        //         numeric();
        //       } else if (key == 2) {
        //         //Short
        //         options.month = "short";
        //         options.day = "2-digit";
        //         fDate = dateConv.toLocaleDateString("en-IN", options);
        //         userSettings.dateFormat = "dd-MMM-yyyy";
        //       } else if (key == 3) {
        //         //Long
        //         options.month = "long";
        //         options.day = "2-digit";
        //         fDate = dateConv.toLocaleDateString("en-IN", options);
        //         userSettings.dateFormat = "dd-MMMM-yyyy";
        //       } else {
        //         numeric();
        //       }
        //       return fDate.replaceAll(" ", "-");
        //     } else {
        //       //dateConv = new Date();
        //     }
        //   }
        // },
  
        // /* Time Format Change */
        // getTimeFormats: function (key, time) {
        //   if (key && time) {
        //     let oModel = this.getModel();
        //     let userSettings = oModel.getData().userSettings;
  
        //     if (time != undefined) {
        //       let date = new Date().toLocaleDateString("en-IN", {
        //         month: "long",
        //         day: "numeric",
        //         year: "numeric",
        //       });
        //       let timeConv = new Date();
        //       timeConv.setTime(new Date(date + ", " + time).getTime());
  
        //       if (key == 1) {
        //         userSettings.timeFormat = "hh:mm:ss a";
        //         return timeConv.toLocaleTimeString("en-IN", {
        //           hour12: true,
        //         });
        //       } else if (key == 2) {
        //         userSettings.timeFormat = "HH:mm:ss";
        //         return timeConv.toLocaleTimeString("en-IN", {
        //           hour12: false,
        //         });
        //       }
        //     }
        //   }
        // },
        // //on Apply theme
        // onApplyTheme: function (key) {
        //   if (key) {
        //     sap.ui.getCore().applyTheme(key);
        //     sap.ui.getCore().attachThemeChanged(function (oEvent) {
        //       console.log(oEvent.getParameters());
        //     });
        //   }
        // },
        // //LogOut Dialog
        // onPressLogOut: function () {
        //   if (!this.oApproveDialog) {
        //     this.oApproveDialog = new Dialog({
        //       type: DialogType.Message,
        //       title: "Confirm",
        //       content: new sap.m.Text({
        //         text: "Are you sure you want to log off?",
        //       }),
        //       beginButton: new Button({
        //         type: ButtonType.Emphasized,
        //         text: "OK",
        //         press: function () {
        //           //MessageToast.show("Submit pressed!");
        //           //this.showChatBot(false);
        //           this.getRouter().navTo("login");
        //           this.oApproveDialog.close();
        //         }.bind(this),
        //       }),
        //       endButton: new Button({
        //         text: "Cancel",
        //         press: function () {
        //           this.oApproveDialog.close();
        //         }.bind(this),
        //       }),
        //     });
        //   }
  
        //   this.oApproveDialog.open();
        // },
        // //Error popover button handler
        // handleMessagePopoverPress: function (oEvent) {
        //   let isDialog = false;
        //   let oSource;
        //   if (oEvent?.oSource) {
        //     oSource = oEvent.getSource();
        //   } else {
        //     oSource = oEvent;
        //   }
        //   if (!this.oPopover) {
        //     this.errorMessagePopover(oSource, isDialog);
        //   } else {
        //     this.oPopover.toggle(oSource);
        //   }
        // },
        // //Error Popover Start
        // // errorMessagePopover: async function (popoverBtn) {
        // //   //Popover
        // //   /* if (!this.errorMessage) {
        // //     this.errorMessage = this.loadFragment({
        // //       name: "com.propertyzone.view.fragment.ErrorMessage"
        // //     }, this);
        // //   } */
        // //   if (popoverBtn) {
        // //     let oPopover = await this.onOpenPopover(
        // //       popoverBtn,
        // //       "com.propertyzone.view.fragment.ErrorMessage"
        // //     );
        // //   }
        // //   /*  this.errorMessage.then(function (oPopover) { */
        // //   //this.oPopover.toggle(popoverBtn);
        // //   /*   }); */
        // // },
        // errorMessagePopoverClose: function () {
        //   if (this.oPopover != undefined) {
        //     this.oPopover.close();
        //   }
        // },
        // onActiveTitlePress: function (oEvent) {
        //   var getSelItem = oEvent
        //     .getParameter("item")
        //     .getBindingContext("errors")
        //     .getObject();
        //   var control = getSelItem.control;
        //   var oPage = getSelItem.page;
        //   var oControl = Element.registry.get(control.getId());
  
        //   if (oControl) {
        //     /* oPage.scrollToElement(oControl.getDomRef(), 200, [0, -100]);
        //     setTimeout(function () {
        //       oControl.focus();
        //     }, 300); */
        //     jQuery.sap.delayedCall(500, this, function () {
        //       oControl.focus();
        //     });
        //     var type = oControl.getAccessibilityInfo().type;
        //     if (type == "Checkbox") {
        //       var text = oControl.getText();
        //       var oPopover = new sap.m.Popover({
        //         showHeader: false,
        //         placement: "Bottom",
        //         content: [
        //           new sap.m.Text({
        //             text: text,
        //             width: "auto",
        //           }).addStyleClass("sapUiTinyMargin"),
        //         ],
        //       });
        //       oPopover.openBy(oControl);
        //     }
        //   }
        // },
        // // customErrorObject: function (
        // //   errorMessages,
        // //   pageId,
        // //   oControl,
        // //   description
        // // ) {
        // //   return {
        // //     type: "Error",
        // //     active: false,
        // //     control: oControl,
        // //     title: errorMessages,
        // //     subTitle: null,
        // //     description: description,
        // //     page: pageId,
        // //   };
        // // },
        // // errorHandling: function (ex) {
        // //   var that = this;
        // //   if (!this.errorData) {
        // //     this.errorData = [];
        // //   }
        // //   let eModel = this.getOwnerComponent().getModel("errors");
        // //   let exist = this.errorData.find(
        // //     (e) =>
        // //       e.title ==
        // //       (ex.responseJSON.errorDescription || ex.responseJSON.debugMessage)
        // //   );
        // //   if (ex && !exist) {
        // //     if (ex.responseJSON?.debugMessage) {
        // //       this.errorData.push(
        // //         that.customErrorObject(
        // //           ex.responseJSON.debugMessage,
        // //           that.pageId,
        // //           null
        // //         )
        // //       );
        // //     } else if (ex.responseJSON?.errorDescription) {
        // //       this.errorData.push(
        // //         that.customErrorObject(
        // //           ex.responseJSON.errorDescription,
        // //           that.pageId,
        // //           null
        // //         )
        // //       );
        // //     } else if (ex.responseJSON) {
        // //       this.errorData.push(
        // //         that.customErrorObject(ex.responseJSON.error, that.pageId, null)
        // //       );
        // //     } else if (ex.status) {
        // //       this.errorData.push(
        // //         that.customErrorObject(
        // //           ex.status + " " + ex.statusText,
        // //           that.pageId,
        // //           null
        // //         )
        // //       );
        // //     } else {
        // //       this.showLoading(false);
  
        // //       this.errorData.push(that.customErrorObject(ex, that.pageId, null));
        // //     }
        // //   }
        // //   let exData = eModel.getData().length ? eModel.getData() : [];
        // //   let merge = [...exData, ...this.errorData];
        // //   eModel.setData(merge);
  
        // //   if (merge.length) {
        // //     that.errorMessagePopover(that.popoverBtn, false);
        // //   }
        // //   that.showLoading(false);
        // // },
        // //Error Popover End
  
        // userSettingsData: function () {
        //   //Themes and User Settings
        //   if (
        //     !this.getView().getModel() ||
        //     !this.getView().getModel()?.getData()
        //   ) {
        //     this.getView().setModel(new JSONModel());
        //   }
  
        //   let settings = this.getStorage("userSettings");
        //   let oData = {
        //     themes: [
        //       {
        //         key: "sap_bluecrystal",
        //         name: "Blue Crystal",
        //       },
        //       {
        //         key: "sap_belize",
        //         name: "Belize",
        //       },
        //       {
        //         key: "sap_fiori_3",
        //         name: "Quartz Light",
        //       },
        //       {
        //         key: "sap_fiori_3_dark",
        //         name: "Quartz Dark",
        //       },
        //       {
        //         key: "sap_horizon",
        //         name: "Morning Horizon",
        //       },
        //       {
        //         key: "sap_horizon_dark",
        //         name: "Evening Horizon",
        //       },
        //     ],
        //     timeFormat: [
        //       {
        //         key: 1,
        //         name: "12 Hours",
        //       },
        //       {
        //         key: 2,
        //         name: "24 Hours",
        //       },
        //     ],
        //     dateFormat: [
        //       {
        //         key: 1,
        //         name: "Numeric",
        //       },
        //       {
        //         key: 2,
        //         name: "Short",
        //       },
        //       {
        //         key: 3,
        //         name: "Long",
        //       },
        //     ],
        //     language: [
        //       {
        //         key: "en",
        //         name: "English",
        //       },
        //       {
        //         key: "ar",
        //         name: "Arabic",
        //       },
        //     ],
        //     userSettings: {
        //       theme: "sap_horizon",
        //       language: "en",
        //       dateFormatKey: 1,
        //       timeFormatKey: 1,
        //       dateFormat: "dd-MM-yyyy",
        //       timeFormat: "HH:mm a",
        //     },
        //   };
        //   let oModel = this.getView().getModel();
        //   let existData = oModel.getData();
        //   let merge = {
        //     ...existData,
        //     ...oData,
        //   };
        //   oModel.setData(merge);
  
        //   oModel.getData().userSettings.currentDate = this.getDateFormats(
        //     1,
        //     new Date()
        //   );
        //   oModel.getData().userSettings.currentTime = this.getTimeFormats(
        //     1,
        //     new Date().toLocaleTimeString()
        //   );
  
        //   if (settings) {
        //     oModel.getData().userSettings = settings;
        //     this.setStorage("userSettings", settings);
        //     this.onApplyTheme(settings.theme);
        //   } else {
        //     this.setStorage("userSettings", oData.userSettings);
        //   }
        //   oModel.refresh();
        // },
  
        // onPressUserSetting: async function () {
        //   //User Settings Dialog
  
        //   let oDialog = await this.onOpenDialog(
        //     "com.propertyzone.view.fragment.UserSettings"
        //   );
        //   let listTheme = this.getView().byId("dg_listThemes");
        //   let settings = this.getStorage("userSettings");
        //   listTheme.getItems().forEach((e) => {
        //     let key = e.getBindingContext().getObject().key;
        //     if (key == settings.theme) {
        //       listTheme.setSelectedItem(e);
        //     }
        //   });
        //   this.userSettingsData();
        // },
        // onCloseUserSetting: function () {
        //   this.userSettingsDialog.then(function (oDialog) {
        //     oDialog.close();
        //   });
        // },
        // onPressUserDialogMenu: function (oEvent) {
        //   let splitContainer = this.byId("userSettingsSplitContainer");
        //   splitContainer.backMaster();
        // },
  
        // onThemSelect: function (oEvent) {
        //   //on Theme Selection
        //   var oModel = this.getModel();
        //   var selThemObj = oEvent
        //     .getParameter("listItem")
        //     .getBindingContext()
        //     .getObject();
  
        //   oModel.getData().userSettings.theme = selThemObj.key;
        //   this.onApplyTheme(selThemObj.key);
        //   oModel.refresh();
        // },
  
        // onChangeLanguage: function (oEvent) {
        //   // on Language Selection
        //   var oModel = this.getModel();
        //   var coreConfig = sap.ui.getCore().getConfiguration();
        //   var selThemObj = oEvent
        //     .getParameter("selectedItem")
        //     .getBindingContext()
        //     .getObject();
  
        //   oModel.getData().userSettings.language = selThemObj.key;
        //   sap.ui.getCore().attachLocalizationChanged(function (oEvent) {
        //     console.log(oEvent.getParameters());
        //   });
  
        //   coreConfig.setLanguage(selThemObj.key);
  
        //   oModel.refresh();
        // },
  
        // onChangeApplicationDate: function (oEvent) {
        //   // on Change Date Format for Entire Application
        //   var oModel = this.getModel();
        //   var oKey = oEvent.getParameter("selectedItem").getKey();
        //   oModel.getData().userSettings.currentDate = this.getDateFormats(
        //     oKey,
        //     new Date()
        //   );
        //   oModel.refresh();
        //   // this.setStorage("userSettings", oModel.getData().userSettings)
        // },
  
        // onChangeApplicationTime: function (oEvent) {
        //   // on Change Time Format for Entire Application
        //   var oModel = this.getModel();
        //   var oKey = oEvent.getParameter("selectedItem").getKey();
        //   oModel.getData().userSettings.currentTime = this.getTimeFormats(
        //     oKey,
        //     new Date().toLocaleTimeString()
        //   );
        //   oModel.refresh();
        // },
        // onPressSaveSettings: function (oEvent) {
        //   var oModel = this.getModel();
        //   this.setStorage("userSettings", oModel.getData().userSettings);
        //   this.onCloseDialog();
        // },
        // onListItemPress: function (oEvent) {
        //   var sToPageId = oEvent
        //     .getParameter("listItem")
        //     .getCustomData()[0]
        //     .getValue();
        //   var sContainer = this.getView().byId("userSettingsSplitContainer");
        //   sContainer.toDetail(this.createId(sToPageId));
        // },
        // disableItemNavigated: function (oTable) {
        //   if (oTable) {
        //     oTable.getItems().forEach((e) => e.setNavigated(false));
        //   }
        // },
        // setTitle: function (oTitle) {
        //   //Page title
        //   this.getModel().getData().genericTitle = oTitle;
        //   this.getModel().refresh();
        // },
        // genericTitle: function (oTitle) {
        //   //Page title
        //   this.getModel().getData().genericTitle = oTitle;
        //   this.getModel().refresh(false);
        // },
        // onPressNavPartner: function (oEvent) {
        //   this.oRouter.navTo("partner-details", {
        //     id: 23424,
        //   });
        // },
        // /* QRC Wizard Dialog Functionalities */
      
        // ///************API Calls***********///
        // apiGetMethod: async function (url) {
        //   try {
        //     const response = await fetch(url);
        //     if (!response.ok) {
        //       throw new Error('Network response was not ok');
        //     }
        //     return response.json();
        //   } catch (error) {
        //     console.error('There was a problem with your fetch operation:', error);
        //     throw error; // Rethrow the error to handle it in calling code
        //   }
        // },
        // /* apiGetMethod: function (url) {
        //   var deferred = $.Deferred();
        //   $.ajax({
        //     type: "GET",
        //     url: url,
        //     contentType: "application/json",
        //     success: function (response) {
        //       deferred.resolve(response);
        //     },
        //     error: function (xhr) {
        //       deferred.reject(xhr); 
        //     },
        //   });
        //   return deferred.promise();
        // }, */
        // restMethodGet: function (url) {
        //   url = AppConstants.URL.app_endPoint + url;
        //   // var token = this.getStorage("login_token");
        //   var deferred = $.Deferred();
        //   // if (token) {
        //   $.ajax({
        //     type: "GET",
        //     /*  beforeSend: function (xhr) {
        //        xhr.setRequestHeader("Authorization", "BasicAuth " + token);
        //      }, */
        //     url: url,
        //     contentType: "application/json",
        //     headers: {
        //       "x-csrf-token": "fetch",
        //       "Content-Type": "application/json",
        //     },
        //     success: function (response) {
        //       deferred.resolve(response);
        //     },
        //     error: function (xhr) {
        //       deferred.reject(xhr); //.responseJSON.message);
        //     },
        //   });
        //   // }
        //   return deferred.promise();
        // },
        // restMethodDelete: function (url) {
        //   url = AppConstants.URL.app_endPoint + url;
        //   //var token = JSON.parse(sessionStorage.getItem("state.key_-userContext")).response;
        //   var deferred = $.Deferred();
        //   //if (token != "" && token != null) {
        //   $.ajax({
        //     type: "DELETE",
        //     url: url,
        //     contentType: "application/json",
        //     //headers: { "my-token": token },
        //     success: function (response) {
        //       deferred.resolve(response);
        //     },
        //     error: function (xhr) {
        //       deferred.reject(xhr); //.responseJSON.message);
        //     },
        //   });
        //   //}
        //   return deferred.promise();
        // },
        // restMethodGetForLogin: function (url, body) {
        //   url = AppConstants.URL.app_endPoint + url;
        //   var deferred = $.Deferred();
        //   $.ajax({
        //     type: "POST",
        //     url: url,
        //     data: JSON.stringify(body),
        //     contentType: "application/json",
        //     success: function (response) {
        //       deferred.resolve(response);
        //     },
        //     error: function (xhr) {
        //       deferred.reject(xhr); //.responseJSON.message);
        //     },
        //   });
        //   return deferred.promise();
        // },
        // restMethodGetWitData: function (url, request) {
        //   url = AppConstants.URL.app_endPoint + url;
        //   // var token = JSON.parse(
        //   //   sessionStorage.getItem("state.key_-userContext")
        //   // ).response;
        //   var token = "token";
        //   var deferred = $.Deferred();
        //   $.ajax({
        //     type: "POST",
        //     url: url,
        //     contentType: "application/json",
        //     data: JSON.stringify(request),
        //     headers: {
        //       "my-token": token,
        //     },
        //     success: function (response) {
        //       deferred.resolve(response);
        //     },
        //     error: function (xhr) {
        //       deferred.reject(xhr.responseJSON.message);
        //     },
        //   });
        //   return deferred.promise();
        // },
        // restMethodPost: function (url, request) {
        //   url = AppConstants.URL.app_endPoint + url;
        //   var token = this.getStorage("login_token");
        //   var deferred = $.Deferred();
        //   $.ajax({
        //     type: "POST",
        //     beforeSend: function (xhr) {
        //       xhr.setRequestHeader("Authorization", "Bearer " + token);
        //     },
        //     url: url,
        //     data: JSON.stringify(request),
        //     contentType: "application/json",
        //     success: function (response) {
        //       deferred.resolve(response);
        //     },
        //     error: function (xhr) {
        //       deferred.reject(xhr);
        //     },
        //   });
        //   return deferred.promise();
        // }
      
        ///************API Calls End***********///
        //Fetch master data
      
        });
    }
  );
  