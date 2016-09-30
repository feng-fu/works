require("./css/index.css");
(function(){
var Hover = require("./js/main/hover");
var Gotop = require("./js/main/Gotop");
var carousel = require("./js/main/carousel");
var loadModule = require("./js/main/loadModule");
var Switch = require("./js/main/switch");

  $(".hover-style").each(function(){
    var $this = $(this),
        $node = $(this).find(".hover");
    new Hover($this,$node,"active");
  });
  $("#more .loaddata").loadModule();
  $("#carousel").Carousel();
  new Gotop($("#gotop"), 200, true);
  new Gotop($("#search-stick"),500,false);
  $(".search-box").each(function(){
    new Switch($(this));
  })
})()