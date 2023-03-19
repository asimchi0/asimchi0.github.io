// <a href="?p=home.php">home</a>
var pages = { // declaring navigation pages; key - name on Page : value - link to page
	Home: "?p=home.php",
	Introduction: "?p=introduction.php",
	Contract: "?p=contract.php",
	Template: "?p=template.php" ,
	FizzBuzz: "?p=fizzbuzz.php" //,
	//Brand : "brand.html",
	//TOC : "toc.html",
	//"One Page" : "onepage.html"
}
var leveNavlOffset = "";

function addLogo(navigation) // adding logo (in this case just test with link to starting page)
{
	//var navigation = document.getElementById("navigation"); // get element with navigation id
	
	var logo = document.createElement("div"); // create div element
	var a = document.createElement("a");			
	var logoLink = leveNavlOffset + "?p=home.php";


	a.setAttribute("href", logoLink); // setting ling to index page
	
	var headerTemp = document.createElement("h1");
	//headerTemp.appendChild(document.createTextNode("Alexei's WEB250"));
	headerTemp.appendChild(document.createTextNode("Amphibious Shark"));
	a.appendChild(headerTemp); // adding created elelemnts together
	logo.appendChild(a);
	navigation.appendChild(logo);
}
function addNavigationBar(navigation)
{
	//var navigation = document.getElementById("navigation");
	var navUl = document.createElement("ul");
	for(var key in pages)
	{
		var value = pages[key];				
		var navLi = document.createElement("li")
		var a = document.createElement("a");
		
		value = leveNavlOffset + value;

		a.setAttribute("href", value);
		
		if (location.search.indexOf(value) > -1) { a.setAttribute("class", "active"); } // finding if current page contains added link, if yes add class for CSS
		
		a.appendChild(document.createTextNode(key));
		navLi.appendChild(a);
		navUl.appendChild(navLi);				
	}			
	navigation.appendChild(navUl);
}
function addNavigation(level = 0)
{
	for (var i = 0; i < level; i++)
	{
		leveNavlOffset = "../" + leveNavlOffset;
	}	
	
	var body = document.body;
	var headerNav = document.createElement("header");
	var navigation = document.createElement("nav");
	
	addLogo(navigation, level);
	addNavigationBar(navigation, level);
	
	headerNav.appendChild(navigation);			
	body.appendChild(headerNav);
}