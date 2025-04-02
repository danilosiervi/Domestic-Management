sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        "sap/m/MessageBox",
        "sap/ui/core/UIComponent",
        "sap/ui/util/Storage",
        "sap/ui/core/EventBus",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
    ], (Controller, History, MessageBox, UIComponent, Storage, EventBus, Filter, FilterOperator) => {
        "use strict";
        var oEventBus,
            indexedDB = null,
            _db = null;

        return Controller.extend("br.com.admcasa.admcasa.controller.BaseController", {
            onInit: function () {
                oEventBus = new EventBus();
                var oRouter = this.getRouter();

                oRouter.attachBypassed(function (oEvent) {
                    var sHash = oEvent.getParameter("hash");
                    MessageBox.information(
                        "Sorry, but the hash '" + sHash + "' is invalid.\n" + 
                        "The resource was not found."
                    );
                }.bind(this));

                this.getRouter().navTo("Home");
            },

            pad_with_zeroes: function (number, length) {
                var my_string = "" + number;

                while (my_string.length < length) {
                    my_string = "0" + my_string;
                }
                return my_string;
            },

            adicionaZero: function (numero) {
                if (numero <= 9) return "0" + numero;
                else return numero;
            },

            toOdataDate: function () {
                // Converte data do backend para ser reenviada
                var now = new Date(),
                    todayDate =
                        now.getFullYear() +
                        "-" +
                        this.adicionaZero(now.getMonth() + 1).toString() +
                        "-" +
                        this.adicionaZero(now.getDate().toString()),
                    nowHour = now.toLocaleTimeString('pt-br', { hour12: false }).split(" ");

                var dateHourISO = todayDate + "T" + nowHour[0];
                console.log(dateHourISO);
                dateHourISO = dateHourISO.substring(0, 19);
                //Retorna padrão ISO yyyy-mm-ddThh:mm:ss
                return dateHourISO;
            },

            convertDateToStr: function (date) {
                if (typeof date == "string")
                    return date;
                    
                var todayDate = date.getFullYear() +
                        "-" + this.adicionaZero(date.getMonth() + 1).toString() +
                        "-" + this.adicionaZero(date.getDate().toString()),
                    nowHour = date.toLocaleTimeString('pt-br', { hour12: false }).split(" ");

                var dateHourISO = todayDate + "T" + nowHour[0];
                console.log(dateHourISO);
                dateHourISO = dateHourISO.substring(0, 19);
                //Retorna padrão ISO yyyy-mm-ddThh:mm:ss
                return dateHourISO;
            },

            getFilterDate: function () {
                var now = new Date();
                now.setDate(now.getDate() - 10);
                var todayDate =
                        now.getFullYear() +
                        "-" +
                        this.adicionaZero(now.getMonth() + 1).toString() +
                        "-" +
                        this.adicionaZero(now.getDate().toString()),
                    nowHour = now.toLocaleTimeString('pt-br', { hour12: false }).split(" ");

                var dateHourISO = todayDate + "T" + nowHour[0];
                console.log(dateHourISO);
                dateHourISO = dateHourISO.substring(0, 19);
                //Retorna padrão ISO yyyy-mm-ddThh:mm:ss
                return dateHourISO;
            },

            toStringDate: function (data) {
                // Converte data do controlador para ser enviada ao backend
                var dia = data.substring(8, 10),
                    mes = data.substring(5, 7),
                    ano = data.substring(0, 4);

                return dia + "/" + mes + "/" + ano;
            },

            getRouter: function () {
                return UIComponent.getRouterFor(this);
            },

            onNavBack: function () {
                var oHistory, sPreviousHash;

                oHistory = History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.back();
                } else {
                    this.getRouter().navTo("Home", {}, true /*no history*/);
                }
            },

            getEventBus: function () {
                return oEventBus;
            },

            toUppercase: function (oEvent) {
                var input = oEvent.getSource();
                input.setValue(input.getValue().toUpperCase());
            },

            toPersonName: function (str) {
                if (!str)
                    return;
                    
                const arr = str.split(" ");

                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                }

                const str2 = arr.join(" ");
                return(str2);
            },

        });
    }
);
