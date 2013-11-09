// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require piecon
//= require turbolinks
//= require_tree .


 (function(){
    var count = 0;
    Piecon.setOptions({
    	color: '#ff0084',
    	background: '#bbb',
    	shadow: '#fff',
    	fallback: 'force'});
    var i = setInterval(function(){
      if (++count > 100) { Piecon.reset(); clearInterval(i); return false; }
      Piecon.setProgress(count);
    }, 250);
  })();
  
$(function(){ $(document).foundation(); });
