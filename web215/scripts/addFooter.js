let footerLinks = {
	"Github" : "https://github.com/asimchi0",
	"Github Page" : "https://asimchi0.github.io/",
	"Github WEB215" : "https://asimchi0.github.io/web215/",
	"Freecodecamp" : "https://www.freecodecamp.org/asimchi0",
	"CodeAcademy" : "https://www.codecademy.com/profiles/asimchi0",
	"JSFiddle" : "https://jsfiddle.net/user/asimchi0/fiddles/",
	"LinkedIn Learning" : "https://www.linkedin.com/learning/?u=76141674"
};

let tagline = '"Wiggling out of any tight situation with the right cable at hand"';

let levelFooterOffset = "";

function addValImage(src,alt)
{
	let img = document.createElement("img");
	img.setAttribute("src",src);
	img.setAttribute("alt",alt);
	img.setAttribute("height","31");
	img.setAttribute("width","88");
	img.setAttribute("style","border:0px;");
	return img;
}

function addValidation(footer)
{
	let validation = document.createElement("div");
	let html = document.createElement("a");
	html.setAttribute("href", "https://validator.w3.org/check?uri=" + location.href)
	html.setAttribute("target","_blank");
	html.appendChild(addValImage(levelFooterOffset +"images/button_validation_html5.png", "Valid HTML 5"));
	let css = document.createElement("a");
	css.setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
	css.setAttribute("target","_blank");
	css.appendChild(addValImage(levelFooterOffset + "images/button_validation_css.png", "Valid CSS"));
	validation.appendChild(html);
	validation.appendChild(css);
	footer.appendChild(validation)
}

function addDesignBy(footer)
{
	let design = document.createElement("div");
	design.appendChild(document.createTextNode("Page built by NoNameCorp"));
	footer.appendChild(design);
}

function addLinks(footer)
{
	let links = document.createElement("div");
	// extra code to not add separator for last element.
	let dictLength = Object.keys(footerLinks).length;
	let lastKey = Object.keys(footerLinks)[dictLength-1];
	
	for (let key in footerLinks)
	{
		let value = footerLinks[key];
		let a = document.createElement("a");
		a.setAttribute("href",value);
		a.setAttribute("target","_blank");
		a.appendChild(document.createTextNode(key));				
		links.appendChild(a);
		if(key != lastKey) links.appendChild(document.createTextNode(" | "));
	}
	footer.appendChild(links);
}

function addTagline(footer) 
{
	let moto = document.createElement("div");
	moto.appendChild(document.createTextNode(`${tagline}`));
	footer.appendChild(moto);
}

function addSpacing(footer, spacing)
{
	for (let i = 0; i < spacing; i++)
	{
		footer.appendChild(document.createElement("br"));
	}
}

function addFooter(level = 0)
{
	for (let i = 0; i < level; i++)
	{
		levelFooterOffset = "../" + levelFooterOffset;
	}	
	
	let body = document.body;
	let footer = document.createElement("footer");
	addTagline(footer);
	addSpacing(footer, 2);
	addLinks(footer);
	addSpacing(footer, 2);
	addDesignBy(footer);
	addSpacing(footer, 1);
	addValidation(footer, level);			
	body.appendChild(footer);
}