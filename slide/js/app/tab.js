(function($){
  $.fn.Tab = function(){
    var $listLi = this.find("#list").find("li");
    var $tabLi = this.find("#show").find("li");
    function changeIdx(idx){
      $listLi.removeClass('active').eq(idx).addClass('active');
      $tabLi.removeClass('active').eq(idx).addClass('active');
    }
    return $listLi.on("click",function(){
      var idx = $(this).index();
      changeIdx(idx);
    })
  }
})(jQuery)