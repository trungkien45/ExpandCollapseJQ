$.fn.expandcollapse=function(adjustheight,moreText,lessText){
	this.append("<div class=\"continued\" style=\"display:inline\">[...]</div><a class=\"adjust\" href=\"#\">"+moreText +"</a>");
	if (this.find(":first").height() > adjustheight) {
        this.find(":first").css("height", adjustheight).css("overflow", "hidden");
    }
    else {
        $("a.adjust").css("display", "none");
        $(".adjust").parents("first").find(".continued").css("display", "none");
    }
    $("a.adjust").text(moreText);
    $(".adjust").toggle(function () {
        $(this).parents(":first").find(":first").css("height", "auto").css("overflow", "visible");
        // Hide the [...] when expanded
        $(this).parents(":first").find(".continued").css("display", "none");
        $(this).text(lessText);
    }, function () {
        $(this).parents(":first").find(":first").css("height", adjustheight).css("overflow", "hidden");
        $(this).parents(":first").find(".continued").css("display", "inline");
        $(this).text(moreText);
    });	            
};
