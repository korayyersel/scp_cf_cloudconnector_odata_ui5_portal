sap.ui.define([
  "sap/ui/test/Opa5",
  "qperior/backendODataApp/test/integration/arrangements/Startup",
  "qperior/backendODataApp/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
