function Switch($node){
  this.hover = $node.find(".hover");
  this.span = $node.find("span");
  this.bind();
}
Switch.prototype.bind = function(){
  var self = this;
  this.hover.children().on("click",function(){
    if($(this).text() === "商品"){
      self.span.text("搜商品");
    }else if($(this).text() === "店铺"){
      self.span.text("搜店铺");
    }
  })
}
exports = module.exports = Switch;