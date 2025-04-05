sap.ui.define([
	"br/com/admcasa/admcasa/controller/BaseController",
	"sap/m/MessageBox"
], (BaseController, MessageBox) => {
	"use strict";

	return BaseController.extend("br.com.admcasa.admcasa.controller.App", {
        //This is the splash screen controller
		onInit: async function () {
			// this.prepareDB();
		}
	});

});