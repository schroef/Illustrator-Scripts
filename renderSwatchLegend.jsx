/////////////////////////////////////////////////////////////////
// Render Swatch Legend v1.5.4 -- CC
//>=--------------------------------------
//
//  This script will generate a legend of rectangles for every swatch in the main swatches palette.
//  You can configure spacing and value display by configuring the variables at the top
//  of the script.

/*
    Changelog
    keepachangelog > https://keepachangelog.com/en/1.0.0/

    [1.5.4] 2025-03-24
    Fixed
    - # not working when Join is not active

    [1.5.3] 2025-03-20
    Fixed
    - Error when active layer is locked or hidden
    - Join HEX was not working when split was active

    Added
    - # tag toggle for HEX
    - HEX is now all capitilized

    [1.5.2] 2024-09-18
    Fixed
    - LAB returned wrong colors due to hex adding number function d2h()

    [1.5.1] 2024-01-30
    Added
    - Name as option
    changed
    - options panel work, adjusted grouping so alignment of SctipUI is a bit better
    
    [1.5.0] 2024-01-18
    Fixed
    - Issue when colors where spot colors and hex code, caused an error. Outcome was not wrapped as an array
    Added
    - Pass for gradients, this is not support as of now. It needs quite an overhaul and much code get this working
     > for now it adds the color and text. user can manually add the stops. The idea is to add the colors stops. but this could be a problem with very complicated gradients 
    [1.4.9] 2023-09-08
    Fixed
    - Error dialog for no swatches selected
    [1.4.8] 2023-06-03
    Fixed
    - Fix for missing leading 0 HEX, fix
    Changed
    - Settings are saved alongside the script as side fiel vs the working document
      
    update: v1.4.7 Added to strip separator for HEX
    update: v1.4.6 Added option to use on selection
    update: v1.4.5 Added Color Space selection dialog + saves settings
    update: v1.4.4 Added Split by Color Component Rombout Versluijs
    update: v1.4.3 Added HEX colors Rombout Versluijs
    update: v1.4.2 Only on selected Rombout Versluijs
    update: v1.4.1 Updated by CarlCanto > https://community.adobe.com/t5/illustrator-discussions/illustrator-javascript-render-swatch-legend-lab-colour-values-incorrect/m-p/11437592
    update: v1.3 adds multiple colour space values based on array printColors.
    update: v1.2 uses adobe colour converter, rather than rgb colour conversion for a closer match.
     update: v1.1 now tests color brightness and renders a white label if the color is dark.
*/
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/*
    TODO
    - Fix issue when LAB colors are checked and colors are actually lab > Done v1.5.0 2024-01-18
    - Add gradients in selection and swatches
*/
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// WIP
//   Add option to use selection as well.
/////////////////////////////////////////////////////////////////

// LAB values by Carlos Canto - 09/16/2020
// reference: https://community.adobe.com/t5/illustrator/illustrator-javascript-render-swatch-legend-lab-colour-values-incorrect/m-p/11438710?page=2#M244722
//>=--------------------------------------
// JS code (c) copyright: John Wundes ( john@wundes.com ) www.wundes.com
// copyright full text here:  http://www.wundes.com/js4ai/copyright.txt
//
// Edits by Adam Green (@wrokred) www.wrokred.com

//////////////////////////////////////////////////////////////////

// ok and cancel button
var okBtnID = 1;
var cancelBtnID = 2;

function showDialog(swatchInfo){
    
    // SCRIPTUI JOONAS ///////////////////////////////////

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":34,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"SwatchLegendDlg","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Swatch Legend","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-7":{"id":7,"type":"Checkbox","parentId":11,"style":{"enabled":true,"varName":"rgbChkb","text":"RGB","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-8":{"id":8,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"dialogBtnGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"right"}},"item-9":{"id":9,"type":"Button","parentId":8,"style":{"enabled":true,"varName":"okBtn","text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Button","parentId":8,"style":{"enabled":true,"varName":"cancelBtn","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"colorSpacesPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Select Color Spaces","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":5,"alignChildren":["left","top"],"alignment":null}},"item-12":{"id":12,"type":"Checkbox","parentId":11,"style":{"enabled":true,"varName":"hexChkb","text":"HEX","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-13":{"id":13,"type":"Checkbox","parentId":11,"style":{"enabled":true,"varName":"cmykChkb","text":"CMYK","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-14":{"id":14,"type":"Checkbox","parentId":11,"style":{"enabled":true,"varName":"labChkb","text":"LAB","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-15":{"id":15,"type":"Checkbox","parentId":11,"style":{"enabled":true,"varName":"grayChkb","text":"GRAY","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-16":{"id":16,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"optionsPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"options","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":5,"alignChildren":["left","fill"],"alignment":null}},"item-17":{"id":17,"type":"EditText","parentId":18,"style":{"enabled":true,"varName":"separatorStr","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":" ","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":"Character used to separate the colours eg \"|\" output = R: XXX|G: XXX|B: XXX"}},"item-18":{"id":18,"type":"Group","parentId":16,"style":{"enabled":true,"varName":"separatorGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null},"hidden":true},"item-19":{"id":19,"type":"StaticText","parentId":18,"style":{"enabled":true,"varName":"separatorLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Separator","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-20":{"id":20,"type":"Group","parentId":16,"style":{"enabled":true,"varName":"splitCompsGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null},"hidden":true},"item-21":{"id":21,"type":"StaticText","parentId":20,"style":{"enabled":true,"varName":"splitCompLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Split","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-22":{"id":22,"type":"Checkbox","parentId":20,"style":{"enabled":true,"varName":"splitCompsChbk","text":"Components","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-23":{"id":23,"type":"Group","parentId":16,"style":{"enabled":true,"varName":"textSizeGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null},"hidden":true},"item-24":{"id":24,"type":"StaticText","parentId":23,"style":{"enabled":true,"varName":"textSizeLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Text Size","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-25":{"id":25,"type":"EditText","parentId":23,"style":{"enabled":true,"varName":"textSizeStr","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-26":{"id":26,"type":"Group","parentId":16,"style":{"enabled":true,"varName":"separatorGrp","preferredSize":[0,70],"margins":0,"orientation":"column","spacing":5,"alignChildren":["left","center"],"alignment":"center"}},"item-27":{"id":27,"type":"StaticText","parentId":26,"style":{"enabled":true,"varName":"separatorLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Separator","justify":"left","preferredSize":[0,20],"alignment":null,"helpTip":""}},"item-28":{"id":28,"type":"EditText","parentId":29,"style":{"enabled":true,"varName":"separatorStr","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":" ","justify":"left","preferredSize":[30,20],"alignment":"center","helpTip":"Character used to separate the colours eg \"|\" output = R: XXX|G: XXX|B: XXX"}},"item-29":{"id":29,"type":"Group","parentId":16,"style":{"enabled":true,"varName":"splitCompsGrp","preferredSize":[0,70],"margins":0,"orientation":"column","spacing":5,"alignChildren":["center","center"],"alignment":"center"}},"item-30":{"id":30,"type":"StaticText","parentId":26,"style":{"enabled":true,"varName":"splitCompLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Split Components","justify":"left","preferredSize":[0,20],"alignment":null,"helpTip":""}},"item-31":{"id":31,"type":"Checkbox","parentId":29,"style":{"enabled":true,"varName":"splitCompsChbk","text":"","preferredSize":[0,20],"alignment":"center","helpTip":"Split color component name by value. eg it shows CMYK 0 100 100 0 when off, C: 0 M: 100 Y:100 K:0 when checked","checked":false}},"item-33":{"id":33,"type":"StaticText","parentId":26,"style":{"enabled":true,"varName":"textSizeLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Text Size","justify":"left","preferredSize":[0,20],"alignment":null,"helpTip":""}},"item-34":{"id":34,"type":"EditText","parentId":29,"style":{"enabled":true,"varName":"textSizeStr","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[30,20],"alignment":null,"helpTip":"Set text size of value per color"}}},"order":[0,11,12,7,13,14,15,16,29,28,31,34,26,27,30,33,18,19,17,20,21,22,23,24,25,8,10,9],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// SWATCHLEGENDDLG
// ====================
var SwatchLegendDlg = new Window("dialog"); 
    SwatchLegendDlg.text = "Swatch Legend v1.5.4"; 
    SwatchLegendDlg.orientation = "column"; 
    SwatchLegendDlg.alignChildren = ["left","top"]; 
    SwatchLegendDlg.spacing = 10; 
    SwatchLegendDlg.margins = 16; 

// COLORSPACESPNL
// ==============
var colorSpacesPnl = SwatchLegendDlg.add("panel", undefined, undefined, {name: "colorSpacesPnl"}); 
    colorSpacesPnl.text = "Select Color Spaces"; 
    colorSpacesPnl.helpTip = "Select Color Spaces you wont to show the color conmponents for."; 
    colorSpacesPnl.orientation = "column"; 
    colorSpacesPnl.alignChildren = ["left","top"]; 
    colorSpacesPnl.spacing = 5; 
    colorSpacesPnl.margins = [10, 15, 10, 10]; 

var hexChkb = colorSpacesPnl.add("checkbox", undefined, undefined, {name: "hexChkb"}); 
    hexChkb.text = "HEX"; 
    hexChkb.value = swatchInfo.hexChkb; 

var rgbChkb = colorSpacesPnl.add("checkbox", undefined, undefined, {name: "rgbChkb"}); 
    rgbChkb.text = "RGB"; 
    rgbChkb.value = swatchInfo.rgbChkb; 

var cmykChkb = colorSpacesPnl.add("checkbox", undefined, undefined, {name: "cmykChkb"}); 
    cmykChkb.text = "CMYK"; 
    cmykChkb.value = swatchInfo.cmykChkb; 

var labChkb = colorSpacesPnl.add("checkbox", undefined, undefined, {name: "labChkb"}); 
    labChkb.text = "LAB"; 
    labChkb.value = swatchInfo.labChkb; 

var grayChkb = colorSpacesPnl.add("checkbox", undefined, undefined, {name: "grayChkb"}); 
    grayChkb.text = "GRAY"; 
    grayChkb.value = swatchInfo.grayChkb; 

// OPTIONSPNL
// ==========
var optionsPnl = SwatchLegendDlg.add("panel", undefined, undefined, {name: "optionsPnl"}); 
    optionsPnl.text = "options"; 
    optionsPnl.orientation = "column"; 
    optionsPnl.alignChildren = ["left","top"]; 
    optionsPnl.spacing = 5; 
    optionsPnl.margins = [10, 15, 10, 10]; 

// var spacerLbl = splitCompsGrp.add("statictext", undefined, undefined, {name: "spacerLbl"}); 
//     spacerLbl.text = ""; 
    // spacerLbl.preferredSize.height = 1;


// NAMECOLORGRP
// =============
var nameColorGrp = optionsPnl.add("group", undefined, {name: "nameColorGrp"}); 
    nameColorGrp.orientation = "row"; 
    nameColorGrp.alignChildren = ["left","center"]; 
    nameColorGrp.spacing = 5; 
    nameColorGrp.margins = 0; 

var addNameColorChbk = nameColorGrp.add("checkbox", undefined, undefined, {name: "addNameColorChbk"}); 
    addNameColorChbk.helpTip = "Adds name of the color"; 
    addNameColorChbk.preferredSize.height = 13; 
    addNameColorChbk.preferredSize.width = 30;
    addNameColorChbk.value = swatchInfo.nameColor; 
    addNameColorChbk.alignment = ["center","center"];

var nameColorLbl = nameColorGrp.add("statictext", undefined, undefined, {name: "nameColorLbl"}); 
    nameColorLbl.text = "Add name color"; 
    nameColorLbl.preferredSize.height = 20;

// SEPARATORGRP
// =============
var separatorGrp = optionsPnl.add("group", undefined, {name: "separatorGrp"}); 
    separatorGrp.orientation = "row"; 
    separatorGrp.alignChildren = ["left","center"]; 
    separatorGrp.spacing = 5; 
    separatorGrp.margins = 0; 

var separatorStr = separatorGrp.add('edittext {properties: {name: "separatorStr"}}'); 
    separatorStr.helpTip = "Character used to separate the colours eg \u0022|\u0022 output = R: XXX|G: XXX|B: XXX"; 
    separatorStr.text = swatchInfo.colorSeparator; 
    separatorStr.preferredSize.height = 20; 
    separatorStr.preferredSize.width = 30; 
    separatorStr.alignment = ["center","center"]; 

var separatorLbl = separatorGrp.add("statictext", undefined, undefined, {name: "separatorLbl"}); 
    separatorLbl.text = "Separator"; 
    separatorLbl.preferredSize.height = 20; 


// JOINHEXGRP
// =============
var joinHexGrp = optionsPnl.add("group", undefined, {name: "joinHexGrp"}); 
    joinHexGrp.orientation = "row"; 
    joinHexGrp.alignChildren = ["left","center"]; 
    joinHexGrp.spacing = 5; 
    joinHexGrp.margins = 0; 

var joinHexChbk = joinHexGrp.add("checkbox", undefined, undefined, {name: "joinHexChbk"}); 
    joinHexChbk.helpTip = "Joins the HEX values by removing the separator"; 
    joinHexChbk.preferredSize.height = 13; 
    joinHexChbk.value = swatchInfo.joinHex; 
    joinHexChbk.alignment = ["center","center"]; 
    joinHexChbk.preferredSize.width = 25;

var skipHexLbl = joinHexGrp.add("statictext", undefined, undefined, {name: "skipHexLbl"}); 
    skipHexLbl.text = "Join HEX"; 
    skipHexLbl.preferredSize.height = 20; 

var addHashChbk = joinHexGrp.add("checkbox", undefined, undefined, {name: "addHashChbk"}); 
    addHashChbk.helpTip = "add hash for color value"; 
    addHashChbk.preferredSize.height = 13; 
    addHashChbk.value = swatchInfo.addHash; 
    addHashChbk.alignment = ["center","center"]; 
    // addHashChbk.preferredSize.width = 25;

var addHashLbl = joinHexGrp.add("statictext", undefined, undefined, {name: "addHashLbl"}); 
    addHashLbl.text = "Add #"; 
    addHashLbl.preferredSize.height = 20; 


// SPLITCOMPSGRP
// =============
var splitCompsGrp = optionsPnl.add("group", undefined, {name: "splitCompsGrp"}); 
    splitCompsGrp.orientation = "row"; 
    splitCompsGrp.alignChildren = ["left","center"]; 
    splitCompsGrp.spacing = 5; 
    splitCompsGrp.margins = 0; 

var splitCompsChbk = splitCompsGrp.add("checkbox", undefined, undefined, {name: "splitCompsChbk"}); 
    splitCompsChbk.helpTip = "Split color component name by value. eg it shows CMYK 0 100 100 0 when off, C: 0 M: 100 Y:100 K:0 when checked"; 
    splitCompsChbk.preferredSize.height = 20; 
    splitCompsChbk.value = swatchInfo.splitColorComponents; 
    splitCompsChbk.alignment = ["center","center"]; 
    splitCompsChbk.preferredSize.width = 30;

var splitCompLbl = splitCompsGrp.add("statictext", undefined, undefined, {name: "splitCompLbl"}); 
    splitCompLbl.text = "Split Components"; 
    splitCompLbl.preferredSize.height = 20; 


// TEXTSIZESGRP
// =============
var textSizeGrp = optionsPnl.add("group", undefined, {name: "textSizeGrp"}); 
    textSizeGrp.orientation = "row"; 
    textSizeGrp.alignChildren = ["left","center"]; 
    textSizeGrp.spacing = 5; 
    textSizeGrp.margins = 0; 

var textSizeStr = textSizeGrp.add('edittext {properties: {name: "textSizeStr"}}'); 
    textSizeStr.helpTip = "Set text size of value per color"; 
    // textSizeStr.text = "10"; 
    textSizeStr.text = swatchInfo.textSize; 
    textSizeStr.preferredSize.width = 30; 
    textSizeStr.preferredSize.height = 20; 

var textSizeLbl = textSizeGrp.add("statictext", undefined, undefined, {name: "textSizeLbl"}); 
    textSizeLbl.text = "Text Size"; 
    textSizeLbl.preferredSize.height = 20; 

// SEPARATORGRP1
// =============
// var separatorGrp1 = optionsPnl.add("group", undefined, {name: "separatorGrp1"}); 
    // separatorGrp1.orientation = "row"; 
    // separatorGrp1.alignChildren = ["left","center"]; 
    // separatorGrp1.spacing = 5; 
    // separatorGrp1.margins = 0; 

// var separatorLbl1 = separatorGrp1.add("statictext", undefined, undefined, {name: "separatorLbl1"}); 
    // separatorLbl1.text = "Separator"; 

// var separatorStr1 = separatorGrp1.add('edittext {properties: {name: "separatorStr1"}}'); 
    // separatorStr1.helpTip = "Character used to separate the colours eg \u0022|\u0022 output = R: XXX|G: XXX|B: XXX"; 
    // separatorStr1.text = " "; 
    // separatorStr1.preferredSize.width = 30; 

// SPLITCOMPSGRP1
// ==============
// var splitCompsGrp1 = optionsPnl.add("group", undefined, {name: "splitCompsGrp1"}); 
    // splitCompsGrp1.orientation = "row"; 
    // splitCompsGrp1.alignChildren = ["left","center"]; 
    // splitCompsGrp1.spacing = 5; 
    // splitCompsGrp1.margins = 0; 

// var splitCompLbl1 = splitCompsGrp1.add("statictext", undefined, undefined, {name: "splitCompLbl1"}); 
    // splitCompLbl1.text = "Split"; 

// var splitCompsChbk1 = splitCompsGrp1.add("checkbox", undefined, undefined, {name: "splitCompsChbk1"}); 
    // splitCompsChbk1.text = "Components"; 

// TEXTSIZEGRP
// ===========
// var textSizeGrp = optionsPnl.add("group", undefined, {name: "textSizeGrp"}); 
    // textSizeGrp.orientation = "row"; 
    // textSizeGrp.alignChildren = ["left","center"]; 
    // textSizeGrp.spacing = 5; 
    // textSizeGrp.margins = 0; 

// var textSizeLbl1 = textSizeGrp.add("statictext", undefined, undefined, {name: "textSizeLbl1"}); 
    // textSizeLbl1.text = "Text Size"; 

// var textSizeStr1 = textSizeGrp.add('edittext {properties: {name: "textSizeStr1"}}'); 
    // textSizeStr1.text = "10"; 

// DIALOGBTNGROUP
// ==============
var dialogBtnGroup = SwatchLegendDlg.add("group", undefined, {name: "dialogBtnGroup"}); 
    dialogBtnGroup.orientation = "row"; 
    dialogBtnGroup.alignChildren = ["right","center"]; 
    dialogBtnGroup.spacing = 10; 
    dialogBtnGroup.margins = 0; 
    dialogBtnGroup.alignment = ["right","top"]; 

var cancelBtn = dialogBtnGroup.add("button", undefined, undefined, {name: "cancelBtn"}); 
    cancelBtn.text = "Cancel"; 

var okBtn = dialogBtnGroup.add("button", undefined, undefined, {name: "okBtn"}); 
    okBtn.text = "OK"; 


    // END SCRIPTUI JOONAS ///////////////////////////////
    //////////////////////////////////////////////////////
    var joinHexChbkOld ;
    var addHashChbkOld;
    joinHexChbkOld = joinHexChbk.value;
    addHashChbkOld = addHashChbk.value;    
    // check if we toggle on / off joinhex add hash
    function checSplitorJoinHEX(value, joinHexChbkOld, addHashChbkOld) {
        // alert(value)
        if(value){
            joinHexGrp.enabled = false;
            joinHexChbkOld = joinHexChbk.value;
            addHashChbkOld = addHashChbk.value;
            joinHexChbk.value = false;
            addHashChbk.value = false;
        } else {
            joinHexGrp.enabled = true;
            joinHexChbk.value = joinHexChbkOld;
            addHashChbk.value = addHashChbkOld;
            addHashChbkOld = addHashChbkOld;
            joinHexChbkOld = joinHexChbkOld;
        }
    }
    joinHexChbk.onClick = function() {
        joinHexChbkOld = joinHexChbk.value;
        addHashChbkOld = addHashChbk.value;
    }
    addHashChbk.onClick  = function() {
        joinHexChbkOld = joinHexChbk.value;
        addHashChbkOld = addHashChbk.value;
    }
    splitCompsChbk.onClick = function() {
        checSplitorJoinHEX(this.value, joinHexChbkOld, addHashChbkOld)
    }
    checSplitorJoinHEX(splitCompsChbk.value, joinHexChbkOld, addHashChbkOld)
    

    okBtn.onClick = function() {
        SwatchLegendDlg.close(okBtnID);
    }

    cancelBtn.onClick = function() {
        SwatchLegendDlg.close(cancelBtnID);
    }

    defaultElement = okBtn;
    cancelElement = cancelBtn;

    SwatchLegendDlg.center();

    var result = SwatchLegendDlg.show();
    if (cancelBtnID == result) {
        return result; // close to quit
    }

    swatchInfo.hexChkb = hexChkb.value;
    swatchInfo.rgbChkb = rgbChkb.value;
    swatchInfo.cmykChkb = cmykChkb.value;
    swatchInfo.labChkb = labChkb.value;
    swatchInfo.grayChkb = grayChkb.value;
    swatchInfo.colorSpaces = [swatchInfo.hexChkb, swatchInfo.rgbChkb, swatchInfo.cmykChkb, swatchInfo.labChkb, swatchInfo.grayChkb];
    swatchInfo.nameColor = addNameColorChbk.value;
    swatchInfo.colorSeparator = separatorStr.text;
    swatchInfo.joinHex = joinHexChbk.value;
    swatchInfo.addHash = addHashChbk.value;
    swatchInfo.splitColorComponents = splitCompsChbk.value;
    swatchInfo.textSize = Number(textSizeStr.text);
    return result;
}

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
doc = activeDocument,
swatches = doc.swatches.getSelected(),
cols = 4, // number of columns in group
displayAs = "RGBColor", //or "CMYKColor"
printColors = ["HEX", "RGB", "CMYK", "LAB", "GrayScale"], // RGB, CMYK, LAB and/or GrayScale
// colorSeparator = " ", // Character used to separate the colours eg "|" output = R: XXX|G: XXX|B: XXX
// splitColorComponents = false;
// textSize = 10, // output text size value in points
rectRef = null,
textRectRef = null,
textRef = null,
swatchColor = null,
w = 150;
h = 120,
h_pad = 10,
v_pad = 10,
t_h_pad = 10,
t_v_pad = 10,
x = null,
y = null,
black = new GrayColor(),
white = new GrayColor();
black.gray = 100;
white.gray = 0;
activeDocument.layers[0].locked = false;
// var newGroup;

function addSwatchGroup(doc){
    // alert(app.activeDocument.activeLayer.locked ==false)
    try {
        if (app.activeDocument.activeLayer.visible){
            if (app.activeDocument.activeLayer.locked ==false){
                newGroup = doc.groupItems.add();
                newGroup.name = "NewGroup";
                newGroup.move(doc, ElementPlacement.PLACEATBEGINNING);
                return newGroup
            }
        }
    } catch(e) {
        return false
    }
}

function main(swatchInfo){
    swatchInfo = swatchInfo;
    for (var c = 0, len = swatches.length; c < len; c++) {
        var swatchGroup = doc.groupItems.add();
        swatchGroup.name = swatches[c].name;
        x = (w + h_pad) * ((c) % cols);
        y = (h + v_pad) * (Math.round(((c+2) + .03) / cols)) * -1;
        rectRef = doc.pathItems.rectangle(y, x, w, h);
        swatchColor = swatches[c].color;
        rectRef.fillColor = swatchColor;
        textRectRef = doc.pathItems.rectangle(y - t_v_pad, x + t_h_pad, w - (2 * t_h_pad), h - (2 * t_v_pad));
        textRef = doc.textFrames.areaText(textRectRef);
        var nameColor = swatchInfo.nameColor == true ? swatches[c].name + "\r" : ""; 
        textRef.contents = nameColor + getColorValues(swatchColor);
        textRef.textRange.fillColor = is_dark(swatchColor) ? white : black;
        textRef.textRange.size = swatchInfo.textSize;
        rectRef.move(swatchGroup, ElementPlacement.PLACEATBEGINNING);
        textRef.move(swatchGroup, ElementPlacement.PLACEATBEGINNING);
        swatchGroup.move(newGroup, ElementPlacement.PLACEATEND);
    }
}

function getColorValues(c, spot) {
    if (c.typename) {
        if (c.typename == "SpotColor") {
            return getColorValues(c.spot.color, c.spot);
        };
        switch (c.typename) {
            case "RGBColor":
                sourceSpace = ImageColorSpace.RGB;
                colorComponents = [c.red, c.green, c.blue];
                break;
            case "CMYKColor":
                sourceSpace = ImageColorSpace.CMYK;
                colorComponents = [c.cyan, c.magenta, c.yellow, c.black];
                break;
            case "LabColor":
                sourceSpace = ImageColorSpace.LAB;
                colorComponents = [c.l, c.a, c.b];
                break;
            case "GrayColor":
                sourceSpace = ImageColorSpace.GrayScale;
                colorComponents = [c.gray];
                break;
             case "GradientColor":
            //  alert("Gradients are not supported asof thos moment")
                return "Not supported (WIP)\nUse global gradient\nRun script on color stops"
        }
        var outputColors = new Array();
        for (var i = printColors.length - 1; i >= 0; i--) {
            colorType = printColors[i] == "HEX" ? "Indexed": printColors[i];
            targetSpace = ImageColorSpace[colorType];
            // alert(i)
            // alert(swatchInfo.joinHex)
            // alert(swatchInfo.colorSpaces[i])
            // only output selected spaces from dialog
            
            if (swatchInfo.colorSpaces[i]==true){
                if (printColors[i] == 'LAB' && spot && spot.spotKind == 'SpotColorKind.SPOTLAB') {
                    outputColors[i] = [spot.getInternalColor()[0], spot.getInternalColor()[1], spot.getInternalColor()[2]];
                    // outputColors[i] = [d2h(spot.getInternalColor()[0]), d2h(spot.getInternalColor()[1]), d2h(spot.getInternalColor()[2])];
                } else if(printColors[i] == 'HEX') {
                    if (app.activeDocument.documentColorSpace == DocumentColorSpace.CMYK) {
                        colorArray = [c.cyan, c.magenta, c.yellow, c.black];
                        // [Math.round(c), Math.round(m), Math.round(y), Math.round(k)]
                        rgbConv = app.convertSampleColor(ImageColorSpace["CMYK"], colorArray, ImageColorSpace["RGB"], ColorConvertPurpose.defaultpurpose);          
                        // outputColors[i] = [rgbConv[0].toString(16), rgbConv[1].toString(16), rgbConv[2].toString(16)];
                        outputColors[i] = [d2h(rgbConv[0]), d2h(rgbConv[1]), d2h(rgbConv[2])];
                    } else{
                        outputColors[i] = [d2h(c.red), d2h(c.green), d2h(c.blue)];
                    }
                }
                else {
                    // alert(outputColors[i])
                    // alert(sourceSpace+" "+colorComponents+" "+targetSpace+" "+ColorConvertPurpose.previewpurpose)
                    outputColors[i] = app.convertSampleColor(sourceSpace, colorComponents, targetSpace, ColorConvertPurpose.previewpurpose);
                }
                for (var j = outputColors[i].length - 1; j >= 0; j--) {
                    // Skip split for HEX > makes no sense 2025-03-20
                    colorComp = swatchInfo.splitColorComponents == true ? printColors[i].charAt(j) + ": " : "";
                    // if(printColors[i] == "HEX" && swatchInfo.joinHex){ 
                    //     colorComp = swatchInfo.splitColorComponents == true ? printColors[i].charAt(j) + "" : "";
                    // } else {
                    // }
                    if(isNaN(outputColors[i][j])){
                        outputColors[i][j] = colorComp + outputColors[i][j];
                    } else {
                        // alert(printColors[i])
                        // skip for HEX
                        if(printColors[i] != 'HEX')  {
                            outputColors[i][j] = colorComp + Math.round(outputColors[i][j]);
                        } else {
                            outputColors[i][j] = colorComp + outputColors[i][j];
                        }
                    }
                    if (j == outputColors[i].length - 1) {
                        outputColors[i][j] += "\r";
                    };
                    // alert(outputColors[i])
                };
                
                if(printColors[i] == "HEX"){
                    // Make HEX Uppercase
                    // outputColors[i] = outputColors[i].toString().toUpperCase();
                    if (swatchInfo.joinHex && swatchInfo.addHash){
                        separator = "#"+outputColors[i].join("");
                    } 
                    if (swatchInfo.joinHex && !swatchInfo.addHash){
                        separator = outputColors[i].join("");
                    } 
                    if (swatchInfo.addHash && !swatchInfo.joinHex){
                        if (swatchInfo.addHash){
                            separator = "#"+outputColors[i].toString().replace(',',' ').replace(',',' ');
                        } else {
                            separator = "#"+outputColors[i].join(swatchInfo.colorSeparator);
                        }
                    } 
                    if (!swatchInfo.joinHex && !swatchInfo.addHash) {
                        separator = outputColors[i].join(swatchInfo.colorSeparator);
                    }
                } else {
                    separator = outputColors[i].join(swatchInfo.colorSeparator);
                }
                // if(printColors[i] == "HEX" && swatchInfo.joinHex && swatchInfo.addHash){
                //     separator = "#"+outputColors[i].join("");
                // } else {
                //     // separator = outputColors[i].join(" "+swatchInfo.colorSeparator);
                //     separator = outputColors[i].join(swatchInfo.colorSeparator);
                // }
                // if (printColors[i] == "HEX" && swatchInfo.joinHex){
                //     separator = outputColors[i].join("");
                // } else {
                //     separator = outputColors[i].join(swatchInfo.colorSeparator);
                // }
                // if (printColors[i] == "HEX" && swatchInfo.addHash){
                //     if (swatchInfo.joinHex){
                //         separator = "#"+outputColors[i].join("");
                //     } else {
                //         separator = "#"+outputColors[i].join(swatchInfo.colorSeparator);
                //     }
                // } else {
                //     separator = outputColors[i].join(swatchInfo.colorSeparator);
                // }
                // if(printColors[i] == "HEX" && swatchInfo.addHash){
                //     separator = "#"+outputColors[i].join("");
                // } else {
                //     separator = outputColors[i].join(swatchInfo.colorSeparator);
                // }
                outputColors[i] = separator.toUpperCase();
                if(!swatchInfo.splitColorComponents) {
                    outputColors[i] = printColors[i]+" "+outputColors[i]
                }
            }
        };
        return outputColors.join("");
    }
    return "Non Standard Color Type";
}

function is_dark(c) {
    if (c.typename) {
        switch (c.typename) {
            case "CMYKColor":
                return (c.black > 50 || (c.cyan > 50 && c.magenta > 50)) ? true : false;
            case "RGBColor":
                return (c.red < 100 && c.green < 100) ? true : false;
            case "GrayColor":
                return c.gray > 50 ? true : false;
            case "SpotColor":
                return is_dark(c.spot.color);
                return false;
        }
    }
}


///////////////////////////////////////////////////////////////////////////////

// JSON
// Source: https://github.com/JavierAroche/descriptor-info/blob/master/example/helpers/JSON.jsx
/**
* JSON - from: https://github.com/douglascrockford/JSON-js
*/
if(typeof JSON!=='object'){JSON={};}(function(){'use strict';function f(n){return n<10?'0'+n:n;}function this_value(){return this.valueOf();}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Function: initSwatchInfo
// Usage: create our default parameters
// Input: a new Object
// Return: a new object with params set to default
// Source: Export LayerComps photoshop
///////////////////////////////////////////////////////////////////////////////
// function initswatchInfo(swatchInfo, isSelection, artboardAvail, isOverrideSticky) {
function initSwatchInfo(swatchInfo,jsonData) {
    // if (isOverrideSticky) {
    //     if (isSelection) swatchInfo.selectionOnly = true;
    //     if (!isSelection) swatchInfo.selectionOnly = false;
    //     // }
    //     if (artboardAvail) swatchInfo.artboardsEnab = true;
    //     if (!artboardAvail) swatchInfo.artboardsEnab = false;
    //     // }
    //     // Currently uses stored data
    //     // try {
    //     //     swatchInfo.destination = Folder(app.activeDocument.fullName.parent).fsName; // destination folder
    //     //     var tmp = app.activeDocument.fullName.name;
    //     //     swatchInfo.fileNamePrefix = decodeURI(tmp.substring(0, tmp.indexOf("."))); // filename body part
    //     // } catch (someError) {
    //     //     swatchInfo.destination = new String("");
    //     //     swatchInfo.fileNamePrefix = app.activeDocument.name; // filename body part
    //     // }
    //     if (artboardAvail) swatchInfo.artboardShow = true;
    //     if (!artboardAvail) swatchInfo.artboardShow = false;
    //     if (artboardAvail) swatchInfo.inclArtboardName = true;
    //     if (!artboardAvail) swatchInfo.inclArtboardName = false;
    // } else {
    //Currently uses stored data
    // }
    // Load data from JSON
    
    if (jsonData){
        swatchInfo.hexChkb = jsonData.hexChkb;
        swatchInfo.rgbChkb = jsonData.rgbChkb;
        swatchInfo.cmykChkb = jsonData.cmykChkb;
        swatchInfo.labChkb = jsonData.labChkb;
        swatchInfo.grayChkb = jsonData.grayChkb;
        swatchInfo.colorSpaces = jsonData.colorSpaces;
        swatchInfo.nameColor = jsonData.nameColor;
        swatchInfo.colorSeparator = jsonData.colorSeparator; // Character used to separate the colours eg "|" output = R: XXX|G: XXX|B: XXX
        swatchInfo.joinHex = jsonData.joinHex; // Character used to separate the colours eg "|" output = R: XXX|G: XXX|B: XXX
        swatchInfo.addHash = jsonData.addHash; // Character used to separate the colours eg "|" output = R: XXX|G: XXX|B: XXX
        swatchInfo.splitColorComponents = jsonData.splitColorComponents;
        swatchInfo.textSize = jsonData.textSize; // output text size value in points
    } else {
        swatchInfo.hexChkb = false;
        swatchInfo.rgbChkb = false;
        swatchInfo.cmykChkb = false;
        swatchInfo.labChkb = false;
        swatchInfo.grayChkb = false;
        swatchInfo.colorSpaces = [swatchInfo.hexChkb, swatchInfo.rgbChkb, swatchInfo.cmykChkb, swatchInfo.labChkb, swatchInfo.grayChkb];
        swatchInfo.nameColor = true;
        swatchInfo.colorSeparator = " "; // Character used to separate the colours eg "|" output = R: XXX|G: XXX|B: XXX
        swatchInfo.joinHex = false;
        swatchInfo.addHash = false;
        swatchInfo.splitColorComponents = false;
        swatchInfo.textSize = 10; // output text size value in points
    }
}


var swatchInfo = new Object();
function getSwatchInfo() {
    // alert(addSwatchGroup(doc))
    if (app.documents.length <= 0) {
        alert("No active document");
        // Dialog mdoe doesnt work in Illustrator
        // if (DialogModes.NO != app.playbackDisplayDialogs) {
        // }
        return "cancel"; // quit, returning "cancel" (dont localize) makes the actions palette not record our script
    } else if (swatches.length==0){
        alert("No swatches selected");
        return "cancel"; // quit, 
    }
    // Check if active layer is visible and or unlocked
    if (addSwatchGroup(doc)){
            // pass silent
        } else {
            alert("Please make sure active layer is visible and unlocked")
            return "cancel"
    }  
    try {
        if (swatches[0].name=="[None]" || swatches[1].name=="[Registration]"){
            alert("This swatch can not be used");
            return "cancel"; // quit, 
        }
    } catch(e){
        // pass silent
    }
    // load JSON stored data if exists
    jsonData = loadJSON(swatchInfo)
    initSwatchInfo(swatchInfo, jsonData);
    if (cancelBtnID == showDialog(swatchInfo)) {
        return "cancel"; // quit, returning "cancel" (dont localize) makes the actions palette not record our script
    } else {
    // if (DialogModes.ALL == app.playbackDisplayDialogs) {
    // }
    // alert(swatchInfo)

        main(swatchInfo);

        saveToJSON(swatchInfo);
    }
    
}

getSwatchInfo()

function saveToJSON(swatchInfo){
    hexChkb =swatchInfo.hexChkb;
    rgbChkb =swatchInfo.rgbChkb;
    cmykChkb =swatchInfo.cmykChkb;
    labChkb =swatchInfo.labChkb;
    grayChkb =swatchInfo.grayChkb;
    colorSpaces =swatchInfo.colorSpaces;
    nameColor =swatchInfo.nameColor;
    colorSeparator =swatchInfo.colorSeparator;
    joinHex =swatchInfo.joinHex;
    addHash =swatchInfo.addHash;
    splitColorComponents =swatchInfo.splitColorComponents;
    textSize =swatchInfo.textSize;
    var swatchLegenda = {
        hexChkb : hexChkb,
        rgbChkb : rgbChkb,
        cmykChkb : cmykChkb,
        labChkb : labChkb,
        grayChkb : grayChkb,
        colorSpaces : [hexChkb, rgbChkb, cmykChkb, labChkb, grayChkb],
        nameColor : nameColor,
        colorSeparator : colorSeparator,
        joinHex : joinHex,
        addHash : addHash,
        splitColorComponents : splitColorComponents,
        textSize : textSize,
    };

    // var descObject = descriptorInfo.getProperties( desc, descFlags );
    var jsonString = JSON.stringify(swatchLegenda);
    var pathFile = File($.fileName).path;
    var f = File(pathFile+"/swatchLegend.json");
    f.open('w'); // w for 'write'
    f.write(jsonString);
    f.close();
}


function loadJSON(){
    // var jsonString = JSON.stringify(swatchLegenda);
    // Document path
    var pathFile = File($.fileName).path;

    // Scriptpath
    // var pathFile = new File($.fileName);
    // var textFile = new File(script.path);
    // alert(File($.fileName));
    // alert(File($.fileName).fsName);
    // alert(File($.fileName).path);
    var f = File(pathFile+"/swatchLegend.json");
    if (f.exists){
        f.open('r'); // r for read
        var jsonData = f.read();
        f.close();
        return JSON.parse(jsonData)
    } else {
        return false
    }
    // textSize =swatchInfo.textSize;
    // var swatchLegenda = {
    //     hexChkb : hexChkb,
    //     rgbChkb : rgbChkb,
    //     cmykChkb : cmykChkb,
    //     labChkb : labChkb,
    //     grayChkb : grayChkb,
    //     colorSpaces : [hexChkb, rgbChkb, cmykChkb, labChkb, grayChkb],
    //     colorSeparator : colorSeparator,
    //     splitColorComponents : splitColorComponents,
    //     textSize : textSize,
    // };

}
/*

var prefs = {}

          prefs.txtbox = "something"

          prefs.btnsave = "something"

          prefs.btnretrive = "something"

save object to file:

var file = File(directory);

     file.open('w')

     file.write(prefs.toSource())

     file.close()

open saved object:

    file.open("r")

    prefs = eval(file.read())

    file.close();

*/


//////////////////////////////////////////////////////////////
//
// WIP get colors from selection

// var item = "";
// for (var i = 0; i < doc.selection.length; i++) {
//     var item = app.activeDocument.selection[i];
// 	getBasicColorsFromItem(item);
// }

/**
* Source: https://community.adobe.com/t5/illustrator-discussions/get-spot-colors-from-selected-object-group-objects/m-p/13356189#M344245
* Returns array of swatches or colors
* found in fill or stroke of page item.
* @author m1b
* @version 2022-10-11
* @param {PageItem} item - an Illustrator page item.
* @returns {Object} -  {fillColors: Array<Color>, strokeColors: Array<Color>}
*/
function getBasicColorsFromItem(item) {
    if (item == undefined)
        throw Error('getItemColor: No item supplied.');
    var noColor = "[NoColor]",
        colorables = [],
        foundColors = {
            fillColors: [],
            strokeColors: []
        };
    // collect all the colorables
    if (item.constructor.name == 'PathItem') {
        colorables.push(item);
		getPMSColor(item, item);
    } else if (item.constructor.name == 'CompoundPathItem' && item.pathItems) {
        colorables.push(item.pathItems[0]);
		// alert("CompoundPathItem")
		getPMSColor(item.pathItems[0], item.pathItems[0]);
    } else if (item.constructor.name == 'TextFrame' && item.textRanges) {
        for (var i = item.textRanges.length - 1; i >= 0; i--)
            colorables.push({
                fillColor: item.textRanges[i].characterAttributes.fillColor,
                strokeColor: item.textRanges[i].characterAttributes.strokeColor
            });
    }
    if (colorables.length > 0)
        for (var i = 0; i < colorables.length; i++) {
            if (
                colorables[i].hasOwnProperty('fillColor')
                && colorables[i].fillColor != noColor
                && (
                    !colorables[i].hasOwnProperty('filled')
                    || colorables[i].filled == true
                )
                && colorables[i].fillColor != undefined
            )
                foundColors.fillColors.push(colorables[i].fillColor);
            if (
                colorables[i].hasOwnProperty('strokeColor')
                && colorables[i].strokeColor != noColor
                && (
                    colorables[i].constructor.name == 'CharacterAttributes'
                    || colorables[i].stroked == true
                )
                && colorables[i].strokeColor != undefined
            )
                foundColors.strokeColors.push(colorables[i].strokeColor);
        }
    else if (item.constructor.name == 'GroupItem') {
        // add colors from grouped items
        for (var i = 0; i < item.pageItems.length; i++) {
			getBasicColorsFromItem(item.pageItems[i]);
        }
    }
};

//////////////////////////////////////////////////////////////

function renderLegends(swatchInfo){
    swatchInfo = swatchInfo;
    for (var c = 0, len = swatches.length; c < len; c++) {
        var swatchGroup = doc.groupItems.add();
        swatchGroup.name = swatches[c].name;
        x = (w + h_pad) * ((c) % cols);
        y = (h + v_pad) * (Math.round(((c+2) + .03) / cols)) * -1;
        rectRef = doc.pathItems.rectangle(y, x, w, h);
        swatchColor = swatches[c].color;
        rectRef.fillColor = swatchColor;
        textRectRef = doc.pathItems.rectangle(y - t_v_pad, x + t_h_pad, w - (2 * t_h_pad), h - (2 * t_v_pad));
        textRef = doc.textFrames.areaText(textRectRef);
        textRef.contents = swatches[c].name + "\r" + getColorValues(swatchColor);
        textRef.textRange.fillColor = is_dark(swatchColor) ? white : black;
        textRef.textRange.size = swatchInfo.textSize;
        rectRef.move(swatchGroup, ElementPlacement.PLACEATBEGINNING);
        textRef.move(swatchGroup, ElementPlacement.PLACEATBEGINNING);
        swatchGroup.move(newGroup, ElementPlacement.PLACEATEND);
    }
}

// Fixes for missing leading HEX zero
// https://stackoverflow.com/questions/17204335/convert-decimal-to-hex-missing-padded-0
function d2h(d) {
    var s = (+d).toString(16);
    if(s.length < 2) {
        s = '0' + s;
    }
    return s;
}