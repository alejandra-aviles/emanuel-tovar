!function(e,t,n,i,s,o){"use strict";o.support.transition=function(){var t=function(){var t,n=e.createElement("GI"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in i)if(void 0!==n.style[t])return i[t]}();return t&&{end:t}}();var r=0,a=function(n,s){var a=this,l={onBeforeInit:null,onReady:null,onViewPortUpdate:null,onItemChange:null,onDestroy:null,onShow:null,onHide:null,onContentLoading:null,onContentLoaded:null,margin:{top:10,bottom:10},scrollerElm:null,scrollOffset:150,arrows:!0,closebutton:!0,keyboardNavigation:!0,animationSpeed:300,autoscroll:!0,responsive:!0,initialWrapperHeight:600,dynamicHeight:!0,nextButtonClass:"",prevButtonClass:"",closeButtonClass:""},d="ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch,h=[33,34,35,36,37,38,39,40,27],c=!1,u=o.support.transition,p=!1,f=0,m=".GITheWall"+r,x={click:d?"touchstart":"click",mousedown:d?"touchstart":"mousedown",mouseup:d?"touchend":"mouseup",mousemove:d?"touchmove":"mousemove",mouseleave:d?"touchleave":"mouseleave"},I=o.extend(l,s);this.$el=n,this.$expanderWrapper=o('<div class="GI_TW_expander"></div>'),this.$contentPointer=o('<div class="GI_TW_pointer"></div>'),this.$expanderInner=o('<div class="GI_TW_expander-inner"></div>'),this.$list=o("> ul",this.$el).eq(0),this.$items=o("> li",this.$list),this.itemsLength=this.$items.length,this.currentIndex=null,this.currentRowIndex=null,this.$selectedli=null,this.selectedLiData=null,Function.prototype.debounce=function(e,t){var n,i,s=this;return function(){var o=this,r=arguments,a=function(){n=null,t||(i=s.apply(o,r))},l=t&&!n;return clearTimeout(n),n=setTimeout(a,e),l&&(i=s.apply(o,r)),i}};var $=function(e,t){"function"==typeof e&&o.proxy(e,a,t)()},v=function(){this.$expanderWrapper.append('<i class="GI_TW_arrow GI_TW_prev GI_TW_Controls"><span class="'+I.prevButtonClass+'"></span></i><i class="GI_TW_arrow GI_TW_next GI_TW_Controls"><span class="'+I.nextButtonClass+'"></span></i>'),this.$next=o(".GI_TW_next",this.$expanderWrapper),this.$prev=o(".GI_TW_prev",this.$expanderWrapper)},_=function(){a.$prev.toggleClass("GI_TW_hidden",a.currentIndex<=0),a.$next.toggleClass("GI_TW_hidden",a.currentIndex>=a.itemsLength-1)},g=function(e){return I.autoscroll?void o(I.scrollerElm||"html,body").animate({scrollTop:e}):!1},w=function(){a.$items.removeClass("GI_TW_Current").eq(a.currentIndex).addClass("GI_TW_Current")},W=function(){this.$contentPointer.css({left:this.selectedLiData.offset.left+this.$selectedli.width()/2})},T=function(e){var t=new o.Deferred,n=o(e).html();if(!n.length)throw new Error('No element can be found using the "'+e+'" selector');return a.$expanderInner.html(n),t.resolve(),t.promise()},C=function(e){var t=new o.Deferred,n=new Image;return n.onload=function(){a.$expanderInner.html('<div class="GI_TW_fullimg"><img src="'+e+'" /></div>'),t.resolve(),n=null},n.src=e,t.promise()},y=function(e){var t=new o.Deferred;return o.get(e,function(e){a.$expanderInner.html(e),t.resolve()}),t.promise()},G=function(e){this.$expanderInner.css({height:e}),e!==f&&(f=e,this.$expanderWrapper.stop(!0,!1).addClass(u?"animating":"")[u?"css":"animate"]({height:e},I.animationSpeed),this.updateElementsPosition())},L=function(){this.selectedLiData.index<0||this.selectedLiData.index>=this.itemsLength||(this.currentIndex=this.selectedLiData.index,this.loadInnerContents(),$(I.onItemChange,this.currentIndex))},D=function(e){this.isOpened()&&void 0===e.target.form&&(e.target.isContentEditable||(o.inArray(e.keyCode,h)>-1&&e.preventDefault(),39===e.keyCode?this.next():37===e.keyCode?this.prev():27===e.keyCode&&this.hideExpander()))},b=function(e){e.stopImmediatePropagation(),e.preventDefault();var t=o(e.currentTarget);t.hasClass("GI_TW_next")?this.next():this.prev()},E=function(){$(I.onBeforeInit),I.arrows&&(v.call(this),_()),I.closebutton&&(this.$expanderWrapper.append('<div class="GI_TW_close GI_TW_Controls"><span class="'+I.closeButtonClass+'"></span></div>'),this.$closebutton=o(".GI_TW_items",this.$expanderWrapper)),this.$expanderWrapper.append(this.$contentPointer),this.$expanderWrapper.append(this.$expanderInner),this.$el.prepend(this.$expanderWrapper),this.bindAll(),$(I.onReady),r++};return this.setLisOffsets=function(){var e,t=0,n=0;this.$items.each(o.proxy(function(i,s){var r=o(s),a=r.data();r.removeClass("GI_TW_First GI_TW_Last GI_TW_Index-"+a.index+" GI_TW_Row-"+a.rowIndex);var l=!1,d=r.position(),h={top:~~d.top,left:~~d.left};(h.top>=t+3||h.top<=t-3)&&(e&&e.addClass("GI_TW_Last"),l=!0,n++),r.addClass((l?"GI_TW_First ":" ")+"GI_TW_Index-"+i+" GI_TW_Row-"+n),r.data({rowIndex:n,offset:h,index:i}),e=r,t=h.top},this))},this.setViewport=function(){c&&(this.setLisOffsets(),this.updateElementsPosition(),W.call(this),$(I.onViewPortUpdate))},this.loadInnerContents=function(){var e,t=this.$selectedli.find("a"),n=this.selectedLiData.href||t.attr("href");if(p=!0,this.$expanderInner.html('<div class="GI_TW_loading"></div>'),!n)return void console.warn("sorry.. it was not possible to load any content");switch($(I.onContentLoading),this.selectedLiData.contenttype){case"ajax":e=y(n);break;case"inline":e=T(n);break;default:e=C(n)}e.then(function(){a.$expanderInner.css({height:"auto"});var e=I.dynamicHeight?a.$expanderInner.outerHeight():I.initialWrapperHeight;G.call(a,e),a.update(),g(a.$expanderWrapper.offset().top-I.scrollOffset),$(I.onContentLoaded),p=!1})},this.showExpander=function(e){return e.preventDefault(),this.$selectedli=o(e.currentTarget),this.selectedLiData=this.$selectedli.data(),c?void L.call(this):(c=!0,this.$expanderWrapper.addClass("opened"),this.setViewport(),L.call(this),void $(I.onShow))},this.hideExpander=function(){this.$expanderWrapper.removeClass("opened").stop(!0,!1)[u?"css":"animate"]({height:0},I.animationSpeed),this.$expanderInner.empty(),this.currentRowIndex=null,this.$selectedli=null,this.selectedLiData=null,this.currentIndex=null,f=0,this.$items.removeClass("GI_TW_Selected_Row").animate({marginBottom:0},I.animationSpeed),c=!1,$(I.onHide)},this.refresh=function(){this.$list=o("> ul",this.$el).eq(0),this.$items=o("> li",this.$list),this.$list.has(this.$selectedli).length||this.hideExpander(),this.itemsLength=this.$items.length,c&&(this.setLisOffsets(),this.update())},this.update=function(){this.selectedLiData=this.$selectedli.data(),W.call(this),this.selectedLiData.rowIndex!==this.currentRowIndex&&this.updateElementsPosition(),I.arrows&&_(),w.call(this),this.currentRowIndex=this.selectedLiData.rowIndex},this.updateElementsPosition=function(){this.$items.each(function(e,t){var n=o(t),i=n.data(),s=i&&i.rowIndex===a.selectedLiData.rowIndex;n.toggleClass("GI_TW_Selected_Row",s).stop(!0,!1)[u?"css":"animate"]({marginBottom:s?Number(f+I.margin.bottom):0},s?I.animationSpeed:0)}),this.setLisOffsets(),this.updateExpanderPosition()},this.updateExpanderPosition=function(){if(c){var e=this.selectedLiData.offset.top+this.$selectedli.height()+I.margin.top;this.$expanderWrapper.css({top:e})}},this.resizeHeight=function(e){G.call(this,e),this.setViewport()},this.showItemByIndex=function(e){var t=this.$items.eq(e);t.length&&(this.$selectedli=t,this.selectedLiData=t.data(),L.call(this))},this.isOpened=function(){return c},this.next=function(){!p&&c&&this.currentIndex!==this.itemsLength-1&&this.showItemByIndex(this.currentIndex+1)},this.prev=function(){!p&&c&&0!==this.currentIndex&&this.showItemByIndex(this.currentIndex-1)},this.bindAll=function(){u&&this.$expanderWrapper.on(u.end+m,function(){o(this).removeClass("animating")}),I.arrows&&this.$el.on(x.click+m,".GI_TW_arrow",this.$expanderWrapper,o.proxy(b,this)),I.closebutton&&this.$el.on(x.click+m,".GI_TW_close",this.$expanderWrapper,o.proxy(this.hideExpander,this)),this.$el.on("click"+m,"> ul > li",o.proxy(this.showExpander,this)),I.responsive&&i.on("resize"+m+" orientationchange"+m,o.proxy(this.setViewport.debounce(300),this)),I.keyboardNavigation&&i.on("keydown"+m,o.proxy(D,this))},this.unbindAll=function(){this.$el.off(m),this.$expanderWrapper.off(m)},this.destroy=function(e){e&&(e.preventDefault(),e.stopImmediatePropagation()),this.hideExpander(),this.unbindAll(),this.$expanderWrapper.remove(),$(I.onDestroy)},E.call(this),this};o.fn.GITheWall=function(e){return this.length?new a(this,e):void 0}}(document,window,$(document),$(window),$("body"),jQuery),$(document).ready(function(){$(".image-wall").GITheWall({onBeforeInit:null,onReady:null,onViewPortUpdate:null,onItemChange:null,onDestroy:null,onShow:null,onHide:null,onContentLoading:null,onContentLoaded:null,margin:{top:10,bottom:10},scrollerElm:null,scrollOffset:150,arrows:!0,closebutton:!0,keyboardNavigation:!0,animationSpeed:300,autoscroll:!0,responsive:!0,initialWrapperHeight:600,dynamicHeight:!0,nextButtonClass:"",prevButtonClass:"",closeButtonClass:""})}),$(document).ready(function(){$(".slider").each(function(e,t){function n(){x=x==f.length-1?0:x+1,s()}function i(){x--,s()}function s(){m.text(x+1)}function o(){if(!v&&r()){var e=x;n(),d(e,x)}}function r(){return I>x}function a(){if(console.log("previous"),!v&&l()){var e=x;i(),d(e,x)}}function l(){return x>0}function d(e,t){return v=!0,h(e,function(){return c(t,function(){v=!1})})}function h(e,t){return f[e].fadeOut(200,t)}function c(e,t){return f[e].fadeIn(200,t)}var t=$(t),u=t.attr("id"),p=$(".slider-controls[data-slider='"+u+"']"),f=t.children().map(function(e,t){return $(t)}),m=$("[data-slider-index][data-slider='"+u+"']"),x=0,I=f.length;console.log(m,I);var v=!1;p.find("[data-slider-action='next']").click(function(e){e.preventDefault(),o()}),p.find("[data-slider-action='previous']").click(function(e){e.preventDefault(),a()});var _=null;t.click(function(){var e=$(this).width();_>e/2||!l()?o():a()}),t.mousemove(function(e){var t=$(this).width();_=e.offsetX,e.offsetX>t/2||!l()?r()?$(this).css("cursor","e-resize"):$(this).css("cursor",""):l()?$(this).css("cursor","w-resize"):$(this).css("cursor","")}),f[0].show(),s()})});