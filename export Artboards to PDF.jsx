
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"exportDialog","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Export Artboards to PDF","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["fill","top"]}},"item-1":{"id":1,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"exportSettingsPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Options","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-2":{"id":2,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"destFolderGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-3":{"id":3,"type":"StaticText","parentId":2,"style":{"enabled":true,"varName":"destFolderLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Folder","justify":"left","preferredSize":[60,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"EditText","parentId":2,"style":{"enabled":true,"varName":"exportPathTxt","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Set export folder...","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":2,"style":{"enabled":true,"varName":"expFodlerBtn","text":"Choose","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"pdfSetingsGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-7":{"id":7,"type":"DropDownList","parentId":6,"style":{"enabled":true,"varName":"pdfSettingsDD","text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[150,0],"alignment":null,"selection":0,"helpTip":null}},"item-8":{"id":8,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":"pdfSettingsLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Preset","justify":"left","preferredSize":[60,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"expArtboardsGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-10":{"id":10,"type":"StaticText","parentId":9,"style":{"enabled":true,"varName":"expArtbordsLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Artboards","justify":"left","preferredSize":[60,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"EditText","parentId":9,"style":{"enabled":true,"varName":"setExportArtbordsTxt","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Set range...","justify":"left","preferredSize":[150,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"prefixGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-13":{"id":13,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"prefixLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Prefix","justify":"left","preferredSize":[60,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"EditText","parentId":12,"style":{"enabled":true,"varName":"prefixTxt","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Set prefix...","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"suffixGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-16":{"id":16,"type":"StaticText","parentId":15,"style":{"enabled":true,"varName":"suffixLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Suffix","justify":"left","preferredSize":[60,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"EditText","parentId":15,"style":{"enabled":true,"varName":"suffixTxt","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Set suffix...","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"dialogBtn","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-19":{"id":19,"type":"Button","parentId":63,"style":{"enabled":true,"varName":"cancelBtn","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":""}},"item-20":{"id":20,"type":"Button","parentId":63,"style":{"enabled":true,"varName":"canceok","text":"Export","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"Group","parentId":18,"style":{"enabled":true,"varName":"expProgressGrp","preferredSize":[350,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-25":{"id":25,"type":"Group","parentId":21,"style":{"enabled":true,"varName":"expInfoProgressGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-26":{"id":26,"type":"StaticText","parentId":25,"style":{"enabled":true,"varName":"blancoLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"","justify":"left","preferredSize":[75,0],"alignment":null,"helpTip":null}},"item-28":{"id":28,"type":"Group","parentId":21,"style":{"enabled":true,"varName":"expInfosTxtGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","fill"],"alignment":null}},"item-29":{"id":29,"type":"StaticText","parentId":28,"style":{"enabled":true,"varName":"blancoLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"","justify":"left","preferredSize":[75,0],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"StaticText","parentId":28,"style":{"enabled":true,"varName":"exportInfoLbl","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"12 Artbords from","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-31":{"id":31,"type":"Progressbar","parentId":25,"style":{"enabled":true,"varName":"progressBar","preferredSize":[50,4],"alignment":null,"helpTip":null}},"item-32":{"id":32,"type":"VerticalTabbedPanel","parentId":0,"style":{"enabled":true,"varName":"vertTabbedPnl","preferredSize":[0,0],"tabNavWidth":0,"margins":0,"alignment":null,"selection":33}},"item-33":{"id":33,"type":"Tab","parentId":32,"style":{"enabled":true,"varName":"exportSettingsTab","text":"Export    ","orientation":"column","spacing":10,"alignChildren":["fill","top"]}},"item-34":{"id":34,"type":"Tab","parentId":32,"style":{"enabled":true,"varName":"pdfSettingsTab","text":"Settings    ","orientation":"column","spacing":10,"alignChildren":["fill","top"]}},"item-35":{"id":35,"type":"Panel","parentId":34,"style":{"enabled":true,"varName":"pdfSettingsPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Options","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-59":{"id":59,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":"preserveEditiballityCHb","text":"Preserve Illustrator edtting capabilities","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-60":{"id":60,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":"embedThumbsCHb","text":"Embed Page Thumbnails","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-61":{"id":61,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":"createLayersCHb","text":"Create Acrobat Layers from Top-Level Layers","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-62":{"id":62,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":"optimizePdfCHb","text":"Optimize for Fast Web View","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-63":{"id":63,"type":"Group","parentId":18,"style":{"enabled":true,"varName":"dialogBtnGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}}},"order":[0,32,33,1,2,3,4,5,12,13,14,15,16,17,9,10,11,6,8,7,34,35,59,62,60,61,18,21,25,26,31,28,29,30,63,19,20],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":26}
*/ 

///////////////////////////////////////////
// TODO
// Fix prefix and suffix are not stored
///////////////////////////////////////////

///////////////////////////////////////////
// KEEPACHANGELOG

// 2023-08-22 v.0.0.6
// Fixed
// - Prefix and suffix was not saved to settings
// - Bleed was added as points, but not converted properly > WIP needs input value dropdown

///////////////////////////////////////////

// EXPORTDIALOG
// ============
var exportDialog = new Window("dialog"); 
    exportDialog.text = "Export Artboards to PDF v0.0.6"; 
    exportDialog.orientation = "column"; 
    exportDialog.alignChildren = ["fill","top"]; 
    exportDialog.spacing = 10; 
    exportDialog.margins = 16; 

// VERTTABBEDPNL
// =============
var vertTabbedPnl = exportDialog.add("group", undefined, undefined, {name: "vertTabbedPnl"}); 
    vertTabbedPnl.alignChildren = ["left","fill"]; 
var vertTabbedPnl_nav = vertTabbedPnl.add ("listbox", undefined, ['Export    ','Settings    ','Marks    ']); 
var vertTabbedPnl_innerwrap = vertTabbedPnl.add("group") 
    vertTabbedPnl_innerwrap.alignment = ["fill","fill"]; 
    vertTabbedPnl_innerwrap.orientation = ["stack"]; 

// EXPORTSETTINGSTAB
// =================
var exportSettingsTab = vertTabbedPnl_innerwrap.add("group", undefined, {name: "exportSettingsTab"}); 
    exportSettingsTab.text = "Export    "; 
    exportSettingsTab.orientation = "column"; 
    exportSettingsTab.alignChildren = ["fill","top"]; 
    exportSettingsTab.spacing = 10; 
    exportSettingsTab.margins = 0; 

// EXPORTSETTINGSPNL
// =================
var exportSettingsPnl = exportSettingsTab.add("panel", undefined, undefined, {name: "exportSettingsPnl"}); 
    exportSettingsPnl.text = "Options"; 
    exportSettingsPnl.orientation = "column"; 
    exportSettingsPnl.alignChildren = ["left","top"]; 
    exportSettingsPnl.spacing = 10; 
    exportSettingsPnl.margins = 16; 

// DESTFOLDERGRP
// =============
var destFolderGrp = exportSettingsPnl.add("group", undefined, {name: "destFolderGrp"}); 
    destFolderGrp.orientation = "row"; 
    destFolderGrp.alignChildren = ["left","fill"]; 
    destFolderGrp.spacing = 10; 
    destFolderGrp.margins = 0; 

var destFolderLbl = destFolderGrp.add("statictext", undefined, undefined, {name: "destFolderLbl"}); 
    destFolderLbl.text = "Folder"; 
    destFolderLbl.preferredSize.width = 70; 

var exportPathTxt = destFolderGrp.add('edittext {properties: {name: "exportPathTxt"}}'); 
    exportPathTxt.text = "Set export folder..."; 
    exportPathTxt.preferredSize.width = 250; 

var expFodlerBtn = destFolderGrp.add("button", undefined, undefined, {name: "expFodlerBtn"}); 
    expFodlerBtn.text = "Choose"; 

// PREFIXGRP
// =========
var prefixGrp = exportSettingsPnl.add("group", undefined, {name: "prefixGrp"}); 
    prefixGrp.orientation = "row"; 
    prefixGrp.alignChildren = ["left","fill"]; 
    prefixGrp.spacing = 10; 
    prefixGrp.margins = 0; 

var prefixLbl = prefixGrp.add("statictext", undefined, undefined, {name: "prefixLbl"}); 
    prefixLbl.text = "Prefix"; 
    prefixLbl.preferredSize.width = 70; 

var prefixTxt = prefixGrp.add('edittext {properties: {name: "prefixTxt"}}'); 
    prefixTxt.text = ""; 
    prefixTxt.preferredSize.width = 250; 

// SUFFIXGRP
// =========
var suffixGrp = exportSettingsPnl.add("group", undefined, {name: "suffixGrp"}); 
    suffixGrp.orientation = "row"; 
    suffixGrp.alignChildren = ["left","fill"]; 
    suffixGrp.spacing = 10; 
    suffixGrp.margins = 0; 

var suffixLbl = suffixGrp.add("statictext", undefined, undefined, {name: "suffixLbl"}); 
    suffixLbl.text = "Suffix"; 
    suffixLbl.preferredSize.width = 70; 

var suffixTxt = suffixGrp.add('edittext {properties: {name: "suffixTxt"}}'); 
    suffixTxt.text = ""; 
    suffixTxt.preferredSize.width = 250; 

// EXPARTBOARDSGRP
// ===============
var expArtboardsGrp = exportSettingsPnl.add("group", undefined, {name: "expArtboardsGrp"}); 
    expArtboardsGrp.orientation = "row"; 
    expArtboardsGrp.alignChildren = ["left","fill"]; 
    expArtboardsGrp.spacing = 10; 
    expArtboardsGrp.margins = 0; 

var expArtbordsLbl = expArtboardsGrp.add("statictext", undefined, undefined, {name: "expArtbordsLbl"}); 
    expArtbordsLbl.text = "Artboards"; 
    expArtbordsLbl.preferredSize.width = 70; 

var setExportArtbordsTxt = expArtboardsGrp.add('edittext {properties: {name: "setExportArtbordsTxt"}}'); 
    setExportArtbordsTxt.text = ""; //1, 2, 3
    setExportArtbordsTxt.preferredSize.width = 150; 
    setExportArtbordsTxt.helpTip = "Export specific Artboards or in Range. For example 1,4,6-8"; 

var expArtbordsTipLbl = expArtboardsGrp.add("statictext", undefined, undefined, {name: "expArtbordsTipLbl"}); 
    expArtbordsTipLbl.text = "i.e. 1,4,6-8"; 
    expArtbordsTipLbl.preferredSize.width = 100; 
    expArtbordsTipLbl.enabled = false; 

// PDFSETINGSGRP
// =============
var pdfSetingsGrp = exportSettingsPnl.add("group", undefined, {name: "pdfSetingsGrp"}); 
    pdfSetingsGrp.orientation = "row"; 
    pdfSetingsGrp.alignChildren = ["left","fill"]; 
    pdfSetingsGrp.spacing = 10; 
    pdfSetingsGrp.margins = 0; 

var pdfSettingsLbl = pdfSetingsGrp.add("statictext", undefined, undefined, {name: "pdfSettingsLbl"}); 
    pdfSettingsLbl.text = "PDF Preset"; 
    pdfSettingsLbl.preferredSize.width = 70; 

// var pdfSettingsDD_array = ["Item 1","-","Item 2"]; 

var pdfSettingsDD = pdfSetingsGrp.add("dropdownlist", undefined, undefined, {name: "pdfSettingsDD", items: getPDFpresetList()}); 
    pdfSettingsDD.selection = 0; 
    pdfSettingsDD.preferredSize.width = 150; 

// PDFSETTINGSTAB
// ==============
var pdfSettingsTab = vertTabbedPnl_innerwrap.add("group", undefined, {name: "pdfSettingsTab"}); 
    pdfSettingsTab.text = "Settings    "; 
    pdfSettingsTab.orientation = "column"; 
    pdfSettingsTab.alignChildren = ["fill","top"]; 
    pdfSettingsTab.spacing = 10; 
    pdfSettingsTab.margins = 0; 


// MARKSTAB
// ==============
var marksTab = vertTabbedPnl_innerwrap.add("group", undefined, {name: "marksTab"}); 
    marksTab.text = "Settings    "; 
    marksTab.orientation = "column"; 
    marksTab.alignChildren = ["fill","top"]; 
    marksTab.spacing = 10; 
    marksTab.margins = 0;    

// VERTTABBEDPNL
// =============
vertTabbedPnl_tabs = [exportSettingsTab,pdfSettingsTab, marksTab]; 

for (var i = 0; i < vertTabbedPnl_tabs.length; i++) { 
  vertTabbedPnl_tabs[i].alignment = ["fill","fill"]; 
  vertTabbedPnl_tabs[i].visible = false; 
} 

vertTabbedPnl_nav.onChange = showTab_vertTabbedPnl; 

function showTab_vertTabbedPnl() { 
  if ( vertTabbedPnl_nav.selection !== null ) { 
    for (var i = vertTabbedPnl_tabs.length-1; i >= 0; i--) { 
      vertTabbedPnl_tabs[i].visible = false; 
    } 
    vertTabbedPnl_tabs[vertTabbedPnl_nav.selection.index].visible = true; 
  } 
} 

// vertTabbedPnl_nav.selection = 0; 
// showTab_vertTabbedPnl() 

// PDFSETTINGSPNL
// ==============
var pdfSettingsPnl = pdfSettingsTab.add("panel", undefined, undefined, {name: "pdfSettingsPnl"}); 
    pdfSettingsPnl.text = "Options"; 
    pdfSettingsPnl.orientation = "column"; 
    pdfSettingsPnl.alignChildren = ["left","top"]; 
    pdfSettingsPnl.spacing = 10; 
    pdfSettingsPnl.margins = 16; 

var preserveEditiballityCHb = pdfSettingsPnl.add("checkbox", undefined, undefined, {name: "preserveEditiballityCHb"}); 
    preserveEditiballityCHb.text = "Preserve Illustrator edtting capabilities"; 

var optimizePdfCHb = pdfSettingsPnl.add("checkbox", undefined, undefined, {name: "optimizePdfCHb"}); 
    optimizePdfCHb.text = "Optimize for Fast Web View"; 

var embedThumbsCHb = pdfSettingsPnl.add("checkbox", undefined, undefined, {name: "embedThumbsCHb"}); 
    embedThumbsCHb.text = "Embed Page Thumbnails"; 

var createLayersCHb = pdfSettingsPnl.add("checkbox", undefined, undefined, {name: "createLayersCHb"}); 
    createLayersCHb.text = "Create Acrobat Layers from Top-Level Layers"; 

// BLEEDPNL
// ========
var bleedPnl = pdfSettingsTab.add("panel", undefined, undefined, {name: "bleedPnl"}); 
    bleedPnl.text = "Bleed"; 
    bleedPnl.orientation = "column"; 
    bleedPnl.alignChildren = ["left","top"]; 
    bleedPnl.spacing = 10; 
    bleedPnl.margins = 16; 

// Doesnt work in script
// var useDocBleedChb = bleedPnl.add("checkbox", undefined, undefined, {name: "useDocBleedChb"}); 
//     useDocBleedChb.text = "Use Document Bleed Settings"; 

// BLEEDINPUTGRP
// =============
var bleedInputGrp = bleedPnl.add("group", undefined, {name: "bleedInputGrp"}); 
    bleedInputGrp.orientation = "row"; 
    bleedInputGrp.alignChildren = ["left","center"]; 
    bleedInputGrp.spacing = 10; 
    bleedInputGrp.margins = 0; 

// BLEEDLCOLGRP
// ============
var bleedLColGrp = bleedInputGrp.add("group", undefined, {name: "bleedLColGrp"}); 
    bleedLColGrp.orientation = "column"; 
    bleedLColGrp.alignChildren = ["left","center"]; 
    bleedLColGrp.spacing = 10; 
    bleedLColGrp.margins = 0; 

// BLEEDLEFTGRP
// ============
var bleedLeftGrp = bleedLColGrp.add("group", undefined, {name: "bleedLeftGrp"}); 
    bleedLeftGrp.orientation = "row"; 
    bleedLeftGrp.alignChildren = ["left","center"]; 
    bleedLeftGrp.spacing = 10; 
    bleedLeftGrp.margins = 0; 

var bleedTopLbl = bleedLeftGrp.add("statictext", undefined, undefined, {name: "bleedTopLbl"}); 
    bleedTopLbl.text = "Top"; 
    bleedTopLbl.preferredSize.width = 48; 

var bleedTopTxt = bleedLeftGrp.add('edittext {properties: {name: "bleedTopTxt"}}'); 
    bleedTopTxt.preferredSize.width = 60; 

// BLEEDBOTTOMGRP
// ==============
var bleedBottomGrp = bleedLColGrp.add("group", undefined, {name: "bleedBottomGrp"}); 
    bleedBottomGrp.orientation = "row"; 
    bleedBottomGrp.alignChildren = ["left","center"]; 
    bleedBottomGrp.spacing = 10; 
    bleedBottomGrp.margins = 0; 

var bleedBottomLbl = bleedBottomGrp.add("statictext", undefined, undefined, {name: "bleedBottomLbl"}); 
    bleedBottomLbl.text = "Bottom"; 
    bleedBottomLbl.preferredSize.width = 48; 

var bleedBottomTxt = bleedBottomGrp.add('edittext {properties: {name: "bleedBottomTxt"}}'); 
    bleedBottomTxt.preferredSize.width = 60; 

// BLEEDMIDDLECOLGRP
// =================
var bleedMiddleColGrp = bleedInputGrp.add("group", undefined, {name: "bleedMiddleColGrp"}); 
    bleedMiddleColGrp.preferredSize.width = 100; 
    bleedMiddleColGrp.preferredSize.height = 60; 
    bleedMiddleColGrp.orientation = "column"; 
    bleedMiddleColGrp.alignChildren = ["center","center"]; 
    bleedMiddleColGrp.spacing = 10; 
    bleedMiddleColGrp.margins = 0; 

var contrainBleedBtn_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%07IDATx%C3%9A%C3%AC%C2%96%C3%BD%0D%C2%83%20%10%C3%85%C3%85t%00Fp%04Gh7p%04%C2%BBA%3B%C2%89%23t%C2%85n%C2%A0%1B%C3%98%11%C2%BA%C2%81n%40%1F%0D%C2%B4h%3DA%22%C3%B8G%7D%C3%89%C2%8B%17%14%7F%7C%C3%9C%11%C2%98%C2%80%C2%92%0D%C2%94%26%1B%C3%A9%60%C3%84W%C3%B8%11%C2%98%C2%97%C3%83%C3%95%3B%12_%1D%5Dz%C3%A2%C2%BB%1C%C3%A6%3ET%C3%89%C3%90%C2%B0tA%C2%A7%02%C3%AE%10%C2%B6p%C2%87%C3%B8%C3%A6%3B%00%C3%A7%19%C3%A3%5D%26%C2%A1%C3%A2WU%C3%A8%19%170'%C3%9A7%C3%89j%1E%1A%7C_%C3%98%C2%BE%0E%C2%981%C3%B6%C3%84%C3%A3%0C%C3%B7Fs%C2%A3J0%5Cr%19%C3%9Fr%C2%95%20Y%C2%B4rR3%C3%AF%C3%A1F%C2%AD%C2%809%C2%98Z%C3%96w%C2%B4%C3%A4Ru%5C%C3%83r%C2%B5%16%C3%81S%C3%8B%C2%8F%2B%C2%B8%C2%B4%40s%23%C3%83%C3%9D%C3%A1%C3%94%1E%C2%AB%C2%93I%C2%AB%C2%9C%C3%98%C3%ABVL%C2%AB%C2%A3%C3%A0%C3%A6%1EO%C2%82G%C3%90%01%C3%9C%02%C2%9D%C2%85%C3%8F%C2%82%09%C2%A8%C3%96%C3%85%01J%C3%82I%C2%B0%05%C3%AA%C2%A3%01%C2%9C%02%C2%B7%22%C2%8C%3Ep%13%C3%8C%22%5D%7D%C3%A4%C2%89w%C3%92%C2%99%1F%C3%B3%C3%AA3.%C2%BD%C2%84%C3%BD%C3%9Deo%07%C3%AF%C3%A0%1D%C2%BC%C2%9A%5E%02%0C%00u%C2%82%C2%98%3D%C3%8A%C2%8D%C3%B4%C2%B0%00%00%00%00IEND%C2%AEB%60%C2%82"; 
// var contrainBleedBtn = bleedMiddleColGrp.add("image", undefined, File.decode(contrainBleedBtn_imgString), {name: "contrainBleedBtn"}); 
// var contrainBleedBtn = bleedMiddleColGrp.add ("iconbutton", undefined, File.decode(contrainBleedBtn_imgString), {name: "contrainBleedBtn"}, {style: "toolbutton"}); // b
// var contrainBleedBtn = bleedMiddleColGrp.add ("iconbutton", undefined, File.decode(contrainBleedBtn_imgString), {name: "contrainBleedBtn"}, {style: "toolbutton", toggle: true}); // b
//     contrainBleedBtn.helpTip = "Contrain Width and Height Proportions"; 


// BLEEDRCOLGRP
// ============
var bleedRColGrp = bleedInputGrp.add("group", undefined, {name: "bleedRColGrp"}); 
    bleedRColGrp.orientation = "column"; 
    bleedRColGrp.alignChildren = ["left","center"]; 
    bleedRColGrp.spacing = 10; 
    bleedRColGrp.margins = 0; 

// BLEEDRGRP
// =========
var bleedRGrp = bleedRColGrp.add("group", undefined, {name: "bleedRGrp"}); 
    bleedRGrp.orientation = "row"; 
    bleedRGrp.alignChildren = ["left","center"]; 
    bleedRGrp.spacing = 10; 
    bleedRGrp.margins = 0; 

var bleedLeftLbl = bleedRGrp.add("statictext", undefined, undefined, {name: "bleedLeftLbl"}); 
    bleedLeftLbl.text = "Left"; 
    bleedLeftLbl.preferredSize.width = 48; 

var bleedLeftTxt = bleedRGrp.add('edittext {properties: {name: "bleedLeftTxt"}}'); 
    bleedLeftTxt.preferredSize.width = 60; 

// BLEEDRIGHTGRP
// =============
var bleedRightGrp = bleedRColGrp.add("group", undefined, {name: "bleedRightGrp"}); 
    bleedRightGrp.orientation = "row"; 
    bleedRightGrp.alignChildren = ["left","center"]; 
    bleedRightGrp.spacing = 10; 
    bleedRightGrp.margins = 0; 

var bleedRightLbl = bleedRightGrp.add("statictext", undefined, undefined, {name: "bleedRightLbl"}); 
    bleedRightLbl.text = "Right"; 
    bleedRightLbl.preferredSize.width = 48; 

var bleedRightTxt = bleedRightGrp.add('edittext {properties: {name: "bleedRightTxt"}}'); 
    bleedRightTxt.preferredSize.width = 60; 



// MARKSPNL
// ========
var marksPnl = marksTab.add("panel", undefined, undefined, {name: "marksPnl"}); 
    marksPnl.text = "Marks"; 
    marksPnl.orientation = "column"; 
    marksPnl.alignChildren = ["left","top"]; 
    marksPnl.spacing = 10; 
    marksPnl.margins = 16; 

var allPrinterMarksChb = marksPnl.add("checkbox", undefined, undefined, {name: "allPrinterMarksChb"}); 
    allPrinterMarksChb.text = "All Printer's Marks"; 

// PRINTERMARKSSUBGRP
// ==================
var printerMarksSubGrp = marksPnl.add("group", undefined, {name: "printerMarksSubGrp"}); 
    printerMarksSubGrp.orientation = "column"; 
    printerMarksSubGrp.alignChildren = ["left","center"]; 
    printerMarksSubGrp.spacing = 5; 
    printerMarksSubGrp.margins = [10,0,0,0]; 

// TRIMMARKSGRP
// ============
var trimMarksGrp = printerMarksSubGrp.add("group", undefined, {name: "trimMarksGrp"}); 
    trimMarksGrp.orientation = "row"; 
    trimMarksGrp.alignChildren = ["left","center"]; 
    trimMarksGrp.spacing = 10; 
    trimMarksGrp.margins = 0; 

var trimMarksChb = trimMarksGrp.add("checkbox", undefined, undefined, {name: "trimMarksChb"}); 
    trimMarksChb.text = "Trim Marks"; 
    trimMarksChb.preferredSize.width = 135; 

var printerMarkTypeLbl = trimMarksGrp.add("statictext", undefined, undefined, {name: "printerMarkTypeLbl"}); 
    printerMarkTypeLbl.text = "Printer Mark Type"; 

var printerMarkTypeDropDown_array = ["Roman","Japanse"]; 
var printerMarkTypeDropDown = trimMarksGrp.add("dropdownlist", undefined, undefined, {name: "printerMarkTypeDropDown", items: printerMarkTypeDropDown_array}); 
    printerMarkTypeDropDown.selection = 0; 

// REGISTRATIONMARKGRP
// ===================
var registrationMarkGrp = printerMarksSubGrp.add("group", undefined, {name: "registrationMarkGrp"}); 
    registrationMarkGrp.orientation = "row"; 
    registrationMarkGrp.alignChildren = ["left","center"]; 
    registrationMarkGrp.spacing = 10; 
    registrationMarkGrp.margins = 0; 

var registrationMarksChb = registrationMarkGrp.add("checkbox", undefined, undefined, {name: "registrationMarksChb"}); 
    registrationMarksChb.text = "Registration Marks"; 
    registrationMarksChb.preferredSize.width = 135;

var trimMarkWeightLbl = registrationMarkGrp.add("statictext", undefined, undefined, {name: "trimMarkWeightLbl"}); 
    trimMarkWeightLbl.text = "Trim Mark Weight"; 

var trimMarkWeightDropDown_array = ["0.125 pt","0.25 pt", "0.50 pt"]; 
var trimMarkWeightDropDown = registrationMarkGrp.add("dropdownlist", undefined, undefined, {name: "trimMarkWeight", items: trimMarkWeightDropDown_array}); 
    trimMarkWeightDropDown.selection = 0; 

// PRINTERMARKSSUBGRP
// ==================
// REGISTRATIONMARKGRP
// ===================
var colorBarsGrp = printerMarksSubGrp.add("group", undefined, {name: "colorBarsGrp"}); 
    colorBarsGrp.orientation = "row"; 
    colorBarsGrp.alignChildren = ["left","center"]; 
    colorBarsGrp.spacing = 10; 
    colorBarsGrp.margins = 0; 

var colorBarsChb = colorBarsGrp.add("checkbox", undefined, undefined, {name: "colorBarsChb"}); 
    colorBarsChb.text = "Color Bars";
    colorBarsChb.preferredSize.width = 135;  

var trimMarkOffsetLbl = colorBarsGrp.add("statictext", undefined, undefined, {name: "trimMarkOffsetLbl"}); 
    trimMarkOffsetLbl.text = "Offset"; 
    trimMarkOffsetLbl.preferredSize.width = 102;  

var trimMarkOffsetTxt = colorBarsGrp.add('edittext {properties: {name: "trimMarkOffsetTxt"}}'); 
    trimMarkOffsetTxt.preferredSize.width = 60; 


var pageInformationChb = printerMarksSubGrp.add("checkbox", undefined, undefined, {name: "pageInformationChb"}); 
    pageInformationChb.text = "Page Information"; 


// DIALOGBTN
// =========
var dialogBtn = exportDialog.add("group", undefined, {name: "dialogBtn"}); 
    dialogBtn.orientation = "row"; 
    dialogBtn.alignChildren = ["left","fill"]; 
    dialogBtn.spacing = 10; 
    dialogBtn.margins = 0; 

// EXPPROGRESSGRP
// ==============
var expProgressGrp = dialogBtn.add("group", undefined, {name: "expProgressGrp"}); 
    expProgressGrp.preferredSize.width = 350; 
    expProgressGrp.orientation = "column"; 
    expProgressGrp.alignChildren = ["left","top"]; 
    expProgressGrp.spacing = 10; 
    expProgressGrp.margins = 0; 

// EXPINFOPROGRESSGRP
// ==================
var expInfoProgressGrp = expProgressGrp.add("group", undefined, {name: "expInfoProgressGrp"}); 
    expInfoProgressGrp.orientation = "row"; 
    expInfoProgressGrp.alignChildren = ["left","fill"]; 
    expInfoProgressGrp.spacing = 10; 
    expInfoProgressGrp.margins = 0; 

var blancoLbl = expInfoProgressGrp.add("statictext", undefined, undefined, {name: "blancoLbl"}); 
    blancoLbl.preferredSize.width = 75; 

var progressBar = expInfoProgressGrp.add("progressbar", undefined, undefined, {name: "progressBar"}); 
    progressBar.maxvalue = 100; 
    progressBar.value = 0; 
    progressBar.preferredSize.width = 250; 
    progressBar.preferredSize.height = 4; 
    progressBar.visible = false;

// EXPINFOSTXTGRP
// ==============
var expInfosTxtGrp = expProgressGrp.add("group", undefined, {name: "expInfosTxtGrp"}); 
    expInfosTxtGrp.orientation = "row"; 
    expInfosTxtGrp.alignChildren = ["center","fill"]; 
    expInfosTxtGrp.spacing = 10; 
    expInfosTxtGrp.margins = 0; 

var blancoLbl1 = expInfosTxtGrp.add("statictext", undefined, undefined, {name: "blancoLbl1"}); 
    blancoLbl1.preferredSize.width = 75; 

var exportInfoLbl = expInfosTxtGrp.add("statictext", undefined, undefined, {name: "exportInfoLbl"}); 
    exportInfoLbl.text = ""; 
    exportInfoLbl.alignment = ["center","fill"]; 
    exportInfoLbl.preferredSize.width = 250; 

// DIALOGBTNGRP
// ============
var dialogBtnGrp = dialogBtn.add("group", undefined, {name: "dialogBtnGrp"}); 
    dialogBtnGrp.orientation = "row"; 
    dialogBtnGrp.alignChildren = ["left","center"]; 
    dialogBtnGrp.spacing = 10; 
    dialogBtnGrp.margins = 0; 

var cancelBtn = dialogBtnGrp.add("button", undefined, undefined, {name: "cancelBtn"}); 
    cancelBtn.text = "Cancel"; 

var okBtn = dialogBtnGrp.add("button", undefined, undefined, {name: "okBtn"}); 
    okBtn.text = "Export"; 



/////////////////////////////////////////////////
//
// Functions exportInfo 
//
/////////////////////////////////////////////////
var docRef = app.activeDocument;
var num_exported = 0;
var num_to_export = 0;
var destFolder = new Object;
var num_artboards_to_export = 0;
var num_to_export = num_artboards_to_export;
var destPath;
var pdfPreset;
var progressVisible = Boolean(false);

// https://stackoverflow.com/questions/67616241/how-to-store-ranges-of-numbers-separted-by-comma-and-hyphen-in-an-array
// For Each m As Match In matches
//     If m.Value.Contains("-") Then
//         Dim parts = m.Value.Split("-"c).Select(Function(s) Integer.Parse(s)).ToArray()
//         Dim nStart As Integer = Math.Min(parts(0), parts(1))
//         Dim nEnd As Integer = Math.Max(parts(0), parts(1))
//         numbers.AddRange(Enumerable.Range(nStart, nEnd - nStart + 1))
//     Else
//         numbers.Add(Integer.Parse(m.Value))
//     End If
// Next

function exportArtboardsArray(arrayAB){
    // var array = arrayAB; //"1,2,3,5-10";
    var list = arrayAB.toString().split(',');
    var exportArtboards = [];
    for (i=0; i < list.length; i++){
        if (list[i].toString().indexOf("-")!=-1){
            rangeList = list[i].split("-")
            var startRange = Number(rangeList[0]);
            var endRange = Number(rangeList[1]);
            for(j=startRange;j< endRange+1; j++){
                exportArtboards.push(j)
            }
        } else {
            exportArtboards.push(list[i])
        }
    }
    return exportArtboards
}

// get destination folder
function setDestFolder() {
    return Folder.selectDialog();
}

// Get PDF preset list
function getPDFpresetList() {
    var pdfPresets = [];
    // pdfPresetsPDFDropdown.add("item", "yes")
    for (i = 0; i < app.PDFPresetsList.length; i++) {
        // Somehow illustrator need push and not add like photoshop uses to populate list??
        pdfPresets.push(app.PDFPresetsList[i])
    }
    return pdfPresets
}

function exportPDF(){
    progressBar.visible = true;
    exportDialog.update();

    var expArtboards = [];
    this.pdfPreset = pdfSettingsDD.selection;
    var prefix = prefixTxt.text;
    var suffix = suffixTxt.text;
    // var abs = get_num_artboards_to_export(setExportArtbordsTxt.text).toString().split(',');
    // var abs = get_num_artboards_to_export(setExportArtbordsTxt.text);
    var abs = exportArtboardsArray(setExportArtbordsTxt.text)
    // destFolder = exportPathTxt.text;
    // alert(abs)
    // alert(destFolder)
    // alert(abs.length)
    num_to_export = abs.length;
    for ( var i = 0; i < abs.length; i++ ) {
        var abIndex = abs[i]-1;//abs[i]-1; // correct artboard array starts at zer0
        // alert(abIndex)
        docRef.artboards.setActiveArtboardIndex(abIndex);
        // alert(docRef.artboards[docRef.artboards.getActiveArtboardIndex()])
        // alert(docRef.artboards[docRef.artboards.getActiveArtboardIndex()].name)
        var activeAB = docRef.artboards[docRef.artboards.getActiveArtboardIndex()];
        savePDF(destFolder, prefix, suffix, activeAB, abIndex, pdfPreset)
    
        num_exported++;
                    
        exportInfoLbl.text = 'Exported ' + num_exported + ' of ' + num_to_export;
        // progBar.size = [20,10]
        progressBar.value = num_exported / num_to_export * 100;
        
        exportDialog.update();

    }
    if (progressBar.value == 100){
        progressBar.visible = false;
        exportDialog.close()
    }
}

okBtn.onClick = function() {
    // alert("export")
    exportPDF()
    writeSettings()
}
expFodlerBtn.onClick = function() {
    destFolder = setDestFolder();
    exportPathTxt.text = destFolder;
}
function getArtboardsRange(){
    num_artboards_to_export = exportArtboardsArray(setExportArtbordsTxt.text).length; //get_num_artboards_to_export(setExportArtbordsTxt.text);
    num_to_export = num_artboards_to_export;
    exportInfoLbl.text = num_to_export + " Artboards will be exported"
}
setExportArtbordsTxt.onChange = function() {
    getArtboardsRange()
}

// Bleed Tab
var allPrinterMark = Boolean(false);
function setAllPrinterMarks(){
    if(allPrinterMark){
        registrationMarksChb.value = trimMarksChb.value = colorBarsChb.value = pageInformationChb.value = allPrinterMarksChb.value = allPrinterMark;
    }
    allPrinterMark = allPrinterMark != true;
    // printerMarksSubGrp.enabled = !allPrinterMark

}
allPrinterMarksChb.onClick = function() {
    if(!allPrinterMark){
        registrationMarksChb.value = trimMarksChb.value = colorBarsChb.value = pageInformationChb.value = allPrinterMarksChb.value = allPrinterMark;
    }
    setAllPrinterMarks()
}
function checkAllPrinterMarksChb(event){
    if(!event.value){
        allPrinterMarksChb.value = false;
        allPrinterMark = false
    }
}
trimMarksChb.onClick = function(){
    checkAllPrinterMarksChb(this)
}
registrationMarksChb.onClick = function(){
    checkAllPrinterMarksChb(this)
}
colorBarsChb.onClick = function(){
    checkAllPrinterMarksChb(this)
}
pageInformationChb.onClick = function(){
    checkAllPrinterMarksChb(this)
}

function stringToBoolean(string){
    try{
        if (string=="true") return true
        if (string=="false") return false
    } catch (e) {
        alert("stringToBoolean() error: "+e)
    }
}

function stringToNumber(string){
    try {
        // alert(parseInt(string)+" "+string)
        return parseInt(string)
    } catch (e) {
        alert("stringToNumber() error: "+e)
    }
}


function getTrimMarkType(index){
    switch (stringToNumber(index)) {
        case 0:
            index = PageMarksTypes.Roman;
            break;
        case 1:
            index = PageMarksTypes.Japanese;
            break;
        default:
            index = PageMarksTypes.Roman;
            break;
    }
    return index
}
function getTrimMarkWeight(index){
    switch(stringToNumber(index)){
        case 0:
            index = PDFTrimMarkWeight.TRIMMARKWEIGHT0125;
            break;
        case 1:
            index = PDFTrimMarkWeight.TRIMMARKWEIGHT025;
            break;
        case 3:
            index = PDFTrimMarkWeight.TRIMMARKWEIGHT05;
            break;
        default:
            index = PDFTrimMarkWeight.TRIMMARKWEIGHT0125;
            break;
    }
    return index
}

function savePDF(destFolder, prefix, suffix, activeAB, abIndex, pdfPreset){
    var saveOptions = new PDFSaveOptions();
    // saveOptions.compatibility = PDFCompatibility.ACROBAT6;
    // var pdfProfileAI = "[PDF/X-4:2008]";
    saveOptions.pDFPreset = pdfPreset; //pdfProfileAI; //? checkPresets(true, pdfProfileAI) : "[High Quality Print]";
    saveOptions.generateThumbnails = embedThumbsCHb.value;
    saveOptions.preserveEditiballityCHb = optimizePdfCHb.value;
    saveOptions.preserveEditability = preserveEditiballityCHb.value;
    saveOptions.acrobatLayers = createLayersCHb.value;
    saveOptions.artboardRange = (abIndex+1).toString();// "15,16";//
    
    // Marks
    saveOptions.registrationMarks = registrationMarksChb.value;
    saveOptions.trimMarks = trimMarksChb.value;
    saveOptions.trimMarkWeight = getTrimMarkWeight(trimMarkWeightDropDown.selection.index); //PDFTrimMarkWeight.TRIMMARKWEIGHT0125; //trimMarkWeightDropDown.selection //
    saveOptions.pageMarksType = getTrimMarkType(printerMarkTypeDropDown.selection.index); //printerMarkTypeDropDown.selection; //PageMarksTypes.Roman;//PageMarksTypes.Japanese;
    saveOptions.offset = trimMarkOffsetTxt.text; //10; // offset trimmarks
    saveOptions.colorBars = colorBarsChb.value;
    saveOptions.pageInformation = pageInformationChb.value;

    // saveOptions.trapped = false;
    // bleed
    // bleedLink wont work without knowing doc bleed settings
    // saveOptions.bleedLink = true;
    // saveOptions.bleedLink = Boolean(useDocBleedChb.value);
    
    // Wrong return, returns points > input points not mm
    var left = Number(convertToUnit(bleedLeftTxt.text, "pt"));
    var top =  Number(convertToUnit(bleedTopTxt.text, "pt"));
    var right = Number(convertToUnit(bleedRightTxt.text, "pt"));
    var bottom = Number(convertToUnit(bleedBottomTxt.text, "pt"));
    saveOptions.bleedOffsetRect = [left,top,right,bottom]; // L T R B

    // var left = convertBleed(bleedLeftTxt.text);
    // var top =  convertBleed(bleedTopTxt.text);
    // var right = convertBleed(bleedRightTxt.text);
    // var bottom = convertBleed(bleedBottomTxt.text);

    // var left = convertBleed(bleedLeftTxt.text)
    // alert(convertBleed(bleedLeftTxt.text))
    // alert(left["mm"])
    // var l = left["mm"];
    // var t = top["mm"];
    // var r = right["mm"];
    // var b = bottom["mm"];
    // saveOptions.bleedOffsetRect = [l,t,r,b]; // L T R B

    // alert(convertToUnit(bleedLeftTxt.text, "pt"))
    // saveOptions.bleedOffsetRect = [10];
    // saveOptions.bleedOffsetRect.0 = 10,
    // saveOptions.bleedOffsetRect.1 = 10,
    // saveOptions.bleedOffsetRect.2 = 10,
    // saveOptions.bleedOffsetRect.3 = 10;


    // alert(useDocBleedChb.value)
    // saveOptions.bleedOffsetRect = [Number(convertToUnit(bleedLeftTxt.text, "mm")),0,0,0];
    // saveOptions.bleedOffsetRect = [convertToUnit(Number(bleedLeftTxt.text), "mm"),convertToUnit(3, "mm"),convertToUnit(3, "mm"),convertToUnit(3, "mm")];

    
    prefix = prefix == "" ? "" : prefix+"-";
    suffix = suffix == "" ? "" : "-"+suffix;
    // alert(destFolder)
    // alert(saveOptions.artboardRange)
    // alert(suffix)
    // alert(activeAB)
    // alert(abIndex)
    // alert(pdfPreset)
    // alert(activeAB.name)
    destPath = new File(destFolder +'/'+ prefix+activeAB.name+suffix+".pdf");
    // var destPath = new File(destFolder +'/'+ activeAB.name);
    // alert(destPath)
    getSettings()
    docRef.saveAs( destPath, saveOptions );
}

function get_num_artboards_to_export(arrayString) {
    var len = exportArtboardsArray(arrayString);
    // alert(len)
    // alert(len[0])
    // alert(len.length)
    for (var i = 0; i < len.length; i++ ) {
            // var ab = len[i]
            // var artboardName = docRef.artboards[i].name;
            // alert(artboardName)
            // if ( ! ( artboardName.match(  /^artboard/i ) || artboardName.match( /^\-/ ) )){
            //     num_to_export++;
            // }
            num_to_export++;
    } 
    return num_to_export;
}

//////////////////////////////////////////////////
//
// PDF SETTINGS Buttons
//
//////////////////////////////////////////////////
// var dir = "" + File($.fileName).path + "/img/";  
// var icons =  { normal: File(dir + "painel_icon.png"),  
//                disable: File(dir + "painel_icon.png"),   
//                pressed: File(dir + "painel_icon3.png"),   
//                rollover: File(dir + "painel_icon2.png")  
// };  

// Keep Propportions Icon
var activeIcon = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x02\x00\x00\x00\u00FDoH\u00C3\x00\x00\nCiCCPICC profile\x00\x00x\u00DA\u009DSwX\u0093\u00F7\x16>\u00DF\u00F7e\x0FVB\u00D8\u00F0\u00B1\u0097l\u0081\x00\"#\u00AC\b\u00C8\x10Y\u00A2\x10\u0092\x00a\u0084\x10\x12@\u00C5\u0085\u0088\nV\x14\x15\x11\u009CHU\u00C4\u0082\u00D5\nH\u009D\u0088\u00E2\u00A0(\u00B8gA\u008A\u0088Z\u008BU\\8\u00EE\x1F\u00DC\u00A7\u00B5}z\u00EF\u00ED\u00ED\u00FB\u00D7\u00FB\u00BC\u00E7\u009C\u00E7\u00FC\u00CEy\u00CF\x0F\u0080\x11\x12&\u0091\u00E6\u00A2j\x009R\u0085<:\u00D8\x1F\u008FOH\u00C4\u00C9\u00BD\u0080\x02\x15H\u00E0\x04 \x10\u00E6\u00CB\u00C2g\x05\u00C5\x00\x00\u00F0\x03yx~t\u00B0?\u00FC\x01\u00AFo\x00\x02\x00p\u00D5.$\x12\u00C7\u00E1\u00FF\u0083\u00BAP&W\x00 \u0091\x00\u00E0\"\x12\u00E7\x0B\x01\u0090R\x00\u00C8.T\u00C8\x14\x00\u00C8\x18\x00\u00B0S\u00B3d\n\x00\u0094\x00\x00ly|B\"\x00\u00AA\r\x00\u00EC\u00F4I>\x05\x00\u00D8\u00A9\u0093\u00DC\x17\x00\u00D8\u00A2\x1C\u00A9\b\x00\u008D\x01\x00\u0099(G$\x02@\u00BB\x00`U\u0081R,\x02\u00C0\u00C2\x00\u00A0\u00AC@\".\x04\u00C0\u00AE\x01\u0080Y\u00B62G\x02\u0080\u00BD\x05\x00v\u008EX\u0090\x0F@`\x00\u0080\u0099B,\u00CC\x00 8\x02\x00C\x1E\x13\u00CD\x03 L\x03\u00A00\u00D2\u00BF\u00E0\u00A9_p\u0085\u00B8H\x01\x00\u00C0\u00CB\u0095\u00CD\u0097K\u00D23\x14\u00B8\u0095\u00D0\x1Aw\u00F2\u00F0\u00E0\u00E2!\u00E2\u00C2l\u00B1Ba\x17)\x10f\t\u00E4\"\u009C\u0097\u009B#\x13H\u00E7\x03L\u00CE\f\x00\x00\x1A\u00F9\u00D1\u00C1\u00FE8?\u0090\u00E7\u00E6\u00E4\u00E1\u00E6f\u00E7l\u00EF\u00F4\u00C5\u00A2\u00FEk\u00F0o\">!\u00F1\u00DF\u00FE\u00BC\u008C\x02\x04\x00\x10N\u00CF\u00EF\u00DA_\u00E5\u00E5\u00D6\x03p\u00C7\x01\u00B0u\u00BFk\u00A9[\x00\u00DAV\x00h\u00DF\u00F9]3\u00DB\t\u00A0Z\n\u00D0z\u00F9\u008By8\u00FC@\x1E\u009E\u00A1P\u00C8<\x1D\x1C\n\x0B\x0B\u00ED%b\u00A1\u00BD0\u00E3\u008B>\u00FF3\u00E1o\u00E0\u008B~\u00F6\u00FC@\x1E\u00FE\u00DBz\u00F0\x00q\u009A@\u0099\u00AD\u00C0\u00A3\u0083\u00FDqanv\u00AER\u008E\u00E7\u00CB\x04B1n\u00F7\u00E7#\u00FE\u00C7\u0085\x7F\u00FD\u008E)\u00D1\u00E24\u00B1\\,\x15\u008A\u00F1X\u0089\u00B8P\"M\u00C7y\u00B9R\u0091D!\u00C9\u0095\u00E2\x12\u00E9\x7F2\u00F1\x1F\u0096\u00FD\t\u0093w\r\x00\u00AC\u0086O\u00C0N\u00B6\x07\u00B5\u00CBl\u00C0~\u00EE\x01\x02\u008B\x0EX\u00D2v\x00@~\u00F3-\u008C\x1A\x0B\u0091\x00\x10g42y\u00F7\x00\x00\u0093\u00BF\u00F9\u008F@+\x01\x00\u00CD\u0097\u00A4\u00E3\x00\x00\u00BC\u00E8\x18\\\u00A8\u0094\x17L\u00C6\b\x00\x00D\u00A0\u0081*\u00B0A\x07\f\u00C1\x14\u00AC\u00C0\x0E\u009C\u00C1\x1D\u00BC\u00C0\x17\x02a\x06D@\f$\u00C0<\x10B\x06\u00E4\u0080\x1C\n\u00A1\x18\u0096A\x19T\u00C0:\u00D8\x04\u00B5\u00B0\x03\x1A\u00A0\x11\u009A\u00E1\x10\u00B4\u00C118\r\u00E7\u00E0\x12\\\u0081\u00EBp\x17\x06`\x18\u009E\u00C2\x18\u00BC\u0086\t\x04A\u00C8\b\x13a!:\u0088\x11b\u008E\u00D8\"\u00CE\b\x17\u0099\u008E\x04\"aH4\u0092\u0080\u00A4 \u00E9\u0088\x14Q\"\u00C5\u00C8r\u00A4\x02\u00A9Bj\u0091]H#\u00F2-r\x149\u008D\\@\u00FA\u0090\u00DB\u00C8 2\u008A\u00FC\u008A\u00BCG1\u0094\u0081\u00B2Q\x03\u00D4\x02u@\u00B9\u00A8\x1F\x1A\u008A\u00C6\u00A0s\u00D1t4\x0F]\u0080\u0096\u00A2k\u00D1\x1A\u00B4\x1E=\u0080\u00B6\u00A2\u00A7\u00D1K\u00E8ut\x00}\u008A\u008Ec\u0080\u00D11\x0Ef\u008C\u00D9a\\\u008C\u0087E`\u0089X\x1A&\u00C7\x16c\u00E5X5V\u008F5c\x1DX7v\x15\x1B\u00C0\u009Ea\u00EF\b$\x02\u008B\u0080\x13\u00EC\b^\u0084\x10\u00C2l\u0082\u0090\u0090GXLXC\u00A8%\u00EC#\u00B4\x12\u00BA\bW\t\u0083\u00841\u00C2'\"\u0093\u00A8O\u00B4%z\x12\u00F9\u00C4xb:\u00B1\u0090XF\u00AC&\u00EE!\x1E!\u009E%^'\x0E\x13_\u0093H$\x0E\u00C9\u0092\u00E4N\n!%\u00902I\x0BIkH\u00DBH-\u00A4S\u00A4>\u00D2\x10i\u009CL&\u00EB\u0090m\u00C9\u00DE\u00E4\b\u00B2\u0080\u00AC \u0097\u0091\u00B7\u0090\x0F\u0090O\u0092\u00FB\u00C9\u00C3\u00E4\u00B7\x14:\u00C5\u0088\u00E2L\t\u00A2$R\u00A4\u0094\x12J5e?\u00E5\x04\u00A5\u009F2B\u0099\u00A0\u00AAQ\u00CD\u00A9\u009E\u00D4\b\u00AA\u0088:\u009FZIm\u00A0vP/S\u0087\u00A9\x134u\u009A%\u00CD\u009B\x16C\u00CB\u00A4-\u00A3\u00D5\u00D0\u009Aigi\u00F7h/\u00E9t\u00BA\t\u00DD\u0083\x1EE\u0097\u00D0\u0097\u00D2k\u00E8\x07\u00E9\u00E7\u00E9\u0083\u00F4w\f\r\u0086\r\u0083\u00C7Hb(\x19k\x19{\x19\u00A7\x18\u00B7\x19/\u0099L\u00A6\x05\u00D3\u0097\u0099\u00C8T0\u00D72\x1B\u0099g\u0098\x0F\u0098oUX*\u00F6*|\x15\u0091\u00CA\x12\u0095:\u0095V\u0095~\u0095\u00E7\u00AATUsU?\u00D5y\u00AA\x0BT\u00ABU\x0F\u00AB^V}\u00A6FU\u00B3P\u00E3\u00A9\t\u00D4\x16\u00AB\u00D5\u00A9\x1DU\u00BB\u00A96\u00AE\u00CERwR\u008FP\u00CFQ_\u00A3\u00BE_\u00FD\u0082\u00FAc\r\u00B2\u0086\u0085F\u00A0\u0086H\u00A3Tc\u00B7\u00C6\x19\u008D!\x16\u00C62e\u00F1XB\u00D6rV\x03\u00EB,k\u0098Mb[\u00B2\u00F9\u00ECLv\x05\u00FB\x1Bv/{LSCs\u00AAf\u00ACf\u0091f\u009D\u00E6q\u00CD\x01\x0E\u00C6\u00B1\u00E0\u00F09\u00D9\u009CJ\u00CE!\u00CE\r\u00CE{-\x03-?-\u00B1\u00D6j\u00ADf\u00AD~\u00AD7\u00DAz\u00DA\u00BE\u00DAb\u00EDr\u00ED\x16\u00ED\u00EB\u00DA\u00EFup\u009D@\u009D,\u009D\u00F5:m:\u00F7u\t\u00BA6\u00BAQ\u00BA\u0085\u00BA\u00DBu\u00CF\u00EA>\u00D3c\u00EBy\u00E9\t\u00F5\u00CA\u00F5\x0E\u00E9\u00DD\u00D1G\u00F5m\u00F4\u00A3\u00F5\x17\u00EA\u00EF\u00D6\u00EF\u00D1\x1F704\b6\u0090\x19l18c\u00F0\u00CC\u0090c\u00E8k\u0098i\u00B8\u00D1\u00F0\u0084\u00E1\u00A8\x11\u00CBh\u00BA\u0091\u00C4h\u00A3\u00D1I\u00A3'\u00B8&\u00EE\u0087g\u00E35x\x17>f\u00ACo\x1Cb\u00AC4\u00DEe\u00DCk<abi2\u00DB\u00A4\u00C4\u00A4\u00C5\u00E4\u00BE)\u00CD\u0094k\u009Af\u00BA\u00D1\u00B4\u00D3t\u00CC\u00CC\u00C8,\u00DC\u00AC\u00D8\u00AC\u00C9\u00EC\u008E9\u00D5\u009Ck\u009Ea\u00BE\u00D9\u00BC\u00DB\u00FC\u008D\u0085\u00A5E\u009C\u00C5J\u008B6\u008B\u00C7\u0096\u00DA\u0096|\u00CB\x05\u0096M\u0096\u00F7\u00AC\u0098V>VyV\u00F5V\u00D7\u00ACI\u00D6\\\u00EB,\u00EBm\u00D6WlP\x1BW\u009B\f\u009B:\u009B\u00CB\u00B6\u00A8\u00AD\u009B\u00AD\u00C4v\u009Bm\u00DF\x14\u00E2\x14\u008F)\u00D2)\u00F5Sn\u00DA1\u00EC\u00FC\u00EC\n\u00EC\u009A\u00EC\x06\u00ED9\u00F6a\u00F6%\u00F6m\u00F6\u00CF\x1D\u00CC\x1C\x12\x1D\u00D6;t;|rtu\u00CCvlp\u00BC\u00EB\u00A4\u00E14\u00C3\u00A9\u00C4\u00A9\u00C3\u00E9Wg\x1Bg\u00A1s\u009D\u00F35\x17\u00A6K\u0090\u00CB\x12\u0097v\u0097\x17Sm\u00A7\u008A\u00A7n\u009Fz\u00CB\u0095\u00E5\x1A\u00EE\u00BA\u00D2\u00B5\u00D3\u00F5\u00A3\u009B\u00BB\u009B\u00DC\u00AD\u00D9m\u00D4\u00DD\u00CC=\u00C5}\u00AB\u00FBM.\u009B\x1B\u00C9]\u00C3=\u00EFA\u00F4\u00F0\u00F7X\u00E2q\u00CC\u00E3\u009D\u00A7\u009B\u00A7\u00C2\u00F3\u0090\u00E7/^v^Y^\u00FB\u00BD\x1EO\u00B3\u009C&\u009E\u00D60m\u00C8\u00DB\u00C4[\u00E0\u00BD\u00CB{`:>=e\u00FA\u00CE\u00E9\x03>\u00C6>\x02\u009Fz\u009F\u0087\u00BE\u00A6\u00BE\"\u00DF=\u00BE#~\u00D6~\u0099~\x07\u00FC\u009E\u00FB;\u00FA\u00CB\u00FD\u008F\u00F8\u00BF\u00E1y\u00F2\x16\u00F1N\x05`\x01\u00C1\x01\u00E5\x01\u00BD\u0081\x1A\u0081\u00B3\x03k\x03\x1F\x04\u0099\x04\u00A5\x075\x05\u008D\x05\u00BB\x06/\f>\x15B\f\t\rY\x1Fr\u0093o\u00C0\x17\u00F2\x1B\u00F9c3\u00DCg,\u009A\u00D1\x15\u00CA\b\u009D\x15Z\x1B\u00FA0\u00CC&L\x1E\u00D6\x11\u008E\u0086\u00CF\b\u00DF\x10~o\u00A6\u00F9L\u00E9\u00CC\u00B6\b\u0088\u00E0Gl\u0088\u00B8\x1Fi\x19\u0099\x17\u00F9}\x14)*2\u00AA.\u00EAQ\u00B4Stqt\u00F7,\u00D6\u00AC\u00E4Y\u00FBg\u00BD\u008E\u00F1\u008F\u00A9\u008C\u00B9;\u00DBj\u00B6rvg\u00ACjlRlc\u00EC\u009B\u00B8\u0080\u00B8\u00AA\u00B8\u0081x\u0087\u00F8E\u00F1\u0097\x12t\x13$\t\u00ED\u0089\u00E4\u00C4\u00D8\u00C4=\u0089\u00E3s\x02\u00E7l\u009A3\u009C\u00E4\u009AT\u0096tc\u00AE\u00E5\u00DC\u00A2\u00B9\x17\u00E6\u00E9\u00CE\u00CB\u009Ew<Y5Y\u0090|8\u0085\u0098\x12\u0097\u00B2?\u00E5\u0083 BP/\x18O\u00E5\u00A7nM\x1D\x13\u00F2\u0084\u009B\u0085OE\u00BE\u00A2\u008D\u00A2Q\u00B1\u00B7\u00B8J<\u0092\u00E6\u009DV\u0095\u00F68\u00DD;}C\u00FAh\u0086OFu\u00C63\tOR+y\u0091\x19\u0092\u00B9#\u00F3MVD\u00D6\u00DE\u00AC\u00CF\u00D9q\u00D9-9\u0094\u009C\u0094\u009C\u00A3R\ri\u0096\u00B4+\u00D70\u00B7(\u00B7Of++\u0093\r\u00E4y\u00E6m\u00CA\x1B\u0093\u0087\u00CA\u00F7\u00E4#\u00F9s\u00F3\u00DB\x15l\u0085L\u00D1\u00A3\u00B4R\u00AEP\x0E\x16L/\u00A8+x[\x18[x\u00B8H\u00BDHZ\u00D43\u00DFf\u00FE\u00EA\u00F9#\x0B\u0082\x16|\u00BD\u0090\u00B0P\u00B8\u00B0\u00B3\u00D8\u00B8xY\u00F1\u00E0\"\u00BFE\u00BB\x16#\u008BS\x17w.1]R\u00BAdxi\u00F0\u00D2}\u00CBh\u00CB\u00B2\u0096\u00FDP\u00E2XRU\u00F2jy\u00DC\u00F2\u008ER\u0083\u00D2\u00A5\u00A5C+\u0082W4\u0095\u00A9\u0094\u00C9\u00CBn\u00AE\u00F4Z\u00B9c\x15a\u0095dU\u00EFj\u0097\u00D5[V\x7F*\x17\u0095_\u00ACp\u00AC\u00A8\u00AE\u00F8\u00B0F\u00B8\u00E6\u00E2WN_\u00D5|\u00F5ym\u00DA\u00DA\u00DEJ\u00B7\u00CA\u00ED\u00EBH\u00EB\u00A4\u00EBn\u00AC\u00F7Y\u00BF\u00AFJ\u00BDjA\u00D5\u00D0\u0086\u00F0\r\u00AD\x1B\u00F1\u008D\u00E5\x1B_mJ\u00DEt\u00A1zj\u00F5\u008E\u00CD\u00B4\u00CD\u00CA\u00CD\x035a5\u00ED[\u00CC\u00B6\u00AC\u00DB\u00F2\u00A16\u00A3\u00F6z\u009D\x7F]\u00CBV\u00FD\u00AD\u00AB\u00B7\u00BE\u00D9&\u00DA\u00D6\u00BF\u00DDw{\u00F3\x0E\u0083\x1D\x15;\u00DE\u00EF\u0094\u00EC\u00BC\u00B5+xWk\u00BDE}\u00F5n\u00D2\u00EE\u0082\u00DD\u008F\x1Ab\x1B\u00BA\u00BF\u00E6~\u00DD\u00B8GwO\u00C5\u009E\u008F{\u00A5{\x07\u00F6E\u00EF\u00EBjtol\u00DC\u00AF\u00BF\u00BF\u00B2\tmR6\u008D\x1EH:p\u00E5\u009B\u0080o\u00DA\u009B\u00ED\u009Aw\u00B5pZ*\x0E\u00C2A\u00E5\u00C1'\u00DF\u00A6|{\u00E3P\u00E8\u00A1\u00CE\u00C3\u00DC\u00C3\u00CD\u00DF\u0099\x7F\u00B7\u00F5\b\u00EBHy+\u00D2:\u00BFu\u00AC-\u00A3m\u00A0=\u00A1\u00BD\u00EF\u00E8\u008C\u00A3\u009D\x1D^\x1DG\u00BE\u00B7\u00FF~\u00EF1\u00E3cu\u00C75\u008FW\u009E\u00A0\u009D(=\u00F1\u00F9\u00E4\u0082\u0093\u00E3\u00A7d\u00A7\u009E\u009DN?=\u00D4\u0099\u00DCy\u00F7L\u00FC\u0099k]Q]\u00BDgC\u00CF\u009E?\x17t\u00EEL\u00B7_\u00F7\u00C9\u00F3\u00DE\u00E7\u008F]\u00F0\u00BCp\u00F4\"\u00F7b\u00DB%\u00B7K\u00AD=\u00AE=G~p\u00FD\u00E1H\u00AF[o\u00EBe\u00F7\u00CB\u00EDW<\u00AEt\u00F4M\u00EB;\u00D1\u00EF\u00D3\x7F\u00FAj\u00C0\u00D5s\u00D7\u00F8\u00D7.]\u009Fy\u00BD\u00EF\u00C6\u00EC\x1B\u00B7n&\u00DD\x1C\u00B8%\u00BA\u00F5\u00F8v\u00F6\u00ED\x17w\n\u00EEL\u00DC]z\u008Fx\u00AF\u00FC\u00BE\u00DA\u00FD\u00EA\x07\u00FA\x0F\u00EA\x7F\u00B4\u00FE\u00B1e\u00C0m\u00E0\u00F8`\u00C0`\u00CF\u00C3Y\x0F\u00EF\x0E\t\u0087\u009E\u00FE\u0094\u00FF\u00D3\u0087\u00E1\u00D2G\u00CCG\u00D5#F#\u008D\u008F\u009D\x1F\x1F\x1B\r\x1A\u00BD\u00F2d\u00CE\u0093\u00E1\u00A7\u00B2\u00A7\x13\u00CF\u00CA~V\u00FFy\u00EBs\u00AB\u00E7\u00DF\u00FD\u00E2\u00FBK\u00CFX\u00FC\u00D8\u00F0\x0B\u00F9\u008B\u00CF\u00BF\u00AEy\u00A9\u00F3r\u00EF\u00AB\u00A9\u00AF:\u00C7#\u00C7\x1F\u00BC\u00CEy=\u00F1\u00A6\u00FC\u00AD\u00CE\u00DB}\u00EF\u00B8\u00EF\u00BA\u00DF\u00C7\u00BD\x1F\u0099(\u00FC@\u00FEP\u00F3\u00D1\u00FAc\u00C7\u00A7\u00D0O\u00F7>\u00E7|\u00FE\u00FC/\u00F7\u0084\u00F3\u00FB\u00809%\x11\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\u0084iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:4842bd21-3ac0-47b2-920a-d6d2f66774c7\" xmpMM:DocumentID=\"xmp.did:1281C908AC7511EDB60BCB2C49320B18\" xmpMM:InstanceID=\"xmp.iid:1281C907AC7511EDB60BCB2C49320B18\" xmp:CreatorTool=\"Adobe Photoshop CC 2018 Macintosh\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:12a5b194-9de3-48e0-b74a-a269c4aef92d\" stRef:documentID=\"adobe:docid:photoshop:fc249e47-78b5-7a43-af49-47ab90e69293\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00AE\x1Fm\u00A3\x00\x00\x01oIDATx\u00DA\u00B4\u0096/\u008F\u0083@\x10\u00C5\u00CB\u00BF\x04\u008B\u00AC\u00A9\x00\u0087\u00A4\u00B6\x0Ed]5\x12$\u00B2\t_\x01\u00C9W@b+[\u0089\x04\u0089D\u00D4 +K\u00D2\x00\u00F7\u00EE\u0086\u00E38S\b\u00BB\x1D\u00B1\u00EC\x12\u00F8\u00E5\u00CD\u00BC]\x06\u00E1t:mx\u0087L\x17Q\x141\n\u0082\u00C0\u0088k\u00DBv\u0080J\u0092\u00F4z\u00BD\u00EE\u00F7;\u00DDZ\x17\u0080\u00ECv;Y\u0096\u00BB\u00AE\x13\u00E9\x16#\u00914\x022\u00E4=\u0095\u00CD\u009E;\x15P\u00DC| \u00E4\u00D9'\u00B6\u00DB\u00ED\u00F1x\u00D4u\x1D\u00F3\u00AA\u00AA.\u0097K]\u00D7\u00EF_\u0099Q\u00AAi\u009A\u00EF\u00FB \u00D6?\u0081\t\u0096\u00AA\u00AA2)\u00B5,\x0B\u0088\u00EB\u00F5z\u00BB\u00DD\u00B0\u00B4m\u00DBq\u009C\u00FD~\u009Fe\u00D9z\u00A5\x14eYN'\u00B3J\u00E7\u00A1M\u00D3\u008CE\u009C\u00AD\u00E6\u00A2\u00F4AI\u00D3\u00D4\u00F3<2*\fC>\u00D0 \b\u0090\u00EFB\u008Dk\u008C\u00C2f\x18GnF\u0099\u00A6\u0089\u00F1\u00F1x\u00B0n~*\u0082\u00EB\u00BA\u00CF\u00E7\x13\u009B\t\u00BE\x15E\u00C1\x01:\u00D5\u0088\x13\u00853\u00F6^\u00ECRh\x1C\u00C7$\u00F9|>\u00E7y>\x16d=\x14\u00CE\u0090\u00FB\u00DAop0\u008Ar\u00E7f\x14<9\x1C\x0E\u00F4\u0095Zn\u00D4\u008CR\u0088J\u0092\x04#4\u00828.Y\u00DD\u00C774\u008A\"8\u00CE\u00ED\u00ECO\u00B7\u00EA\u00F2c\u00FA\u009D~\u00DF\u00F7\u00E8\u0085\u00EC]d\u0084\f5Ewe\u00E4R\u008B\u00FEK\x1F\u009DZQ\x14\u00C30X\u00A0H\u00F7\u00DF\u00CF\x04\u00AF\x16=\u00C6\u0097\x00\x03\x00\u00D4\u0082\u00C2\u00C2RO\u00D8*\x00\x00\x00\x00IEND\u00AEB`\u0082"

var hoverIcon = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x02\x00\x00\x00\u00FDoH\u00C3\x00\x00\nCiCCPICC profile\x00\x00x\u00DA\u009DSwX\u0093\u00F7\x16>\u00DF\u00F7e\x0FVB\u00D8\u00F0\u00B1\u0097l\u0081\x00\"#\u00AC\b\u00C8\x10Y\u00A2\x10\u0092\x00a\u0084\x10\x12@\u00C5\u0085\u0088\nV\x14\x15\x11\u009CHU\u00C4\u0082\u00D5\nH\u009D\u0088\u00E2\u00A0(\u00B8gA\u008A\u0088Z\u008BU\\8\u00EE\x1F\u00DC\u00A7\u00B5}z\u00EF\u00ED\u00ED\u00FB\u00D7\u00FB\u00BC\u00E7\u009C\u00E7\u00FC\u00CEy\u00CF\x0F\u0080\x11\x12&\u0091\u00E6\u00A2j\x009R\u0085<:\u00D8\x1F\u008FOH\u00C4\u00C9\u00BD\u0080\x02\x15H\u00E0\x04 \x10\u00E6\u00CB\u00C2g\x05\u00C5\x00\x00\u00F0\x03yx~t\u00B0?\u00FC\x01\u00AFo\x00\x02\x00p\u00D5.$\x12\u00C7\u00E1\u00FF\u0083\u00BAP&W\x00 \u0091\x00\u00E0\"\x12\u00E7\x0B\x01\u0090R\x00\u00C8.T\u00C8\x14\x00\u00C8\x18\x00\u00B0S\u00B3d\n\x00\u0094\x00\x00ly|B\"\x00\u00AA\r\x00\u00EC\u00F4I>\x05\x00\u00D8\u00A9\u0093\u00DC\x17\x00\u00D8\u00A2\x1C\u00A9\b\x00\u008D\x01\x00\u0099(G$\x02@\u00BB\x00`U\u0081R,\x02\u00C0\u00C2\x00\u00A0\u00AC@\".\x04\u00C0\u00AE\x01\u0080Y\u00B62G\x02\u0080\u00BD\x05\x00v\u008EX\u0090\x0F@`\x00\u0080\u0099B,\u00CC\x00 8\x02\x00C\x1E\x13\u00CD\x03 L\x03\u00A00\u00D2\u00BF\u00E0\u00A9_p\u0085\u00B8H\x01\x00\u00C0\u00CB\u0095\u00CD\u0097K\u00D23\x14\u00B8\u0095\u00D0\x1Aw\u00F2\u00F0\u00E0\u00E2!\u00E2\u00C2l\u00B1Ba\x17)\x10f\t\u00E4\"\u009C\u0097\u009B#\x13H\u00E7\x03L\u00CE\f\x00\x00\x1A\u00F9\u00D1\u00C1\u00FE8?\u0090\u00E7\u00E6\u00E4\u00E1\u00E6f\u00E7l\u00EF\u00F4\u00C5\u00A2\u00FEk\u00F0o\">!\u00F1\u00DF\u00FE\u00BC\u008C\x02\x04\x00\x10N\u00CF\u00EF\u00DA_\u00E5\u00E5\u00D6\x03p\u00C7\x01\u00B0u\u00BFk\u00A9[\x00\u00DAV\x00h\u00DF\u00F9]3\u00DB\t\u00A0Z\n\u00D0z\u00F9\u008By8\u00FC@\x1E\u009E\u00A1P\u00C8<\x1D\x1C\n\x0B\x0B\u00ED%b\u00A1\u00BD0\u00E3\u008B>\u00FF3\u00E1o\u00E0\u008B~\u00F6\u00FC@\x1E\u00FE\u00DBz\u00F0\x00q\u009A@\u0099\u00AD\u00C0\u00A3\u0083\u00FDqanv\u00AER\u008E\u00E7\u00CB\x04B1n\u00F7\u00E7#\u00FE\u00C7\u0085\x7F\u00FD\u008E)\u00D1\u00E24\u00B1\\,\x15\u008A\u00F1X\u0089\u00B8P\"M\u00C7y\u00B9R\u0091D!\u00C9\u0095\u00E2\x12\u00E9\x7F2\u00F1\x1F\u0096\u00FD\t\u0093w\r\x00\u00AC\u0086O\u00C0N\u00B6\x07\u00B5\u00CBl\u00C0~\u00EE\x01\x02\u008B\x0EX\u00D2v\x00@~\u00F3-\u008C\x1A\x0B\u0091\x00\x10g42y\u00F7\x00\x00\u0093\u00BF\u00F9\u008F@+\x01\x00\u00CD\u0097\u00A4\u00E3\x00\x00\u00BC\u00E8\x18\\\u00A8\u0094\x17L\u00C6\b\x00\x00D\u00A0\u0081*\u00B0A\x07\f\u00C1\x14\u00AC\u00C0\x0E\u009C\u00C1\x1D\u00BC\u00C0\x17\x02a\x06D@\f$\u00C0<\x10B\x06\u00E4\u0080\x1C\n\u00A1\x18\u0096A\x19T\u00C0:\u00D8\x04\u00B5\u00B0\x03\x1A\u00A0\x11\u009A\u00E1\x10\u00B4\u00C118\r\u00E7\u00E0\x12\\\u0081\u00EBp\x17\x06`\x18\u009E\u00C2\x18\u00BC\u0086\t\x04A\u00C8\b\x13a!:\u0088\x11b\u008E\u00D8\"\u00CE\b\x17\u0099\u008E\x04\"aH4\u0092\u0080\u00A4 \u00E9\u0088\x14Q\"\u00C5\u00C8r\u00A4\x02\u00A9Bj\u0091]H#\u00F2-r\x149\u008D\\@\u00FA\u0090\u00DB\u00C8 2\u008A\u00FC\u008A\u00BCG1\u0094\u0081\u00B2Q\x03\u00D4\x02u@\u00B9\u00A8\x1F\x1A\u008A\u00C6\u00A0s\u00D1t4\x0F]\u0080\u0096\u00A2k\u00D1\x1A\u00B4\x1E=\u0080\u00B6\u00A2\u00A7\u00D1K\u00E8ut\x00}\u008A\u008Ec\u0080\u00D11\x0Ef\u008C\u00D9a\\\u008C\u0087E`\u0089X\x1A&\u00C7\x16c\u00E5X5V\u008F5c\x1DX7v\x15\x1B\u00C0\u009Ea\u00EF\b$\x02\u008B\u0080\x13\u00EC\b^\u0084\x10\u00C2l\u0082\u0090\u0090GXLXC\u00A8%\u00EC#\u00B4\x12\u00BA\bW\t\u0083\u00841\u00C2'\"\u0093\u00A8O\u00B4%z\x12\u00F9\u00C4xb:\u00B1\u0090XF\u00AC&\u00EE!\x1E!\u009E%^'\x0E\x13_\u0093H$\x0E\u00C9\u0092\u00E4N\n!%\u00902I\x0BIkH\u00DBH-\u00A4S\u00A4>\u00D2\x10i\u009CL&\u00EB\u0090m\u00C9\u00DE\u00E4\b\u00B2\u0080\u00AC \u0097\u0091\u00B7\u0090\x0F\u0090O\u0092\u00FB\u00C9\u00C3\u00E4\u00B7\x14:\u00C5\u0088\u00E2L\t\u00A2$R\u00A4\u0094\x12J5e?\u00E5\x04\u00A5\u009F2B\u0099\u00A0\u00AAQ\u00CD\u00A9\u009E\u00D4\b\u00AA\u0088:\u009FZIm\u00A0vP/S\u0087\u00A9\x134u\u009A%\u00CD\u009B\x16C\u00CB\u00A4-\u00A3\u00D5\u00D0\u009Aigi\u00F7h/\u00E9t\u00BA\t\u00DD\u0083\x1EE\u0097\u00D0\u0097\u00D2k\u00E8\x07\u00E9\u00E7\u00E9\u0083\u00F4w\f\r\u0086\r\u0083\u00C7Hb(\x19k\x19{\x19\u00A7\x18\u00B7\x19/\u0099L\u00A6\x05\u00D3\u0097\u0099\u00C8T0\u00D72\x1B\u0099g\u0098\x0F\u0098oUX*\u00F6*|\x15\u0091\u00CA\x12\u0095:\u0095V\u0095~\u0095\u00E7\u00AATUsU?\u00D5y\u00AA\x0BT\u00ABU\x0F\u00AB^V}\u00A6FU\u00B3P\u00E3\u00A9\t\u00D4\x16\u00AB\u00D5\u00A9\x1DU\u00BB\u00A96\u00AE\u00CERwR\u008FP\u00CFQ_\u00A3\u00BE_\u00FD\u0082\u00FAc\r\u00B2\u0086\u0085F\u00A0\u0086H\u00A3Tc\u00B7\u00C6\x19\u008D!\x16\u00C62e\u00F1XB\u00D6rV\x03\u00EB,k\u0098Mb[\u00B2\u00F9\u00ECLv\x05\u00FB\x1Bv/{LSCs\u00AAf\u00ACf\u0091f\u009D\u00E6q\u00CD\x01\x0E\u00C6\u00B1\u00E0\u00F09\u00D9\u009CJ\u00CE!\u00CE\r\u00CE{-\x03-?-\u00B1\u00D6j\u00ADf\u00AD~\u00AD7\u00DAz\u00DA\u00BE\u00DAb\u00EDr\u00ED\x16\u00ED\u00EB\u00DA\u00EFup\u009D@\u009D,\u009D\u00F5:m:\u00F7u\t\u00BA6\u00BAQ\u00BA\u0085\u00BA\u00DBu\u00CF\u00EA>\u00D3c\u00EBy\u00E9\t\u00F5\u00CA\u00F5\x0E\u00E9\u00DD\u00D1G\u00F5m\u00F4\u00A3\u00F5\x17\u00EA\u00EF\u00D6\u00EF\u00D1\x1F704\b6\u0090\x19l18c\u00F0\u00CC\u0090c\u00E8k\u0098i\u00B8\u00D1\u00F0\u0084\u00E1\u00A8\x11\u00CBh\u00BA\u0091\u00C4h\u00A3\u00D1I\u00A3'\u00B8&\u00EE\u0087g\u00E35x\x17>f\u00ACo\x1Cb\u00AC4\u00DEe\u00DCk<abi2\u00DB\u00A4\u00C4\u00A4\u00C5\u00E4\u00BE)\u00CD\u0094k\u009Af\u00BA\u00D1\u00B4\u00D3t\u00CC\u00CC\u00C8,\u00DC\u00AC\u00D8\u00AC\u00C9\u00EC\u008E9\u00D5\u009Ck\u009Ea\u00BE\u00D9\u00BC\u00DB\u00FC\u008D\u0085\u00A5E\u009C\u00C5J\u008B6\u008B\u00C7\u0096\u00DA\u0096|\u00CB\x05\u0096M\u0096\u00F7\u00AC\u0098V>VyV\u00F5V\u00D7\u00ACI\u00D6\\\u00EB,\u00EBm\u00D6WlP\x1BW\u009B\f\u009B:\u009B\u00CB\u00B6\u00A8\u00AD\u009B\u00AD\u00C4v\u009Bm\u00DF\x14\u00E2\x14\u008F)\u00D2)\u00F5Sn\u00DA1\u00EC\u00FC\u00EC\n\u00EC\u009A\u00EC\x06\u00ED9\u00F6a\u00F6%\u00F6m\u00F6\u00CF\x1D\u00CC\x1C\x12\x1D\u00D6;t;|rtu\u00CCvlp\u00BC\u00EB\u00A4\u00E14\u00C3\u00A9\u00C4\u00A9\u00C3\u00E9Wg\x1Bg\u00A1s\u009D\u00F35\x17\u00A6K\u0090\u00CB\x12\u0097v\u0097\x17Sm\u00A7\u008A\u00A7n\u009Fz\u00CB\u0095\u00E5\x1A\u00EE\u00BA\u00D2\u00B5\u00D3\u00F5\u00A3\u009B\u00BB\u009B\u00DC\u00AD\u00D9m\u00D4\u00DD\u00CC=\u00C5}\u00AB\u00FBM.\u009B\x1B\u00C9]\u00C3=\u00EFA\u00F4\u00F0\u00F7X\u00E2q\u00CC\u00E3\u009D\u00A7\u009B\u00A7\u00C2\u00F3\u0090\u00E7/^v^Y^\u00FB\u00BD\x1EO\u00B3\u009C&\u009E\u00D60m\u00C8\u00DB\u00C4[\u00E0\u00BD\u00CB{`:>=e\u00FA\u00CE\u00E9\x03>\u00C6>\x02\u009Fz\u009F\u0087\u00BE\u00A6\u00BE\"\u00DF=\u00BE#~\u00D6~\u0099~\x07\u00FC\u009E\u00FB;\u00FA\u00CB\u00FD\u008F\u00F8\u00BF\u00E1y\u00F2\x16\u00F1N\x05`\x01\u00C1\x01\u00E5\x01\u00BD\u0081\x1A\u0081\u00B3\x03k\x03\x1F\x04\u0099\x04\u00A5\x075\x05\u008D\x05\u00BB\x06/\f>\x15B\f\t\rY\x1Fr\u0093o\u00C0\x17\u00F2\x1B\u00F9c3\u00DCg,\u009A\u00D1\x15\u00CA\b\u009D\x15Z\x1B\u00FA0\u00CC&L\x1E\u00D6\x11\u008E\u0086\u00CF\b\u00DF\x10~o\u00A6\u00F9L\u00E9\u00CC\u00B6\b\u0088\u00E0Gl\u0088\u00B8\x1Fi\x19\u0099\x17\u00F9}\x14)*2\u00AA.\u00EAQ\u00B4Stqt\u00F7,\u00D6\u00AC\u00E4Y\u00FBg\u00BD\u008E\u00F1\u008F\u00A9\u008C\u00B9;\u00DBj\u00B6rvg\u00ACjlRlc\u00EC\u009B\u00B8\u0080\u00B8\u00AA\u00B8\u0081x\u0087\u00F8E\u00F1\u0097\x12t\x13$\t\u00ED\u0089\u00E4\u00C4\u00D8\u00C4=\u0089\u00E3s\x02\u00E7l\u009A3\u009C\u00E4\u009AT\u0096tc\u00AE\u00E5\u00DC\u00A2\u00B9\x17\u00E6\u00E9\u00CE\u00CB\u009Ew<Y5Y\u0090|8\u0085\u0098\x12\u0097\u00B2?\u00E5\u0083 BP/\x18O\u00E5\u00A7nM\x1D\x13\u00F2\u0084\u009B\u0085OE\u00BE\u00A2\u008D\u00A2Q\u00B1\u00B7\u00B8J<\u0092\u00E6\u009DV\u0095\u00F68\u00DD;}C\u00FAh\u0086OFu\u00C63\tOR+y\u0091\x19\u0092\u00B9#\u00F3MVD\u00D6\u00DE\u00AC\u00CF\u00D9q\u00D9-9\u0094\u009C\u0094\u009C\u00A3R\ri\u0096\u00B4+\u00D70\u00B7(\u00B7Of++\u0093\r\u00E4y\u00E6m\u00CA\x1B\u0093\u0087\u00CA\u00F7\u00E4#\u00F9s\u00F3\u00DB\x15l\u0085L\u00D1\u00A3\u00B4R\u00AEP\x0E\x16L/\u00A8+x[\x18[x\u00B8H\u00BDHZ\u00D43\u00DFf\u00FE\u00EA\u00F9#\x0B\u0082\x16|\u00BD\u0090\u00B0P\u00B8\u00B0\u00B3\u00D8\u00B8xY\u00F1\u00E0\"\u00BFE\u00BB\x16#\u008BS\x17w.1]R\u00BAdxi\u00F0\u00D2}\u00CBh\u00CB\u00B2\u0096\u00FDP\u00E2XRU\u00F2jy\u00DC\u00F2\u008ER\u0083\u00D2\u00A5\u00A5C+\u0082W4\u0095\u00A9\u0094\u00C9\u00CBn\u00AE\u00F4Z\u00B9c\x15a\u0095dU\u00EFj\u0097\u00D5[V\x7F*\x17\u0095_\u00ACp\u00AC\u00A8\u00AE\u00F8\u00B0F\u00B8\u00E6\u00E2WN_\u00D5|\u00F5ym\u00DA\u00DA\u00DEJ\u00B7\u00CA\u00ED\u00EBH\u00EB\u00A4\u00EBn\u00AC\u00F7Y\u00BF\u00AFJ\u00BDjA\u00D5\u00D0\u0086\u00F0\r\u00AD\x1B\u00F1\u008D\u00E5\x1B_mJ\u00DEt\u00A1zj\u00F5\u008E\u00CD\u00B4\u00CD\u00CA\u00CD\x035a5\u00ED[\u00CC\u00B6\u00AC\u00DB\u00F2\u00A16\u00A3\u00F6z\u009D\x7F]\u00CBV\u00FD\u00AD\u00AB\u00B7\u00BE\u00D9&\u00DA\u00D6\u00BF\u00DDw{\u00F3\x0E\u0083\x1D\x15;\u00DE\u00EF\u0094\u00EC\u00BC\u00B5+xWk\u00BDE}\u00F5n\u00D2\u00EE\u0082\u00DD\u008F\x1Ab\x1B\u00BA\u00BF\u00E6~\u00DD\u00B8GwO\u00C5\u009E\u008F{\u00A5{\x07\u00F6E\u00EF\u00EBjtol\u00DC\u00AF\u00BF\u00BF\u00B2\tmR6\u008D\x1EH:p\u00E5\u009B\u0080o\u00DA\u009B\u00ED\u009Aw\u00B5pZ*\x0E\u00C2A\u00E5\u00C1'\u00DF\u00A6|{\u00E3P\u00E8\u00A1\u00CE\u00C3\u00DC\u00C3\u00CD\u00DF\u0099\x7F\u00B7\u00F5\b\u00EBHy+\u00D2:\u00BFu\u00AC-\u00A3m\u00A0=\u00A1\u00BD\u00EF\u00E8\u008C\u00A3\u009D\x1D^\x1DG\u00BE\u00B7\u00FF~\u00EF1\u00E3cu\u00C75\u008FW\u009E\u00A0\u009D(=\u00F1\u00F9\u00E4\u0082\u0093\u00E3\u00A7d\u00A7\u009E\u009DN?=\u00D4\u0099\u00DCy\u00F7L\u00FC\u0099k]Q]\u00BDgC\u00CF\u009E?\x17t\u00EEL\u00B7_\u00F7\u00C9\u00F3\u00DE\u00E7\u008F]\u00F0\u00BCp\u00F4\"\u00F7b\u00DB%\u00B7K\u00AD=\u00AE=G~p\u00FD\u00E1H\u00AF[o\u00EBe\u00F7\u00CB\u00EDW<\u00AEt\u00F4M\u00EB;\u00D1\u00EF\u00D3\x7F\u00FAj\u00C0\u00D5s\u00D7\u00F8\u00D7.]\u009Fy\u00BD\u00EF\u00C6\u00EC\x1B\u00B7n&\u00DD\x1C\u00B8%\u00BA\u00F5\u00F8v\u00F6\u00ED\x17w\n\u00EEL\u00DC]z\u008Fx\u00AF\u00FC\u00BE\u00DA\u00FD\u00EA\x07\u00FA\x0F\u00EA\x7F\u00B4\u00FE\u00B1e\u00C0m\u00E0\u00F8`\u00C0`\u00CF\u00C3Y\x0F\u00EF\x0E\t\u0087\u009E\u00FE\u0094\u00FF\u00D3\u0087\u00E1\u00D2G\u00CCG\u00D5#F#\u008D\u008F\u009D\x1F\x1F\x1B\r\x1A\u00BD\u00F2d\u00CE\u0093\u00E1\u00A7\u00B2\u00A7\x13\u00CF\u00CA~V\u00FFy\u00EBs\u00AB\u00E7\u00DF\u00FD\u00E2\u00FBK\u00CFX\u00FC\u00D8\u00F0\x0B\u00F9\u008B\u00CF\u00BF\u00AEy\u00A9\u00F3r\u00EF\u00AB\u00A9\u00AF:\u00C7#\u00C7\x1F\u00BC\u00CEy=\u00F1\u00A6\u00FC\u00AD\u00CE\u00DB}\u00EF\u00B8\u00EF\u00BA\u00DF\u00C7\u00BD\x1F\u0099(\u00FC@\u00FEP\u00F3\u00D1\u00FAc\u00C7\u00A7\u00D0O\u00F7>\u00E7|\u00FE\u00FC/\u00F7\u0084\u00F3\u00FB\u00809%\x11\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\u0084iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:4842bd21-3ac0-47b2-920a-d6d2f66774c7\" xmpMM:DocumentID=\"xmp.did:1281C904AC7511EDB60BCB2C49320B18\" xmpMM:InstanceID=\"xmp.iid:1281C903AC7511EDB60BCB2C49320B18\" xmp:CreatorTool=\"Adobe Photoshop CC 2018 Macintosh\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:12a5b194-9de3-48e0-b74a-a269c4aef92d\" stRef:documentID=\"adobe:docid:photoshop:fc249e47-78b5-7a43-af49-47ab90e69293\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00A4\u00BFb\x7F\x00\x00\x01\u00CDIDATx\u00DA\u00B4\u0096=\u00AB\u0082P\x18\u00C7o*\u00D5\x14\x0EE!\u0082AC\u00D1bc[[\u008Dw\u00E8\x03\u00F8\u00B9\x1A[\x04\u00C7\u00C6\u00BE\u0081\u008BCCCCP\u0090\u00D0\u00A5\u0086\b\u0082\u00B4\x17\u00EF\x1FO\u009C\u00BCb\u00BEt\u00BA\u00FF\u00C1\x1E\u008F\u00F8\u00EB\u009C\u00E7\u00D5\u00DCp8\u00FC\u00FA\u00B4\u0084\u00C7\u008F \u00E4|1\u00E2\\\u00D7}@\u00F3\u00F9\u00FC\u00E5r\u00D9\u00EDv\u00F7\u00FB\u00FDm\x1C\u00C7q\u0095J\x05\u009B\u00BB^\u00AF\x1CYb$Bx\x1D\x10rV\u008E.\u00B1\u00BB\x12\u0090?\u00D0\x7F\tTH\u00AA\u00AA\u00CEf3b\u00D7j\u00B5\u00C1`\u00A0(\n\u00EC\u00F5z=\u009DN\u00B7\u00DBm\u0082\x7F#\u0089\u00DF\u00BE`\x17\u008BEM\u00D3@\u00FC\u00F1\x05\x03\u00B7X\u008C\u0087\u00F2\u00EDv\u009B\u00E7\u00F9\u00E3\u00F1H\u0097\u00F0\u00B2(\u008A@\u00E3\u00BA\\.[\u00AD\u00D6|>7\f\u00C3\u00B2,<m4\x1A\u00A7\u00D3i\u00B3\u00D9D\u00E2J\u00A5\u00D2\u00EDv\u008B>\u00FEd2![\u00C6u<\x1E\u00D3\u00F5\u00C5b\u00D1\u00EB\u00F5\n\u0085\u00C2;>\rq\u0089\r%z3\x01\u00FA\u008A\u009B\n\x1A_\u009A\u00EFq\x05\u00CF\u00F3b\x1E\u00D7\u00EBu\u00E4P\u0090\u008B02\x1D\x1FB\x0E!IG\u00A3Q0n\u00C8\\&(T\u00ADV\u00B3\u00FAAH\u00EF\u00FE\u00F4\\!SQ\u00A7\u00E4FC\u0091\x12\u00C1\x00\u00A2\u00B4\x0E\u0087\x03\u00A9\u00DAP\u00DC2@C)\u0081J5M\x13F\u00A7\u00D3\x01\u008E\u00D4X\f7\u00E1\u00F8\u00E8U\u00DDn\u00B7\u00DF\u00EF\u0093.\u00D5l6\x1D\u00C7\u00C1~\u00A9\x1FV\u00AB\x15\u00EDgq\r%\u00A8\u00F3\u00F9l\u00DB6\u0088\u00B2,\u0097\u00CBe8A\u00D7\u00F5\u00FD~O\u00FA\x00nCD\u00D2Pr\u0098\u00A6\u0098Q\u00AF\u00BA\x0E\x15\u00C9\u00CD\u00C4\u00DA\u00C7\x7Fc\u00F6\u00A5\u008D~\u00CAV\u00F2l\u00D2\b\x0Bf!\u00FB\x14\u00A1\u0090\x07\x14\u00D3\u0095\u0091KF\u00F43\u00FA\u0098\u00D4p\u00AB$I,P\u00CF\u00D7\u00F3c\u0082~Y|J\u00BF\x02\f\x00U\x1C\u00EF\x04\x07,W\u0088\x00\x00\x00\x00IEND\u00AEB`\u0082";

var disabledIcon = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x02\x00\x00\x00\u00FDoH\u00C3\x00\x00\nCiCCPICC profile\x00\x00x\u00DA\u009DSwX\u0093\u00F7\x16>\u00DF\u00F7e\x0FVB\u00D8\u00F0\u00B1\u0097l\u0081\x00\"#\u00AC\b\u00C8\x10Y\u00A2\x10\u0092\x00a\u0084\x10\x12@\u00C5\u0085\u0088\nV\x14\x15\x11\u009CHU\u00C4\u0082\u00D5\nH\u009D\u0088\u00E2\u00A0(\u00B8gA\u008A\u0088Z\u008BU\\8\u00EE\x1F\u00DC\u00A7\u00B5}z\u00EF\u00ED\u00ED\u00FB\u00D7\u00FB\u00BC\u00E7\u009C\u00E7\u00FC\u00CEy\u00CF\x0F\u0080\x11\x12&\u0091\u00E6\u00A2j\x009R\u0085<:\u00D8\x1F\u008FOH\u00C4\u00C9\u00BD\u0080\x02\x15H\u00E0\x04 \x10\u00E6\u00CB\u00C2g\x05\u00C5\x00\x00\u00F0\x03yx~t\u00B0?\u00FC\x01\u00AFo\x00\x02\x00p\u00D5.$\x12\u00C7\u00E1\u00FF\u0083\u00BAP&W\x00 \u0091\x00\u00E0\"\x12\u00E7\x0B\x01\u0090R\x00\u00C8.T\u00C8\x14\x00\u00C8\x18\x00\u00B0S\u00B3d\n\x00\u0094\x00\x00ly|B\"\x00\u00AA\r\x00\u00EC\u00F4I>\x05\x00\u00D8\u00A9\u0093\u00DC\x17\x00\u00D8\u00A2\x1C\u00A9\b\x00\u008D\x01\x00\u0099(G$\x02@\u00BB\x00`U\u0081R,\x02\u00C0\u00C2\x00\u00A0\u00AC@\".\x04\u00C0\u00AE\x01\u0080Y\u00B62G\x02\u0080\u00BD\x05\x00v\u008EX\u0090\x0F@`\x00\u0080\u0099B,\u00CC\x00 8\x02\x00C\x1E\x13\u00CD\x03 L\x03\u00A00\u00D2\u00BF\u00E0\u00A9_p\u0085\u00B8H\x01\x00\u00C0\u00CB\u0095\u00CD\u0097K\u00D23\x14\u00B8\u0095\u00D0\x1Aw\u00F2\u00F0\u00E0\u00E2!\u00E2\u00C2l\u00B1Ba\x17)\x10f\t\u00E4\"\u009C\u0097\u009B#\x13H\u00E7\x03L\u00CE\f\x00\x00\x1A\u00F9\u00D1\u00C1\u00FE8?\u0090\u00E7\u00E6\u00E4\u00E1\u00E6f\u00E7l\u00EF\u00F4\u00C5\u00A2\u00FEk\u00F0o\">!\u00F1\u00DF\u00FE\u00BC\u008C\x02\x04\x00\x10N\u00CF\u00EF\u00DA_\u00E5\u00E5\u00D6\x03p\u00C7\x01\u00B0u\u00BFk\u00A9[\x00\u00DAV\x00h\u00DF\u00F9]3\u00DB\t\u00A0Z\n\u00D0z\u00F9\u008By8\u00FC@\x1E\u009E\u00A1P\u00C8<\x1D\x1C\n\x0B\x0B\u00ED%b\u00A1\u00BD0\u00E3\u008B>\u00FF3\u00E1o\u00E0\u008B~\u00F6\u00FC@\x1E\u00FE\u00DBz\u00F0\x00q\u009A@\u0099\u00AD\u00C0\u00A3\u0083\u00FDqanv\u00AER\u008E\u00E7\u00CB\x04B1n\u00F7\u00E7#\u00FE\u00C7\u0085\x7F\u00FD\u008E)\u00D1\u00E24\u00B1\\,\x15\u008A\u00F1X\u0089\u00B8P\"M\u00C7y\u00B9R\u0091D!\u00C9\u0095\u00E2\x12\u00E9\x7F2\u00F1\x1F\u0096\u00FD\t\u0093w\r\x00\u00AC\u0086O\u00C0N\u00B6\x07\u00B5\u00CBl\u00C0~\u00EE\x01\x02\u008B\x0EX\u00D2v\x00@~\u00F3-\u008C\x1A\x0B\u0091\x00\x10g42y\u00F7\x00\x00\u0093\u00BF\u00F9\u008F@+\x01\x00\u00CD\u0097\u00A4\u00E3\x00\x00\u00BC\u00E8\x18\\\u00A8\u0094\x17L\u00C6\b\x00\x00D\u00A0\u0081*\u00B0A\x07\f\u00C1\x14\u00AC\u00C0\x0E\u009C\u00C1\x1D\u00BC\u00C0\x17\x02a\x06D@\f$\u00C0<\x10B\x06\u00E4\u0080\x1C\n\u00A1\x18\u0096A\x19T\u00C0:\u00D8\x04\u00B5\u00B0\x03\x1A\u00A0\x11\u009A\u00E1\x10\u00B4\u00C118\r\u00E7\u00E0\x12\\\u0081\u00EBp\x17\x06`\x18\u009E\u00C2\x18\u00BC\u0086\t\x04A\u00C8\b\x13a!:\u0088\x11b\u008E\u00D8\"\u00CE\b\x17\u0099\u008E\x04\"aH4\u0092\u0080\u00A4 \u00E9\u0088\x14Q\"\u00C5\u00C8r\u00A4\x02\u00A9Bj\u0091]H#\u00F2-r\x149\u008D\\@\u00FA\u0090\u00DB\u00C8 2\u008A\u00FC\u008A\u00BCG1\u0094\u0081\u00B2Q\x03\u00D4\x02u@\u00B9\u00A8\x1F\x1A\u008A\u00C6\u00A0s\u00D1t4\x0F]\u0080\u0096\u00A2k\u00D1\x1A\u00B4\x1E=\u0080\u00B6\u00A2\u00A7\u00D1K\u00E8ut\x00}\u008A\u008Ec\u0080\u00D11\x0Ef\u008C\u00D9a\\\u008C\u0087E`\u0089X\x1A&\u00C7\x16c\u00E5X5V\u008F5c\x1DX7v\x15\x1B\u00C0\u009Ea\u00EF\b$\x02\u008B\u0080\x13\u00EC\b^\u0084\x10\u00C2l\u0082\u0090\u0090GXLXC\u00A8%\u00EC#\u00B4\x12\u00BA\bW\t\u0083\u00841\u00C2'\"\u0093\u00A8O\u00B4%z\x12\u00F9\u00C4xb:\u00B1\u0090XF\u00AC&\u00EE!\x1E!\u009E%^'\x0E\x13_\u0093H$\x0E\u00C9\u0092\u00E4N\n!%\u00902I\x0BIkH\u00DBH-\u00A4S\u00A4>\u00D2\x10i\u009CL&\u00EB\u0090m\u00C9\u00DE\u00E4\b\u00B2\u0080\u00AC \u0097\u0091\u00B7\u0090\x0F\u0090O\u0092\u00FB\u00C9\u00C3\u00E4\u00B7\x14:\u00C5\u0088\u00E2L\t\u00A2$R\u00A4\u0094\x12J5e?\u00E5\x04\u00A5\u009F2B\u0099\u00A0\u00AAQ\u00CD\u00A9\u009E\u00D4\b\u00AA\u0088:\u009FZIm\u00A0vP/S\u0087\u00A9\x134u\u009A%\u00CD\u009B\x16C\u00CB\u00A4-\u00A3\u00D5\u00D0\u009Aigi\u00F7h/\u00E9t\u00BA\t\u00DD\u0083\x1EE\u0097\u00D0\u0097\u00D2k\u00E8\x07\u00E9\u00E7\u00E9\u0083\u00F4w\f\r\u0086\r\u0083\u00C7Hb(\x19k\x19{\x19\u00A7\x18\u00B7\x19/\u0099L\u00A6\x05\u00D3\u0097\u0099\u00C8T0\u00D72\x1B\u0099g\u0098\x0F\u0098oUX*\u00F6*|\x15\u0091\u00CA\x12\u0095:\u0095V\u0095~\u0095\u00E7\u00AATUsU?\u00D5y\u00AA\x0BT\u00ABU\x0F\u00AB^V}\u00A6FU\u00B3P\u00E3\u00A9\t\u00D4\x16\u00AB\u00D5\u00A9\x1DU\u00BB\u00A96\u00AE\u00CERwR\u008FP\u00CFQ_\u00A3\u00BE_\u00FD\u0082\u00FAc\r\u00B2\u0086\u0085F\u00A0\u0086H\u00A3Tc\u00B7\u00C6\x19\u008D!\x16\u00C62e\u00F1XB\u00D6rV\x03\u00EB,k\u0098Mb[\u00B2\u00F9\u00ECLv\x05\u00FB\x1Bv/{LSCs\u00AAf\u00ACf\u0091f\u009D\u00E6q\u00CD\x01\x0E\u00C6\u00B1\u00E0\u00F09\u00D9\u009CJ\u00CE!\u00CE\r\u00CE{-\x03-?-\u00B1\u00D6j\u00ADf\u00AD~\u00AD7\u00DAz\u00DA\u00BE\u00DAb\u00EDr\u00ED\x16\u00ED\u00EB\u00DA\u00EFup\u009D@\u009D,\u009D\u00F5:m:\u00F7u\t\u00BA6\u00BAQ\u00BA\u0085\u00BA\u00DBu\u00CF\u00EA>\u00D3c\u00EBy\u00E9\t\u00F5\u00CA\u00F5\x0E\u00E9\u00DD\u00D1G\u00F5m\u00F4\u00A3\u00F5\x17\u00EA\u00EF\u00D6\u00EF\u00D1\x1F704\b6\u0090\x19l18c\u00F0\u00CC\u0090c\u00E8k\u0098i\u00B8\u00D1\u00F0\u0084\u00E1\u00A8\x11\u00CBh\u00BA\u0091\u00C4h\u00A3\u00D1I\u00A3'\u00B8&\u00EE\u0087g\u00E35x\x17>f\u00ACo\x1Cb\u00AC4\u00DEe\u00DCk<abi2\u00DB\u00A4\u00C4\u00A4\u00C5\u00E4\u00BE)\u00CD\u0094k\u009Af\u00BA\u00D1\u00B4\u00D3t\u00CC\u00CC\u00C8,\u00DC\u00AC\u00D8\u00AC\u00C9\u00EC\u008E9\u00D5\u009Ck\u009Ea\u00BE\u00D9\u00BC\u00DB\u00FC\u008D\u0085\u00A5E\u009C\u00C5J\u008B6\u008B\u00C7\u0096\u00DA\u0096|\u00CB\x05\u0096M\u0096\u00F7\u00AC\u0098V>VyV\u00F5V\u00D7\u00ACI\u00D6\\\u00EB,\u00EBm\u00D6WlP\x1BW\u009B\f\u009B:\u009B\u00CB\u00B6\u00A8\u00AD\u009B\u00AD\u00C4v\u009Bm\u00DF\x14\u00E2\x14\u008F)\u00D2)\u00F5Sn\u00DA1\u00EC\u00FC\u00EC\n\u00EC\u009A\u00EC\x06\u00ED9\u00F6a\u00F6%\u00F6m\u00F6\u00CF\x1D\u00CC\x1C\x12\x1D\u00D6;t;|rtu\u00CCvlp\u00BC\u00EB\u00A4\u00E14\u00C3\u00A9\u00C4\u00A9\u00C3\u00E9Wg\x1Bg\u00A1s\u009D\u00F35\x17\u00A6K\u0090\u00CB\x12\u0097v\u0097\x17Sm\u00A7\u008A\u00A7n\u009Fz\u00CB\u0095\u00E5\x1A\u00EE\u00BA\u00D2\u00B5\u00D3\u00F5\u00A3\u009B\u00BB\u009B\u00DC\u00AD\u00D9m\u00D4\u00DD\u00CC=\u00C5}\u00AB\u00FBM.\u009B\x1B\u00C9]\u00C3=\u00EFA\u00F4\u00F0\u00F7X\u00E2q\u00CC\u00E3\u009D\u00A7\u009B\u00A7\u00C2\u00F3\u0090\u00E7/^v^Y^\u00FB\u00BD\x1EO\u00B3\u009C&\u009E\u00D60m\u00C8\u00DB\u00C4[\u00E0\u00BD\u00CB{`:>=e\u00FA\u00CE\u00E9\x03>\u00C6>\x02\u009Fz\u009F\u0087\u00BE\u00A6\u00BE\"\u00DF=\u00BE#~\u00D6~\u0099~\x07\u00FC\u009E\u00FB;\u00FA\u00CB\u00FD\u008F\u00F8\u00BF\u00E1y\u00F2\x16\u00F1N\x05`\x01\u00C1\x01\u00E5\x01\u00BD\u0081\x1A\u0081\u00B3\x03k\x03\x1F\x04\u0099\x04\u00A5\x075\x05\u008D\x05\u00BB\x06/\f>\x15B\f\t\rY\x1Fr\u0093o\u00C0\x17\u00F2\x1B\u00F9c3\u00DCg,\u009A\u00D1\x15\u00CA\b\u009D\x15Z\x1B\u00FA0\u00CC&L\x1E\u00D6\x11\u008E\u0086\u00CF\b\u00DF\x10~o\u00A6\u00F9L\u00E9\u00CC\u00B6\b\u0088\u00E0Gl\u0088\u00B8\x1Fi\x19\u0099\x17\u00F9}\x14)*2\u00AA.\u00EAQ\u00B4Stqt\u00F7,\u00D6\u00AC\u00E4Y\u00FBg\u00BD\u008E\u00F1\u008F\u00A9\u008C\u00B9;\u00DBj\u00B6rvg\u00ACjlRlc\u00EC\u009B\u00B8\u0080\u00B8\u00AA\u00B8\u0081x\u0087\u00F8E\u00F1\u0097\x12t\x13$\t\u00ED\u0089\u00E4\u00C4\u00D8\u00C4=\u0089\u00E3s\x02\u00E7l\u009A3\u009C\u00E4\u009AT\u0096tc\u00AE\u00E5\u00DC\u00A2\u00B9\x17\u00E6\u00E9\u00CE\u00CB\u009Ew<Y5Y\u0090|8\u0085\u0098\x12\u0097\u00B2?\u00E5\u0083 BP/\x18O\u00E5\u00A7nM\x1D\x13\u00F2\u0084\u009B\u0085OE\u00BE\u00A2\u008D\u00A2Q\u00B1\u00B7\u00B8J<\u0092\u00E6\u009DV\u0095\u00F68\u00DD;}C\u00FAh\u0086OFu\u00C63\tOR+y\u0091\x19\u0092\u00B9#\u00F3MVD\u00D6\u00DE\u00AC\u00CF\u00D9q\u00D9-9\u0094\u009C\u0094\u009C\u00A3R\ri\u0096\u00B4+\u00D70\u00B7(\u00B7Of++\u0093\r\u00E4y\u00E6m\u00CA\x1B\u0093\u0087\u00CA\u00F7\u00E4#\u00F9s\u00F3\u00DB\x15l\u0085L\u00D1\u00A3\u00B4R\u00AEP\x0E\x16L/\u00A8+x[\x18[x\u00B8H\u00BDHZ\u00D43\u00DFf\u00FE\u00EA\u00F9#\x0B\u0082\x16|\u00BD\u0090\u00B0P\u00B8\u00B0\u00B3\u00D8\u00B8xY\u00F1\u00E0\"\u00BFE\u00BB\x16#\u008BS\x17w.1]R\u00BAdxi\u00F0\u00D2}\u00CBh\u00CB\u00B2\u0096\u00FDP\u00E2XRU\u00F2jy\u00DC\u00F2\u008ER\u0083\u00D2\u00A5\u00A5C+\u0082W4\u0095\u00A9\u0094\u00C9\u00CBn\u00AE\u00F4Z\u00B9c\x15a\u0095dU\u00EFj\u0097\u00D5[V\x7F*\x17\u0095_\u00ACp\u00AC\u00A8\u00AE\u00F8\u00B0F\u00B8\u00E6\u00E2WN_\u00D5|\u00F5ym\u00DA\u00DA\u00DEJ\u00B7\u00CA\u00ED\u00EBH\u00EB\u00A4\u00EBn\u00AC\u00F7Y\u00BF\u00AFJ\u00BDjA\u00D5\u00D0\u0086\u00F0\r\u00AD\x1B\u00F1\u008D\u00E5\x1B_mJ\u00DEt\u00A1zj\u00F5\u008E\u00CD\u00B4\u00CD\u00CA\u00CD\x035a5\u00ED[\u00CC\u00B6\u00AC\u00DB\u00F2\u00A16\u00A3\u00F6z\u009D\x7F]\u00CBV\u00FD\u00AD\u00AB\u00B7\u00BE\u00D9&\u00DA\u00D6\u00BF\u00DDw{\u00F3\x0E\u0083\x1D\x15;\u00DE\u00EF\u0094\u00EC\u00BC\u00B5+xWk\u00BDE}\u00F5n\u00D2\u00EE\u0082\u00DD\u008F\x1Ab\x1B\u00BA\u00BF\u00E6~\u00DD\u00B8GwO\u00C5\u009E\u008F{\u00A5{\x07\u00F6E\u00EF\u00EBjtol\u00DC\u00AF\u00BF\u00BF\u00B2\tmR6\u008D\x1EH:p\u00E5\u009B\u0080o\u00DA\u009B\u00ED\u009Aw\u00B5pZ*\x0E\u00C2A\u00E5\u00C1'\u00DF\u00A6|{\u00E3P\u00E8\u00A1\u00CE\u00C3\u00DC\u00C3\u00CD\u00DF\u0099\x7F\u00B7\u00F5\b\u00EBHy+\u00D2:\u00BFu\u00AC-\u00A3m\u00A0=\u00A1\u00BD\u00EF\u00E8\u008C\u00A3\u009D\x1D^\x1DG\u00BE\u00B7\u00FF~\u00EF1\u00E3cu\u00C75\u008FW\u009E\u00A0\u009D(=\u00F1\u00F9\u00E4\u0082\u0093\u00E3\u00A7d\u00A7\u009E\u009DN?=\u00D4\u0099\u00DCy\u00F7L\u00FC\u0099k]Q]\u00BDgC\u00CF\u009E?\x17t\u00EEL\u00B7_\u00F7\u00C9\u00F3\u00DE\u00E7\u008F]\u00F0\u00BCp\u00F4\"\u00F7b\u00DB%\u00B7K\u00AD=\u00AE=G~p\u00FD\u00E1H\u00AF[o\u00EBe\u00F7\u00CB\u00EDW<\u00AEt\u00F4M\u00EB;\u00D1\u00EF\u00D3\x7F\u00FAj\u00C0\u00D5s\u00D7\u00F8\u00D7.]\u009Fy\u00BD\u00EF\u00C6\u00EC\x1B\u00B7n&\u00DD\x1C\u00B8%\u00BA\u00F5\u00F8v\u00F6\u00ED\x17w\n\u00EEL\u00DC]z\u008Fx\u00AF\u00FC\u00BE\u00DA\u00FD\u00EA\x07\u00FA\x0F\u00EA\x7F\u00B4\u00FE\u00B1e\u00C0m\u00E0\u00F8`\u00C0`\u00CF\u00C3Y\x0F\u00EF\x0E\t\u0087\u009E\u00FE\u0094\u00FF\u00D3\u0087\u00E1\u00D2G\u00CCG\u00D5#F#\u008D\u008F\u009D\x1F\x1F\x1B\r\x1A\u00BD\u00F2d\u00CE\u0093\u00E1\u00A7\u00B2\u00A7\x13\u00CF\u00CA~V\u00FFy\u00EBs\u00AB\u00E7\u00DF\u00FD\u00E2\u00FBK\u00CFX\u00FC\u00D8\u00F0\x0B\u00F9\u008B\u00CF\u00BF\u00AEy\u00A9\u00F3r\u00EF\u00AB\u00A9\u00AF:\u00C7#\u00C7\x1F\u00BC\u00CEy=\u00F1\u00A6\u00FC\u00AD\u00CE\u00DB}\u00EF\u00B8\u00EF\u00BA\u00DF\u00C7\u00BD\x1F\u0099(\u00FC@\u00FEP\u00F3\u00D1\u00FAc\u00C7\u00A7\u00D0O\u00F7>\u00E7|\u00FE\u00FC/\u00F7\u0084\u00F3\u00FB\u00809%\x11\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\u0084iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:4842bd21-3ac0-47b2-920a-d6d2f66774c7\" xmpMM:DocumentID=\"xmp.did:1FF18C07AC7511EDB60BCB2C49320B18\" xmpMM:InstanceID=\"xmp.iid:1FF18C06AC7511EDB60BCB2C49320B18\" xmp:CreatorTool=\"Adobe Photoshop CC 2018 Macintosh\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:12a5b194-9de3-48e0-b74a-a269c4aef92d\" stRef:documentID=\"adobe:docid:photoshop:fc249e47-78b5-7a43-af49-47ab90e69293\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>=zD\u00D7\x00\x00\x01WIDATx\u00DA\u00EC\u0095\u00AF\u008A\u0085@\x14\u00C6\u00AF\u00BB\u0082\u00CD \x18\x04\u0083`\u00B3\u00D9l\u00B6}\x01}E\u009BA\u00B0\u00D9|\x02\u0083`\x10\f\u0082A0\b\x06\u00C1\u00E4~{\x0F\f\u00A2\u00F7\u00EAx\u00AF\x1B\x16\u00F6\x049s\u00D4\x1F3\u00E7\u00CF7\u0082\u00E7y\u00B7\u00AB\u00ED\u00E3\u00F6\x0B\u00F6\x0F\u00BD\u00DE\u00C4\u0087Q\u00CB\u00B2\u008A\u00A2 _UU\u00D7uu]\u0087\u00DF4M\u009A\u00A6]\u00D7\u00B1/\x05A\u0098\u00E7\u00F9x\u00A7 ~\u00DD\r\u00BE$I\u00BE\u00EF\u0083\u00D8\u00DD\r\x0E\u0096\b\u00B2\u008F\u00B7D\u00D8'\x10\u00AB\x10~\u0096e\x19q<\u00EB\u00BA6M\u00B3,\u00CB8\u008E\u00F3<\u00C7[\u00C30\u00C6ql\u00DB\u00F6\u00F4\u00F1\u0093$\u00A1-\u00E3\x19\u0086!\u008BWU\u00E58\u00CEr\u00A7'\u00A0+.\u00F9t\u0088\u00D7\x0B\u00B5\u00C3}\x17\u00FA2\u00F7\x00\u008Ar\u00A3\u0087\u0096\\\u009E\f\x1CC\u00D1\u00A4A\x10,\u00EB\u0086\u00CE}\x0BJ\u00CD\x7F6\x0F\"\x7F\u00FA\u00F9\u00B9\u00E2\u00A9\u00A1\u00E6\u00E4rA1Z\u00C30\u00D0\u00D4\u00AE\u00EAv\x00}(\rd\u0098\u00D4,\u00CB\u0088\x05\u00A3\x19\u00DB\u00E1\u008A\u00FB\u00D2\x00\u00AD\u00B2m\u009B\u00A9\x14\u00E8\u00D34a\u00BF,\x0F\u00D0-\u00A6g{\u0082\u00B24 \u00A0\x1D j\u009A\u00A6(\n\u0092\x10EQ\u00DF\u00F7\u00A4\x03Xn\u0089?\u0087\u00E6\u00BCM\u00A9\u00B1.\u0098\u00FD\u0095\x1E>{\u00B5-\u00C6\u00E9\u00EB\x04\u0088U\u0084K\u00F9\u00F7\u00EDY\u0087\u00FC\u00CD\u00DB\u00F4[\u0080\x01\x00\u0090j\u00B4\x10\x0E\"\u00D8N\x00\x00\x00\x00IEND\u00AEB`\u0082";

// button handler
// source: https://community.adobe.com/t5/photoshop-ecosystem-discussions/adding-images-to-buttons/m-p/9015917#M89489
b = bleedMiddleColGrp.add ('button'); // works for customButton, iconButton, button  
b.helpTip = "Contrain Width and Height Proportions"; 
b.preferredSize = [100,100];  
  
// var roll = ScriptUI.newImage(icons.rollover);  
// var norm = ScriptUI.newImage(icons.normal);  
// var down = ScriptUI.newImage(icons.pressed);  
            //    disable: File.decode(contrainBleedBtn_imgString),  
var icons =  {normal: disabledIcon,
               pressed: activeIcon,
               rollover: hoverIcon,
};  
// var icons = File.decode(contrainBleedBtn_imgString);
var roll = ScriptUI.newImage(icons.rollover);  
var norm = ScriptUI.newImage(icons.normal);  
var down = ScriptUI.newImage(icons.pressed);  
var keepProportions = Boolean(false);    
b.image = norm;  
b.size = [40, 40]  
b.onDraw = function (state) {  
    this.graphics.drawImage(this.image,0,0);  
}  
// b.onClick = function(){
//     this.keepProportions == true ? true : false;
// }  
var mouseEventHandler = function(event) {  
    switch (event.type) {  
        // case 'mouseover':   
        //     // alert("hover")
        //     // event.target.image = roll;  
        //     // b.image = roll;
        //     // alert(this.keepProportions)
        //     b.image = this.keepProportions == true ? down : norm;  
        //     break;  
        // case 'mouseout':   
        //     // event.target.image = norm;  
        //     // b.image = norm;
        //     if (this.keepProportions){
        //         b.image = this.keepProportions == true ? down : roll;  
        //     } else {
        //         b.image = this.keepProportions == true ? roll: norm ;  

        //     }
        //     break;  
        case 'mousedown':  
            // event.target.image = down;  
            b.image = keepProportions == true ? norm : down;  
            keepProportions = keepProportions != true;
            // b.image = this.keepProportions == true ? norm : down;  
            // this.keepProportions = this.keepProportions != true;
            break;  
        // case 'mouseup':
        //     if (keepProportions==false){
        //         b.image = roll;  
        //     }
        //     break;  
        // default:   
            // alert(keepProportions)
            // b.image = keepProportions == true ? down : norm;  
    }  
    // alert(keepProportions)
    event.target.notify("onDraw");  
}  
  
b.addEventListener('mouseover', mouseEventHandler, false);  
b.addEventListener('mouseout', mouseEventHandler, false);  
b.addEventListener('mousedown', mouseEventHandler, false);  
b.addEventListener('mouseup', mouseEventHandler, false);  


// useDocBleedChb.onClick = function() {
//     bleedLColGrp.enabled = bleedLColGrp.enabled == false ? true : false ;
//     bleedRColGrp.enabled = bleedRColGrp.enabled == false ? true : false ;
// }
// Change units bleed
function setUnits(unit){
    if (unit=="top"){
        if (keepProportions){
            bleedBottomTxt.text = bleedLeftTxt.text = bleedRightTxt.text = bleedTopTxt.text;
        }
    }
    if (unit=="bottom"){
        if (keepProportions){
            bleedLeftTxt.text = bleedRightTxt.text = bleedTopTxt.text = bleedBottomTxt.text;
        }
    }
    if (unit=="left"){
        if (keepProportions){
            bleedBottomTxt.text = bleedRightTxt.text = bleedTopTxt.text = bleedLeftTxt.text;
        }
    }
    if (unit=="right"){
        if (keepProportions){
            bleedBottomTxt.text = bleedLeftTxt.text = bleedTopTxt.text = bleedRightTxt.text;
        }
    }
}
bleedTopTxt.onChange =  function() {
    // setUnits("top")
    if (keepProportions){
            bleedBottomTxt.text = bleedLeftTxt.text = bleedRightTxt.text = bleedTopTxt.text;
        }
}
bleedBottomTxt.onChange =  function() {
    if (keepProportions){
            bleedLeftTxt.text = bleedRightTxt.text = bleedTopTxt.text = bleedBottomTxt.text;
        }
}
bleedLeftTxt.onChange =  function() {
     if (keepProportions){
            bleedBottomTxt.text = bleedRightTxt.text = bleedTopTxt.text = bleedLeftTxt.text;
        }
}
bleedRightTxt.onChange =  function() {
    if (keepProportions){
            bleedLeftTxt.text = bleedTopTxt.text = bleedBottomTxt.text = bleedRightTxt.text;
        }
}

// Convert Units
// Source: Specify.jsx
function convertToUnit(value, unit) {
    switch (docRef.rulerUnits) {
        case RulerUnits.Picas:
            value = new UnitValue(value, "pc").as(unit);
            break;
        case RulerUnits.Inches:
            value = new UnitValue(value, "in").as(unit);
            break;
        case RulerUnits.Millimeters:
            value = new UnitValue(value, "mm").as(unit);
            break;
        case RulerUnits.Centimeters:
            value = new UnitValue(value, "cm").as(unit);
            break;
        case RulerUnits.Pixels:
            value = new UnitValue(value, "px").as(unit);
            break;
        default:
            value = new UnitValue(value, unit).as(unit);
    }
    return value;
};

////////////////////////////////////////////
//
// Script  paths
// source: https://stackoverflow.com/questions/10626893/extendscript-current-script-path
//
////////////////////////////////////////////
var myPath = (app.activeDocument.fullName.parent.fsName).toString().replace(/\\/g, '/');
var docName = (app.activeDocument.name).split('.ai')[0];
// var myScriptPath = (File(app.activeScript.fullName).parent.fsName).toString().replace(/\\/g, '/');
var scriptPath = File($.fileName).path;

////////////////////////////////////////////
//
// Settings functions
// source: https://community.adobe.com/t5/illustrator-discussions/using-json-for-saving-illustrator-script-settings/m-p/13109937
//
////////////////////////////////////////////
// get Settings:
var prefs = {}
function getSettings(){
    // Export tab
    prefs.destPath = destFolder.toString();
    prefs.prefix = prefixTxt.text;
    prefs.suffix = suffixTxt.text;

    prefs.activeTab = vertTabbedPnl_nav.selection.index; 
    // prefs.progressVisible = progressBar.visible; 
    prefs.pdfPreset = pdfSettingsDD.selection.index; //pdfPreset.toString();
    prefs.artboardRange = exportArtboardsArray(setExportArtbordsTxt.text);

    // Settings tab
    //Options
    prefs.generateThumbnails = embedThumbsCHb.value;
    prefs.optimizePdf = optimizePdfCHb.value;
    prefs.preserveEditability = preserveEditiballityCHb.value;
    prefs.acrobatLayers = createLayersCHb.value;

    // Bleed
    prefs.bleedLeft = Number(convertToUnit(bleedLeftTxt.text, "mm"));
    prefs.bleedRight = Number(convertToUnit(bleedRightTxt.text, "mm"));
    prefs.bleedTop = Number(convertToUnit(bleedTopTxt.text, "mm"));
    prefs.bleedBottom = Number(convertToUnit(bleedBottomTxt.text, "mm"));

    // Marks Tab
    prefs.allMarks = allPrinterMarksChb.value;
    prefs.registrationMarks = registrationMarksChb.value;
    prefs.trimMarks = trimMarksChb.value;
    prefs.trimMarkWeight = trimMarkWeightDropDown.selection.index;
    prefs.pageMarksType = printerMarkTypeDropDown.selection.index;
    prefs.offset = trimMarkOffsetTxt.text;
    prefs.colorBars = colorBarsChb.value;
    prefs.pageInformation = pageInformationChb.value;

}

var file = File();
var filePath = scriptPath+'/.'+docName;

// write Settings File:
function writeSettings(){
    file = File(filePath);
    file.open('w')
    file.write(prefs.toSource())
    file.close()
}

// read Settings File:
function readSettings(){
    file = File(filePath); //File(scriptPath +"/prefs.txt");
    if (file.exists){
        file.open("r")
        prefs = eval(file.read())
        
        // Export tab
        destFolder = prefs.destPath

        vertTabbedPnl_nav.selection = prefs.activeTab;

        exportPathTxt.text = prefs.destPath;
        prefixTxt.text = prefs.prefix =="" ? "" : prefs.prefix;
        suffixTxt.text = prefs.suffix =="" ? "" : prefs.suffix;
        setExportArtbordsTxt.text = prefs.artboardRange;
        pdfSettingsDD.selection = prefs.pdfPreset; //pdfPreset.toString();
        
        // Settings tab
        // options
        embedThumbsCHb.value = prefs.generateThumbnails
        optimizePdfCHb.value = prefs.optimizePdf;
        preserveEditiballityCHb.value= prefs.preserveEditability;
        createLayersCHb.value = prefs.acrobatLayers;
        // bleed
        bleedLeftTxt.text= prefs.bleedLeft;
        bleedRightTxt.text= prefs.bleedRight;
        bleedTopTxt.text= prefs.bleedTop;
        bleedBottomTxt.text= prefs.bleedBottom;

        // Marks tab
        allPrinterMarksChb.value = prefs.allMarks;
        setAllMarks = prefs.allMarks;
        allPrinterMark = prefs.allMarks;
        registrationMarksChb.value = prefs.registrationMarks;
        trimMarksChb.value = prefs.trimMarks;
        printerMarkTypeDropDown.selection = prefs.pageMarksType;
        trimMarkWeightDropDown.selection = prefs.trimMarkWeight;
        trimMarkOffsetTxt.text = prefs.offset;
        colorBarsChb.value = prefs.colorBars;
        pageInformationChb.value = prefs.pageInformation;
        setAllPrinterMarks()

        file.close();
        getArtboardsRange()
    } else {
        vertTabbedPnl_nav.selection = 0;
    }
    showTab_vertTabbedPnl() 
}


function convertBleed (bleed) {
	var ppi = 72;
	var result = {};
	// result.inch = bleed/ppi/ppi;
	result.inch = bleed/ppi;
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
	result.pt = bleed; //result.mm * 28.346438836889; // 1cm > 28.3465 pt; 
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


readSettings();
exportDialog.show();