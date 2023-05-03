let pages = { // declaring navigation pages; key - name on Page : value - link to page
	Home : "index.html",
	Introduction : "introduction.html",
	Contract : "contract.html",
	Brand : "brand.html"//,
	//TOC : "toc.html",
}

let fullName = 'Alexei Simchiv-Mattson';
let course = 'WEB250';
let siteName = 'Amphibious Shark';
let composedName = `${course} | ${fullName}'s ${siteName}`

let levelNavOffset = "";

function addLogo(navigation) // adding logo (in this case just test with link to starting page)
{
	let logo = document.createElement("div"); // create div element
	let a = document.createElement("a");			
	let logoLink  = levelNavOffset + "index.html";


	a.setAttribute("href", logoLink); // setting ling to index page
	let headerTemp = document.createElement("h1");
	headerTemp.appendChild(document.createTextNode(`${composedName}`));
	a.appendChild(headerTemp); // adding created elements together
	logo.appendChild(a);
	navigation.appendChild(logo);
}

function addNavigationBar(navigation)
{	
	let navUl = document.createElement("ul");
	for(let key in pages)
	{
		let value = pages[key];				
		let navLi = document.createElement("li")
		let a = document.createElement("a");
		
		value = levelNavOffset + value;

		a.setAttribute("href", value);
		
		if (location.pathname.indexOf(value) > -1) { a.setAttribute("class", "active"); } // finding if current page contains added link, if yes add class for CSS
		
		a.appendChild(document.createTextNode(key));
		navLi.appendChild(a);
		navUl.appendChild(navLi);				
	}			
	navigation.appendChild(navUl);
}

function changePageTitle()
{
	const currentUrl = new URL(window.location.href);
	let pathname = currentUrl.pathname;
	let pathnameParsed = pathname.split('/');
	let lastPathname = pathnameParsed.at(-1).toLowerCase();
	let titlePart = ''
	for (let key in pages)
	{
		let value = pages[key];		
		if (lastPathname === value)
		{			
			titlePart = key;
		}
	}
	document.title = `${composedName} | ${titlePart}`;
}

function addNavigation(level = 0)
{
	for (let i = 0; i < level; i++)
	{
		levelNavOffset = "../" + levelNavOffset;
	}	
	
	let body = document.body;	
	let headerNav = document.createElement("header");
	let navigation = document.createElement("nav");
	

	changePageTitle()
	addLogo(navigation, level);
	addNavigationBar(navigation, level);
	
	headerNav.appendChild(navigation);			
	body.appendChild(headerNav);
}