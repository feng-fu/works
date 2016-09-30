function Gotop(node,instance,turn){
  this.node = node;
  this.instance = instance;
  this.turn = turn;
  this.bind();
}
Gotop.prototype.bind = function(){
  var self = this;
  $(document).on("scroll",function(){
    if($(document).scrollTop() > self.instance){
      if(self.node.data("sticked")) return;
      self.node.show().data("sticked",true);
    }else{
      if(!self.node.data("sticked")) return;
      self.node.hide().data("sticked",false);
    }
  });
  if(this.turn){
    this.node.on("click",function(){
      $("body").animate({"scrollTop":"0px"},300);
    })
  }
}

exports = module.exports = Gotop;