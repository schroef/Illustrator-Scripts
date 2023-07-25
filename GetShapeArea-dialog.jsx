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



    // // load JSON stored data if exists
    // jsonData = loadJSON(exportInfo)
    // initSwatchInfo(exportInfo, jsonData);
    // if (cancelBtnID == showDialog(exportInfo)) {
    //     return "cancel"; // quit, returning "cancel" (dont localize) makes the actions palette not record our script
    // } else {
    // // if (DialogModes.ALL == app.playbackDisplayDialogs) {
    // // }
    // // alert(exportInfo)
    //     main(exportInfo);

    //     saveToJSON(exportInfo);
    // }


function getDialog(exportInfo) {
    try {
        // load JSON stored data if exists
        jsonData = loadJSON();
        initExportInfo(exportInfo, jsonData);
        // alert(subItems(app.activeDocument.selection[0].parent))
        // alert(app.activeDocument.selection[0].parent)
        // alert(app.activeDocument.selection[0].isIsolated)
        // alert(app.activeDocument.selection[0].typename.length)
        // alert(app.activeDocument.selection[0].typename)
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
            var objs = app.activeDocument.selection
            // alert(objs[0].typename)
            if(objs[0].typename=="PluginItem"){
                alert('PluginItem\'s cant be do calculate by script. This script duplicates the item and then does another pass. \n\nYou can double check the result at the end by axpanding the selected object and run the script again. The result should be the same.');
                expandPluginItem(objs[0])
                return
            }
            // alert("objs.length "+objs.length)
            alert('Please select a path or group.');
            return
        }
        

        // alert(exportInfo.doubleUnit)
        // alert(exportInfo.allShapes)
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
function expandPluginItem(obj){
    // var dup = obj;
    // dup.duplicate(); //Keeps both selected and causes both object to be exmapnde
    app.executeMenuCommand("copy");
    obj.selected = false;
    obj.hidden = true;
    app.executeMenuCommand("paste");
    var dup = app.activeDocument.selection[0];
    // alert(dup.typename)
    // // app.executeMenuCommand("Expand3"); // show menu, we dont want that
    app.executeMenuCommand("expandStyle");
    app.executeMenuCommand("Expand3");
    // if (dup.typename=="CompoundPathItem"){
    //     // app.executeMenuCommand("Expand3");
    //     app.executeMenuCommand("compoundPath");
    //     app.executeMenuCommand("expandStyle");
    // }
    getShapeArea(exportInfo, dup, obj);
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
    if (jsonData){
        exportInfo.unitSingle = jsonData.unitSingle;
        exportInfo.unitSingleIndex = jsonData.unitSingleIndex;
        exportInfo.singleUnit = jsonData.singleUnit;
        exportInfo.doubleUnit = jsonData.doubleUnit;
        exportInfo.allShapes = jsonData.allShapes;
        exportInfo.decimals = jsonData.decimals;
        exportInfo.countShapes = jsonData.countShapes;
        exportInfo.intersectingPaths = jsonData.intersectingPaths;
        exportInfo.unitDoubleOne = jsonData.unitDoubleOne;
        exportInfo.unitDoubleOneIndex = jsonData.unitDoubleOneIndex;
        exportInfo.unitDoubleTwo = jsonData.unitDoubleTwo;
        exportInfo.unitDoubleTwoUndex = jsonData.unitDoubleTwoIndex;
    } else {
        exportInfo.unitSingle = "";
        exportInfo.unitSingleIndex = 0;
        exportInfo.singleUnit = true;
        exportInfo.doubleUnit = false;
        exportInfo.allShapes = true;
        exportInfo.decimals = 1;
        exportInfo.countShapes = false;
        exportInfo.intersectingPaths = false;
        exportInfo.unitDoubleOne = "";
        exportInfo.unitDoubleOneIndex = 0;
        exportInfo.unitDoubleTwo = "";
        exportInfo.unitDoubleTwoIndex = 0;
    }
}


function settingDialog(exportInfo) {

    // GETSHAPEAREA
    // ============
    var dlgGetShapeArea = new Window("dialog"); 
        dlgGetShapeArea.text = "Get Shape Area v.0.0.8"; 
        dlgGetShapeArea.orientation = "column"; 
        dlgGetShapeArea.alignChildren = ["center","top"]; 
        dlgGetShapeArea.spacing = 10; 
        dlgGetShapeArea.margins = 16; 

    // PNLSETTINGS
    // ===========
    var pnlSettings = dlgGetShapeArea.add("panel", undefined, undefined, {name: "pnlSettings"}); 
        pnlSettings.text = "Settings"; 
        pnlSettings.preferredSize.width = 250; 
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

    var ddSingleUnit_array = ["m","cm","mm","inch","pt","pc","px"]; 
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

    var ddDoubleUnitsOne_array = ["m", "cm","mm","inch","pt","pc","px"]; 
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

    var ddDoubleUnitsTwo_array = ["m", "cm","mm","inch","pt","pc","px"];  
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
        brnDialog.preferredSize.width = 250; 
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
    // alert(obj.typename)
    // alert(obj.typename)
    // alert(subItems(obj))
	if (obj.typename == "PathItem") {
        // alert("check subitems")
        // alert(obj.area)
        // alert(subItems(obj))
		return obj.area; // could be negative
	} else if (obj.typename == "CompoundPathItem") {
		var totalArea = 0;
        var shapeArea = 0;
        var shapeKind = "";
        shapesObj = [];


        // Get fill colors over objects
        // it = checkItem(obj)
        // ls = [];
        // for(j in it){
        //     ls.push(it[j]);
        // }
        // alert(ls)


        // alert("Coumpound Item > path items : ", obj.pathItems.length)
        // itemsObj = [];
        // for (i in obj){
        //     itemsObj.push(i)
        // } 
        // alert( subItems(obj.pathItems.typename))
        // alert(itemsObj)
        // alert("Group Item > path items : ", obj.pathItems.length, "compound path items : ", obj.compoundPathItems.length,"group items : %s", obj.groupItems.length)
        // alert(obj.pathItems.length)
        // if(obj.pathItems.length > 1){
        //     expandPluginItem(obj)
        // }
		for (var i=0; i<obj.pathItems.length; i++) {
            // alert(obj.pathItems.length > 2)
            // alert(obj.pathItems.length)

            // alert(obj.pathItems.length > 2)
            // alert(obj.pathItems.length > 2)
            // Needs to be >1 to check subshapes
            if(obj.pathItems.length > 1){
                // alert("compound shape more then "+obj.pathItems.length+" shapes")
                // alert(obj.pathItems.length)
                // alert(obj.pathItems[i].typename)
                
                var totalArea = 0;
                for (var i=0; i<obj.pathItems.length; i++) {
                    // alert("loop "+i)
                    // alert(obj.pathItems[i].polarity)
                    // alert(i)
                    // alert(subItems(obj.pathItems[i]))

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
                        // alert(obj.pathItems[i].parent.name)
                        // break
                        // alert(obj.pathItems[i])
                        // obj.pathItems[i].parent.selected=true;
                        // app.executeMenuCommand("copy");
                        // obj.pathItems[i].parent.selected=false;
                        // // obj.selected=false;
                        // obj.pathItems[i].selected=false;
                        // obj.pathItems[i].selected=false;
                        // app.executeMenuCommand("paste");
                        // app.executeMenuCommand("compoundPath");
                        // app.executeMenuCommand("expandStyle");
                        // dup = app.activeDocument.selection;
                        // // alert(dup.pathItems)
                        // // calculateArea(dup);
                        // getShapeArea(exportInfo, obj.pathItems[i].parent)
                        // alert(exportInfo.intersectingPaths==true)
                        if (exportInfo.intersectingPaths==true){
                            totalArea = "dup"
                            return totalArea
                        }
                        if (exportInfo.intersectingPaths==false){
                            // break
                            // getShapeArea(exportInfo, dup)
                            // break
                            // expandPluginItem(obj)
                            // break
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
    // alert(result)
    return result;
}

function convertArea (area) {
	var ppi = 72;
	var result = {};
	result.inch = area/ppi/ppi;
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
	return result;
}

function getShapeArea(exportInfo, dup, obj){
    var objects = app.activeDocument.selection;
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
        // alert(totShapes)
        totShapes = totShapes ? objects.length+ " shapes" : objects.length+ " shape";
        display.push(totShapes);
    }
    
    // alert(Math.abs(calculateArea(objects[0])))
    for (var i=0; i<objects.length; i++) {
        var area = calculateArea(objects[i]); // need absolute in case of PathItems
        if (area=="dup"){
            // alert(area)
            // alert("polarity dup item")
            // obj.pathItems[i].parent.selected=true;
            // app.executeMenuCommand("copy");
            // // objects.selected=false;
            // app.executeMenuCommand("deselectall");
            // app.executeMenuCommand("paste");
            // app.executeMenuCommand("compoundPath");
            // app.executeMenuCommand("expandStyle");
            // app.activeDocument.selection[0].name = "New dupped item";
            // dup = app.activeDocument.selection;
            // alert(dup.pathItems)
            // calculateArea(dup);

            // source: https://community.adobe.com/t5/illustrator-discussions/looking-for-javascript-commands-for-path-finder-operation/m-p/12355995#M289622
            // app.executeMenuCommand("copy");
            // objects.selected=false;
            // app.executeMenuCommand("deselectall");
            // app.executeMenuCommand("paste");
            // app.activeDocument.selection[0].name = "New dupped item";

            // // app.executeMenuCommand("group");
            // // // Not sure add does do proper job???
            // // app.executeMenuCommand("Live Pathfinder Add");
            // // app.executeMenuCommand("expandStyle");

            // app.executeMenuCommand("expandStyle");
            // app.executeMenuCommand("Expand3");
            var parentObj = app.activeDocument.selection[0];
            var pos = parentObj.position;
            // alert(app.activeDocument.selection[0].position)
            app.executeMenuCommand("copy");
            app.executeMenuCommand("deselectall");
            app.executeMenuCommand("paste");
            // alert(app.activeDocument.selection[0].name)
            app.activeDocument.selection[0].postion = pos;//[100,100];//[3839.68698442494,-913.314050539961];//[200,200];//    
            // alert(pos)
            app.activeDocument.selection[0].name = "New dupped item";
            app.executeMenuCommand("group");
            app.executeMenuCommand("Live Pathfinder Trim");
            app.executeMenuCommand("expandStyle");
            app.executeMenuCommand("ungroup");
            // var dup = app.activeDocument.selection[0];
            var obj = app.activeDocument.selection[0].parent;
            // getShapeArea(exportInfo)
            getShapeArea(exportInfo, dup, obj)
            // Clear everything because we are redoing everything
            area = 0;
            totalArea = 0;
            app.executeMenuCommand("clear")
            break
        }
        // recheck so we can catch return strings
        area = Math.abs(area);
        totalArea += area;
        var conv = convertArea(area);
        
        // Show each path if true
        if(exportInfo.allShapes){
            // Edit comment below to get double units
            
            if(!exportInfo.singleUnit){
                // display.push(conv[unit[1]].toFixed(decimalPlaces) + unit[1]+"² / " + conv[unit[2]].toFixed(decimalPlaces) + unit[2]+"²");
                display.push(conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"²");
            } else {
                // display.push(conv[unitType].toFixed(decimalPlaces) + unitType+"²");
                display.push(conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"²");
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
            display.unshift("Total Area: " + conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"²");
        } else {
            display.unshift("Total Area: " + conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"²");
        }
        // remove duplicate pluginItem
        if (dup){
            // alert("remove DUP")
            app.activeDocument.selection[0].postion = [100,100];
            app.executeMenuCommand("clear")
            try{
                obj.hidden = false;
            } catch(e){

            }
            // dup.remove(); //Returns error
        }
        // Alert Area shape's
        alert(display.join("\n"));
    }
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