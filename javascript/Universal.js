/* 
=======================================================================
							 Windows Phone Fix 
======================================================================= 
*/
// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
	document.createTextNode(
	  '@-ms-viewport{width:auto!important}'
	)
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/* 
=======================================================================
							 Google Analytics
======================================================================= 
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68262634-1', 'auto');
ga('send', 'pageview');

/* 
=======================================================================
							 Begin
======================================================================= 
*/

/* Scroll to Element */
function ScrollToElement(element)
{   
	var ele = document.getElementById(element);   
	window.scrollTo(ele.offsetLeft,ele.offsetTop); 
}