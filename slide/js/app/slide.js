  function Carousel($node){
    this.node = $node;
    this.nav = this.node.find(".C-ct");
    var first = this.nav.children().first(),
        last = this.nav.children().last();
    first.clone().appendTo(this.nav);
    last.clone().prependTo(this.nav);
    this.list = this.nav.children();
    this.col = this.list.size();
    this.width = this.list.width();
    this.$pre = this.node.find(".up");
    this.$next = this.node.find(".down");
    this.nav.css({
      "width":this.col * this.width,
      "left":-this.width
    });
    console.log(this.list.width())
    this.bind();
  }

  Carousel.prototype = {
    constructor:Carousel,
    playNext : function(){
      var width = this.width,
        col = this.col;
      this.nav.animate({
        "left":"-=" + width
      },function(){
        $this = $(this);
        if(parseInt($this.css("left")) === -width * (col - 1)){
          $this.css("left",-width);
        }
      })
    },
    playPre : function(){
      var width = this.width,
        col = this.col;
      this.nav.animate({
        "left":"+=" + width
      },function(){
        $this = $(this);
        if(parseInt($this.css("left")) === 0){
          $this.css("left",-width * (col - 2));
        }
      })
    },
    bind:function(){
      var _this = this;
      _this.$pre.on("click",function(){
        _this.playPre();
      });
      _this.$next.on("click",function(){
        _this.playNext();
      })
    }
  }