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
         $(".btn-skip_svar").click(skip_svar);
         /// KØR OPGAVEN DMR: 


     });

     function skip_svar() {
         console.log("skip_svar: " + runde);
         runde++;

         pose_question(JsonObj_pSystemEx, runde);

     }

     function tjek_svar() {

         console.log("Klikkede på tjek..(runde)" + runde)
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
             UserMsgBox(".inner_container", "Rigtigt svaret!");
             for (var i = 0; i < $(".ElementBox").length; i++) {
                 var a_num = parseInt($(".ElementBox").eq(i).find(".AtomNum").html());
                 if (svar.indexOf(a_num) > -1) {
                     if ($(".ElementBox").eq(i).hasClass("eBox_selected")) {} else {
                         $(".ElementBox").eq(i).prepend("<div class='selectedoverlay'></div>");
                     }
                 }
             }
             $(".MsgBox_bgr").css("background-color", "rgba(0,0,0,0.0)");
             $("#UserMsgBox").css("background-color", "#ddd").css("border-radius", "4px").css("opacity", "0.8");
             $(".MsgBox_bgr").click(function() {
                 $(".ElementBox").find(".selectedoverlay").fadeOut(300);
                 $(".ElementBox").removeClass("eBox_selected");

                 pose_question(JsonObj_pSystemEx, score);
             });
             score++;
         } else {
             UserMsgBox(".inner_container", "Du mangler stadig at finde " + (number - rigtige) + " grundstoffer. <br/>Evt forkerte svar er fjernet. Prøv igen");
             $(".MsgBox_bgr").css("background-color", "rgba(0,0,0,0.0)");
             $("#UserMsgBox").css("background-color", "#ddd").css("border-radius", "4px").css("opacity", "0.8");
         }

         $(".score").html("Score: " + score + " Fejl: " + fejl);
     }

     function pose_question(JsonObj_pSystemEx, runde) {
         console.log("runde: " + runde + "pose...")
         if (runde > JsonObj_pSystemEx.length - 1) {
             console.log("END");

             UserMsgBox(".inner_container", "Du er nået hele rækken af spørgsmål igennem med " + score + " ud af " + JsonObj_pSystemEx.length + " rigtige svar. <br/>Klik for at starte forfra.");
             $(".MsgBox_bgr").css("background-color", "rgba(0,0,0,0.0)");
             $("#UserMsgBox").css("background-color", "#ddd").css("border-radius", "4px").css("opacity", "0.8");
             $(".MsgBox_bgr").click(function() {
                 //location.reload();
             });


         } else {
             console.log("CONTINUE")
             console.log("Runde: " + runde)
         }


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
         $(".spm").html("<h4 class='QuestionText'>Find " + number_txt + " grundstoffer som " + spm + "</span> <br/><h5>Korrekte svar: <span class='QuestionTask'>" + score + " / " + JsonObj_pSystemEx.length +
             "</span></div> Fejl: <span class='QuestionTask'>0</span><br/></h5>");

         //alert("pose it");
         console.log("end pose question.. (runde)" + runde);
     }
     /////
