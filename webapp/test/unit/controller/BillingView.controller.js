/*global QUnit*/

sap.ui.define([
	"z/billingdocs/controller/BillingView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BillingView Controller");

	QUnit.test("I should test the BillingView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
