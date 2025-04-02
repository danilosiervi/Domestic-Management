sap.ui.define(["sap/ui/core/format/DateFormat"], function (DateFormat) {
	"use strict";
	return {

		decimal : function(d) {
			if (d)
				return parseFloat(d).toFixed(3);
		},

		taskDraft: function (Task, Seq) {
			if (Task != '0') 
				return Task;
			else 
				return '#' + Seq;
		},

		taskDraftTitle: function (Task, Seq) {
			if (Task != '0') 
				return 'Nº Task: ' + Task;
			else 
				return 'Nº Task: #' + Seq;
		},

		formatDate: function (date) {
			if (!date) 
				return ""

			if (typeof date === 'string' || date instanceof String) {
				date = date.split("T");
				date = date[0].split("-");
				date = date[2] + "/" + date[1] + "/" + date[0];
				return date
			}

			var dateF = DateFormat.getDateInstance({pattern: "dd/MM/YYYY"});  
			var dateFormatted = dateF.format(date);
			return dateFormatted;
		},

		status: function (status) {
			if (!status)
				return "";

			var oStatuses = this.getOwnerComponent().getModel("StatusModel").getProperty("/items");
			return oStatuses[parseInt(status)].Status;
		},
		
		statusState: function (status) {
			switch (status) {
				case '0':
					return "Information"
					break;
				case '1':
					return "Warning"
					break;
				case '2':
					return "Warning"
					break;
				case '3':
					return "Success"
					break;
				case '4':
					return "Error"
					break;
				case '5':
					return "Error"
					break;
				default:
					return "None"
					break;
			}
		},

		formatarCNPJ: function (input) {
			if (input)
				return input.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
			else
				return input;
		}

	};
});