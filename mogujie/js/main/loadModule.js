
$.fn.loadModule = function(){
  var self = this;
  var start = 1;
  function visible(self){
    var $top = self.offset().top;
    var $scrT = $(document).scrollTop();
    var $winH = $(window).height();
    if($top > $scrT && $scrT + $winH > $top){
      return true;
    }
    return false;
  }
  function load(loaction){
    $.ajax(loaction).done(function(response){
      var node;
      if(response.status.code && response.status.code === 1001){
        node = Model_1(response);
      }else if(response.status.code && response.status.code === 1002){
        node = Model_2(response);
      }else{
        node = "<h1>加载失败</h1>";
      }
      $(node).insertBefore(self);
    })
  }
  function Model_1(ret){
    var model_1 = "";
    for(var i = 0;i < ret.result.list.length;i++){
      model_1 += '<div class="model-style-1"><div class="title"><img src="' + ret.result.list[i].header.img
     + '"></div><div class="container clearfix"><div class="lside"><ul class="list">'
     + '<li><a href="#"><img src="' + ret.result.list[i].p1[0].img
     + '" alt=""></a></li><li><a href="#"><img src="' + ret.result.list[i].p1[1].img
     + '" alt=""></a></li></ul><ul class="more-tip clearfix">';
     for(var k = 0;k < ret.result.list[i].p2.length;k++){
      model_1 += '<li><a href="' + ret.result.list[i].p2[k].link;
      model_1 += '">' + ret.result.list[i].p2[k].title + '</a></li>';
     }
     model_1 += '</ul></div><div class="main"><ul class="banner clearfix">';
     for(var j = 0;j < ret.result.list[i].p3.length;j++){
      model_1 += '<li><a href="' + ret.result.list[i].p3[j].link;
      model_1 += '"><img src="' + ret.result.list[i].p3[j].img;
      model_1 += '" alt=""></a></li>';
     }
     model_1 += '</ul><ul class="sm-banner clearfix">'
     for(var l = 0;l < ret.result.list[i].p4.length;l++){
      model_1 += '<li><a href="' + ret.result.list[i].p4[l].link;
      model_1 += '"><img src="' + ret.result.list[i].p4[l].img;
      model_1 += '" alt=""><div class="present"><div class="title">'+ ret.result.list[i].p4[l].title;
      model_1 += '</div><div class="desc">' + ret.result.list[i].p4[l].desc;
      model_1 += '</div></div></a></li>';
     }
    model_1 += '</ul></div></div></div>';
    }
    return model_1;
  }
  function Model_2(ret){
    var model_2 = "";
    for(var i = 0;i < ret.result.list.length;i++){
      model_2 += '<div class="model-style-2"><div class="title"><img src="' + ret.result.list[i].header.img
                  + '"></div><div class="container clearfix"><div class="lside">'
                  + '<div class="intro"><a href="#"><img src="' + ret.result.list[i].p1[0].img
                  + '" alt=""></a></div><div class="brands">'
                  + '<ul><li class="odd"><a href="#"><img src="' + ret.result.list[i].p2[0].img
                  + '" alt=""></a></li><li class="even"><a href="#"><img src="' + ret.result.list[i].p2[1].img
                  + '" alt=""></a></li><li class="odd"><a href="#"><img src="' + ret.result.list[i].p2[2].img
                  + '" alt=""></a></li><li class="even"><a href="#"><img src="' + ret.result.list[i].p2[3].img
                  + '" alt=""></a></li><li class="odd"><a href="#"><img src="' + ret.result.list[i].p2[4].img
                  + '" alt=""></a></li><li class="even"><a href="#"><img src="' + ret.result.list[i].p2[5].img
                  + '" alt=""></a></li><li class="odd last"><a href="#"><img src="' + ret.result.list[i].p2[6].img
                  + '" alt=""></a></li><li class="last even"><a href="#"><img src="' + ret.result.list[i].p2[7].img
                  + '" alt=""></a></li></ul></div></div><div class="middle">'
                  + '<div class="str-intro"><a href="#"><img src="' + ret.result.list[i].p3[0].img
                  + '" alt=""></a></div></div><div class="rside"><ul class="clearfix">';
      for(var k = 0;k < ret.result.list[i].p4.length;k++){
        model_2 += '<li><a href="#"><img src="' + ret.result.list[i].p4[k].img;
        model_2 += '"><span>'+ ret.result.list[i].p4[k].title;
        model_2 += '</span></a></li>';
      }
      model_2 += '</ul></div></div></div>';
    }
    return model_2;
  }
  $(document).on("scroll",function(){
    if(start > 5) self.remove();
    if(visible(self)){
      load("js/main/" + start + ".json");
      start += 1;
    }
  })
}
