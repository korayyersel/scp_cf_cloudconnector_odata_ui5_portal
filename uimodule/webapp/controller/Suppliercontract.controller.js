sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("qperior.backendODataApp.controller.Suppliercontract", {
    handleListItem: function (oEvent) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      var selectedProductId = oEvent.getSource().getBindingContext().getProperty("PurchaseOrder");
      oRouter.navTo("SuppliercontractDetail", {
        id: selectedProductId
      });
    }
  });
});
