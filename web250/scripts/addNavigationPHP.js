var pages = { // declaring navigation pages; key - name on Page : value - link to page
	Home: "?p=home.php",
	Introduction: "?p=introduction.php",
	Contract: "?p=contract.php",
	Template: "?p=template.php" ,
	FizzBuzz: "?p=fizzbuzz.php" ,
	Brand : "?p=brand.php",
	ATOC : "?p=atoc.php"
}

let fullName = 'Alexei Simchiv-Mattson';
let course = 'WEB250';
let siteName = 'Amphibious Shark';
let composedName = `${course} | ${fullName}'s ${siteName}`

var levelNavOffset = "";

function addLogo(navigation) // adding logo (in this case just test with link to starting page)
{	
	var logo = document.createElement("div"); // create div element
	var a = document.createElement("a");			
	var logoLink = levelNavOffset + "?p=home.php";


	a.setAttribute("href", logoLink); // setting ling to index page
	
	var headerTemp = document.createElement("h1");	
	headerTemp.appendChild(document.createTextNode(`${composedName}`));
	a.appendChild(headerTemp); // adding created elements together
	logo.appendChild(a);
	navigation.appendChild(logo);
}
function addNavigationBar(navigation)
{
	var navUl = document.createElement("ul");
	for(var key in pages)
	{
		var value = pages[key];				
		var navLi = document.createElement("li")
		var a = document.createElement("a");
		
		value = levelNavOffset + value;

		a.setAttribute("href", value);
		
		if (location.search.indexOf(value) > -1) { a.setAttribute("class", "active"); } // finding if current page contains added link, if yes add class for CSS
		
		a.appendChild(document.createTextNode(key));
		navLi.appendChild(a);
		navUl.appendChild(navLi);				
	}			
	navigation.appendChild(navUl);
}

function changePageTitle()
{
	const currentUrl = new URL(window.location.href);
	let searchParams = currentUrl.searchParams;	
	let titlePart = ''
	for (let key in pages)
	{
		let value = pages[key];			
		let valueParsed = value.split('=');		
		let lastValue = valueParsed.at(-1).toLowerCase();
		
		if (searchParams.get('p') === lastValue)
		{			
			titlePart = key;
		}
	}
	document.title = `${composedName} | ${titlePart}`;
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
	
	changePageTitle();
	addLogo(navigation, level);
	addNavigationBar(navigation, level);
	
	headerNav.appendChild(navigation);			
	body.appendChild(headerNav);
}