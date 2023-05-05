/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zci_cd_deployment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
