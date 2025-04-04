sap.ui.define([
	"br/com/admcasa/admcasa/controller/BaseController",
	"sap/m/MessageBox",
	'sap/ui/model/json/JSONModel',
	'sap/ui/unified/library',
	'sap/m/library',
	'sap/ui/core/date/UI5Date'
], (BaseController, MessageBox, JSONModel, unifiedLibrary, mLibrary, UI5Date) => {
	"use strict";

	return BaseController.extend("br.com.admcasa.admcasa.controller.Tasks", {
        //This is the splash screen controller
		onInit: async function () {
			const route = this.getRouter().getRoute("Tasks");
			route.attachMatched(this.initController, this);
		},

		initController: function (oEvent) {
			console.log("Tarefas");
		
			// Acessa modelo do component que armazena as tarefas
			// var tarefa = this.getOwnerComponent().getModel("TasksModel").getProperty("/Werks");
		
			// 	// create model
			// 	var oModel = new JSONModel();
			// 	oModel.setData({
			// 		startDate: UI5Date.getInstance("2017", "0", "15", "8", "0"),
			// 		people: [{
			// 			pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
			// 			name: "John Miller",
			// 			role: "team member",
			// 			specialDates: [
			// 				{
			// 					start: UI5Date.getInstance(2017, 0, 24),
			// 					type: "NonWorking"
			// 				},
			// 				{
			// 					start: UI5Date.getInstance(2017, 0, 22),
			// 					type: "Type10",
			// 					secondaryType: "Working"
			// 				}
			// 			],
			// 			appointments: [
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "8", "08", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "8", "09", "30"),
			// 					title: "Meet Max Mustermann",
			// 					type: "Type02",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "11", "10", "0"),
			// 					end: UI5Date.getInstance("2017", "0", "11", "12", "0"),
			// 					title: "Team meeting",
			// 					info: "room 1",
			// 					type: "Type01",
			// 					pic: "sap-icon://sap-ui5",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "12", "11", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "12", "13", "30"),
			// 					title: "Lunch",
			// 					info: "canteen",
			// 					type: "Type03",
			// 					tentative: true
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "15", "08", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "15", "09", "30"),
			// 					title: "Meet Max Mustermann",
			// 					type: "Type02",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "15", "10", "0"),
			// 					end: UI5Date.getInstance("2017", "0", "15", "12", "0"),
			// 					title: "Team meeting",
			// 					info: "room 1",
			// 					type: "Type01",
			// 					pic: "sap-icon://sap-ui5",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "15", "11", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "15", "13", "30"),
			// 					title: "Lunch",
			// 					info: "canteen",
			// 					type: "Type03",
			// 					tentative: true
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "15", "13", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "15", "17", "30"),
			// 					title: "Discussion with clients",
			// 					info: "online meeting",
			// 					type: "Type02",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "16", "04", "00"),
			// 					end: UI5Date.getInstance("2017", "0", "16", "22", "30"),
			// 					title: "Discussion of the plan",
			// 					info: "Online meeting",
			// 					type: "Type04",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "18", "08", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "18", "09", "30"),
			// 					title: "Meeting with the manager",
			// 					type: "Type02",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "18", "11", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "18", "13", "30"),
			// 					title: "Lunch",
			// 					info: "canteen",
			// 					type: "Type03",
			// 					tentative: true
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "18", "1", "0"),
			// 					end: UI5Date.getInstance("2017", "0", "18", "22", "0"),
			// 					title: "Team meeting",
			// 					info: "regular",
			// 					type: "Type01",
			// 					pic: "sap-icon://sap-ui5",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "21", "00", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "21", "23", "30"),
			// 					title: "New Product",
			// 					info: "room 105",
			// 					type: "Type03",
			// 					tentative: true
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "25", "11", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "25", "13", "30"),
			// 					title: "Lunch",
			// 					type: "Type03",
			// 					tentative: true
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "29", "10", "0"),
			// 					end: UI5Date.getInstance("2017", "0", "29", "12", "0"),
			// 					title: "Team meeting",
			// 					info: "room 1",
			// 					type: "Type01",
			// 					pic: "sap-icon://sap-ui5",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "30", "08", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "30", "09", "30"),
			// 					title: "Meet Max Mustermann",
			// 					type: "Type02",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "30", "10", "0"),
			// 					end: UI5Date.getInstance("2017", "0", "30", "12", "0"),
			// 					title: "Team meeting",
			// 					info: "room 1",
			// 					type: "Type01",
			// 					pic: "sap-icon://sap-ui5",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "30", "11", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "30", "13", "30"),
			// 					title: "Lunch",
			// 					type: "Type03",
			// 					tentative: true
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "30", "13", "30"),
			// 					end: UI5Date.getInstance("2017", "0", "30", "17", "30"),
			// 					title: "Discussion with clients",
			// 					type: "Type02",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "31", "10", "00"),
			// 					end: UI5Date.getInstance("2017", "0", "31", "11", "30"),
			// 					title: "Discussion of the plan",
			// 					info: "Online meeting",
			// 					type: "Type04",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "1", "3", "08", "30"),
			// 					end: UI5Date.getInstance("2017", "1", "13", "09", "30"),
			// 					title: "Meeting with the manager",
			// 					type: "Type02",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "1", "4", "10", "0"),
			// 					end: UI5Date.getInstance("2017", "1", "4", "12", "0"),
			// 					title: "Team meeting",
			// 					info: "room 1",
			// 					type: "Type01",
			// 					pic: "sap-icon://sap-ui5",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "2", "30", "10", "0"),
			// 					end: UI5Date.getInstance("2017", "4", "33", "12", "0"),
			// 					title: "Working out of the building",
			// 					type: "Type07",
			// 					pic: "sap-icon://sap-ui5",
			// 					tentative: false
			// 				}
			// 			],
			// 			headers: [
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "15", "8", "0"),
			// 					end: UI5Date.getInstance("2017", "0", "15", "10", "0"),
			// 					title: "Reminder",
			// 					type: "Type06"
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "0", "15", "17", "0"),
			// 					end: UI5Date.getInstance("2017", "0", "15", "19", "0"),
			// 					title: "Reminder",
			// 					type: "Type06"
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2017", "8", "1", "0", "0"),
			// 					end: UI5Date.getInstance("2017", "10", "30", "23", "59"),
			// 					title: "New quarter",
			// 					type: "Type10",
			// 					tentative: false
			// 				},
			// 				{
			// 					start: UI5Date.getInstance("2018", "1", "1", "0", "0"),
			// 					end: UI5Date.getInstance("2018", "3", "30", "23", "59"),
			// 					title: "New quarter",
			// 					type: "Type10",
			// 					tentative: false
			// 			}
			// 				]
			// 			},
			// 			{
			// 				pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
			// 				name: "Donna Moore",
			// 				role: "team member",
			// 				specialDates: [
			// 					{
			// 						start: UI5Date.getInstance(2017, 0, 13),
			// 						type: "NonWorking"
			// 					}
			// 				],
			// 				appointments: [
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "10", "18", "00"),
			// 						end: UI5Date.getInstance("2017", "0", "10", "19", "10"),
			// 						title: "Discussion of the plan",
			// 						info: "Online meeting",
			// 						type: "Type04",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "9", "10", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "12", "12", "0"),
			// 						title: "Workshop out of the country",
			// 						type: "Type07",
			// 						pic: "sap-icon://sap-ui5",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "15", "08", "00"),
			// 						end: UI5Date.getInstance("2017", "0", "15", "09", "30"),
			// 						title: "Discussion of the plan",
			// 						info: "Online meeting",
			// 						type: "Type04",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "15", "10", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "15", "12", "0"),
			// 						title: "Team meeting",
			// 						info: "room 1",
			// 						type: "Type01",
			// 						pic: "sap-icon://sap-ui5",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "15", "18", "00"),
			// 						end: UI5Date.getInstance("2017", "0", "15", "19", "10"),
			// 						title: "Discussion of the plan",
			// 						info: "Online meeting",
			// 						type: "Type04",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "16", "10", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "31", "12", "0"),
			// 						title: "Workshop out of the country",
			// 						type: "Type07",
			// 						pic: "sap-icon://sap-ui5",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2018", "0", "1", "0", "0"),
			// 						end: UI5Date.getInstance("2018", "2", "31", "23", "59"),
			// 						title: "New quarter",
			// 						type: "Type10",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "01", "11", "10", "0"),
			// 						end: UI5Date.getInstance("2017", "02", "20", "12", "0"),
			// 						title: "Team collaboration",
			// 						info: "room 1",
			// 						type: "Type01",
			// 						pic: "sap-icon://sap-ui5",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "3", "01", "10", "0"),
			// 						end: UI5Date.getInstance("2017", "3", "31", "12", "0"),
			// 						title: "Workshop out of the country",
			// 						type: "Type07",
			// 						pic: "sap-icon://sap-ui5",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "4", "01", "10", "0"),
			// 						end: UI5Date.getInstance("2017", "4", "31", "12", "0"),
			// 						title: "Out of the office",
			// 						type: "Type08",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "7", "1", "0", "0"),
			// 						end: UI5Date.getInstance("2017", "7", "31", "23", "59"),
			// 						title: "Vacation",
			// 						info: "out of office",
			// 						type: "Type04",
			// 						tentative: false
			// 					}
			// 				],
			// 				headers: [
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "15", "9", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "15", "10", "0"),
			// 						title: "Payment reminder",
			// 						type: "Type06"
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "15", "16", "30"),
			// 						end: UI5Date.getInstance("2017", "0", "15", "18", "00"),
			// 						title: "Private appointment",
			// 						type: "Type06"
			// 					}
			// 				]
			// 	},
			// 			{
			// 				pic: "sap-icon://employee",
			// 				name: "Max Mustermann",
			// 				role: "team member",
			// 				specialDates: [
			// 					{
			// 						start: UI5Date.getInstance(2017, 0, 16),
			// 						end: UI5Date.getInstance(2017, 0, 18),
			// 						type: "NonWorking"
			// 					}
			// 				],
			// 				appointments: [
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "15", "08", "30"),
			// 						end: UI5Date.getInstance("2017", "0", "15", "09", "30"),
			// 						title: "Meet John Miller",
			// 						type: "Type02",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "15", "10", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "15", "12", "0"),
			// 						title: "Team meeting",
			// 						info: "room 1",
			// 						type: "Type01",
			// 						pic: "sap-icon://sap-ui5",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "15", "13", "00"),
			// 						end: UI5Date.getInstance("2017", "0", "15", "16", "00"),
			// 						title: "Discussion with clients",
			// 						info: "online",
			// 						type: "Type02",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "16", "0", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "16", "23", "59"),
			// 						title: "Vacation",
			// 						info: "out of office",
			// 						type: "Type04",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "19", "08", "30"),
			// 						end: UI5Date.getInstance("2017", "0", "19", "18", "30"),
			// 						title: "Meet John Doe",
			// 						type: "Type02",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "19", "10", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "19", "16", "0"),
			// 						title: "Team meeting",
			// 						info: "room 1",
			// 						type: "Type01",
			// 						pic: "sap-icon://sap-ui5",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "19", "07", "00"),
			// 						end: UI5Date.getInstance("2017", "0", "19", "17", "30"),
			// 						title: "Discussion with clients",
			// 						type: "Type02",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "20", "0", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "20", "23", "59"),
			// 						title: "Vacation",
			// 						info: "out of office",
			// 						type: "Type04",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "22", "07", "00"),
			// 						end: UI5Date.getInstance("2017", "0", "27", "17", "30"),
			// 						title: "Discussion with clients",
			// 						info: "out of office",
			// 						type: "Type02",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "2", "13", "9", "0"),
			// 						end: UI5Date.getInstance("2017", "2", "17", "10", "0"),
			// 						title: "Payment week",
			// 						type: "Type06"
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "03", "10", "0", "0"),
			// 						end: UI5Date.getInstance("2017", "05", "16", "23", "59"),
			// 						title: "Vacation",
			// 						info: "out of office",
			// 						type: "Type04",
			// 						tentative: false
			// 					},
			// 					{
			// 						start: UI5Date.getInstance("2017", "07", "1", "0", "0"),
			// 						end: UI5Date.getInstance("2017", "09", "31", "23", "59"),
			// 						title: "New quarter",
			// 						type: "Type10",
			// 						tentative: false
			// 					}
			// 				],
			// 				headers: [
			// 					{
			// 						start: UI5Date.getInstance("2017", "0", "16", "0", "0"),
			// 						end: UI5Date.getInstance("2017", "0", "16", "23", "59"),
			// 						title: "Private",
			// 						type: "Type05"
			// 					}
			// 				]
			// 			}
			// 		],
			// 		specialDates: [
			// 			{
			// 				start: UI5Date.getInstance("2017", "0", "15"),
			// 				end: UI5Date.getInstance("2017", "0", "15"),
			// 				type: "Working"
			// 			},
			// 			{
			// 				start: UI5Date.getInstance("2017", "0", "16"),
			// 				end: UI5Date.getInstance("2017", "0", "18"),
			// 				type: "Type07"
			// 			},
			// 			{
			// 				start: UI5Date.getInstance("2017", "0", "19"),
			// 				end: UI5Date.getInstance("2017", "0", "19", "23", "59"),
			// 				type: "Type08"
			// 			},
			// 			{
			// 				start: UI5Date.getInstance("2017", "0", "21"),
			// 				end: UI5Date.getInstance("2017", "0", "21", "23", "59"),
			// 				type: "Type05",
			// 				color: "#ff69b4"
			// 			},
			// 			{
			// 				start: UI5Date.getInstance("2017", "0", "22"),
			// 				end: UI5Date.getInstance("2017", "0", "22", "23", "59"),
			// 				type: "Type04",
			// 				color: "#add8e6"
			// 			},
			// 			{
			// 				start: UI5Date.getInstance("2017", "6", "24"),
			// 				end: UI5Date.getInstance("2017", "6", "24", "23", "59"),
			// 				type: "Type09"
			// 			},
			// 			{
			// 				start: UI5Date.getInstance("2017", "6", "25"),
			// 				end: UI5Date.getInstance("2017", "6", "25", "23", "59"),
			// 				type: "Type14"
			// 			}
			// 		],
			// 		legendItems: [
			// 			{
			// 				text: "Public holiday",
			// 				type: "Type07"
			// 			},
			// 			{
			// 				text: "Team building",
			// 				type: "Type08"
			// 			},
			// 			{
			// 				text: "Work from office 1",
			// 				type: "Type05",
			// 				color: "#ff69b4"
			// 			},
			// 			{
			// 				text: "Work from office 2",
			// 				type: "Type04",
			// 				color: "#add8e6"
			// 			}
			// 		],
			// 		legendAppointmentItems: [
			// 			{
			// 				text: "Reminder",
			// 				type: "Type06"
			// 			},
			// 			{
			// 				text: "Client meeting",
			// 				type: "Type02"
			// 			},
			// 			{
			// 				text: "Team meeting",
			// 				type: "Type01"
			// 			},
			// 			{
			// 				text: "Planning",
			// 				type: "Type04"
			// 			},
			// 			{
			// 				text: "Out of office",
			// 				type: "Type03"
			// 			},
			// 			{
			// 				text: "Customer Initiative",
			// 				type: "Type07"
			// 			}
			// 		]
			// 	});
			// 	this.getView().setModel(oModel);

			// 	var oStateModel = new JSONModel();
			// 	oStateModel.setData({
			// 		legendShown: false
			// 	});
			// 	this.getView().setModel(oStateModel, "stateModel");
			
		},
			
	});

});