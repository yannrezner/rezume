$(document).foundation("topbar",{scrolltop:!1}),$("#fullpage").fullpage({anchors:["Hi","PieChart","WhyMe","Footer"],slidesColor:["#FFF","rgb(230, 178, 159)",,"#fcfcfc"],navigation:!0,navigationPosition:"right",navigationTooltips:["","","",""],menu:"#menu"}),$("li").click(function(){$("li").removeClass("active"),$(this).toggleClass("active")});