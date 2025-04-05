sap.ui.define(
    [
        "br/com/admcasa/admcasa/controller/BaseController",
        "sap/ui/core/Core",
        "sap/ui/util/Storage",
        "sap/m/MessageBox",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        "sap/m/Dialog",
        "sap/m/DialogType",
        "sap/m/Button",
        "sap/m/Label",
        "sap/m/Text",
        "sap/m/Input",
        "sap/m/Bar",
        "sap/m/Title",
        "sap/m/HBox",
        "sap/ui/core/Icon",
        "sap/m/ButtonType",
        "br/com/admcasa/admcasa/model/formatter",
        "sap/m/library"
    ], (
        BaseController,
        Core,
        Storage,
        MessageBox,
        MessageToast,
        JSONModel,
        Dialog,
        DialogType,
        Button,
        Label,
        Text,
        Input,
        Bar,
        Title,
        HBox,
        Icon,
        ButtonType,
        formatter, 
        library
    ) => {
        "use strict";
        var nIntervId = undefined;

        return BaseController.extend("br.com.admcasa.admcasa.controller.Home", {
            formatter: formatter,

            onInit: function () {

                var oModel = new JSONModel({
                    Version: "<em>Versão 1.0.5</em>",
                    UserBtnState: false,
                    dialogUser: null,
                    dialogTarget: null,
                });

                this.getView().setModel(oModel);
                
                const route = this.getRouter().getRoute("Home");
                route.attachMatched(this.initController, this);
            },

            getLocalStorage: function () {
                
            },

            initController: async function () {
                //job de atualização a cada 50s
                // if (!nIntervId) nIntervId = setInterval(this.jobRefresh.bind(this), 50000);

                
                // this.getLocalStorage();
                // // this.handleRefreshView();
                // this.setConnectIcon();
            },

            handleListItem: function (oEvent) {
                
            },

            handleRefreshView: async function (source) {
                var isNotConnected = 0;

                if (isNotConnected != 1) {
                    if (source != "func")
                        MessageToast.show("Atualizando Tabelas...")
                    
                    if (source != "func")
                        MessageToast.show("Tabelas Atualizadas!")
                }

                this.initController();
            },

            setConnectIcon: async function () {
                var oView = this.getView(),
                    isNotConnected = 0;
                if (isNotConnected != 1) {
                    oView.byId("conectIcon").setColor("#7CFC00");
                    
                    //job de atualização a cada 15s para verificar conexão
                    if (!nIntervId) 
                        nIntervId = setInterval(this.setConnectIcon.bind(this), 15000);
                } else {
                    oView.byId("conectIcon").setColor("#B22202");
                }
            },

            handleItems: function () {
                this.getRouter().navTo("Items");
            },

            handleTasks: function () {
                this.getRouter().navTo("Tasks");
            },
            
            handlePersons: function () {
                this.getRouter().navTo("Person");
            },
            


        });
    }
);
