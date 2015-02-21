var http = require('http');
// var config = require('./config.js');

var searchData = [];
 
function getProvidersPage(pageNum) {
	if (searchData[pageNum] == null) {
		var url = "http://api.elance.com/api/search/jobs?eauth_consumer_key=" + 
		"54e58619e4b0ce56b5a32ecd&keywords=php%20mysql&" + 
		"sortCol=numProposals&sortOrder=asc&jsonp=searchJobsCallback&page=" + pageNum;
 
		loadElanceJSONPCall(url);
	}
}
 
function loadElanceJSONPCall(url) {
   var e = document.createElement("script");
   e.src = url;
   e.type="text/javascript";
   document.getElementsByTagName("head")[0].appendChild(e);
}
 
function getProvidersCallback(jsonCallbackData) {
	searchData[jsonCallbackData.data.page] = jsonCallbackData;
	console.log("ran getProvidersCallback");
}
 