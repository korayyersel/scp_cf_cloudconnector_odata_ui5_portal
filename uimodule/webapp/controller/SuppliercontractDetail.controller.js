sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("qperior.backendODataApp.controller.SuppliercontractDetail", {
    onInit: function () {
      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.getRoute("SuppliercontractDetail").attachMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function (oEvent) {
      const id = oEvent.getParameter("arguments").id;
      const oView = this.getView();
      oView.bindElement({
        path: "/C_SupplierPurOrder('" + id + "')",
        events: {
          dataRequested: function () {
            oView.setBusy(true);
          },
          dataReceived: function () {
            oView.setBusy(false);
          }
        }
      });
    },
  });
});
