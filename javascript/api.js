$(document).ready(function () {
	$.getJSON(
		"https://api.thingspeak.com/channels/1531842/status/last.json",
		function (statusUpdate) {
			document.getElementById("stat").innerHTML = statusUpdate.status;
		}
	);
	$.getJSON(
		"https://api.thingspeak.com/channels/1531842/feeds/last.json?results=5",
		function (fields) {
			document.getElementById("ppm").innerHTML = fields.field1 + " ppm";
			var nilaipH = parseFloat(fields.field2);
			document.getElementById("pH").innerHTML = nilaipH.toFixed(2);
			document.getElementById("bak_utama").innerHTML = fields.field3 + " %";
			document.getElementById("bakA").innerHTML = fields.field4 + " %";
			document.getElementById("bakB").innerHTML = fields.field5 + " %";
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
			"https://api.thingspeak.com/channels/1531842/feeds/last.json?results=5",
			function (fields) {
				document.getElementById("ppm").innerHTML = fields.field1 + " ppm";
				var nilaipH = parseFloat(fields.field2);
				document.getElementById("pH").innerHTML = nilaipH.toFixed(2);
				document.getElementById("bak_utama").innerHTML = fields.field3 + " %";
				document.getElementById("bakA").innerHTML = fields.field4 + " %";
				document.getElementById("bakB").innerHTML = fields.field5 + " %";
			}
		);
	}, 10000);
});
