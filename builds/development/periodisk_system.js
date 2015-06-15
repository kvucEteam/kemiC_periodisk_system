
//########################################################################
//         JSON-objekter som senere skal have sine egne JSON-filer:
//########################################################################

var XXX = "";

var JsonObj_PeriodicTable = [
    {"name": "Hydrogen",      "sym":"H",      "Class": "NonMetal OtherNonMetal", "num":1,   "Z":1,  "A":1.0079},       // SKAL 1
    {"name": "Helium",        "sym":"He",     "Class": "NonMetal NobelGas X",      "num":18,  "Z":2,  "A":4.002602},
    {"name": "Lithium",       "sym":"Li",     "Class": "Metal AlkaliMetal",      "num":19,  "Z":3,  "A":6.94},         // SKAL 2
    {"name": "Beryllium",     "sym":"Be",     "Class": "Metal AlkaliEarthMetal", "num":20,  "Z":4,  "A":9.0121831},
    {"name": "Bor",           "sym":"B",      "Class": "Metalloid",              "num":31,  "Z":5,  "A":10.81},
    {"name": "Carbon",        "sym":"C",      "Class": "NonMetal OtherNonMetal", "num":32,  "Z":6,  "A":12.011},
    {"name": "Nitrogen",      "sym":"N",      "Class": "NonMetal OtherNonMetal", "num":33,  "Z":7,  "A":14.007},
    {"name": "Oxygen",        "sym":"O",      "Class": "NonMetal OtherNonMetal", "num":34,  "Z":8,  "A":15.999},
    {"name": "Fluor",         "sym":"F",      "Class": "NonMetal Halogen",       "num":35,  "Z":9,  "A":18.998403163},
    {"name": "Neon",          "sym":"Ne",     "Class": "NonMetal NobelGas",      "num":36,  "Z":10, "A":17.1797},
    {"name": "Natrium",       "sym":"Na",     "Class": "Metal AlkaliMetal",      "num":37,  "Z":11, "A":22.98976928},
    {"name": "Magnesium",     "sym":"Mg",     "Class": "Metal AlkaliEarthMetal", "num":38,  "Z":12, "A":24.305},
    {"name": "Aluminium",     "sym":"Al",     "Class": "Metal PostTransMetal",   "num":49,  "Z":13, "A":26.9815385},
    {"name": "Silicium",      "sym":"Si",     "Class": "Metalloid",              "num":50,  "Z":14, "A":28.085},
    {"name": "Phosphor",      "sym":"P",      "Class": "NonMetal OtherNonMetal", "num":51,  "Z":15, "A":30.973761998},
    {"name": "Svovl",         "sym":"S",      "Class": "NonMetal OtherNonMetal", "num":52,  "Z":16, "A":32.06},
    {"name": "Chlor",         "sym":"Cl",     "Class": "NonMetal Halogen",       "num":53,  "Z":17, "A":35.45},
    {"name": "Argon",         "sym":"Ar",     "Class": "NonMetal NobelGas",      "num":54,  "Z":18, "A":39.948},
    {"name": "Kalium",        "sym":"K",      "Class": "Metal AlkaliMetal",      "num":55,  "Z":19, "A":39.0983},     // SKAL 3
    {"name": "Calcium",       "sym":"Ca",     "Class": "Metal AlkaliEarthMetal", "num":56,  "Z":20, "A":40.078},
    {"name": "Scandium",      "sym":"Sc",     "Class": "Metal TransMetal",       "num":57,  "Z":21, "A":44.955908},
    {"name": "Titan",         "sym":"Ti",     "Class": "Metal TransMetal",       "num":58,  "Z":22, "A":47.867},
    {"name": "Vanadium",      "sym":"V",      "Class": "Metal TransMetal",       "num":59,  "Z":23, "A":50.9415},
    {"name": "Chrom",         "sym":"Cr",     "Class": "Metal TransMetal",       "num":60,  "Z":24, "A":51.9961},
    {"name": "Mangan",        "sym":"Mn",     "Class": "Metal TransMetal",       "num":61,  "Z":25, "A":54.938044},
    {"name": "Jern",          "sym":"Fe",     "Class": "Metal TransMetal",       "num":62,  "Z":26, "A":55.845},
    {"name": "Cobalt",        "sym":"Co",     "Class": "Metal TransMetal",       "num":63,  "Z":27, "A":58.933194},
    {"name": "Nikkel",        "sym":"Ni",     "Class": "Metal TransMetal",       "num":64,  "Z":28, "A":58.6934},
    {"name": "Kobber",        "sym":"Cu",     "Class": "Metal TransMetal",       "num":65,  "Z":29, "A":63.546},
    {"name": "Zink",          "sym":"Zn",     "Class": "Metal TransMetal",       "num":66,  "Z":30, "A":65.38},
    {"name": "Gallium",       "sym":"Ga",     "Class": "Metal PostTransMetal",   "num":67,  "Z":31, "A":69.723},
    {"name": "Germanium",     "sym":"Ge",     "Class": "Metalloid",              "num":68,  "Z":32, "A":72.63},
    {"name": "Arsen",         "sym":"As",     "Class": "Metalloid",              "num":69,  "Z":33, "A":74.921595},
    {"name": "Selen",         "sym":"Se",     "Class": "NonMetal OtherNonMetal", "num":70,  "Z":34, "A":78.971},
    {"name": "Brom",          "sym":"Br",     "Class": "NonMetal Halogen",       "num":71,  "Z":35, "A":79.904},
    {"name": "Krypton",       "sym":"Kr",     "Class": "NonMetal NobelGas",      "num":72,  "Z":36, "A":83.798},
    {"name": "Rubidium",      "sym":"Rb",     "Class": "Metal AlkaliMetal",      "num":73,  "Z":37, "A":85.4678}, // SKAL 4
    {"name": "Strontium",     "sym":"Sr",     "Class": "Metal AlkaliEarthMetal", "num":74,  "Z":38, "A":87.62},
    {"name": "Yttrium",       "sym":"Y",      "Class": "Metal TransMetal",       "num":75,  "Z":39, "A":88.90584},
    {"name": "Zirconium",     "sym":"Zr",     "Class": "Metal TransMetal",       "num":76,  "Z":40, "A":91.224},
    {"name": "Niobium",       "sym":"Nb",     "Class": "Metal TransMetal",       "num":77,  "Z":41, "A":92.90637},
    {"name": "Molybdæn",      "sym":"Mo",     "Class": "Metal TransMetal",       "num":78,  "Z":42, "A":95.95},
    {"name": "Technetium",    "sym":"Tc",     "Class": "Metal TransMetal",       "num":79,  "Z":43, "A":98},
    {"name": "Ruthenium",     "sym":"Ru",     "Class": "Metal TransMetal",       "num":80,  "Z":44, "A":101.07},
    {"name": "Rhodium",       "sym":"Rh",     "Class": "Metal TransMetal",       "num":81,  "Z":45, "A":102.90550},
    {"name": "Palladium",     "sym":"Pd",     "Class": "Metal TransMetal",       "num":82,  "Z":46, "A":106.42},
    {"name": "Sølv",          "sym":"Ag",     "Class": "Metal TransMetal",       "num":83,  "Z":47, "A":107.8682},
    {"name": "Cadmium",       "sym":"Cd",     "Class": "Metal TransMetal",       "num":84,  "Z":48, "A":112.414},
    {"name": "Indium",        "sym":"In",     "Class": "Metal PostTransMetal",   "num":85,  "Z":49, "A":114.818},
    {"name": "Tin",           "sym":"Sn",     "Class": "Metal PostTransMetal",   "num":86,  "Z":50, "A":118.710},
    {"name": "Antimon",       "sym":"Sb",     "Class": "Metalloid",              "num":87,  "Z":51, "A":121.760},
    {"name": "Tellur",        "sym":"Te",     "Class": "Metalloid",              "num":88,  "Z":52, "A":127.60},
    {"name": "Iod",           "sym":"I",      "Class": "NonMetal Halogen",       "num":89,   "Z":53, "A":126.90447},
    {"name": "Xenon",         "sym":"Xe",     "Class": "NonMetal NobelGas",      "num":90,  "Z":54, "A":131.293},
    {"name": "Cæsium",        "sym":"Cs",     "Class": "Metal AlkaliMetal",      "num":91,  "Z":55, "A":132.90545196},   // SKAL 5
    {"name": "Barium",        "sym":"Ba",     "Class": "Metal AlkaliEarthMetal", "num":92,  "Z":56, "A":137.327},
    {"name": "",              "sym":"57-71",  "Class": "ElementSpace",           "num":93,  "Z":0, "A":XXX},
    {"name": "Hafnium",       "sym":"Hf",     "Class": "Metal TransMetal",       "num":94,  "Z":72, "A":178.49},
    {"name": "Tantal",        "sym":"Ta",     "Class": "Metal TransMetal",       "num":95,  "Z":73, "A":180.94788},
    {"name": "Wolfram",       "sym":"W",      "Class": "Metal TransMetal",       "num":96,  "Z":74, "A":183.84},
    {"name": "Rhenium",       "sym":"Re",     "Class": "Metal TransMetal",       "num":97,  "Z":75, "A":186.207},
    {"name": "Osmium",        "sym":"Os",     "Class": "Metal TransMetal",       "num":98,  "Z":76, "A":190.23},
    {"name": "Iridium",       "sym":"Ir",     "Class": "Metal TransMetal",       "num":99,  "Z":77, "A":192.217},
    {"name": "Platin",        "sym":"Pt",     "Class": "Metal TransMetal",       "num":100,  "Z":78, "A":195.084},
    {"name": "Guld",          "sym":"Au",     "Class": "Metal TransMetal",       "num":101,  "Z":79, "A":196.966569},
    {"name": "Kviksølv",      "sym":"Hg",     "Class": "Metal TransMetal",       "num":102,  "Z":80, "A":200.59},
    {"name": "Thallium",      "sym":"Tl",     "Class": "Metal PostTransMetal",   "num":103,  "Z":81, "A":204.38},
    {"name": "Bly",           "sym":"Pb",     "Class": "Metal PostTransMetal",   "num":104,  "Z":82, "A":207.2},
    {"name": "Bismuth",       "sym":"Bi",     "Class": "Metal PostTransMetal",   "num":105,  "Z":83, "A":208.98040},
    {"name": "Polonium",      "sym":"Po",     "Class": "Metalloid",              "num":106,  "Z":84, "A":209},
    {"name": "Astat",         "sym":"At",     "Class": "NonMetal Halogen",       "num":107,  "Z":85, "A":210},
    {"name": "Radon",         "sym":"Rn",     "Class": "NonMetal NobelGas",      "num":108,  "Z":86, "A":222},
    {"name": "Francium",      "sym":"Fr",     "Class": "Metal AlkaliMetal",      "num":109,  "Z":87, "A":223},      // SKAL 6
    {"name": "Radium",        "sym":"Ra",     "Class": "Metal AlkaliEarthMetal", "num":110,  "Z":88, "A":226},
    {"name": "",              "sym":"89-103", "Class": "ElementSpace",           "num":111,  "Z":0, "A":XXX}, 
    {"name": "Rutherfordium", "sym":"Rf",     "Class": "Metal TransMetal",       "num":112,  "Z":104, "A":267}, 
    {"name": "Dubnium",       "sym":"Db",     "Class": "Metal TransMetal",       "num":113,  "Z":105, "A":268}, 
    {"name": "Seaborgium",    "sym":"Sg",     "Class": "Metal TransMetal",       "num":114,  "Z":106, "A":271}, 
    {"name": "Bohrium",       "sym":"Bh",     "Class": "Metal TransMetal",       "num":115,  "Z":107, "A":272}, 
    {"name": "Hassium",       "sym":"Hs",     "Class": "Metal TransMetal",       "num":116,  "Z":108, "A":270}, 
    {"name": "Meitnerium",    "sym":"Mt",     "Class": "Metal TransMetal",       "num":117,  "Z":109, "A":276}, 
    {"name": "Darmstadtium",  "sym":"Ds",     "Class": "Metal TransMetal",       "num":118,  "Z":110, "A":281}, 
    {"name": "Røntgenium",    "sym":"Rg",     "Class": "Metal TransMetal",       "num":119,  "Z":111, "A":280}, 
    {"name": "Copernicium",   "sym":"Cn",     "Class": "Metal TransMetal",       "num":120,  "Z":112, "A":285}, 
    {"name": "Ununtrium",     "sym":"Uut",    "Class": "Metal PostTransMetal",   "num":121,  "Z":113, "A":284}, 
    {"name": "Flerovium",     "sym":"Fl",     "Class": "Metal PostTransMetal",   "num":122,  "Z":114, "A":289}, 
    {"name": "Ununpentium",   "sym":"Uup",    "Class": "Metal PostTransMetal",   "num":123,  "Z":115, "A":288}, 
    {"name": "Livermorium",   "sym":"Lv",     "Class": "Metal PostTransMetal",   "num":124,  "Z":116, "A":293}, 
    {"name": "Ununseptium",   "sym":"Uus",    "Class": "NonMetal Halogen",       "num":125,  "Z":117, "A":294}, 
    {"name": "Ununoctium",    "sym":"Uuo",    "Class": "NonMetal NobelGas",      "num":126,  "Z":118, "A":294}
];


//########################################################################
//                      Interne JS-objekter:
//########################################################################


var FontSizeScalerObj = {};


//########################################################################
//                          Funktioner
//########################################################################

// LINK til "objekter" på visningssitet:
// http://eundervisning-wp.dk/objekter/kemi_drag/builds/development/

// http://eundervisning-wp.dk/objekter/kemiC_periodisk_system/builds/development/periodisk_system.html

// MARK 

var DummyElement = '<div class="DummyElement"></div>';

function loadData(url) {
    $.ajax({
        url: url,
        // contentType: "application/json; charset=utf-8",  // Blot en test af tegnsaettet....
        dataType: 'json', // <------ VIGTIGT: Saadan boer en angivelse til en JSON-fil vaere! 
        // dataType: 'text', // <------ VIGTIGT: Pga. ???, saa bliver vi noedt til at angive JSON som text. 
        async: true, // <------ VIGTIGT: Sikring af at JSON hentes i den rigtige raekkefoelge (ikke asynkront). 
        success: function(data, textStatus, jqXHR) {

            JsonObj_PeriodicTable = JSON.parse(JSON.stringify(data));

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error!!!\njqXHR:" + jqXHR + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
        }
    });
}

// AtomWeight

function ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight, ExtraCssClasses){   
    var HTML = '<div class="ElementBox btn btn-info draggable '+ExtraCssClasses+'">' + 
                    '<div class="AtomNum">' + ((AtomNum > 0)? AtomNum : "&nbsp;") + '</div>' +
                    '<div class="AtomSymbol">' + AtomSymbol + '</div>' +
                    '<div class="AtomName">' + AtomName + '</div>' +
                    '<div class="AtomWeight">' + ((AtomWeight > 0)? AtomWeight : "&nbsp;") + '</div>' +
                '</div>';
    return HTML;
}



function MakePeriodicTable(JsonObj_PeriodicTable){
    var Zn = 0;
    var x = 0;
    var HTML = "";
    var ElementNumberStr = "_";
    for (var s in JsonObj_PeriodicTable){
        ElementNumberStr += JsonObj_PeriodicTable[s].num + "_";
    }
    console.log("ElementNumberStr :" + ElementNumberStr);

    for (var r = 1; r <= 7; r++) {
        HTML += '<div class="row">';
        for (var i = 1; i <= 18; i++) {
            ++x;
            if (ElementNumberStr.indexOf( "_"+String(x)+"_" ) === -1){
                HTML += DummyElement;
            } else {
                if (Zn < 118){ // Midlertidig if-else-konstruktion:
                    // console.log("Zn: " + Zn + ", JsonObj_PeriodicTable[Zn].sym: " + JsonObj_PeriodicTable[Zn].Z);
                    var AtomNum = String(JsonObj_PeriodicTable[Zn].Z);
                    var AtomSymbol = JsonObj_PeriodicTable[Zn].sym;
                    var AtomName = JsonObj_PeriodicTable[Zn].name;
                    var AtomWeight = Math.round(10000*JsonObj_PeriodicTable[Zn].A)/10000;
                    var ExtraCssClasses = JsonObj_PeriodicTable[Zn].Class;
                    HTML += ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight, ExtraCssClasses);
                    ++Zn;
                } else {
                    HTML += ElementBox("34", "X", "Xxxx", "34", "");
                }
            }
        };
        HTML += '</div>';
    };
    $(".PeriodicTableWrapper").html(HTML);
}


function FontSizeScalerNew(ParentSelector, SelectorClassArr, NativeWindowWidth){
    console.log("FontSizeScalerObj 1:" + JSON.stringify(FontSizeScalerObj) );
    var FontSize;
    if ($.isEmptyObject(FontSizeScalerObj)){  // If the window reloades, then FontSizeScalerObj is empty and therefore store all font-sizes.
        for (var i = 0; i < SelectorClassArr.length; i++) { 
            FontSize = $( SelectorClassArr[i] ).css("font-size");
            console.log("FontSizeScalerObj FontSize - SelectorClass: " + SelectorClassArr[i] + ", font-size: " + FontSize );
            if (typeof FontSize != 'undefined') // Check in case a CSS-class in SelectorClassArr does not exist:
                FontSizeScalerObj[ SelectorClassArr[i] ] = parseInt( FontSize.replace(/px/g, '') );
        }
    } 

    // Resize all fonts:
    var WindowWidth = $( ParentSelector ).width();
    var Ratio = Math.round(1000*( WindowWidth/NativeWindowWidth ))/1000; // Rounded to 3 digit precision.
    var ArgStr = SelectorClassArr.join();
    for (var Selector in FontSizeScalerObj ) { 
        if (ArgStr.indexOf(Selector) !== -1)  // Only ajust the fontsizes given in SelectorClassArr:
            $( Selector ).css("font-size", String(FontSizeScalerObj[ Selector ]*Ratio)+"px");
    }
    console.log("FontSizeScalerObj 2:" + JSON.stringify(FontSizeScalerObj) );
}


// This function surrounds all letters (or clusters of letters) in LetterArray with span-tags with a class specified in LetterClassArray.
// NOTE: The delimiter should be a character (eg. "#"), or a combination of characters (eg. "-X-"), that does not exist in the target text.
// IMPORTANT: HTML-tags must not be present in the target-text. This could result in invalid/broken markup.
// EXAMPLE CALL:
//          MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["H","L", "S"], ["FontGreen", "FontRed", "FontBlue"], "#");
// - which will make all L's red and all H's green in the text-strings associated with the target CSS classes ".AtomName" and ".AtomSymbol".
function MarkCertainCharactersAsSpecial(TargetSelectorArray, LetterArray, LetterClassArray, Delimiter){
    for (var TargetSelector in TargetSelectorArray){
        $(TargetSelectorArray[TargetSelector]).each(function( index, element ) {
            for (var l in LetterArray){ // First surround all letters (or clusters of letters) in LetterArray with delimiters, eg. If letter = L and delimiter = #, then #L#.
                var ElementText = $(element).text();
                if (ElementText.indexOf(LetterArray[l]) !== -1){
                    $(element).html( ElementText.replace(LetterArray[l], Delimiter + LetterArray[l] + Delimiter) );
                }
            }

            for (var l in LetterArray){// second, replace all delimited letters, eg. #L#, with <span class="MyClass">L</span>
                var LetterClass = (LetterClassArray.length == LetterArray.length) ? LetterClassArray[l] : LetterClassArray[0]; 
                var ElementText = $(element).text();
                if (ElementText.indexOf(LetterArray[l]) !== -1){
                    $(element).html( ElementText.replace( Delimiter + LetterArray[l] + Delimiter, '<span class="'+LetterClass+'">'+LetterArray[l]+'</span>' ) );
                }
            }
        });
    }
}




//########################################################################
//                        Run code....
//########################################################################


$( document ).ready(function() {  // CapitalI


    // $(".ChemicakStructureWrapper1").html( ChemLatexToHtml( LatexStr ) );
    // $(".ChemicakStructureWrapper2").html( ChemLatexToHtml2( LatexStr ) ); 

    // Create the periodic table:
    MakePeriodicTable(JsonObj_PeriodicTable);

    MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["I"], ["CapitalI"], "#");
    // MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["H","L", "S", "I"], ["FontRed", "FontGreen", "FontBlue", "CapitalI"], "#");

    // When the window loades, scale all elements:
    $(window).load(function () {
        // Scale the height on all ElmentBox
        $( ".ElementBox" ).height( 6/5*$( ".ElementBox" ).width() ); // Rektangulære boxe
        // $( ".ElementBox" ).height( $( ".ElementBox" ).width() );        // Kvardratiske boxe  

        // Scale the height on all small and large boxes
        $( ".lbox" ).height( $( ".lbox" ).width() );
        // $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $( ".sbox" ).height( $( ".sbox" ).width() );  
        $( ".DropSpacer" ).height( $( ".DropSpacer" ).width() );

        FontSizeScalerNew(".PeriodicTableWrapper", 
                            [".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3", 
                            ".ScoreHeader", ".ScoreNum", ".TryAgain", ".NextQuestion", ".QuizHeadingText h2", 
                            ".QuizHeadingText h1", ".QuizHeadingTextCount", "#Feedbackhide", ".ScoreWrapper"], 1425);

        $( ".DragNum" ).width( $( ".DragNum" ).height() );

        console.log("WindowWidth: " + $( window ).width());

        // $( ".ElementBox" ).css( "font-size", String(50)+"%" );
    });

    // When the window resizes, scale all elements: 
    $(window).resize(function () {
        // Scale the height on all ElmentBox
        $( ".ElementBox" ).height( 6/5*$( ".ElementBox" ).width() );  // Rektangulære boxe
        // $( ".ElementBox" ).height( $( ".ElementBox" ).width() );       // Kvardratiske boxe

        // Scale the height on all small and large boxes
        $( ".lbox" ).height( $( ".lbox" ).width() );
        // $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $( ".sbox" ).height( $( ".sbox" ).width() );
        $( ".DropSpacer" ).height( $( ".DropSpacer" ).width() );

        FontSizeScalerNew(".PeriodicTableWrapper", 
                            [".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3", 
                            ".ScoreHeader", ".ScoreNum", ".TryAgain", ".NextQuestion", ".QuizHeadingText h2", 
                            ".QuizHeadingText h1", ".QuizHeadingTextCount", "#Feedbackhide", ".ScoreWrapper"], 1425);

        $( ".DragNum" ).width( $( ".DragNum" ).height() );
    });

});

