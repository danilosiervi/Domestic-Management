sap.ui.define([
    "sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/ui/core/IconPool",
    "br/com/admcasa/admcasa/model/models"
], (UIComponent, JSONModel, Device, IconPool, models) => {
    "use strict";

    return UIComponent.extend("br.com.admcasa.admcasa.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
			this.setModel(new JSONModel({ currency: "BRL" }));

            // enable routing
            this.getRouter().initialize();

            // set SAP Business Suite icons
			var B = {
				fontFamily: "BusinessSuiteInAppSymbols",
				fontURI: "./resources/sap/ushell/themes/base/fonts/"
			};
			
			IconPool.registerFont(B);
			sap.ui.getCore().getConfiguration().setFormatLocale("pt_BR");

			var InitialSettings = {
				Environment: "P",
				ConnectIcon: "sap-icon://disconnected"
			};

			var UserModel = {
				Uname: null,
				NameText: null,
			};

			var TaskModel = {
				items: [],
				item: null,
			};

			var StatusModel = {
				items: [{
					Num: "0",
					Status: "Rascunho" 
				}, {
					Num: "1",
					Status: "Aguardando aprovação Administrador" 
				}, {
					Num: "2",
					Status: "Aguardando aprovação"
				}, {
					Num: "3",
					Status: "Gerada"
				}, {
					Num: "4",
					Status: "Encerrada"
				}, {
					Num: "5",
					Status: "Reprovado"
				}, {
					Num: "6",
					Status: "Cancelada"
				}, {
					Num: "7",
					Status: "Eliminado"
				}]
			}

            var ImagesModel = {
				images: [],
			};

			var oJsonModel = new JSONModel(InitialSettings);
			this.setModel(oJsonModel, "InitialSettings");
			
			oJsonModel = new JSONModel(UserModel);
			this.setModel(oJsonModel, "UserModel");

			oJsonModel = new JSONModel(TaskModel);
			this.setModel(oJsonModel, "TaskModel");

			oJsonModel = new JSONModel(StatusModel);
			this.setModel(oJsonModel, "StatusModel");

			oJsonModel = new JSONModel(ImagesModel);
			this.setModel(oJsonModel, "ImagesModel");
		},
    });
});