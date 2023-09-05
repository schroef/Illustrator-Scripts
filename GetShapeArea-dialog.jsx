// Dialog designed using ScriptUI website
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":5,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"getShapeArea","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Get Shape Area","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"brnDialog","preferredSize":[250,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-4":{"id":4,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"btnCancel","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"btnOk","text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"pnlSettings","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Settings","preferredSize":[250,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-7":{"id":7,"type":"Group","parentId":6,"style":{"enabled":true,"varName":"grpSingleUnit","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"Group","parentId":6,"style":{"enabled":true,"varName":"grpDoubleUnit","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-9":{"id":9,"type":"Divider","parentId":6,"style":{"enabled":false,"varName":"dvdOne"}},"item-10":{"id":10,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"txtUnit","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Unit\n","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":"ddSingleUnit","text":"DropDownList","listItems":"cm, mm, in, pt","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-12":{"id":12,"type":"Checkbox","parentId":8,"style":{"enabled":true,"varName":"cbDoubleUnits","text":"Double Units","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":8,"style":{"enabled":true,"varName":"grpDoubleUnits","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-14":{"id":14,"type":"Group","parentId":13,"style":{"enabled":true,"varName":"grpDoubleUnitsOne","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-15":{"id":15,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":"txtDoubleUnitsOne","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Unit\n","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"DropDownList","parentId":14,"style":{"enabled":true,"varName":"ddDoubleUnitsOne","text":"DropDownList","listItems":"cm, mm, in, pt","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":13,"style":{"enabled":true,"varName":"grpDoubleUnitsTwo","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":"txtDoubleUnitsTwo","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Unit\n","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-19":{"id":19,"type":"DropDownList","parentId":17,"style":{"enabled":true,"varName":"ddDoubleUnitsTwo","text":"DropDownList","listItems":"cm, mm, in, pt","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-20":{"id":20,"type":"StaticText","parentId":13,"style":{"enabled":true,"varName":"txtDivider","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"/","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"Divider","parentId":6,"style":{"enabled":false,"varName":"dvdTwo"}},"item-22":{"id":22,"type":"Checkbox","parentId":6,"style":{"enabled":true,"varName":"cbShapeArea","text":"Area all shapes","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,6,7,10,11,9,8,12,13,14,15,16,20,17,18,19,21,22,3,4,5],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/

////////////////////////////////////////////////////////////

// TODO
/*
    get cut out shapes working. Look at if item is pluginItem or Path Direction
    Path direction can tell oif shape if plus or pminus

    - Fix issue when settings are stored for CMYK and then next document is RGB
*/
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//
// Initial code by Bryan Buchanan
// https://gist.github.com/bryanbuchanan/11387501
//
// Recursive functions by Aliijay
//
// Dialog Window and additional measurements Rombout Versluijs
//
// v0.1.5
// 2023-09-05
//
// Added
// - Foot to scale
// - Custom real world square unit
//
// v0.1.4
// 2023-09-05
//
// Added
// - custom scale factor
// 
// - Show Real Area per separate item
// v0.1.3
// 2023-07-27
//
// Added
// - Show Real Area per separate item
// 
// v0.1.2
// 2023-07-27
//
// Added
// - Scale option > outputs real world value when setting scale item
//
// v0.1.1
// 2023-07-27
//
// Fixed
// - Errors when loading JSON file undefined items > fixes new file reading old JSON data files, replaces it with default setting
// - Error "storedPrintColor is undefined" in CMYK document
//
// v0.1.1
// 2023-07-26
//
// Added
// - Added option to set text color label
//
// v0.1.0
// 2023-07-25
//
// Added
// - Option to add the data in a text frame above the selection
//
// v0.0.9
// 2023-07-25
//
// Added
// - Check on multi-selection if object is pluginItem
// 
// v0.0.8
// 2023-07-25
// 
// Added
// - function to check pluginItems
// - function to check compoundShapeItems with intersecting parts
// 
// v0.0.7
// 2023-07-20
// 
// Added
// - Store last settings in json
// 
// v0.0.6
// 13-07-2023
// 
// Added
// - Meters
//
// v0.0.5
// 28-05-2021
//
// check
// -Check compound of more then 1 or 2 shapes
//
// v0.0.4
// 12-02-2021
//
// Added
// - Sub items + area per sub item
//
// v0.0.3
// 12-02-2021
//
// Added
// - More decimals
//
// v0.0.2
// 12-02-2021
//
// Added
// - Shape count
//
// Changed
// - Order so total area is title of alert window 
// 
// v0.0.1
// 12-02-2021
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
//
// Save this file with a jsx extension and place in your
// Illustrator/Presets/en_US/Scripts folder. You can then
// access it from the File > Scripts menu
//
////////////////////////////////////////////////////////////


locGetShapeAreaAlertName = {
    en: "No objects selected",
    fr: "XXXX",
    nl: "Geen objecten geselecteerd"
};

var alertNameStr = localize(locGetShapeAreaAlertName);
// ok and cancel button
var runButtonID = 1;
var cancelButtonID = 2;

var exportInfo = new Object();

if (activeDocument.documentColorSpace == "DocumentColorSpace.RGB"){
    var space = "RGB";
} else {
    var space = "CMYK";
}
var pickedColor = undefined;

function getDialog(exportInfo) {
    // alert(exportInfo)
    try {
        // load JSON stored data if exists
        jsonData = loadJSON();
        initExportInfo(exportInfo, jsonData);
        if (cancelButtonID == settingDialog(exportInfo)) {
            return "cancel"; // quit, returning "cancel" (dont localize) makes the actions palette not record our script
        }
        if (app.activeDocument.selection[0].area) {
            // Individual Items
            var objects = app.activeDocument.selection;
        } else if (app.activeDocument.selection[0].pathItems) {
            // Group/Compound Shape
            var objects = app.activeDocument.selection[0].pathItems;
        // } else if(!app.activeDocument.selection[0].pathItems) {
        } else {
            var objs = app.activeDocument.selection;
            var pos = app.activeDocument.selection[0].position;
            // alert(objs[0].typename)
            if(objs[0].typename=="PluginItem"){
                // alert('PluginItem\'s cant be do calculate by script. This script duplicates the item and then does another pass. \n\nYou can double check the result at the end by axpanding the selected object and run the script again. The result should be the same.');
                // alert(pos)
                expandPluginItem(objs[0], pos);
                saveToJSON(exportInfo);
                return
            }
            // alert("objs.length "+objs.length)
            alert('Please select a path or group.');
            return
        }
        
        getShapeArea(exportInfo);
        saveToJSON(exportInfo);
        // app.playbackDisplayDialogs = DialogModes.ALL;

    } catch (e) {
        // if (DialogModes.NO != app.playbackDisplayDialogs) {
            alert(e);
        // }
        return "cancel"; // quit, returning "cancel" (dont localize) makes the actions palette not record our script
    }
}


///////////////////////////////////////////////////////////////////////////////
// Function: expandPluginItem
// Usage: duplciaet and expand plugin item
// Input: select object
// Return: a new object tmp obj with path or compoundPathItem
///////////////////////////////////////////////////////////////////////////////
function expandPluginItem(obj, pos){
    // var dup = obj;
    // dup.duplicate(); //Keeps both selected and causes both object to be exmapnde
    // alert(obj.position)
    // var parentObj = app.activeDocument.selection[0];
    // var pos = obj.position;
    app.executeMenuCommand("copy");
    obj.selected = false;
    // obj.hidden = true;
    app.executeMenuCommand("paste");
    var dup = app.activeDocument.selection[0];//[0];
    // alert(obj.position)
    // alert(pos)
    dup.position = pos; //[pos[0]+600, pos[1]];//[100,100];//[3839.68698442494,-913.314050539961];//[200,200];//    
    // alert(dup.typename)
    // alert(dup.position+"\n"+pos)
    // // app.executeMenuCommand("Expand3"); // show menu, we dont want that
    app.executeMenuCommand("expandStyle");
    app.executeMenuCommand("Expand3");
    // if (dup.typename=="CompoundPathItem"){
    //     // app.executeMenuCommand("Expand3");
    //     app.executeMenuCommand("compoundPath");
    //     app.executeMenuCommand("expandStyle");
    // }
    getShapeArea(exportInfo, dup, obj, pos);
}

///////////////////////////////////////////////////////////////////////////////
// Function: Object.keys()
// Name: Polyfill
// Source: David Barranca
// Source: https://community.adobe.com/t5/photoshop-ecosystem-discussions/parsing-json-in-jsx-referenceerror-object-keys-is-not-a-function/m-p/8610670#M281772
///////////////////////////////////////////////////////////////////////////////
if (!Object.keys) {
  Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }
      var result = [], prop, i;
      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }
      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums)) {
            result.push(dontEnums);
          }
        }
      }
      return result;
    };
  }());
}
///////////////////////////////////////////////////////////////////////////////
// Function: initSwatchInfo
// Usage: create our default parameters
// Input: a new Object
// Return: a new object with params set to default
// Source: Export LayerComps photoshop
///////////////////////////////////////////////////////////////////////////////
// function initswatchInfo(exportInfo, isSelection, artboardAvail, isOverrideSticky) {
function initExportInfo(exportInfo,jsonData) {
    // Load data from JSON

    // Check if all data is in JSON
    // alert(Object.keys(jsonData).length)
    // alert(Object.keys(exportInfo).length)
    
    // Load defaults and set UNDFINED items to defaults
    // Use try so we can fallback to default without errors
    // This method catches a single undefined item and replaces it by default setting, otherwise it uses the save JSON data item
    //     Template
    //     exportInfo.unitSingle = jsonData.unitSingle;
    //     exportInfo.unitSingleIndex = jsonData.unitSingleIndex;
    //     exportInfo.singleUnit = jsonData.singleUnit;
    //     exportInfo.doubleUnit = jsonData.doubleUnit;
    //     exportInfo.allShapes = jsonData.allShapes;
    //     exportInfo.textLabel = jsonData.textLabel;
    //     exportInfo.textLabelColor = jsonData.textLabelColor;
    //     exportInfo.useRealArea = jsonData.useRealArea;
    //     exportInfo.realAreaScale = jsonData.realAreaScale;
    //     exportInfo.realAreaValue = jsonData.realAreaValue;
    //     exportInfo.decimals = jsonData.decimals;
    //     exportInfo.countShapes = jsonData.countShapes;
    //     exportInfo.intersectingPaths = jsonData.intersectingPaths;
    //     exportInfo.unitDoubleOne = jsonData.unitDoubleOne;
    //     exportInfo.unitDoubleOneIndex = jsonData.unitDoubleOneIndex;
    //     exportInfo.unitDoubleTwo = jsonData.unitDoubleTwo;
    //     exportInfo.unitDoubleTwoUndex = jsonData.unitDoubleTwoIndex;
    
    // dataExportInfo = ["",0,true,false,true,true,"",false,0,"1:10",1,false,false,"",0,"",0];
    // dataJson = ["unitSingle","unitSingleIndex","singleUnit","doubleUnit","allShapes","textLabel","textLabelColor","useRealArea","realAreaScale","realAreaValue","decimals","countShapes","intersectingPaths","unitDoubleOne","unitDoubleOneIndex","unitDoubleTwo","unitDoubleTwoIndex"]

    
    //     Template
    //     unitSingle = exportInfo.unitSingle;
    //     unitSingleIndex = exportInfo.unitSingleIndex;
    //     singleUnit = exportInfo.singleUnit;
    //     doubleUnit = exportInfo.doubleUnit;
    //     allShapes = exportInfo.allShapes;
    //     intersectingPaths = exportInfo.intersectingPaths;
    //     textLabel = exportInfo.textLabel;
    //     textLabelColor = exportInfo.textLabelColor; 
    //     useRealArea = exportInfo.useRealArea;
    //     realAreaScale = exportInfo.realAreaScale;
    //     realAreaValue = exportInfo.realAreaValue;
    //     realAreaUnitScale = exportInfo.realAreaUnitScale;
    //     realAreaUnit = exportInfo.realAreaUnit;
    //     decimals = exportInfo.decimals;
    //     countShapes = exportInfo.countShapes;
    //     unitDoubleOne = exportInfo.unitDoubleOne;
    //     unitDoubleOneIndex = exportInfo.unitDoubleOneIndex;
    //     unitDoubleTwo = exportInfo.unitDoubleTwo;
    //     unitDoubleTwoIndex = exportInfo.unitDoubleTwoIndex;
    
    dataExportInfo = ["",0,true,false,true,true,"",false,0,"1:10",0,"m",1,false,false,"",0,"",0, false];
    dataJson = ["unitSingle","unitSingleIndex","singleUnit","doubleUnit","allShapes","textLabel","textLabelColor","useRealArea","realAreaScale","realAreaValue","realAreaUnitScale","realAreaUnit","decimals","countShapes","unitDoubleOne","unitDoubleOneIndex","unitDoubleTwo","unitDoubleTwoIndex","intersectingPaths"]
    // alert(dataJson.length)
    for (i=0; i < dataJson.length; i++){
        // alert(jsonData[dataJson[i]])
        if ( jsonData[dataJson[i]]=== undefined) {
            // alert(dataJson[i]+" "+dataExportInfo[i])
            exportInfo[dataJson[i]] = dataExportInfo[i];
        } else {
            exportInfo[dataJson[i]] = jsonData[dataJson[i]];
        }
        // set pickedColor because we normally set this by the color button
        if (space=='CMYK') {
            pickedColor = new CMYKColor();
            if (jsonData.textLabelColor){
                color = jsonData.textLabelColor.split('-');
                exportInfo.textLabelColor = jsonData.textLabelColor;
            }
            if (jsonData.textLabelColor ===undefined){
                color = [86,4,0,0];
                exportInfo.textLabelColor= "86-4-0-0";
            }
            pickedColor.cyan = color[0];
            pickedColor.magenta = color[1];
            pickedColor.yellow = color[2];
            pickedColor.black = color[3];
        }
        if (space=='RGB') {
            pickedColor = new RGBColor();
            if (jsonData.textLabelColor){
                color = jsonData.textLabelColor.split('-');
                exportInfo.textLabelColor = jsonData.textLabelColor;
            }
            if (jsonData.textLabelColor===undefined){
                color = [54,174,234];
                exportInfo.textLabelColor = "54-174-234";
            }
            pickedColor.red =  color[0];
            pickedColor.green= color[1];
            pickedColor.blue =  color[2];
        } 
    }

    // Load data from JSON
    // if (jsonData){
    //     exportInfo.unitSingle = jsonData.unitSingle;
    //     exportInfo.unitSingleIndex = jsonData.unitSingleIndex;
    //     exportInfo.singleUnit = jsonData.singleUnit;
    //     exportInfo.doubleUnit = jsonData.doubleUnit;
    //     exportInfo.allShapes = jsonData.allShapes;
    //     exportInfo.textLabel = jsonData.textLabel;
    //     exportInfo.textLabelColor = jsonData.textLabelColor;
    //     exportInfo.useRealArea = jsonData.useRealArea;
    //     exportInfo.realAreaScale = jsonData.realAreaScale;
    //     exportInfo.realAreaValue = jsonData.realAreaValue;
    //     exportInfo.decimals = jsonData.decimals;
    //     exportInfo.countShapes = jsonData.countShapes;
    //     exportInfo.intersectingPaths = jsonData.intersectingPaths;
    //     exportInfo.unitDoubleOne = jsonData.unitDoubleOne;
    //     exportInfo.unitDoubleOneIndex = jsonData.unitDoubleOneIndex;
    //     exportInfo.unitDoubleTwo = jsonData.unitDoubleTwo;
    //     exportInfo.unitDoubleTwoUndex = jsonData.unitDoubleTwoIndex;
    //     // set pickedColor because we normally set this by the color button
    //     if (space=='CMYK') {
    //         if (jsonData.textLabelColor){
    //             pickedColor = new CMYKColor();
    //             color = jsonData.textLabelColor.split('-');
    //             pickedColor.cyan = color[0];
    //             pickedColor.magenta = color[1];
    //             pickedColor.yellow = color[2];
    //             pickedColor.black = color[3];
    //             exportInfo.textLabelColor= jsonData.textLabelColor;
    //         }  
    //     }
    //     if (space=='RGB') {
    //         if (jsonData.textLabelColor){
    //             pickedColor = new RGBColor();
    //             color = jsonData.textLabelColor.split('-');
    //             pickedColor.red =  color[0];
    //             pickedColor.green= color[1];
    //             pickedColor.blue =  color[2];
    //             exportInfo.textLabelColor = jsonData.textLabelColor;
    //         }
    //     } 
    // } else {
    //     exportInfo.unitSingle = "";
    //     exportInfo.unitSingleIndex = 0;
    //     exportInfo.singleUnit = true;
    //     exportInfo.doubleUnit = false;
    //     exportInfo.allShapes = true;
    //     exportInfo.textLabel = true;
    //     exportInfo.textLabelColor = space == 'RGB' ? "54-174-234" : "86-4-0-0";
    //     exportInfo.useRealArea = jsonData.useRealArea;
    //     exportInfo.realAreaScale = jsonData.realAreaScale;
    //     exportInfo.realAreaValue = jsonData.realAreaValue;
    //     exportInfo.decimals = 1;
    //     exportInfo.countShapes = false;
    //     exportInfo.intersectingPaths = false;
    //     exportInfo.unitDoubleOne = "";
    //     exportInfo.unitDoubleOneIndex = 0;
    //     exportInfo.unitDoubleTwo = "";
    //     exportInfo.unitDoubleTwoIndex = 0;

    // }
}


function settingDialog(exportInfo) {

    // GETSHAPEAREA
    // ============
    var dlgGetShapeArea = new Window("dialog"); 
        dlgGetShapeArea.text = "Get Shape Area v0.1.5"; 
        dlgGetShapeArea.orientation = "column"; 
        dlgGetShapeArea.alignChildren = ["center","top"]; 
        dlgGetShapeArea.spacing = 10; 
        dlgGetShapeArea.margins = 16; 

    // PNLSETTINGS
    // ===========
    var pnlSettings = dlgGetShapeArea.add("panel", undefined, undefined, {name: "pnlSettings"}); 
        pnlSettings.text = "Settings"; 
        pnlSettings.preferredSize.width = 200; 
        pnlSettings.orientation = "column"; 
        pnlSettings.alignChildren = ["left","top"]; 
        pnlSettings.spacing = 10; 
        pnlSettings.margins = 10; 

    // GRPSINGLEUNIT
    // =============
    var grpSingleUnit = pnlSettings.add("group", undefined, {name: "grpSingleUnit"}); 
        grpSingleUnit.orientation = "row"; 
        grpSingleUnit.alignChildren = ["left","center"]; 
        grpSingleUnit.spacing = 10; 
        grpSingleUnit.margins = 0; 

    var txtUnit = grpSingleUnit.add("statictext", undefined, undefined, {name: "txtUnit"}); 
        txtUnit.text = "Unit"; 

    var ddSingleUnit_array = ["m","cm","mm","inch","foot","pt","pc","px"]; 
    var ddSingleUnit = grpSingleUnit.add("dropdownlist", undefined, undefined, {name: "ddSingleUnit", items: ddSingleUnit_array}); 
        ddSingleUnit.selection = exportInfo.unitSingleIndex; 

    var cbIntersectingPaths = pnlSettings.add("checkbox", undefined, undefined, {name: "cbIntersectingPaths"}); 
        cbIntersectingPaths.text = "Intersecting Paths"; 
        cbIntersectingPaths.value = exportInfo.intersectingPaths; 
        cbIntersectingPaths.helpTip = "Be careful with this option! Checking this value when paths do not overlap, the script will keep running coninously and never stop. You will need to Force Quit illustrator"; 
    

    // PNLSETTINGS
    // ===========
    var dvdOne = pnlSettings.add("panel", undefined, undefined, {name: "dvdOne"}); 
        dvdOne.enabled = false; 
        dvdOne.alignment = "fill"; 


    var cmykBlackGrp = pnlSettings.add("group", undefined, {name: "cmykBlackGrp"}); 
        cmykBlackGrp.orientation = "row"; 
        cmykBlackGrp.alignChildren = ["left","center"]; 

    var addTextLabelCB = cmykBlackGrp.add("checkbox", undefined, undefined, {name: "addTextLabelCB"}); 
        addTextLabelCB.helpTip = "Add text label with Path Area value."; 
        addTextLabelCB.text = "Add Text Label"; 
        addTextLabelCB.value = exportInfo.textLabel; 
        
        cmykBlackGrp.bgSwatchGrp = cmykBlackGrp.add('group', undefined);//[0, 0, 20, 20])
        cmykBlackGrp.bgSwatchGrp.enabled = Boolean(exportInfo.textLabel);
        cmykBlackGrp.bgSwatchGrp.margins = 0;
        cmykBlackGrp.bgSwatchGrp.spacing = 0;
        
    var bgSwatchButtonPrint = cmykBlackGrp.bgSwatchGrp.add('button');
        bgSwatchButtonPrint.helpTip = "Set color of text label"; 
        // bgSwatchButtonPrint.bg = true;
        bgSwatchButtonPrint.preferredSize = [25,20];
        bgSwatchButtonPrint.onDraw = function () {}; // don't draw the button; it's just there to make the swatch clickable
        
    if (space == "CMYK"){
        var storedColor = new CMYKColor();
            digitalColor = exportInfo.textLabelColor.split('-');
            storedColor.cyan = digitalColor[0];
            storedColor.magenta = digitalColor[1];
            storedColor.yellow = digitalColor[2];
            storedColor.black = digitalColor[3];

        var appColorPrint = CMYK2RGB(storedColor);
        cmykBlackGrp.bgSwatchGrp.graphics.backgroundColor = cmykBlackGrp.graphics.newBrush(cmykBlackGrp.graphics.BrushType.SOLID_COLOR, [appColorPrint.r / 255, appColorPrint.g / 255, appColorPrint.b / 255, 1]);
    }
    if (space == "RGB"){
        var storedColor = new RGBColor();
            digitalColor = exportInfo.textLabelColor.split('-');
            storedColor.red = digitalColor[0];
            storedColor.green = digitalColor[1];
            storedColor.blue = digitalColor[2];

        var appColorDigital = storedColor;
        cmykBlackGrp.bgSwatchGrp.graphics.backgroundColor = cmykBlackGrp.graphics.newBrush(cmykBlackGrp.graphics.BrushType.SOLID_COLOR, [appColorDigital.red / 255, appColorDigital.green / 255, appColorDigital.blue / 255, 1]);
    }

        
    // Color Picker CMYK black
    var swatchButtonPrint = cmykBlackGrp.bgSwatchGrp.add('button');
        swatchButtonPrint.preferredSize = [25,20];
    // var swatchButtonPrint = pnlSettings.add('button');

    // var pickedColor = "";
    swatchButtonPrint.onClick = function () {
        pickedColor = app.showColorPicker(storedColor);
        if (pickedColor) {
            // app.activeDocument.defaultFillColor = pickedColor;
            if (this.bg) {
                this.parent.parent.backgroundColor = pickedColor; //[pickedColor.hsb.hue, pickedColor.hsb.saturation, pickedColor.hsb.brightness]
            } else {
                this.parent.parent.nameColor = pickedColor;
            }
            var gfx = this.parent.graphics;
            if (space=="CMYK"){
                var hsbCol = CMYK2RGB(pickedColor)
                exportInfo.textLabelColor = pickedColor.cyan+"-"+pickedColor.magenta+"-"+pickedColor.yellow+"-"+pickedColor.black;
                gfx.backgroundColor = gfx.newBrush(gfx.BrushType.SOLID_COLOR, [hsbCol.r / 255, hsbCol.g / 255, hsbCol.b / 255,1]);
            }
            if (space=="RGB"){
                // var gfx = this.parent.graphics;
                var gfx = this.parent.graphics;
                exportInfo.textLabelColor = pickedColor.red+"-"+pickedColor.green+"-"+pickedColor.blue;
                gfx.backgroundColor = gfx.newBrush(gfx.BrushType.SOLID_COLOR, [pickedColor.red / 255, pickedColor.green / 255, pickedColor.blue / 255,1]);
            }
        }
    }
    swatchButtonPrint.onDraw = function () {}; // don't draw the button; it's just there to make the swatch clickable
    bgSwatchButtonPrint.onClick = swatchButtonPrint.onClick;
    
    addTextLabelCB.onClick = function() {
        cmykBlackGrp.bgSwatchGrp.enabled = addTextLabelCB.value;
        // dlgGetShapeArea.update();
        // cmykBlackGrp.bgSwatchGrp.update();
    }
    // GRPDOUBLEUNIT
    // =============
    var grpDoubleUnit = pnlSettings.add("group", undefined, {name: "grpDoubleUnit"}); 
        grpDoubleUnit.orientation = "column"; 
        grpDoubleUnit.alignChildren = ["left","center"]; 
        grpDoubleUnit.spacing = 10; 
        grpDoubleUnit.margins = 0; 
    
    // GRPDECIMALS
    // ==============
    var grpDecimals = grpDoubleUnit.add("group", undefined, {name: "grpDecimals"}); 
        grpDecimals.orientation = "row"; 
        grpDecimals.alignChildren = ["left","center"]; 
        grpDecimals.spacing = 10; 
        grpDecimals.margins = 0; 

    var txtDecimals = grpDecimals.add("statictext", undefined, undefined, {name: "txtDecimals"}); 
        txtDecimals.text = "Decimals"; 

    var ddDecimals_array = ["0","1","2","3","4","5","6"]; 
    var ddDecimals = grpDecimals.add("dropdownlist", undefined, undefined, {name: "ddDecimals", items: ddDecimals_array}); 
        ddDecimals.items[exportInfo.decimals].selected = true; 
        // ddDecimals.items[exportInfo.decimals].selected = true; 
    
    // GRPREALAREA
    // ==============
    var grpRealAreaMain = grpDoubleUnit.add("group", undefined, {name: "grpRealAreaMain"}); 
        grpRealAreaMain.orientation = "column"; 
        grpRealAreaMain.alignChildren = ["left","center"]; 
        grpRealAreaMain.spacing = 5; 
        grpRealAreaMain.margins = 0; 

    var grpRealArea = grpRealAreaMain.add("group", undefined, {name: "grpRealArea"}); 
        grpRealArea.orientation = "row"; 
        grpRealArea.alignChildren = ["left","center"]; 
        grpRealArea.spacing = 10; 
        grpRealArea.margins = 0; 

    var cbRealArea = grpRealArea.add("checkbox", undefined, undefined, {name: "cbRealArea"}); 
        cbRealArea.text = "Real Area"; 
        cbRealArea.value = exportInfo.useRealArea; 
        cbRealArea.helpTip = "When working in scale, show the real world area value. Set by chosing using pre-defined scale."; 

    var ddRealAreaScale_array = ["Custom","1:2","1:5","1:10","1:12","1:24","1:25","1:50","1:100","1:150","1:200","1:500"]; 
    var ddRealAreaScale = grpRealArea.add("dropdownlist", undefined, undefined, {name: "ddRealAreaScale", items: ddRealAreaScale_array}); 
        ddRealAreaScale.items[exportInfo.realAreaScale].selected = true; 
        ddRealAreaScale.enabled = exportInfo.useRealArea; 
        // ddDecimals.items[exportInfo.decimals].selected = true; 

    var realAreaCustomScale = grpRealArea.add("edittext", undefined, undefined, {name: "ddRealAreaScale"}); 
        realAreaCustomScale.enabled = false;
        realAreaCustomScale.preferredSize.width = 50; 
        realAreaCustomScale.helpTip = "Input values devided by :. For example; 1:100";
        // realAreaCustomScale.enabled = exportInfo.useRealArea;

     var grpRealAreaRowTwo = grpRealAreaMain.add("group", undefined, {name: "grpRealAreaRowTwo"}); 
        grpRealAreaRowTwo.orientation = "row"; 
        grpRealAreaRowTwo.alignChildren = ["left","center"]; 
        grpRealAreaRowTwo.spacing = 10; 
        grpRealAreaRowTwo.margins = 0; 

    var spacerOne = grpRealAreaRowTwo.add("statictext", undefined, undefined, {name: "spacerOne"}); 
        spacerOne.text = ""; 
        spacerOne.preferredSize.width = 75; 

    var ddRealAreaUnit_array = ["m","cm","mm","inch","foot","pt","pc","px"]; 
    var ddRealAreaUnit = grpRealAreaRowTwo.add("dropdownlist", undefined, undefined, {name: "ddRealAreaUnit", items: ddRealAreaUnit_array}); 
        ddRealAreaUnit.items[exportInfo.realAreaUnitScale].selected = true;
        ddRealAreaUnit.enabled = exportInfo.useRealArea;

    var cbShapeArea = grpDoubleUnit.add("checkbox", undefined, undefined, {name: "cbShapeArea"}); 
        cbShapeArea.text = "Show area each shape"; 
        cbShapeArea.value = exportInfo.allShapes; 

    var cbCountShapes = grpDoubleUnit.add("checkbox", undefined, undefined, {name: "cbCountShapes"}); 
        cbCountShapes.text = "Show total shapes"; 
        cbCountShapes.value = exportInfo.countShapes; 

    var cbDoubleUnits = grpDoubleUnit.add("checkbox", undefined, undefined, {name: "cbDoubleUnits"}); 
        cbDoubleUnits.text = "Double Units"; 
        cbDoubleUnits.value = exportInfo.doubleUnit; 

    // GRPDOUBLEUNITS
    // ==============
    var grpDoubleUnits = grpDoubleUnit.add("group", undefined, {name: "grpDoubleUnits"}); 
        grpDoubleUnits.orientation = "row"; 
        grpDoubleUnits.alignChildren = ["left","center"]; 
        grpDoubleUnits.spacing = 10; 
        grpDoubleUnits.margins = 0; 
        grpDoubleUnits.hide();

    // GRPDOUBLEUNITSONE
    // =================
    var grpDoubleUnitsOne = grpDoubleUnits.add("group", undefined, {name: "grpDoubleUnitsOne"}); 
        grpDoubleUnitsOne.orientation = "row"; 
        grpDoubleUnitsOne.alignChildren = ["left","center"]; 
        grpDoubleUnitsOne.spacing = 10; 
        grpDoubleUnitsOne.margins = 0; 

    var txtDoubleUnitsOne = grpDoubleUnitsOne.add("statictext", undefined, undefined, {name: "txtDoubleUnitsOne"}); 
        txtDoubleUnitsOne.text = "Units"; 

    var ddDoubleUnitsOne_array = ["m", "cm","mm","inch","foot","pt","pc","px"]; 
    var ddDoubleUnitsOne = grpDoubleUnitsOne.add("dropdownlist", undefined, undefined, {name: "ddDoubleUnitsOne", items: ddDoubleUnitsOne_array}); 
        ddDoubleUnitsOne.selection = exportInfo.unitDoubleOneIndex; 

    // GRPDOUBLEUNITS
    // ==============
    var txtDivider = grpDoubleUnits.add("statictext", undefined, undefined, {name: "txtDivider"}); 
        txtDivider.text = "/"; 

    // GRPDOUBLEUNITSTWO
    // =================
    var grpDoubleUnitsTwo = grpDoubleUnits.add("group", undefined, {name: "grpDoubleUnitsTwo"}); 
        grpDoubleUnitsTwo.orientation = "row"; 
        grpDoubleUnitsTwo.alignChildren = ["left","center"]; 
        grpDoubleUnitsTwo.spacing = 10; 
        grpDoubleUnitsTwo.margins = 0; 

    // var txtDoubleUnitsTwo = grpDoubleUnitsTwo.add("statictext", undefined, undefined, {name: "txtDoubleUnitsTwo"}); 
    //     txtDoubleUnitsTwo.text = "Unit"; 

    var ddDoubleUnitsTwo_array = ["m", "cm","mm","inch","foot","pt","pc","px"];  
    var ddDoubleUnitsTwo = grpDoubleUnitsTwo.add("dropdownlist", undefined, undefined, {name: "ddDoubleUnitsTwo", items: ddDoubleUnitsTwo_array}); 
        ddDoubleUnitsTwo.selection = exportInfo.unitDoubleTwoIndex; 

    // PNLSETTINGS
    // ===========
    // var dvdTwo = pnlSettings.add("panel", undefined, undefined, {name: "dvdTwo"}); 
    //     dvdTwo.enabled = false; 
    //     dvdTwo.alignment = "fill"; 

    // var cbShapeArea = pnlSettings.add("checkbox", undefined, undefined, {name: "cbShapeArea"}); 
    //     cbShapeArea.text = "Area all shapes"; 
    //     cbShapeArea.value = exportInfo.allShapes; 

    // BRNDIALOG
    // =========
    var brnDialog = dlgGetShapeArea.add("group", undefined, {name: "brnDialog"}); 
        // brnDialog.preferredSize.width = 100; 
        brnDialog.orientation = "row"; 
        brnDialog.alignChildren = ["right","center"]; 
        brnDialog.spacing = 10; 
        brnDialog.margins = 0; 

    var btnCancel = brnDialog.add("button", undefined, undefined, {name: "btnCancel"}); 
        btnCancel.text = "Cancel"; 

    var btnOk = brnDialog.add("button", undefined, undefined, {name: "btnOk"}); 
        btnOk.text = "OK"; 


    btnCancel.onClick = function() {
        dlgGetShapeArea.close(cancelButtonID);
    }

    // var ok = group1.add("button", undefined, undefined, {name: "ok"}); 
    //     ok.text = okBtnStr; 
    //     // ok.preferredSize.width = 80; 

    // var renameLayer = newLyrName.text;
    btnOk.onClick = function() {
        // check if the setting is properly
        // if (renameLayer.length == 0) {
        //     alert(strAlertRename); // +" "+ strAlertFailure);
        //     return;
        // }
        dlgGetShapeArea.close(runButtonID);
    }

    function checkDoubleUntis(){
        if (cbDoubleUnits.value) {
            grpDoubleUnits.show();
            grpSingleUnit.enabled = false;
        } else {
            grpDoubleUnits.hide();
            grpSingleUnit.enabled = true;
        }
    }
    checkDoubleUntis()
    // double units checkbox
    cbDoubleUnits.onClick = function() {
        checkDoubleUntis()
    }


    function checkUseRealWorld(){
        if (cbRealArea.value) {
            // ddRealAreaScale.show();
            ddRealAreaScale.enabled = true;
            ddRealAreaUnit.enabled = true;
        } else {
            // ddRealAreaScale.hide();
            ddRealAreaScale.enabled = false;
            ddRealAreaUnit.enabled = false;
        }
        checkCustomRealScale()
    }
    checkUseRealWorld()
    // Use RealArea checkbox
    cbRealArea.onClick =  function() {
        checkUseRealWorld()
    }
    cbRealArea.onRelease =  function() {
        checkUseRealWorld()
    }

    function checkCustomRealScale(){
        // alert(cbRealArea.value)
        if (ddRealAreaScale.selection.text == "Custom" && cbRealArea.value != false) {
            // ddRealAreaScale.show();
            // ddRealAreaScale.enabled = true;
            realAreaCustomScale.enabled = true;
            realAreaCustomScale.text = exportInfo.realAreaValue;
        } else {
            // ddRealAreaScale.hide();
            // ddRealAreaScale.enabled = false;
            realAreaCustomScale.enabled = false;
        }
    }
    checkCustomRealScale()
    // Use RealArea checkbox
    ddRealAreaScale.onChange = function() {
        // alert(ddRealAreaScale.selection.text)
        checkCustomRealScale()
    }


    // in case we double clicked the file
    // app.bringToFront();
    dlgGetShapeArea.center();
    
    var result = dlgGetShapeArea.show();

    if (cancelButtonID == result) {
        return result; // close to quit
    }

    // Get settings from Dialog
    exportInfo.unitSingle = ddSingleUnit.selection.text;
    exportInfo.unitSingleIndex = ddSingleUnit.selection.index;
    exportInfo.singleUnit = cbDoubleUnits.value ? false : true;
    exportInfo.doubleUnit = cbDoubleUnits.value;
    exportInfo.textLabel = addTextLabelCB.value;
    if (space=='CMYK'){
        if (pickedColor==undefined){
            pickedColor = new CMYKColor();
            pickedColor.cyan = 86;
            pickedColor.magenta = 4;
            pickedColor.yellow = 0;
            pickedColor.black = 0;
            exportInfo.textLabelColor= "86-4-0-0";
        }  
        if (pickedColor) exportInfo.textLabelColor = pickedColor.cyan+"-"+pickedColor.magenta+"-"+pickedColor.yellow+"-"+pickedColor.black;
    } 
    if (space=='RGB') {
        if (pickedColor==undefined){
            pickedColor = new RGBColor();
            pickedColor.red = 54;
            pickedColor.green=174;
            pickedColor.blue = 234;
            exportInfo.textLabelColor = "54-174-234";
        } 
        if (pickedColor) exportInfo.textLabelColor = pickedColor.red+"-"+pickedColor.green+"-"+pickedColor.blue;
    }
    exportInfo.useRealArea = cbRealArea.value; 
    exportInfo.realAreaScale = ddRealAreaScale.selection.index;
    if (exportInfo.realAreaValue == "Custom" || ddRealAreaScale.selection.text == "Custom") {
        exportInfo.realAreaValue = realAreaCustomScale.text;
    } else {
        exportInfo.realAreaValue = ddRealAreaScale.selection.text;
    }
    exportInfo.realAreaUnitScale = ddRealAreaUnit.selection.index; 
    exportInfo.realAreaUnit = ddRealAreaUnit.selection.text; 
    exportInfo.decimals = ddDecimals.selection.index; 
    exportInfo.allShapes = cbShapeArea.value;
    exportInfo.countShapes = cbCountShapes.value;
    exportInfo.unitDoubleOne = ddDoubleUnitsOne.selection.text;
    exportInfo.unitDoubleOneIndex = ddDoubleUnitsOne.selection.index;
    exportInfo.unitDoubleTwo = ddDoubleUnitsTwo.selection.text;
    exportInfo.unitDoubleTwoIndex = ddDoubleUnitsTwo.selection.index;
    exportInfo.intersectingPaths = cbIntersectingPaths.value;
    // alert(exportInfo.unitSingle)
    // alert(exportInfo.unitDoubleTwo)
    // alert(exportInfo.unitDoubleOne)

    return result;    
}


///////////////////////////////////////////////////////////////////////////////

// JSON
// Source: https://github.com/JavierAroche/descriptor-info/blob/master/example/helpers/JSON.jsx
/**
* JSON - from: https://github.com/douglascrockford/JSON-js
*/
if(typeof JSON!=='object'){JSON={};}(function(){'use strict';function f(n){return n<10?'0'+n:n;}function this_value(){return this.valueOf();}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());

///////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// LOAd & Save JSON data

// function getExportInfo() {
//     if (app.documents.length <= 0) {
//         alert("No active document");
//         // Dialog mdoe doesnt work in Illustrator
//         // if (DialogModes.NO != app.playbackDisplayDialogs) {
//         // }
//         return "cancel"; // quit, returning "cancel" (dont localize) makes the actions palette not record our script
//     } else if (app.activeDocument.selection.length==0){
//         alert("Nothing selected");
//         return "cancel"; // quit, 
//     } 
    
//     // load JSON stored data if exists
//     jsonData = loadJSON(exportInfo)
//     initSwatchInfo(exportInfo, jsonData);
//     if (cancelBtnID == showDialog(exportInfo)) {
//         return "cancel"; // quit, returning "cancel" (dont localize) makes the actions palette not record our script
//     } else {
//     // if (DialogModes.ALL == app.playbackDisplayDialogs) {
//     // }
//     // alert(exportInfo)
//         main(exportInfo);

//         saveToJSON(exportInfo);
//     }
    
// }

// getExportInfo()

function saveToJSON(exportInfo){
    unitSingle = exportInfo.unitSingle;
    unitSingleIndex = exportInfo.unitSingleIndex;
    singleUnit = exportInfo.singleUnit;
    doubleUnit = exportInfo.doubleUnit;
    allShapes = exportInfo.allShapes;
    intersectingPaths = exportInfo.intersectingPaths;
    textLabel = exportInfo.textLabel;
    textLabelColor = exportInfo.textLabelColor; 
    useRealArea = exportInfo.useRealArea;
    realAreaScale = exportInfo.realAreaScale;
    realAreaValue = exportInfo.realAreaValue;
    realAreaUnitScale = exportInfo.realAreaUnitScale;
    realAreaUnit = exportInfo.realAreaUnit;
    decimals = exportInfo.decimals;
    countShapes = exportInfo.countShapes;
    unitDoubleOne = exportInfo.unitDoubleOne;
    unitDoubleOneIndex = exportInfo.unitDoubleOneIndex;
    unitDoubleTwo = exportInfo.unitDoubleTwo;
    unitDoubleTwoIndex = exportInfo.unitDoubleTwoIndex;
    var saveData = {
        unitSingle : unitSingle,
        unitSingleIndex : unitSingleIndex,
        singleUnit : singleUnit,
        doubleUnit : doubleUnit,
        allShapes : allShapes,
        textLabel : textLabel,
        textLabelColor : textLabelColor,
        useRealArea : useRealArea,
        realAreaScale : realAreaScale,
        realAreaValue : realAreaValue,
        realAreaUnitScale : realAreaUnitScale,
        realAreaUnit : realAreaUnit,
        decimals : decimals,
        countShapes : countShapes,
        unitDoubleOne : unitDoubleOne,
        unitDoubleOneIndex : unitDoubleOneIndex,
        unitDoubleTwo : unitDoubleTwo,
        unitDoubleTwoIndex : unitDoubleTwoIndex,
        intersectingPaths : intersectingPaths,
    };

    // var descObject = descriptorInfo.getProperties( desc, descFlags );
    var jsonString = JSON.stringify(saveData);
    var pathFile = File($.fileName).path;
    var f = File(pathFile+"/getShapeArea-savedata.json");
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
    var f = File(pathFile+"/getShapeArea-savedata.json");
    if (f.exists){
        f.open('r'); // r for read
        var jsonData = f.read();
        f.close();
        return JSON.parse(jsonData)
    } else {
        return false
    }
}

////////////////////////////////////////////////////////////////

function subItems(obj){
    itemsObj = [];
    for (i in obj){
        itemsObj.push(i)
    }
    return itemsObj
}

/* Save this file with a jsx extension and place in your
Illustrator/Presets/en_US/Scripts folder. You can then
access it from the File > Scripts menu */
var decimalPlaces = Number;

function calculateArea(obj) {
	if (obj.typename == "PathItem") {
		return obj.area; // could be negative
	} else if (obj.typename == "CompoundPathItem") {
		var totalArea = 0;
        var shapeArea = 0;
        var shapeKind = "";
        shapesObj = [];
		for (var i=0; i<obj.pathItems.length; i++) {
            // Needs to be >1 to check subshapes
            if(obj.pathItems.length > 1){
                // alert("compound shape more then "+obj.pathItems.length+" shapes")
                // alert(obj.pathItems.length)
                // alert(obj.pathItems[i].typename)
                
                var totalArea = 0;
                for (var i=0; i<obj.pathItems.length; i++) {
                    // See pathItem properties
                    // https://www.indesignjs.de/extendscriptAPI/illustrator-latest/#PathItem.html
                    // alert(obj.pathItems[i].artworkKnockout) // used for print
                    // alert(obj.pathItems[i].polarity)
                    // alert(obj.pathItems[i].typename)
                    // alert(obj.pathItems[i].polarity == PolarityValues.NEGATIVE)
                    if (obj.pathItems[i].polarity == PolarityValues.NEGATIVE){
                        // if (exportInfo.intersectingPaths==true){
                        //     alert("Script stopeed due to intersecting Path checked")
                        //     return
                        // }
                        totalArea -= Math.abs(calculateArea(obj.pathItems[i])); // make sure positive
                    }

                    // We need option called intersecting. this way we can do different outcomes on different shapes. Like intersecting parts need the expand function. But cutout full shapes and not intersecting need simply calculateArea method
                    if (obj.pathItems[i].polarity== PolarityValues.POSITIVE){
                        if (exportInfo.intersectingPaths==true){
                            totalArea = "dup";
                            return totalArea
                        }
                        if (exportInfo.intersectingPaths==false){
                            totalArea += Math.abs(calculateArea(obj.pathItems[i])); // make sure positive
                            // totalArea += Math.abs(calculateArea(obj.pathItems[i])); // make sure positive
                        }
                    }
                    // alert(totalArea)
                }
                // alert("loop 1")
                // SKIP COMPOUNDS HERE
                // for (var i=0; i<obj.compoundPathItems.length; i++) {
                //     totalArea += calculateArea(obj.compoundPathItems[i]); // already positive
                // }
                // SKIP GROUP HERE
                // for (var i=0; i<obj.groupItems.length; i++) {
                //     totalArea += calculateArea(obj.groupItems[i]); // already positive
                // }
                // alert("loop 2")
                // alert("loop 3")
            } else{
                // alert("compound shape more then "+obj.pathItems.length+" shapes")

			    totalArea += calculateArea(obj.pathItems[i]); // could be negative
            }
            // alert(totalArea)
            // alert(alert(obj.pathItems[i].typename)+'\n '+totalArea)
            // totalArea += Math.abs(calculateArea(obj.pathItems[i])); // make sure positive
            // shapesObj.push("Path: "+totalArea)
            // alert(totalArea + " "+ calculateArea(obj.pathItems[i]),obj.pathItems.length)
		}
        // alert(shapesObj)
		return Math.abs(totalArea); // make sure positive
	} else if (obj.typename == "GroupItem") {
        // alert("Group Item > path items : "+ obj.pathItems.length + "\n compound path items : " + obj.compoundPathItems.length + "\n group items : %s" + obj.groupItems.length)
		// itemsObj = [];
        // for (i in obj){
        //     itemsObj.push(i)
        // }
        // alert(itemsObj)
        // alert( subItems(obj))
        var totalArea = 0;
		for (var i=0; i<obj.pathItems.length; i++) {
			totalArea += Math.abs(calculateArea(obj.pathItems[i])); // make sure positive
		}
		for (var i=0; i<obj.compoundPathItems.length; i++) {
			totalArea += calculateArea(obj.compoundPathItems[i]); // already positive
		}
		for (var i=0; i<obj.groupItems.length; i++) {
			totalArea += calculateArea(obj.groupItems[i]); // already positive
		}
		return totalArea; // already positive
	} else { // not path, compound path or group
		return 0;
	}
}

// https://community.adobe.com/t5/illustrator/illustrator-script-to-get-compoundpathitem-pathitem-filled-colors-on-few-layers/td-p/11208204
function checkItem(item){
    var result = {"fill":undefined,"stroke":undefined,"valid":false};
    if(item.typename === "CompoundPathItem"){
        dig(item);
    }
    
    function dig(item){
        var curSubItem;
        alert(item.typename)
        if(item.typename === "CompoundPathItem" && item.pathItems.length && !result.valid){
            curSubItem = item.pathItems[0];
            result.fill = curSubItem.fillColor;
            result.stroke = curSubItem.strokeColor;
            result.valid = true;
            return;
        }

        for(var i=0,len=item.pageItems.length;i<len && !result.valid;i++){
            curSubItem = item.pageItems[i];
            if(curSubItem.typename === "PathItem"){
                result.fill = curSubItem.fillColor;
                result.stroke = curSubItem.strokeColor;
                result.valid = true;
            } else if(curSubItem.typename === "GroupItem"){
                dig(curSubItem);
            }
        }
    }
    return result;
}

// https://www.inchcalculator.com/scale-calculator/
function convertAreaRealArea(exportInfo, areaInMeters) {
    scale = exportInfo.realAreaScale;
    realAreaValue = exportInfo.realAreaValue.split(":");
    realAreasq = Number(realAreaValue[1]) * Number(realAreaValue[1]);
    return areaInMeters*realAreasq
}
function convertArea (area) {
	var ppi = 72;
	var result = {};
	result.inch = area/ppi/ppi;
	result.foot = result.inch * 0.00694444; // https://www.google.com/search?q=convert+square+inch+to+cm
    // https://www.conversionunites.com/converter-cm-to-mm
	// https://www.mathsteacher.com.au/year7/ch13_area/02_calc/area.htm
	// https://www.calculateme.com/length/centimeters/to-millimeters/16
    // https://www.unitconverters.net/typography/centimeter-to-pixel-x.htm
    // https://www.blitzresults.com/en/pixel/
    // https://graphicdesign.stackexchange.com/questions/199/point-vs-pixel-what-is-the-difference#:~:text=If%20your%20image%20is%2072ppi,will%20equal%20exactly%20one%20pixel.&text=Point%20is%20a%20physical%20unit%20of%20length%2C%20used%20in%20typography.&text=So%201%20pt%20%3D%201%2F72,%2C%201%20point%20%3D%201%20pixel.
    // https://www.researchgate.net/post/Can_anyone_help_me_in_conversion_of_Area_from_Sqpixels_to_Sqmm
    // https://community.adobe.com/t5/illustrator/is-there-a-way-to-calculate-the-area-of-a-shape/m-p/1181381#:~:text=Open%20the%20Measuring%20toolbar%20(View,the%20area%20will%20be%20displayed.
	result.cm = result.inch * 6.4516;
	result.m = result.cm  / 10000; // https://sciencing.com/convert-cm-meters-squared-8111525.html
	result.mm = result.cm  * 100; //10 mm > 1cm;
	result.pt = area; //result.mm * 28.346438836889; // 1cm > 28.3465 pt; 
	// result.pt = result.cm * 803.524062; // 1cm > 28.3465 pt; 
    result.pc = result.cm  * 23.622049104098; // 1cm > 23.622049104098 pica; > 2.3622047244
	// result.px = result.cm  * 3.7795275591; // 1cm > 37.795275591 pixel > 96dpi 
    // alert(area)
	// result.px = result.mm * 28.3464567; // 1cm > 28.3464567 pixel; > photoshop?!? > 72 / 2.54 = 28.3464567
	result.px = result.mm * 7.84; // 1cm > 28.3464567 pixel; > photoshop?!? > 72 / 2.54 = 28.3464567
    //803.521607 = 28.3464567 x 28.3464567
    // 784 = pixel rounded of 1cm x 1cm = 28px x 28px
    if(exportInfo.useRealArea){
        // result.rw = convertAreaRealArea(exportInfo, result.m)
        result.rw = convertAreaRealArea(exportInfo, result[exportInfo.realAreaUnit])
    }
	return result;
}

function getShapeArea(exportInfo, dup, obj, pos){
    var objects = app.activeDocument.selection;
    // var objOrg = app.activeDocument.selection;
    // var display = ["Shape Area"];
    var display = [];
    decimalPlaces = exportInfo.decimals; /* 3 */
    var unit = ['inch','cm','mm','pt'];
    // Change number between brackets to get desired unit
    unitType = unit[1];
    // Change to false if 2 units is need > also change the 'unit[0]' to cossoponding unit
    // var singleUnit = false;

    // Collect info
    var totalArea = 0;
    
    if(exportInfo.countShapes){
        var totShapes = false;
        if(objects.length > 1) totShapes = true;
        totShapes = totShapes ? objects.length+ " shapes" : objects.length+ " shape";
        display.push(totShapes);
    }
    
    for (var i=0; i<objects.length; i++) {
        // var obj = objects[i];
        var pos = objects[i].position;
        // alert(objects[i].typename)
        if(objects[i].typename=="PluginItem"){
            // alert('PluginItem\'s cant be do calculate by script. This script duplicates the item and then does another pass. \n\nYou can double check the result at the end by axpanding the selected object and run the script again. The result should be the same.');
            expandPluginItem(objects[i],  pos)
            return
        }
        var area = calculateArea(objects[i]); // need absolute in case of PathItems
        // alert(area)
        // Complex objects return dupdupdupdupdupd plus area, this gives an error
        if (area=="dup"){
            // var parentObj = app.activeDocument.selection[0];
            // alert(objects.length)
            if (objects.length <= 1) var pos = app.activeDocument.selection[0].position;
            if (objects.length > 1) {
                var pos = [];
                for (p=0; p < objects.length; p++){
                    // alert(app.activeDocument.selection[p].position[0]+'\n'+app.activeDocument.selection[p].position[1])
                    pos.push([app.activeDocument.selection[p].position[0],app.activeDocument.selection[p].position[1]])
                }
            }
            app.executeMenuCommand("copy");
            app.executeMenuCommand("deselectall");
            app.executeMenuCommand("paste");
            // app.activeDocument.selection[0].position = pos; //[pos[0], pos[1]];//[100,100];//[3839.68698442494,-913.314050539961];//[200,200];//    
            // app.activeDocument.selection.position = pos;
            if (objects.length <= 1) app.activeDocument.selection[0].position = pos;
            if (objects.length > 1){
                for (p=0; p < objects.length; p++){
                    app.activeDocument.selection[p].position = pos[p];
                    
                }
            }
            // alert(pos)
            app.activeDocument.selection[0].name = "New dupped item";
            app.executeMenuCommand("group");
            app.executeMenuCommand("Live Pathfinder Trim");
            app.executeMenuCommand("expandStyle");
            
            // Find empty path items and remove them
            var oldSelection = app.activeDocument.selection;
            // app.executeMenuCommand("deselectall");
            var noneFill = app.activeDocument.swatches.getByName('[None]').color
            // var noneFill = docRef.swatches.getByName('CMYK Red').color
            // alert(noneFill)
            app.activeDocument.defaultFillColor = noneFill; //docRef.swatches.getByName('[None]').color; //noneFill.color;
            app.executeMenuCommand("Find Fill Color menu item");
            // app.activeDocument.defaultFillColor = app.activeDocument.swatches.getByName('CMYK Red').color
            app.executeMenuCommand("clear");
            
            // oldSelection.selected = true
            // alert(oldSelection.selected)
            dup = oldSelection
            // alert(oldSelection.area)
            // app.executeMenuCommand("ungroup");
            // var dup = app.activeDocument.selection[0];
            // var obj = app.activeDocument.selection[0].parent;
            // getShapeArea(exportInfo)
            getShapeArea(exportInfo, dup, obj, pos)
            // Clear everything because we are redoing everything
            area = 0;
            totalArea = 0;
            app.executeMenuCommand("clear")
            break
        }
        // alert(pos)
        // recheck so we can catch return strings
        area = Math.abs(area);
        totalArea += area;
        var conv = convertArea(area);

        // Show each path if true
        if(exportInfo.allShapes){
            // Edit comment below to get double units
            if(!exportInfo.singleUnit){
                // display.push(conv[unit[1]].toFixed(decimalPlaces) + unit[1]+"² / " + conv[unit[2]].toFixed(decimalPlaces) + unit[2]+"²");
                if (exportInfo.useRealArea){
                    var data = conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"² / "+conv['rw'].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²";
                    // var data = conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"² / "+conv[exportInfo.realAreaUnit].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²";
                    // var data = conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"² / "+conv['rw'].toFixed(decimalPlaces) +"m²";
                } else {
                    var data = conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"²";
                }
                if (exportInfo.textLabel) placeTextLabel(data, objects[i], pos)
                if (exportInfo.useRealArea){
                    display.push(conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"² / "+conv['rw'].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²");
                    // display.push(conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"² / "+conv[exportInfo.realAreaUnit].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²");
                    // display.push(conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"² / "+conv['rw'].toFixed(decimalPlaces) +"m²");
                } else {
                    display.push(conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"²");
                }
            } else {
                // display.push(conv[unitType].toFixed(decimalPlaces) + unitType+"²");
                if (exportInfo.useRealArea){
                    var data = conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"² / "+conv['rw'].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²";
                    // var data = conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"² / "+conv[exportInfo.realAreaUnit].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²";
                    // var data = conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"² / "+conv['rw'].toFixed(decimalPlaces) +"m²";
                } else {
                    var data = conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"²";
                }
                if (exportInfo.textLabel) placeTextLabel(data, objects[i], pos)

                if (exportInfo.useRealArea){
                    display.push(conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"² / "+conv['rw'].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²");
                    // display.push(conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"² / "+conv[exportInfo.realAreaUnit].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²");
                    // display.push(conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"² / "+conv['rw'].toFixed(decimalPlaces) +"m²");
                } else {
                    display.push(conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"²");
                }
            }
        }
    }

    if((exportInfo.countShapes) || (exportInfo.allShapes)){
        display.push(" ");
    }

    if (totalArea!=0){
        var conv = convertArea(totalArea);
        if(!exportInfo.singleUnit){
            // display.push("Total Area: " + conv[unit[1]].toFixed(decimalPlaces) + unit[1]+"² / " + conv[unit[2]].toFixed(decimalPlaces) + unit[2]+"²");
            if (exportInfo.useRealArea) display.unshift("Real Area: "+conv['rw'].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²")
            // if (exportInfo.useRealArea) display.unshift("Real Area: "+conv['rw'].toFixed(decimalPlaces) +"m²")
            display.unshift("Total Area: " + conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"²");
        } else {
            if (exportInfo.useRealArea) display.unshift("Real Area: "+conv['rw'].toFixed(decimalPlaces) +exportInfo.realAreaUnit+"²")
            // if (exportInfo.useRealArea) display.unshift("Real Area: "+conv['rw'].toFixed(decimalPlaces) +"m²")
            display.unshift("Total Area: " + conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"²");
        }
        // remove duplicate pluginItem
        if (dup){
            // alert("remove DUP")
            // app.activeDocument.selection[0].position = [100,100];
            app.executeMenuCommand("clear")
            try{
                obj.hidden = false;
            } catch(e){

            }
            // dup.remove(); //Returns error
        }
        // Alert Area shape's
        if (!exportInfo.textLabel) alert(display.join("\n"));
        if (exportInfo.textLabel) placeTextLabel(display.join("\n"), objects[objects.length-1])
        // placeTextLabel(display, obj)
    }
}
// define the desired color mode and value
var txtColor = new RGBColor();
txtColor.red = 70;
txtColor.green = 113;
txtColor.blue = 178;

function placeTextLabel(data, obj, pos){
    // obj.selected = true;
    var docRef = app.activeDocument;
    var pathRef = obj;
    	//Create a textFrame and set its contents to areaMessage.
	var areaLabel = docRef.textFrames.add();
	areaLabel.contents = data; //.join("\n");
	for(i=0;i<areaLabel.paragraphs.length;i++){
		areaLabel.paragraphs[i].justification=Justification.LEFT;
		areaLabel.paragraphs[i].fillColor = pickedColor;
	}
	// areaLabel.position = pos;
	//Position areaLabel at the center of the selected path.
	areaLabel.top = pathRef.top+areaLabel.height+4;//-pathRef.height/2+areaLabel.height/2;
	areaLabel.left = pathRef.left+pathRef.width/2-areaLabel.width/2;

}

function checkSelection(){
    if (app.documents.length < 1) {
        alert('No open document');
        return
    } else if (app.activeDocument.selection.length < 1) {
        alert('Select a path');
        return
    }
    getDialog(exportInfo);
}
checkSelection()



// https://coderedirect.com/questions/115104/javascript-convert-hsb-hsv-color-to-rgb-accurately
function HSBToRGB(hsb) {
    var rgb = { };
    var h = Math.round(hsb.hue);
    var s = Math.round(hsb.saturation * 255 / 100);
    var v = Math.round(hsb.brightness * 255 / 100);

        if (s == 0) {

        rgb.r = rgb.g = rgb.b = v;
        } else {
        var t1 = v;
        var t2 = (255 - s) * v / 255;
        var t3 = (t1 - t2) * (h % 60) / 60;

            if (h == 360) h = 0;

                if (h < 60) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3 }
                else if (h < 120) { rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3 }
                else if (h < 180) { rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3 }
                else if (h < 240) { rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3 }
                else if (h < 300) { rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3 }
                else if (h < 360) { rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3 }
                else { rgb.r = 0; rgb.g = 0; rgb.b = 0 }
        }

    return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
}


// Author RAG inc
// Source AdobeCOlorCalculator

// -------------------------------------------------------
// RGBMetrics()        constructor
// -------------------------------------------------------
function RGBMetrics(r, g, b) {
    this.r = 0.0;
    this.g = 0.0;
    this.b = 0.0;
    this.error = false;
    this.gamut = false;

    if (r != undefined && g != undefined && b != undefined) {
        if (isNaN(r) || isNaN(g) || isNaN(b))
            throw("RGBMetrics() Invalid values [" + r + ", " + g + ", " + b + "]");
        this.r = r;
        this.g = g;
        this.b = b;
        if (!(Math.round(this.r) == Math.round(this.g) && Math.round(this.g) == Math.round(this.b))) {
            if (this.r > 254.9 || this.g > 254.9 || this.b > 254.9)
                this.gamut = true;
            if (this.r < 0.1 || this.g < 0.1 || this.b < 0.1)
                this.gamut = true;
        }
    }
    if (this.r > 255 || this.r < 0 || this.g > 255 || this.g < 0 || this.b > 255 || this.b < 0)
        this.error = true;
    return(this);
}


// -------------------------------------------------------
// CMYKMetrics()        constructor
// -------------------------------------------------------
function CMYKMetrics(C, M, Y, K) {
    this.C = 0.0;
    this.M = 0.0;
    this.Y = 0.0;
    this.K = 0.0;
    this.error = false;

    if (C != undefined && M != undefined && Y != undefined && K != undefined) {
        if (isNaN(C) || isNaN(M) || isNaN(Y) || isNaN(K))
            throw("HSBMetrics() Invalid values [" + C + ", " + M + ", " + Y + ", " + K + "]");
        this.C = C;
        this.M = M;
        this.Y = Y;
        this.K = K;
    }
    return(this);
}

// Returns opposite of souceSpace
// example RGB in is CMYK out
function targetSpace(sourceSpace) {
    return targetSpace = sourceSpace == "RGB" ? "CMYK" : "RGB"
}
// -----------------------------------------
// RGB2CMYK()
// accepts RGBMetrics, returns CMYKMetrics
// -----------------------------------------
function RGB2CMYK(RGB) {
    var sc, cmyk;
    var C, M, Y, K;
    if (app.name == 'Adobe Photosop') {
        var sc = new SolidColor();
        sc.rgb.red = RGB.r;
        sc.rgb.green = RGB.g;
        sc.rgb.blue =  RGB.b;
        C = Math.round(sc.cmyk.cyan*100.0)/100.0;
        M = Math.round(sc.cmyk.magenta*100.0)/100.0;
        Y = Math.round(sc.cmyk.yellow*100.0)/100.0;
        K = Math.round(sc.cmyk.black*100.0)/100.0;
    }
    if (space == "RGB") {
        sc = new RGBColor();
        sc.r = RGB.r;
        sc.g = RGB.g;
        sc.b =  RGB.b;
        // app.foregroundColor = sc
        // app.activeDocument.defaultFillColor = sc
        // alert(app.foregroundColor.c)
        sourceSpace = space;
        colorComponents = RGB.r,RGB.g,RGB.b;
        // alert(targetSpace(sourceSpace))
        var returnColors = app.convertSampleColor(ImageColorSpace[sourceSpace], [RGB.r,RGB.g,RGB.b], ImageColorSpace[targetSpace(sourceSpace)], ColorConvertPurpose.previewpurpose);
        // alert(returnColors[0])
        sc.cyan= returnColors[0];
        sc.magenta = returnColors[1];
        sc.yellow= returnColors[2];
        sc.black= returnColors[3];
        // sc.cyan = app.convertSampleColor(ImageColorSpace["RGB"], [RGB.r,RGB.g,RGB.b], ImageColorSpace["CMYK"], ColorConvertPurpose.previewpurpose)[0];//defaultpurpose))
        // sc.magenta = app.convertSampleColor(ImageColorSpace["RGB"], [RGB.r,RGB.g,RGB.b], ImageColorSpace["CMYK"], ColorConvertPurpose.previewpurpose)[1];//defaultpurpose))
        // sc.yellow = app.convertSampleColor(ImageColorSpace["RGB"], [RGB.r,RGB.g,RGB.b], ImageColorSpace["CMYK"], ColorConvertPurpose.previewpurpose)[2];//defaultpurpose))
        // sc.black = app.convertSampleColor(ImageColorSpace["RGB"], [RGB.r,RGB.g,RGB.b], ImageColorSpace["CMYK"], ColorConvertPurpose.previewpurpose)[3];//defaultpurpose))
        C = Math.round(sc.cyan*100.0)/100.0;
        M = Math.round(sc.magenta*100.0)/100.0;
        Y = Math.round(sc.yellow*100.0)/100.0;
        K = Math.round(sc.black*100.0)/100.0;
        // alert(C+", "+M+", "+Y+", "+K)
    }
    if (space == "CMYK") colorType = new CMYKColor();
    // if (app.name == 'Adobe Illustrator') var sc = colorType;

    cmyk = new CMYKMetrics(C, M, Y, K);
    return(cmyk);
}


// -----------------------------------------
// CMYK2RGB()
// accepts CMYKMetrics, returns RGBMetrics
// Not from RagsInc > Rombout Versluijs 29-12-2022
// Changed 2023-06-06 > need accept RGB documents aswell
// -----------------------------------------

function CMYK2RGB(CMYK) {
    var sc, rgb;
    var R, G, B;
    if (app.name == 'Adobe Photoshop') {
        var sc = new SolidColor();
        sc.cmyk.cyan =   CMYK.cyan;
        sc.cmyk.magenta = CMYK.magenta;
        sc.cmyk.yellow =  CMYK.yellow;
        sc.cmyk.black =  CMYK.black;
        R = Math.round(sc.rgb.red*255.0)/255.0;
        G = Math.round(sc.rgb.green*255.0)/255.0;
        B = Math.round(sc.rgb.blue*255.0)/255.0;
        rgb = new RGBMetrics(R, B, G);
    }
    if (space == "CMYK" || (space == "RGB")) {
        var sc = new CMYKColor();
        sc.cyan =   CMYK.cyan;
        sc.magenta = CMYK.magenta;
        sc.yellow =  CMYK.yellow;
        sc.black =  CMYK.black;

        // app.activeDocument.defaultFillColor = sc
        sourceSpace = space;
        var returnColors = app.convertSampleColor(ImageColorSpace[sourceSpace], [CMYK.cyan,CMYK.magenta,CMYK.yellow, CMYK.black], ImageColorSpace[targetSpace(sourceSpace)], ColorConvertPurpose.defaultpurpose);//previewpurpose);
        sc.red= returnColors[0];
        sc.green = returnColors[1];
        sc.blue= returnColors[2];
        R = Math.round(sc.red);
        G = Math.round(sc.green);
        B = Math.round(sc.blue);

        rgb = new RGBMetrics(R, G, B);
    }
    return(rgb);
}
