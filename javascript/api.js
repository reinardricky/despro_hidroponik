$(document).ready(function () {
	$.getJSON(
		"https://api.thingspeak.com/channels/1531842/status/last.json",
		function (statusUpdate) {
			document.getElementById("stat").innerHTML = statusUpdate.status;
		}
	);
	$.getJSON(
		"https://api.thingspeak.com/channels/1531842/feeds/last.json?results=8",
		function (fields) {
			document.getElementById("ppm").innerHTML = fields.field1 + " ppm";
			var nilaipH = parseFloat(fields.field2);
			document.getElementById("pH").innerHTML = nilaipH.toFixed(2);
			document.getElementById("bak_utama").innerHTML = fields.field3 + " %";
			document.getElementById("bakA").innerHTML = fields.field4 + " %";
			document.getElementById("bakB").innerHTML = fields.field5 + " %";
			document.getElementById("suhu").innerHTML = fields.field6 + " \u00B0C";
			document.getElementById("kelembaban").innerHTML = fields.field7 + " %";
			document.getElementById("flow").innerHTML = fields.field8 + " L/M";
			if (fields.field4 <= 20 || fields.field5 <= 20) {
				document.getElementById("pupuk").innerHTML = "Pupuk Habis";
			} else if (fields.field4 <= 50 || fields.field5 <= 50) {
				document.getElementById("pupuk").innerHTML = "Pupuk Tinggal Setengah";
			} else {
				document.getElementById("pupuk").innerHTML = "Pupuk Masih Banyak";
			}
		}
	);

	setInterval(function () {
		$.getJSON(
			"https://api.thingspeak.com/channels/1531842/status/last.json",
			function (statusUpdate) {
				document.getElementById("stat").innerHTML = statusUpdate.status;
			}
		);
		$.getJSON(
			"https://api.thingspeak.com/channels/1531842/feeds/last.json?results=8",
			function (fields) {
				document.getElementById("ppm").innerHTML = fields.field1 + " ppm";
				var nilaipH = parseFloat(fields.field2);
				document.getElementById("pH").innerHTML = nilaipH.toFixed(2);
				document.getElementById("bak_utama").innerHTML = fields.field3 + " %";
				document.getElementById("bakA").innerHTML = fields.field4 + " %";
				document.getElementById("bakB").innerHTML = fields.field5 + " %";
				document.getElementById("suhu").innerHTML = fields.field6 + " \u00B0C";
				document.getElementById("kelembaban").innerHTML = fields.field7 + " %";
				document.getElementById("flow").innerHTML = fields.field8 + " L/M";
			}
		);
	}, 10000);
});
