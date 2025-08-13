sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/Text",
  "sap/m/VBox",
  "sap/m/Label"
], function (Controller, Text, VBox, Label) {
  "use strict";
  return Controller.extend("z.billingdocs.controller.BillingView", {
    
    onSelectionChange: function (oEvent) {
      console.log("Selection changed!");
      
      var oTable = oEvent.getSource();
      var oSelectedItem = oTable.getSelectedItem();
      var oContext = oSelectedItem.getBindingContext();
      var oData = oContext.getObject();
      
      var oDetailPanel = this.byId("detailPanel");
      var oVBox = this.byId("detailVBox");
      
      oVBox.removeAllItems();
      
      // Add labels and values dynamically for each property you want to show
      var propsToShow = [
        {label: "Billing Document Number", prop: "BillingDocumentNumber"},
        {label: "Billing Type", prop: "BillingType"},
        {label: "Billing Category", prop: "BillingCategory"},
        {label: "Sales Organization", prop: "SalesOrganization"},
        {label: "Distribution Channel", prop: "DistributionChannel"},
        {label: "Country of Destination", prop: "CountryOfDestination"}
      ];
      
      propsToShow.forEach(function(item) {
        oVBox.addItem(new Label({text: item.label}));
        oVBox.addItem(new Text({text: oData[item.prop] || "-"}));
      });
      
      console.log("detailPanel:", oDetailPanel);

      oDetailPanel.setVisible(true);
    }
  });
});