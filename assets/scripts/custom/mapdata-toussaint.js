window.map_path   = 'toussaint';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(160, 160);
window.map_center = [64, 58];
window.map_mZoom  = 6;
window.mapdata_toussaint = {

// Abandoned Site
	abandoned: [{
		coords: [
			[67.031,51.719],
			[66.875,37.406],
			[78.656,45.859],
			[82.063,47.391],
			[90.109,47.094],
			[32.391,68.297],
			[113.328,66.969],
		],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

// Alchemy Supplies
	alchemy: [{
		coords: [[52.719,62.609]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}],

// Armourer
	armourer: [{
		coords: [[39.969,81.000]],
		label: $.t("armourerjourney.label"),
		popup: $.t("armourerjourney.desc")
	},{
		coords: [[50.734,65.547]],  //todo
		label: $.t("armouretodo.label"),
		popup: $.t("armourertodo.desc")
	},{
		coords: [[50.281,64.297]],  //todo
		label: $.t("armourexxx.label"),
		popup: $.t("armourerxxx.desc")
	}],


// Armourer's Table
	armourerstable: [{
		coords: [
			[50.141,64.219],
			[116.538,71.366],
		],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

// Bandit Camp
	banditcamp: [{
		coords: [
			[52.188,100.469],
			[94.984,42.109],
			[114.250,75.781],
		],
		label: $.t("sidebar.banditcamp"),
		//popup: $.t("banditcamp.desc")
	}],



// Barber
	barber: [{
		coords: [
			[64.531,63.641],
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

// Hanse Base
	hansebase: [{
		coords: [
			[116.047,71.625],
			[96.438,44.750],
			[80.813,108.313]
		],
		label: $.t("t:hansebase.label"),
		popup: $.t("t:hansebase.desc")
	}],

// Blacksmith
	blacksmith: [{
		coords: [[49.813,64.359]], //check todo
		label: $.t("blacksmithxxx.label"),
		popup: $.t("blacksmithxxx.desc")
	}],


// Brothel
	brothel: [],

// Entrance
	entrance: [{
		coords: [
			[86.047,72.938],
			[77.063,54.563],
			[93.141,41.828],
			[47.000,79.578],
			[47.234,78.734],
			[48.438,92.609],
			[58.688,84.641],
			[49.781,100.625],
			[48.188,100.484],
			[28.047,81.891],
			[65.656,43.266],
			[95.406,42.234],
			[95.406,42.234],
			[95.172,45.188],
			[102.203,64.344],
			[46.203,51.609],
			[44.250,54.969],
			[73.219,86.156],
			[72.172,87.641],
			[43.438,95.797],
		],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

// Grindstone
	grindstone: [{
		coords: [
			[79.625,109.094],
			[50.219,64.422],
			[116.438,71.359],
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

// Guarded Treasure
	guarded: 	[{
		coords: [
			[44.781,103.531],
			//[37.594,97.641], //wrong?
			[45.953,88.2971],
			[37.250,62.828],
			[66.922,91.969],
			[111.828,72.859],
		],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	}],


// Gwent Player
	gwent: [{
		coords: [
			[51.297,60.781],
			[51.047,66.250],
			[53.672,61.313],
			[52.919,62.609],
			[50.750,65.109],
			[50.481,64.297],
			[34.169,81],
			[52.328,65.000],
			[55.328,61.891],
			[41.528,81.109],
			[58.359,72.672],
			[58.328,72.000],
			[64.856,62.734],
			[64.831,63.641],
			[65.313,64.688],
			[65.156,65.109],
			[85.628,53.734],
			[63.653,90.625],
			[75.606,75.188],


		],
		label: $.t("gwent.label"),
		popup: $.t("gwent.desc")
	}],

// Harbor
	harbor: [],

// Herbalist
	herbalist: [{
		coords: [
			[85.328,53.734],
			[51.047,66.250],
		],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	}],

// Hidden Treasure
	hidden: [{
		coords: [
			[69.203,42.016],
			[92.125,54.938],
			[88.922,53.391],
			[57.859,85.031],
			[77.141,42.047],
			[102.031,63.922],
			[42.547,54.688],
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],


// Innkeep
	innkeep: [{
			coords: [[75.406,75.188]],
			label: $.t("t:singpost.label.cockatraice"),
			popup: $.t("t:innkeep.desc.cockatraice")
		},{
				coords: [[64.656,62.734]],
				label: $.t("t:innkeep.label.xxx"),
				popup: $.t("t:innkeep.desc.xxx")
		},{
				coords: [[51.438,61.234]],
				label: $.t("t:innkeep.label.pheasantry"),
				popup: $.t("t:innkeep.desc.pheasantry")
		},{
				coords: [[41.328,81.109]],
				label: $.t("t:innkeep.label.xxx"),
				popup: $.t("t:innkeep.desc.xxx")
		},{
				coords: [[90.703,47.578]],
				label: $.t("t:innkeep.label.auberge"),
				popup: $.t("t:misc.desc.cleared")
		},{
				coords: [[63.453,90.625]],
				label: $.t("t:innkeep.label.barrelandbung"),
				popup: $.t("t:misc.desc.barrelandbung")
		},{
				coords: [[113.891,66.391]],
				label: $.t("t:innkeep.label.salamander"),
				popup: $.t("t:misc.desc.aftercleared")
		}],

// Knight Errant in Distress
	kid: [{
		coords: [
			[77.156,103.594]
		],
		label: $.t("t:kid.label"),
		popup: $.t("t:kid.desc")
	}],

// Monster Den
	monsterden: [{
		coords: [
			[65.703,43.125],
			[75.609,89.500],
			[95.828,100.641],
			[107.422,76.516],
		],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	}],

// Monster Nest
	monsternest: [{
		coords: [
			[70.156,74.109],
			[48.172,83.641],
			[58.969,42.047],
			[32.250,79.781],
			[89.047,107.734],
			[77.922,95.313],
		],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	}],


// Notice Board
	notice: [{
		coords: [
			// [126.563,69.063], //todo ??
			[84.391,55.125],
			[75.141,74.844],
			[53.375,63.719],
			[64.328,89.297],
			[41.750,80.313],
			[71.719,102.219],
			[93.609,65.781],  //todo check

		],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

// Person in Distress
	pid: [{
		coords: [
			[88.813,41.219],
			[97.813,49.516],
			[38.203,54.750],
			[112.969,81.328],
		],
		label: $.t("pid.label"),
		popup: $.t("pid.desc")
	}],

// Place of Power
	pop: [{
		coords: [[48.422,100.266]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[63.297,43.797]],
		label: $.t("pop.label") + $.t(" ")+ $.t("t:misc.desc.insideden"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[36.359,59.375]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[68.625,114.8447]],
		label: $.t("pop.label") + $.t(" ")+ $.t("t:misc.desc.insidecave"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[119.188,74.125]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

// Point of Interest
	poi: [{
	  coords: [[69.984,42.813]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.manticore") +$.t(" ") + $.t("t:poi.label.steel"),
	  popup: $.t("t:poi.desc.manticoresteelsword")
	},{
	  coords: [[97.984,60.766]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.manticore") +$.t(" ") +$.t("t:poi.label.trousersandboots"),
	  popup: $.t("t:poi.desc.manticoretrousersandboots")
	},{
	  coords: [[46.984,51.500]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.manticore") +$.t(" ") +$.t("t:poi.label.silver"),
	  popup: $.t("t:poi.desc.manticoresilver")
	},{
	  coords: [[69.078,116.578]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.griffin") +$.t(" ") +$.t("t:poi.label.steelgauntletsboots"),
	  popup: $.t("t:poi.desc.manticoresilver")
	},{
	  coords: [[65.641,91.719]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.ursine") +$.t(" ") +$.t("t:poi.label.silverarmorgauntlers"),
	  popup: $.t("t:poi.desc.silverarmorgauntlers")
	},{
	  coords: [[80.469,107.956]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.griffin") +$.t(" ") +$.t("t:poi.label.silverarmortrousers"),
	  popup: $.t("t:poi.desc.silverarmortrousers")
	},{
	  coords: [[73.156,86.656]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.ursine") +$.t(" ") +$.t("t:poi.label.steelbootstrousers"),
	  popup: $.t("t:poi.desc.steelbootstrousers")
	},{
	  coords: [[113.609,81.078]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.feline") +$.t(" ") +$.t("t:poi.label.armor"),
	  popup: $.t("t:poi.desc.armor")
	},{
	  coords: [[116.781,71.500]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.feline") +$.t(" ") +$.t("t:poi.label.trousersboots"),
	  popup: $.t("t:poi.desc.trousersboots")
	},{
	  coords: [[107.422,77]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.feline") +$.t(" ") +$.t("t:poi.label.steelsilvergauntlets"),
	  popup: $.t("t:poi.desc.steelbootstrousers")
	},{
	  coords: [[49.781,101]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.wolven") +$.t(" ") +$.t("t:poi.label.all"),
	  popup: $.t("t:poi.desc.all")
	},{
	  coords: [[91.547,106.172]],
	  label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.manticore") +$.t(" ") +$.t("t:poi.label.gauntlets"),
	  popup: $.t("t:poi.desc.gauntlets")
	}
],

// Shopkeeper
	shopkeeper: [{
		coords: [
			[85.391,72.594],  //after you cleared the Vineyard
			[50.719,65.109],
			[49.609,63.219],
			[63.734,89.188],
			[113.047,81.781],
		],
		label: $.t("sidebar.shopkeeper"),
		//popup: $.t("shopkeeper.desc")
	}],

// Signal Fire
	signalfire: [{
		coords: [
			[81.219,109.656],
			[117.016,71.484],
		],
		label: $.t("t:signalfire.label"),
		popup: $.t("t:signalfire.desc")
	}],

// Sign Post
	signpost: [{
		coords: [[85.578,74.844]],
		label: $.t("t:signpost.label.dulcineawindmill"),
		popup: $.t("t:signpost.desc.dulcineawindmill")
	}, {
		coords: [[76.563,75.891]],
		label: $.t("t:signpost.label.cockatraice"),
		popup: $.t("t:signpost.desc.cockatraice")
	}, {
		coords: [[70.719,69.219]],
		label: $.t("t:signpost.label.corvobianco"),
		popup: $.t("t:signpost.desc.corvobianco")
	}, {
		coords: [[58.594,55.828]],
		label: $.t("t:signpost.label.palace"),
		popup: $.t("t:signpost.desc.palace")
	}, {
		coords: [[52.188,53.859]],
		label: $.t("t:signpost.label.palacegardens"),
		popup: $.t("t:signpost.desc.palacegardens")
	}, {
		coords: [[49.188,67.703]],
		label: $.t("t:signpost.label.gate"),
		popup: $.t("t:signpost.desc.gate")
	}, {
		coords: [[39.563,79.563]],
		label: $.t("t:signpost.label.francollarts"),
		popup: $.t("t:signpost.desc.francollarts")
	}, {
		coords: [[77.813,41.813]],
		label: $.t("t:signpost.label.fort"),
		popup: $.t("t:signpost.desc.fort")
	}, {
		coords: [[91.297,47.344]],
		label: $.t("t:signpost.label.fox"),
		popup: $.t("t:signpost.desc.fox")
	}, {
		coords: [[85.422,55.938]],
		label: $.t("t:signpost.label.castelravello"),
		popup: $.t("t:signpost.desc.castelravello")
	}, {
		coords: [[47.969,78.094]],
		label: $.t("t:signpost.label.cemetry"),
		popup: $.t("t:signpost.desc.cemetry")
	}, {
		coords: [[55.359,88.313]],
		label: $.t("t:signpost.label.prison"),
		popup: $.t("t:signpost.desc.prison")
	}, {
		coords: [[46.781,92.297]],
		label: $.t("t:signpost.label.farm"),
		popup: $.t("t:signpost.desc.farm")
	}, {
		coords: [[46.406,99.547]],
		label: $.t("t:signpost.label.ruins"),
		popup: $.t("t:signpost.desc.ruins")
	}, {
		coords: [[35.734,94.438]],
		label: $.t("t:signpost.label.cottage"),
		popup: $.t("t:signpost.desc.cottage")
	}, {
		coords: [[27.500,80.031]],
		label: $.t("t:signpost.label.mutnaruins"),
		popup: $.t("t:signpost.desc.mutnaruins")
	}, {
		coords: [[48.063,63.016]],
		label: $.t("t:signpost.label.embassy"),
		popup: $.t("t:signpost.desc.embassy")
	}, {
		coords: [[53.859,63.641]],
		label: $.t("t:signpost.label.granplace"),
		popup: $.t("t:signpost.desc.granplace")
	}, {
		coords: [[64.734,64.125]],
		label: $.t("t:signpost.label.tunier"),
		popup: $.t("t:signpost.desc.tunier")
	}, {
		coords: [[96.391,59.031]],
		label: $.t("t:signpost.label.statue"),
		popup: $.t("t:signpost.desc.statue")
	}, {
		coords: [[34.719,67.375]],
		label: $.t("t:signpost.label.hortense"),
		popup: $.t("t:signpost.desc.hortense")
	}, {
		coords: [[64.609,90.953]],
		label: $.t("t:signpost.label.flovive"),
		popup: $.t("t:signpost.desc.flovive")
	}, {
		coords: [[69.688,115.422]],
		label: $.t("t:signpost.label.fortussar"),
		popup: $.t("t:signpost.desc.fortussar")
	}, {
		coords: [[78.328,107.422]],
		label: $.t("t:signpost.label.montcranecastle"),
		popup: $.t("t:signpost.desc.montcranecastle")
	}, {
		coords: [[82.219,85.750]],
		label: $.t("t:signpost.label.duntynnecastle"),
		popup: $.t("t:signpost.desc.duntynnecastle")
	}, {
		coords: [[79.984,94.141]],
		label: $.t("t:signpost.label.duntynnehillside"),
		popup: $.t("t:signpost.desc.duntynnehillside")
	}],


// Smugglers' Cache
	smugglers: [],

//// (Side) Quests
sidequests: [{
		coords: [[74.60,75.50]],
		label: $.t("t:sidequests.label.gwenttournment"),
		popup: $.t("t:sidequests.desc.gwenttournment")
	}, {
		coords: [[74.60,77.00]],
		label: $.t("t:sidequests.label.WildKingdom"),
		popup: $.t("t:sidequests.desc.WildKingdom")
	}, {
		coords: [[74.60,76.50]],
		label: $.t("t:sidequests.label.kingforhire"),
		popup: $.t("t:sidequests.desc.kingforhire")
	}, {
		coords: [[74.60,76.00]],
		label: $.t("t:sidequests.label.winewars"),
		popup: $.t("t:sidequests.desc.winewars")
	}, {
		coords: [[52.063,60.797]],
		label: $.t("t:sidequests.label.facethestrage"),
		popup: $.t("t:sidequests.desc.facethestrage")
	}, {
		coords: [[94.609,50.297]],
		label: $.t("t:sidequests.label.bigfeet"),
		popup: $.t("t:sidequests.desc.bigfeet")
	}, {
		coords: [[83.891,55.156]],
		label: $.t("t:sidequests.label.knightstale"),
		popup: $.t("t:sidequests.desc.knightstale")
	}, {
		coords: [[83.891,55.156]],
		label: $.t("t:sidequests.label.knightstale"),
		popup: $.t("t:sidequests.desc.knightstale")
	}, {
		coords: [[37.594,97.641]], //todo makers
		label: $.t("t:sidequests.label.spon"),
		popup: $.t("t:sidequests.desc.spon")
	}, {
		coords: [[57.891,85.313]],
		label: $.t("t:sidequests.label.escapology"),
		popup: $.t("t:sidequests.desc.escapology")
	}, {
		coords: [[49.578,62.969]],
		label: $.t("t:sidequests.label.tilldeath"),
		popup: $.t("t:sidequests.desc.tilldeath")
	}, {
		coords: [[50.719,65.875]],
		label: $.t("t:sidequests.label.master"),
		popup: $.t("t:sidequests.desc.master")
	}, {
		coords: [[77.141,42.5]],
		label: $.t("t:sidequests.label.suffering"),
		popup: $.t("t:sidequests.desc.hidden")
	}, {
		coords: [[52.281,65.234]],
		label: $.t("t:sidequests.label.granite"),
		popup: $.t("t:sidequests.desc.granite")
	}, {
		coords: [[52.844,63.5]],
		label: $.t("t:sidequests.label.wildkingdom"),
		popup: $.t("t:sidequests.desc.wildkingdom")
	}, {
		coords: [[52.844,64]],
		label: $.t("t:sidequests.label.smittenkight"),
		popup: $.t("t:sidequests.desc.smittenkight")
	}, {
		coords: [[52.844,64.5]],
		label: $.t("t:sidequests.label.placelikehome"),
		popup: $.t("t:sidequests.desc.placelikehome")
	}, {
		coords: [[52.844,65]],
		label: $.t("t:sidequests.label.onlyone"),
		popup: $.t("t:sidequests.desc.onlyone")
	}, {
		coords: [[101.484,61.531]],
		label: $.t("t:sidequests.label.bigfleet"),
		popup: $.t("t:sidequests.desc.save")
	}, {
		coords: [[42.500,55.313]],
		label: $.t("t:sidequests.label.enjpytheplay"),
		popup: $.t("t:sidequests.desc.enjpytheplay")
	}, {
		coords: [[50.453,63.734]],
		label: $.t("t:sidequests.label.paperchase"),
		popup: $.t("t:sidequests.desc.paperchase")
	}],




//// Contracts
contracts: [{
		coords: [[74.60,74.50]],
		label: $.t("t:contracts.label.biggamehunter"),
		popup: $.t("t:contracts.desc.biggamehunter")
	},{
		coords: [[74.60,75.00]],
		label: $.t("t:contracts.label.coldasice"),
		popup: $.t("t:contracts.desc.coldasice")
	},{
		coords: [[71.719,102.719]],
		label: $.t("t:contracts.label.bonvineblues"),
		popup: $.t("t:contracts.desc.bonvineblues")
	},{
		coords: [[64.328,89.797]],
		label: $.t("t:contracts.label.tufo"),
		popup: $.t("t:contracts.desc.tufo")
	}],


// Big Game Hunter - Level 37 - 93.578,91.750	 (NB)

// Vintner Contract
	vintnercontract: [{
			coords: [[110.172,87.125]],
			label: $.t("t:vintnercontract.label.1"),
			popup: $.t("t:vintnercontract.desc.1")
		},{
			coords: [[49.047,92.781]],
			label: $.t("t:vintnercontract.label.2"),
			popup: $.t("t:vintnercontract.desc.2")
	}],


// Spoils of War
	spoils: []
};
