//Sanitize-layer-names. Makes all layer names filename friendly for easy saving.

// Filename restrictions for windows or mac(OS9 and X) are as follows:
// MAX LENGTH: 255 character
//  / ? < > \ : * | " ^
// any ctrl key character 
// no spaces at end of name
// no period at end of name
// no period at start of name
// reserved words: com1, com2, com3, com4, com5, com6, com7, com8, com9, lpt1, lpt2, lpt3, lpt4, lpt5, lpt6, lpt7, lpt8, lpt9, con, nul, and prn


// Copyright 2019
// September 18, 2019 
// Written by Roxanne Albutt
// http://www.roxannealbutt.org
// e-mail: roxanne.albutt@gmail.com

//==================================== GLOBALS ============================================
var regex = /[^a-z0-9_]/ig;
var doc = app.activeDocument;
//==================================== MAIN ================================================
// enable double clicking from the
// Macintosh Finder or the Windows Explorer
#target photoshop

// Make Photoshop the frontmost application
app.bringToFront();

Main();

//====

function Main() {
    MakeAllLayersFileNameValid();
}

//====================================  FUNCTIONS ==========================================

function MakeAllLayersFileNameValid() {
    for (var i = 0; i <  doc.layers.length; i++) {
        var currentLayer = app.activeDocument.layers[i];        
        doc.activeLayer = app.activeDocument.layers[i];     
        //ignore the layer if it is locked.
        if (!doc.activeLayer.isLocked) {
            doc.activeLayer.name = RemoveIllegalCharacters(currentLayer.name);    
        }
    }
}

function RemoveIllegalCharacters(filename) {
   filename = filename.replace(regex, '');
   if (filename == '') {filename = "-";}
   return filename;
}