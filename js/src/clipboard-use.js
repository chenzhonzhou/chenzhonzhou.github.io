// build time:Mon Sep 27 2021 15:23:17 GMT+0800 (GMT+08:00)
!function(n,t,i){var a=function(){var n="";n+='<button class="btn-copy" data-clipboard-snippet="">';n+='  <i class="fa fa-globe"></i><span>copy</span>';n+="</button>";$(".highlight").wrap($('<div class="highlight-wrap"></div>'));$(".highlight-wrap").prepend(n);var t=new ClipboardJS(".btn-copy",{target:function(n){return n.nextElementSibling}});t.on("success",function(n){toastPlug("复制成功!",2e3)})};a()}(window,document);
//rebuild by neat 