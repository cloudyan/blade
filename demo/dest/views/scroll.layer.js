define(["View",getViewTemplatePath("scroll.layer"),"UIScrollLayer"],function(a,b,c){return _.inherit(a,{onCreate:function(){this.$el.html(b)},events:{"click .demo1":"demo1","click .demo2":"demo2"},demo1:function(){if(!this.scrollLayer){for(var a="",b=0;40>b;b++)a+="<p>this is scrollLayer"+b+"</p>";this.scrollLayer=new c({maxHeight:400,html:'<div class="s-tpl">'+a+"</div>"})}this.scrollLayer.show()},demo2:function(){if(!this.scrollLayer2){for(var a="",b=0;40>b;b++)a+="<p>项目"+b+"</p>";this.scrollLayer2=new c({maxHeight:400,html:'<div class="s-tpl">'+a+"</div>",datamodel:{title:"测试",btns:[{name:"测试",className:"cui-btns-cancel"},{name:"测试",className:"cui-btns-ok"}]},events:{"click .cui-btns-ok":"myOkAction","click .cui-btns-cancel":"myCancelAction","click .cui-top-close":"myCloseAction"},myOkAction:function(){console.log("my ok"),this.hide()},myCancelAction:function(){console.log("my cancel"),this.hide()},myCloseAction:function(){console.log("my close"),this.hide()}})}this.scrollLayer2.show()},onPreShow:function(){this.turning()},onShow:function(){},onHide:function(){}})});