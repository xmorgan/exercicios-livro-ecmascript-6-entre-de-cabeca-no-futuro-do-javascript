var express = require('express');
var app = express();
app.listen(8080, function() {
	console.log('Hello World');
});

requirejs.config({
	"baseUrl": "js/modulos",
	"paths": {
		"app": "../app",
		"jquery": "//code.jquery.com/jquery-3.1.1.min.js"
	}
});

define(["jquery"], function($) {
	$(function() {
		$('body')... // já podemos usar os seletores do jQuery, por exemplo
	});
});
