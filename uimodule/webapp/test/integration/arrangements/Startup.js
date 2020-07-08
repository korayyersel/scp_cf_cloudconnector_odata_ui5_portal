sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("qperior.backendODataApp.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "qperior.backendODataApp",
          async: true,
          manifest: true
        }
      });
    }

  });
});
