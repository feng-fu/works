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
    self.hover.find(".detail").addClass("active");
    self.hover.find(".hide").addClass("active");
	}).on("mouseout",function(){
	    self.node.removeClass(self.class);
      self.hover.find(".detail").removeClass("active");
      self.hover.find(".hide").removeClass("active");
    });
}
$(".hover-style").each(function(){
    var $this = $(this),
        $node = $(this).find(".hover");
    new Hover($this,$node,"active");
})