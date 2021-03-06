//------------------------------------------------------------------------------
// Copyright (c) 2004, 2007 IBM Corporation.  All Rights Reserved.
//------------------------------------------------------------------------------
// Displays a banner at the top of a website.
//
// Author: Alfredo Bencomo

dojo.provide("rmc.widget.BannerWidget");

dojo.widget.defineWidget(
	"rmc.widget.BannerWidget",		
	dojo.widget.HtmlWidget,
	{
		templatePath: dojo.uri.dojoUri("../rmc/widget/templates/BannerWidget.html"),
		templateCssPath: dojo.uri.dojoUri("../rmc/widget/templates/BannerWidget.css"),
		
		imgUrlBase: "images/",
		
		// If true, download the image every time, rather than using cached version in browser
		preventCache: false,
		img1: null,
		bannerHeight : theApp.bannerHeight,
		
		fillInTemplate: function() {
			this.img1.src = this.imgUrlBase + theApp.bannerFileName + this._getUrlSuffix();
			
			// this dies not work in firefox. the hight did not get refreshed.
			// so set the height in the html template directly.
			//this.img1.height = theApp.bannerHeight;
		},
		
		_getUrlSuffix: function() {
			if (this.preventCache) {
				return "?ts=" + (new Date()).getTime();
			} else {
				return "";
			}
		}
	}
);