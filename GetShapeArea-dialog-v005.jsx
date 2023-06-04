// Dialog designed using ScriptUI website
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":5,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"getShapeArea","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Get Shape Area","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"brnDialog","preferredSize":[250,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-4":{"id":4,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"btnCancel","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"btnOk","text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"pnlSettings","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Settings","preferredSize":[250,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-7":{"id":7,"type":"Group","parentId":6,"style":{"enabled":true,"varName":"grpSingleUnit","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"Group","parentId":6,"style":{"enabled":true,"varName":"grpDoubleUnit","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-9":{"id":9,"type":"Divider","parentId":6,"style":{"enabled":false,"varName":"dvdOne"}},"item-10":{"id":10,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"txtUnit","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Unit\n","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":"ddSingleUnit","text":"DropDownList","listItems":"cm, mm, in, pt","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-12":{"id":12,"type":"Checkbox","parentId":8,"style":{"enabled":true,"varName":"cbDoubleUnits","text":"Double Units","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":8,"style":{"enabled":true,"varName":"grpDoubleUnits","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-14":{"id":14,"type":"Group","parentId":13,"style":{"enabled":true,"varName":"grpDoubleUnitsOne","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-15":{"id":15,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":"txtDoubleUnitsOne","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Unit\n","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"DropDownList","parentId":14,"style":{"enabled":true,"varName":"ddDoubleUnitsOne","text":"DropDownList","listItems":"cm, mm, in, pt","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":13,"style":{"enabled":true,"varName":"grpDoubleUnitsTwo","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":"txtDoubleUnitsTwo","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Unit\n","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-19":{"id":19,"type":"DropDownList","parentId":17,"style":{"enabled":true,"varName":"ddDoubleUnitsTwo","text":"DropDownList","listItems":"cm, mm, in, pt","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-20":{"id":20,"type":"StaticText","parentId":13,"style":{"enabled":true,"varName":"txtDivider","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"/","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"Divider","parentId":6,"style":{"enabled":false,"varName":"dvdTwo"}},"item-22":{"id":22,"type":"Checkbox","parentId":6,"style":{"enabled":true,"varName":"cbShapeArea","text":"Area all shapes","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,6,7,10,11,9,8,12,13,14,15,16,20,17,18,19,21,22,3,4,5],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/

////////////////////////////////////////////////////////////
//
// Initial code by Bryan Buchanan
// https://gist.github.com/bryanbuchanan/11387501
//
// Recursive functions by Aliijay
//
// Dialog Window and additional measurements Rombout Versluijs
//
// v0.0.1
// 12-02-2021
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
// v0.0.3
// 12-02-2021
//
// Added
// - More decimals
//
// v0.0.4
// 12-02-2021
//
// Added
// - Sub items + area per sub item
//
// v0.0.5
// 28-05-2021
//
// check
// -Check compound of more then 1 or 2 shapes
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

function getDialog() {
    try {        
        initExportInfo(exportInfo);
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
            alert('Please select a path or group.');
            return
        }
        

        // alert(exportInfo.doubleUnit)
        // alert(exportInfo.allShapes)
        getShapeArea(exportInfo);

        // app.playbackDisplayDialogs = DialogModes.ALL;

    } catch (e) {
        // if (DialogModes.NO != app.playbackDisplayDialogs) {
            alert(e);
        // }
        return "cancel"; // quit, returning "cancel" (dont localize) makes the actions palette not record our script
    }
}


///////////////////////////////////////////////////
// Set Defaults Dialog
///////////////////////////////////////////////////
function initExportInfo(exportInfo){
    exportInfo.singleUnit = true;
    exportInfo.doubleUnit = false;
    exportInfo.allShapes = true;
    exportInfo.decimals = 1;
    exportInfo.countShapes = false;
}

function settingDialog(exportInfo) {

    // GETSHAPEAREA
    // ============
    var dlgGetShapeArea = new Window("dialog"); 
        dlgGetShapeArea.text = "Get Shape Area"; 
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

    var ddSingleUnit_array = ["cm","mm","inch","pt","pc","px"]; 
    var ddSingleUnit = grpSingleUnit.add("dropdownlist", undefined, undefined, {name: "ddSingleUnit", items: ddSingleUnit_array}); 
        ddSingleUnit.selection = 0; 

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

    var ddDoubleUnitsOne_array = ["cm","mm","inch","pt","pc","px"]; 
    var ddDoubleUnitsOne = grpDoubleUnitsOne.add("dropdownlist", undefined, undefined, {name: "ddDoubleUnitsOne", items: ddDoubleUnitsOne_array}); 
        ddDoubleUnitsOne.selection = 0; 

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

    var ddDoubleUnitsTwo_array = ["cm","mm","inch","pt","pc","px"];  
    var ddDoubleUnitsTwo = grpDoubleUnitsTwo.add("dropdownlist", undefined, undefined, {name: "ddDoubleUnitsTwo", items: ddDoubleUnitsTwo_array}); 
        ddDoubleUnitsTwo.selection = 0; 

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

    // double units checkbox
    cbDoubleUnits.onClick = function() {
        if (cbDoubleUnits.value) {
            grpDoubleUnits.show();
            grpSingleUnit.enabled = false;
        } else {
            grpDoubleUnits.hide();
            grpSingleUnit.enabled = true;
        }
    }

    // in case we double clicked the file
    // app.bringToFront();
    dlgGetShapeArea.center();

    var result = dlgGetShapeArea.show();

    if (cancelButtonID == result) {
        return result; // close to quit
    }

    // Get settings from Dialog
    exportInfo.singleUnit = cbDoubleUnits.value ? false : true;
    exportInfo.doubleUnit = cbDoubleUnits.value;
    exportInfo.decimals = ddDecimals.selection.index; 
    exportInfo.allShapes = cbShapeArea.value;
    exportInfo.countShapes = cbCountShapes.value;
    exportInfo.unitSingle = ddSingleUnit.selection.text;
    exportInfo.unitDoubleOne = ddDoubleUnitsOne.selection.text;
    exportInfo.unitDoubleTwo = ddDoubleUnitsTwo.selection.text;
    // alert(exportInfo.unitSingle)
    // alert(exportInfo.unitDoubleTwo)
    // alert(exportInfo.unitDoubleOne)

    return result;    
}

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

function calculateArea (obj) {
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
		for (var i=0; i<obj.pathItems.length; i++) {
            if(obj.pathItems.length > obj.pathItems.length+1){
                alert("compound shape more then 2 shapes")
                // alert(obj.pathItems.length)
                // alert(obj.pathItems[i].typename)
                
                var totalArea = 0;
                for (var i=0; i<obj.pathItems.length; i++) {
                    // alert(i)
                    // alert(subItems(obj.pathItems[i]))
                    alert(obj.pathItems[i].artworkKnockout)
                    // alert(obj.pathItems[i].typename)
                    totalArea += Math.abs(calculateArea(obj.pathItems[i])); // make sure positive
                    // totalArea += Math.abs(calculateArea(obj.pathItems[i])); // make sure positive
                }
                alert("loop 1")
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
                alert("single compound shape, 2 shapes")

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
        alert("Group Item > path items : "+ obj.pathItems.length + "\n compound path items : " + obj.compoundPathItems.length + "\n group items : %s" + obj.groupItems.length)
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

function getShapeArea(exportInfo){
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
        alert(totShapes)
        totShapes = totShapes ? objects.length+ " shapes" : objects.length+ " shape";
        display.push(totShapes);
    }
    
    for (var i=0; i<objects.length; i++) {
        var area = Math.abs(calculateArea(objects[i])); // need absolute in case of PathItems
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

    var conv = convertArea(totalArea);

    if(!exportInfo.singleUnit){
        // display.push("Total Area: " + conv[unit[1]].toFixed(decimalPlaces) + unit[1]+"² / " + conv[unit[2]].toFixed(decimalPlaces) + unit[2]+"²");
        display.unshift("Total Area: " + conv[exportInfo.unitDoubleOne].toFixed(decimalPlaces) + exportInfo.unitDoubleOne+"² / " + conv[exportInfo.unitDoubleTwo].toFixed(decimalPlaces) + exportInfo.unitDoubleTwo+"²");
    } else {
        display.unshift("Total Area: " + conv[exportInfo.unitSingle].toFixed(decimalPlaces) + exportInfo.unitSingle+"²");
    }
    
    


    // Display
    alert(display.join("\n"));
}

function checkSelection(){
    if (app.documents.length < 1) {
        alert('No open document');
        return
    } else if (app.activeDocument.selection.length < 1) {
        alert('Select a path');
        return
    }
    getDialog()
}
checkSelection()
