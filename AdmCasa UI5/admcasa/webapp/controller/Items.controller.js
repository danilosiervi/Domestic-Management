sap.ui.define([
	"br/com/admcasa/admcasa/controller/BaseController",
	"sap/m/MessageBox",
	'sap/ui/model/json/JSONModel',
	'sap/ui/unified/library',
	'sap/m/library',
	'sap/ui/core/date/UI5Date'
], (BaseController, MessageBox, JSONModel, unifiedLibrary, mLibrary, UI5Date) => {
	"use strict";

	return BaseController.extend("br.com.admcasa.admcasa.controller.Items", {
        
		onInit: async function () {
			const route = this.getRouter().getRoute("Items");
			route.attachMatched(this.initController, this);
		},

		initController: function (oEvent) {
			console.log("Itens");
		},
			
	});

});