function Hover($hover,$node,$class){
  this.hover = $hover;
  this.node = $node;
  this.class = $class;
  this.bind();
}
Hover.prototype.bind = function(){
  var self = this;
  this.hover.on("mouseover",function(){
    self.node.addClass(self.class);
    self.hover.find(".detail").addClass(self.class);
    self.hover.find(".hide").addClass(self.class);
  }).on("mouseout",function(){
      self.node.removeClass(self.class);
      self.hover.find(".detail").removeClass(self.class);
      self.hover.find(".hide").removeClass(self.class);
    });
}
exports = module.exports = Hover;