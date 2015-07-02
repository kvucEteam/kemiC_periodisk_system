$(document).ready(function() {


    for (var i = 0; i < JsonObj_pSystemEx.length; i++) {
        if (JsonObj_pSystemEx[i].selection) {
            $(".question_container").append("<div class='selection_container btn btn-default btn-sm' id = '"+i+"'>" + JsonObj_pSystemEx[i].selection + "</div>");
        }
    }

    //alert(JsonObj_pSystemEx.
    $(".selection_container").click(function() {
        skift_visning($(this));

        $(".selection_container").removeClass("btn-primary").addClass("btn-default");

        $(this).addClass("btn-primary").removeClass("btn-default");
    });



});


function skift_visning(objekt) {
    var indeks = parseInt(objekt.attr("id"));
    var atom_length = $(".ElementBox").length;

    var viseArray = JsonObj_pSystemEx[indeks].korrekte_svar;
    //objekt.find($(".selection_box")).css("background-color", "orange");
    //objekt.find($(".selection_text")).css("font-weight", "bold");



    for (var i = 0; i < atom_length; i++) {
        var atom_no = parseInt($(".ElementBox").eq(i).find($(".AtomNum")).html());
        $(".ElementBox").eq(i).addClass("blurry");
        if (viseArray.indexOf(atom_no) > -1) {
            $(".ElementBox").eq(i).removeClass("blurry");
        }
    }
}
