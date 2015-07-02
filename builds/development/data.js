     //ØVELSES VARS HERUNDER: 

     var runde = 0;
     var spm;
     var svar;



     $(document).ready(function() {


         $(".ElementBox").click(function() {


             if ($(this).hasClass("eBox_selected")) {
                 //$(this).removeClass("eBox_selected");
             } else {
                 $(this).addClass("eBox_selected");
                 $(this).prepend("<div class='selectedoverlay'></div>");
             }
             //$(this).css("border", "2px solid green");



         });


         $(".btn-tjek_svar").click(tjek_svar);


         /// KØR OPGAVEN DMR: 
         if (opgavetype == "ovelse") {
            //runde = Math.floor(Math.random)*svar.length;
             pose_question(JsonObj_pSystemEx, runde);
         }

     });


     function tjek_svar() {
         $(".eBox_selected").each(function(index) {
             var clickedNum = parseInt($(this).find(".AtomNum").html());
             if (svar.indexOf(clickedNum) > -1) {
                 console.log("rigtig");
             } else {
                 console.log("forkert");
                 $(this).find(".selectedoverlay").remove();
             }
             console.log(index + ": " + $(this).text());
         });

     }



     function pose_question(JsonObj_pSystemEx, runde) {

             spm = String(JsonObj_pSystemEx[runde].question);
             svar = JsonObj_pSystemEx[runde].korrekte_svar;
             $(".spm").html("Vælg de grundstoffer som " + spm + "<br/> Der er " + svar.length + " af dem");

             console.log("spørgsmål: " + spm + ",SvarArray: " + svar);
             //alert("pose it");
         }
         /////


     var JsonObj_pSystemEx = [{
         "question": "du finder i 1. periode",
         "korrekte_svar": [1, 2],
         "Sværhedsgrad": ""
     }, {
         "question": "hører til ædelgasserne",
         "korrekte_svar": [2, 8, 18, 36, 54, 86],
         "Sværhedsgrad": ""
     }, {
         "question": "er ikke-metaller",
         "korrekte_svar": [1, 2, 5, 6, 7, 8, 14, 15, 16, 17, 18, 33, 34, 35, 36, 52, 53, 54, 85, 86],
         "Sværhedsgrad": ""
     }, {
         "question": "er metaller",
         "korrekte_svar": [3, 4, 11, 12, 13, 19, 20, 12, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 79, 80, 81, 82, 83, 84, 87, 88, 89, 90],
         "Sværhedsgrad": ""
     }, {
         "question": "er gasser ved stuetemperatur (25 grader celcius)",
         "korrekte_svar": [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86],
         "Sværhedsgrad": ""
     }, {
         "question": "er væsker ved stuetemperatur (25 grader celsius)",
         "korrekte_svar": [35, 80],
         "Sværhedsgrad": ""
     }, {
         "question": "er halogener",
         "korrekte_svar": [9, 17, 35, 53, 85],
         "Sværhedsgrad": ""
     }, {
         "question": "er alkalimetaller",
         "korrekte_svar": [3, 11, 19, 37, 55, 87],
         "Sværhedsgrad": ""
     }, {
         "question": "danner simple ioner med ladningen +1 < br / > (Kun grundstoffer fra hovedgrupperne)",
         "korrekte_svar": [3, 11, 19, 37, 55, 87],
         "Sværhedsgrad": ""
     }, {
         "question": "danner simple ioner med ladningen +1 < br / > (Også med undergrupper)",
         "korrekte_svar": [3, 11, 19, 37, 55, 87, 29, 47, 79],
         "Sværhedsgrad": ""
     }, {
         "question": "danner simple ioner med ladningen +2<br/>(Kun grundstoffer fra hovedgrupperne)",
         "korrekte_svar": [4, 12, 20, 38, 56, 88],
         "Sværhedsgrad": ""
     }, {
         "question": "danner simple ioner med ladningen +3<br/>(Kun grundstoffer fra hovedgrupperne)",
         "korrekte_svar": [13],
         "Sværhedsgrad": ""
     }, {
         "question": "danner simple ioner med ladningen -1<br/>(Kun grundstoffer fra hovedgrupperne)",
         "korrekte_svar": [9, 17, 35, 53, 85],
         "Sværhedsgrad": ""
     }, {
         "question": "danner simple ioner med ladningen -2<br/>(Kun grundstoffer fra hovedgrupperne)",
         "korrekte_svar": [8, 16, 34, 52, 84],
         "Sværhedsgrad": ""
     }, {
         "question": "danner simple ioner med ladningen -3<br/>(Kun grundstoffer fra hovedgrupperne)",
         "korrekte_svar": [7, 15, 33],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 1. hovedgruppe",
         "korrekte_svar": [1, 3, 11, 19, 37, 55, 87],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 2. hovedgruppe",
         "korrekte_svar": [4, 12, 20, 38, 56, 88],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 3. hovedgruppe",
         "korrekte_svar": [5, 13, 31, 49, 81],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 4. hovedgruppe",
         "korrekte_svar": [6, 14, 32, 50, 82],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 5. hovedgruppe",
         "korrekte_svar": [7, 15, 33, 51, 83],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 6. hovedgruppe",
         "korrekte_svar": [8, 16, 34, 52, 84],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 7. hovedgruppe",
         "korrekte_svar": [9, 17, 35, 53, 85],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 8. hovedgruppe",
         "korrekte_svar": [2, 10, 18, 36, 54, 86],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 1. periode",
         "korrekte_svar": [1, 2],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 2. periode",
         "korrekte_svar": [3, 4, 5, 6, 7, 8, 9, 10],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 3. periode",
         "korrekte_svar": [11, 12, 13, 14, 15, 16, 17, 18],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 4. periode",
         "korrekte_svar": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 5. periode",
         "korrekte_svar": [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
         "Sværhedsgrad": ""
     }, {
         "question": "tilhører 6. periode",
         "korrekte_svar": [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
         "Sværhedsgrad": ""
     }, {
         "question": "findes som diatomige molekyler",
         "korrekte_svar": [1, 7, 8, 9, 17, 35, 53, 85],
         "Sværhedsgrad": ""
     }, {
         "question": "findes som ædelmetaller",
         "korrekte_svar": [29, 47, 79, 78, 80],
         "Sværhedsgrad": ""
     }];
