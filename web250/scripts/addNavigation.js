var pages = { // declaring navigation pages; key - name on Page : value - link to page
	Home : "index.html",
	Introduction : "introduction.html",
	Contract : "contract.html"//,
	//Brand : "brand.html",
	//TOC : "toc.html",
	//"One Page" : "onepage.html"
}
var levelNavOffset = "";

function addLogo(navigation) // adding logo (in this case just test with link to starting page)
{
	//var navigation = document.getElementById("navigation"); // get element with navigation id
	
	var logo = document.createElement("div"); // create div element
	var a = document.createElement("a");			
	var logoLink  = levelNavOffset + "index.html";


	a.setAttribute("href", logoLink); // setting ling to index page
	var headerTemp = document.createElement("h1");
	headerTemp.appendChild(document.createTextNode("WEB250 | Alexei Simchiv-Mattson's Amphibious Shark"));
	a.appendChild(headerTemp); // adding created elements together
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
		
		value = levelNavOffset + value;

		a.setAttribute("href", value);
		
		if (location.pathname.indexOf(value) > -1) { a.setAttribute("class", "active"); } // finding if current page contains added link, if yes add class for CSS
		
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
		levelNavOffset = "../" + levelNavOffset;
	}	
	
	var body = document.body;
	var headerNav = document.createElement("header");
	var navigation = document.createElement("nav");
	
	addLogo(navigation, level);
	addNavigationBar(navigation, level);
	
	headerNav.appendChild(navigation);			
	body.appendChild(headerNav);
}