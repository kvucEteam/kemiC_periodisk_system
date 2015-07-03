$(document).ready(function() {


$(".ElementBox").css("pointer-events","none");
    for (var i = 0; i < JsonObj_pSystemEx.length; i++) {
        if (JsonObj_pSystemEx[i].selection) {
            $(".question_container").append("<div class='selection_container btn btn-default btn-sm' id = '" + i + "'>" + JsonObj_pSystemEx[i].selection + "</div>");
        }

    }
    $(".question_container").append("<br/><div class='selection_container btn btn-default btn-sm btn_clear'>Se alt</div>");
    //alert(JsonObj_pSystemEx.
    $(".selection_container").click(function() {

        skift_visning($(this));
    });




$('.ElementBox').disableSelection();
});


function skift_visning(objekt) {
    var indeks = parseInt(objekt.attr("id"));
    var atom_length = $(".ElementBox").length;

    $(".selection_container").removeClass("btn-primary").addClass("btn-default");
    objekt.addClass("btn-primary").removeClass("btn-default");

    if (objekt.hasClass("btn_clear")) {
           for (var i = 0; i < atom_length; i++) {
        
            $(".ElementBox").eq(i).fadeTo(200,1);
            
        }
        
    } else {
        var viseArray = JsonObj_pSystemEx[indeks].korrekte_svar;


        for (var i = 0; i < atom_length; i++) {
            var atom_no = parseInt($(".ElementBox").eq(i).find($(".AtomNum")).html());
            $(".ElementBox").eq(i).fadeTo(200,0.4); //addClass("blurry");
            if (viseArray.indexOf(atom_no) > -1) {
                $(".ElementBox").eq(i).fadeTo(Math.random()*1000,1);
            }
        }
    }

}
