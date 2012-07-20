
$(document).ready(
	
function () 
{
	var samplePuzzle = { "row" : [

		"PANAMA0STAR0ALP",
		"ORATOR0NOVA0RIO",
		"TIPTOE0EYETESTS",
		"000ANNUALREPORT",
		"USE0PARKA0DANES",
		"SINAI0DINAR0000",
		"HEDGEFUNDS0FIDO",
		"EVERSO000SPINER",
		"REDO0BUSHTAXCUT",
		"0000ASPCA0REACH",
		"OGRES0CONGA0NEO",
		"PLANTCLOSING000",
		"TAKEROOT0ZOOMED",
		"IRE0APSE0MIRAGE",
		"NED0LEER0ODEDON" ] };

	var sampleClues =  { 
	"across" : [
		{ no : "1",  text : "Canal country" },
		{ no : "7",  text : "Dallas Cowboys symbol" },
		{ no : "11", text : "Mont Blanc, e.g" },
		{ no : "14", text : "Speaker in the House, e.g." },
		{ no : "15", text : "PBS science show" },
		{ no : "16", text : "Carnival city" },
		{ no : "17", text : "Go gently" },
		{ no : "18", text : "Some reading exams?" },
		{ no : "20", text : "Yearly accounting of economic health" },
		{ no : "22", text : "Employ" },
		{ no : "25", text : "Winter wear" },
		{ no : "26", text : "Hamlet and Ophelia, et. al." },
		{ no : "27", text : "1967 war zone" },
		{ no : "29", text : "Mideast moolah" },
		{ no : "31", text : "High-risk investment companies" },
		{ no : "33", text : "Rover's pal" },
		{ no : "37", text : "To a great extent" },
		{ no : "38", text : "Brent who played Data" },
		{ no : "40", text : "Try again" },
		{ no : "41", text : "Contentious economic issue for the 112th Congress" },
		{ no : "45", text : "Org. that saves strays" },
		{ no : "46", text : "Get to" },
		{ no : "47", text : "Grimm baddies" },
		{ no : "51", text : "Line dance" },
		{ no : "53", text : "Conservative beginning?" },
		{ no : "54", text : "Event with a negative effect on employment" },
		{ no : "57", text : "Become established" },
		{ no : "58", text : "Sped" },
		{ no : "62", text : "Anger" },
		{ no : "63", text : "Notre Dame niche" },
		{ no : "64", text : "Now you see it, now you don't" },
		{ no : "65", text : "Nancy Drew's boyfriend" },
		{ no : "66", text : "Lusty look" },
		{ no : "67", text : "Had way too much of" }
	], 
	"down" : [
		{ no : "1",  text : "Take at the table" },
		{ no : "2",  text : "'Exodus' protagonist" },
		{ no : "3",  text : "Tot's time-out" },
		{ no : "4",  text : "'____ girl!'" },
		{ no : "5",  text : "Marshmallow and chocolate treats" },
		{ no : "6",  text : "Scene of the action" },
		{ no : "7",  text : "Enter surreptitiously" },
		{ no : "8",  text : "Magical place in a Vitor Herbert operetta" },
		{ no : "9",  text : "State strongly" },
		{ no : "10", text : "Not for young children" },
		{ no : "11", text : "Bad lighting?" },
		{ no : "12", text : "Petrol unit" },
		{ no : "12", text : "Puts on a bulletin board" },
		{ no : "19", text : "Govt. clean air watchdog" },
		{ no : "21", text : "Language  of Lahore" },
		{ no : "22", text : "Theater employee" },
		{ no : "23", text : "Strainer" },
		{ no : "24", text : "Kaput" },
		{ no : "28", text : "Prefix with business" },
		{ no : "30", text : "Kind of prof" },
		{ no : "32", text : "Watch chains" },
		{ no : "33", text : "Prix __ menu" },
		{ no : "34", text : "Like many Andean artifacts" },
		{ no : "35", text : "Low card" },
		{ no : "36", text : "Lawn care brand" },
		{ no : "39", text : "Filled with unfounded suspicion" },
		{ no : "42", text : "Personal partner" },
		{ no : "43", text : "Two-wheeled transport" },
		{ no : "44", text : "Skater Brinder" },
		{ no : "45", text : "Like a planetarium projection" },
		{ no : "47", text : "Choose to participate" },
		{ no : "48", text : "Driving hazard on a sunny day" },
		{ no : "49", text : "Did some fall cleaning" },
		{ no : "50", text : "Direction from NY to RI" },
		{ no : "52", text : "Doohickey" },
		{ no : "55", text : "Deal (with)" },
		{ no : "56", text : "Party in a landmark Supreme Court case of 2000" },
		{ no : "59", text : "Ticked" },
		{ no : "60", text : "'I' problem" },
		{ no : "61", text : "TV room" }
	] 
};
	
	$(this).crossword( { 'puzzle' : samplePuzzle,  'clues' : sampleClues, 'acrossContainer' :  "#acrossContainer" } );
}

);








		

/*

	var myPuzzle = { "row" : [
			 "SLIT0SUNS",
			 "LINO0ANOA",
			 "IMITATING",
			 "MET0WAVES",
			 "00INANE00",
			 "STAIR0RHO",
			 "WITNESSED",
			 "ALEE0SALE",
			 "MESS0ELMS"
] };

var myClues =  { "across" : [
			{ no : "1", text : "A long narrow opening" },
			{ no : "5", text : "Stars" },
			{ no : "9", text : "Linoleum (abbrev.)" },
			{ no : "10", text : "Dwarf buffalo" },
			{ no : "11", text : "Copying" },
			{ no : "13", text : "Encountered" },
			{ no : "14", text : "Water rolling onto beaches" },
			{ no : "15", text : "Silly" },
			{ no : "17", text : "Step" },
			{ no : "19", text : "17th letter of the Greek alphabet" },
			{ no : "22", text : "Saw" },
			{ no : "24", text : "Downwind" },
			{ no : "25", text : "A period of discounted prices" },
			{ no : "26", text : "Untidyness" },
			{ no : "27", text : "Trees of the genus Ulmus" }
], 
"down" : [
			{ no : "1", text : "Slender" },
			{ no : "2", text : "A tart green fruit" },
			{ no : "3", text : "Commences" },
			{ no : "4", text : "Infant" },
			{ no : "5", text : "The devil" },
			{ no : "6", text : "Everywhere" },
			{ no : "7", text : "Not a single one" },
			{ no : "8", text : "Droops" },
			{ no : "12", text : "Cognizant" },
			{ no : "16", text : "9 9 9 9" },
			{ no : "17", text : "Backstroked" },
			{ no : "18", text : "Thin slab of linoleum" },
			{ no : "20", text : "Ship steering mechanism" },
			{ no : "21", text : "Lyric poems" },
			{ no : "23", text : "South-southeast" }
] };





*/
