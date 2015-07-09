     //ØVELSES VARS HERUNDER: 

     var runde = 0;
     var spm;
     var svar;
     var rigtige = 0;
     var score = 0;
     var fejl = 0;
     var number;



     $(document).ready(function() {




         JsonObj_pSystemEx = shuffle_Array(JsonObj_pSystemEx);

         if (opgavetype == "ovelse") {
             //runde = Math.floor(Math.random)*svar.length;
             pose_question(JsonObj_pSystemEx, 0);
         }

         $(".ElementBox").click(function() {
             var AtomNum = parseInt($(this).find(".AtomNum").html());
             if ($(this).hasClass("eBox_selected")) {
                 $(this).removeClass("eBox_selected");
                 $(this).find(".selectedoverlay").remove();
                 console.log("This Atom no: " + AtomNum);
             } else {
                 $(this).addClass("eBox_selected");
                 $(this).prepend("<div class='selectedoverlay'></div>");
             }
         });

         $(".btn-tjek_svar").click(tjek_svar);

         /// KØR OPGAVEN DMR: 


     });


     function tjek_svar() {
         rigtige = 0;
         errors = 0;
         $(".eBox_selected").each(function(index) {
             var clickedNum = parseInt($(this).find(".AtomNum").html());
             if (svar.indexOf(clickedNum) > -1) {
                 console.log("rigtig");
                 rigtige++;
                 //$(this).find(".selectedoverlay").fadeOut(300);
             } else {
                 errors++;
                 console.log("forkert");
                 $(this).removeClass("eBox_selected");
                 $(this).find(".selectedoverlay").fadeOut(300, function() {
                     $(this).remove();

                 });

             }

             console.log(index + ": " + $(this).text());

         });

         if (errors > 0) {
             fejl++;
         }

         console.log("Number: " + number + ", rigtige: " + rigtige);

         if (rigtige > number - 1) {
             UserMsgBox(".question_container", "Rigtigt svaret! <br/>Du havde " + errors + " forkerte grundstofatomer i dette spørgsmål.");
             for (var i = 0; i < $(".ElementBox").length; i++) {
                 var a_num = parseInt($(".ElementBox").eq(i).find(".AtomNum").html());
                 if (svar.indexOf(a_num) > -1) {
                     if ($(".ElementBox").eq(i).hasClass("eBox_selected")) {} else {
                         $(".ElementBox").eq(i).prepend("<div class='selectedoverlay'></div>");
                     }
                 }
             }
             $(".MsgBox_bgr").css("background-color", "rgba(0,0,0,0.0)");
             $("#UserMsgBox").css("background-color", "#ddd").css("border-radius", "4px")
             $(".MsgBox_bgr").click(function() {
                 $(".ElementBox").find(".selectedoverlay").fadeOut(300);
                 $(".ElementBox").removeClass("eBox_selected");

                 pose_question(JsonObj_pSystemEx, score);
             });
             score++;
         }

         $(".score").html("Score: " + score + " Fejl: " + fejl);
     }

     function pose_question(JsonObj_pSystemEx, runde) {

             spm = String(JsonObj_pSystemEx[runde].question);
             svar = JsonObj_pSystemEx[runde].korrekte_svar;
             number = svar.length;
             var number_txt;
             if (number > 9) {
                 number = 10;
                 number_txt = 10;
             } else {
                 number_txt = "de " + number;
             }
             $(".spm").html("Spørgsmål " + runde + " / " + JsonObj_pSystemEx.length +
                 "</div><br/>Find " + number_txt + " grundstoffer som " + spm);

             //alert("pose it");
         }
         /////
