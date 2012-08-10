//	HYPE.documents["BP_Hype"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "BP_Hype_Resources";
	var documentName = "BP_Hype";
	var documentLoaderFilename = "bphype_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_108 == "undefined") {
		if(typeof window.HYPE_108_DocumentsToLoad == "undefined") {
			window.HYPE_108_DocumentsToLoad = new Array();
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=108';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_108();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aL:"i",A:"c",aZ:"i",Y:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"29":{c:102,d:162,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"ALERTS:",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"5",k:"div",D:"#A0A0A0",a:-122,b:16},"37":{b:61,z:"7",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"35",transition:3},F:"center",G:"#000000",aP:"pointer",w:"Heart Rate",x:"visible",I:"Solid",a:30,y:"preserve",J:"Solid"},"36":{b:16,z:"6",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"12",transition:3},F:"center",G:"#000000",aP:"pointer",w:"Blood Pressure",x:"visible",I:"Solid",a:30,y:"preserve",J:"Solid"},"39":{b:151,z:"9",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"Submit",x:"visible",I:"Solid",a:30,y:"preserve",J:"Solid"},"38":{b:106,z:"8",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"42",transition:3},F:"center",G:"#000000",aP:"pointer",w:"Weight",x:"visible",I:"Solid",a:30,y:"preserve",J:"Solid"}},sceneIndex:0,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"3",backgroundColor:"#FFFFFF",name:"Home"},{initialValues:{"31":{I:"None",x:"visible",J:"None",a:22,K:"None",j:"absolute",b:60,c:137,k:"div",z:"5",d:202,L:"None",U:"htmlwidget.html",V:"0",W:""},"32":{b:22,z:"6",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"3",transition:3},F:"center",G:"#000000",aP:"pointer",w:"Home",x:"visible",I:"Solid",a:39,y:"preserve",J:"Solid"}},sceneIndex:1,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"12",backgroundColor:"#FFFFFF",name:"Blood Pressure"},{initialValues:{"34":{I:"None",x:"visible",J:"None",a:22,K:"None",j:"absolute",b:57,c:137,k:"div",z:"5",d:202,L:"None",U:"htmlwidget-1.html",V:"0",W:""},"33":{b:22,z:"6",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"3",transition:3},F:"center",G:"#000000",aP:"pointer",w:"Home",x:"visible",I:"Solid",a:39,y:"preserve",J:"Solid"}},sceneIndex:2,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"35",backgroundColor:"#FFFFFF",name:"Heart Rate"},{initialValues:{"41":{b:22,z:"6",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"3",transition:3},F:"center",G:"#000000",aP:"pointer",w:"Home",x:"visible",I:"Solid",a:39,y:"preserve",J:"Solid"},"40":{I:"None",x:"visible",J:"None",a:22,K:"None",j:"absolute",b:60,c:137,k:"div",z:"5",d:202,L:"None",U:"htmlwidget-2.html",V:"0",W:""}},sceneIndex:3,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"42",backgroundColor:"#FFFFFF",name:"Weight"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("bphype_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

