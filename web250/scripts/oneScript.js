$(document).ready(function(e){

	$('#onepage').html(pageDictionary["index.html"]);
	
	$(document).on('click', 'a', function(e) {
		
		let link = $(this).attr('href');
		//alert(link);
		if(pageDictionary[link]) {
			e.preventDefault();
		}
		
		$('#onepage').html(pageDictionary[link]);
	});
});

let pageDictionary = { 
"index.html" :
`		<section>	
			<h1>Welcome to WEB115 Web Markup and Scripting</h1>
			<h2>Hello, It is Alexei.</h2>
			<p>This page is hosted by Github</p>			
		</section>
`,
"introduction.html" :
`		<section>	
			<h2>Introduction</h2>
			<h1 style="text-align: center;">Alexei Simchiv-Mattson</h1>
			<figure>
				<img src="images/Alexei.jpg" alt="Photo of Alexei" height="255" width="170" class="center">
				<figcaption>Me in backyard, 2019</figcaption>
			</figure>
			<ul>
				<li>Personal background: I am from Moldova. I am an international student and am excited to study at CPCC.</li>
				<li>Professional background: I worked as a software engineer back in Moldova for a few years. I mostly used C# for writing code.</li>
				<li>Academic background: I finished my Masters Degree in Software Development in Moldova. I am currently pursuing a Full Stack Programming degree.</li>
				<li>Background in this subject: I worked with web pages a little, more on the level of “Hello World” and explored new technologies when opportunities arise.</li>
				<li>Primary computer platform: Windows 10</li>
				<li>Courses I’m taking:
					<ul>
						<li>CTS-240 Project Management - required class - It is important to know how to properly manage projects.</li>
						<li>DBA-120 Database Programming - required class - I think almost everything uses some sort of database when it comes to storing information.</li>
						<li><a href="contract.html">WEB-115 Web Markup and Scripting</a> - required class - I suspect that everything and everyone has a web page now or you can get one for free, so it is good to know how it is working to build web pages yourself.</li>
						<li>WEB-140 Web Development Tools - required class - Important class in modern times.</li>
					</ul>
				</li>
				<li>Interesting item to remember me by: I liked to go from my university back home on foot during nice weather, it took around 2 hours.</li>
				<li>I’d also like to share: I like hiking and bicycle riding.</li>
			</ul>
		</section>
`,
"contract.html" :
`		<section>				
			<h2>Course Contract</h2>
			<p>I, <a href="introduction.html">Alexei Simchiv-Mattson</a> agree to abide by the terms in my Fall 2022 WEB115 Web Markup and Scripting with my instructor, D.I. von Briesen.</p>
			<p>I understand that all work that I do on my school and personal websites will be publicly available to the world. I will not put information there that is inappropriate for schoolwork, or that I wish to keep private.</p>
			<p>I also understand that it is my work that counts for attendance, not logins or showing up for class. As such, failure to turn in assignments may show as an absences.</p>
			<p>Signed: Alexei Simchiv-Mattson, 21 August 2022</p>
		</section>
`,
"brand.html" :
`		<section>			
			<h1>NoNameCorp</h1>
			<p></p>
			<p>NoNameCorp idea - providing PC building guidance and services. Building a PC is not just putting parts into a metal box. There are a lot of aspects to building PC and clients should have at least general idea of what they want and for what purspose. Some PC parts live much longer than others and proper planning could reduce cost by investing into long lasting parts early on.</p>
			
			<h2>Brand Guide</h2>
			<p>Font : Arial, 25px, sans-serif - Arial font is easier to read and print, large font size makes it easy to read.</p>
			<p>Background color :  light green (#61f34e) - green background color creates a good contrast with text</p>
		</section>
`,
"toc.html" :
`		<section>
			<h2>Table Of Contents</h2>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="introduction.html">Introduction</a></li>
				<li><a href="contract.html">Contract</a></li>
				<li><a href="brand.html">Brand</a></li>
				<li><a href="toc.html">Table Of Contents</a>
				<li>Smarter Way to Learn
					<ul>
						<li><a href="swtl/swtl_examples_1_10.html">Chapters 01 - 10</a></li>
						<li><a href="swtl/swtl_examples_11_20.html">Chapters 11 - 20</a></li>
						<li><a href="swtl/swtl_examples_21_30.html">Chapters 21 - 30</a></li>
						<li><a href="swtl/swtl_examples_31_40.html">Chapters 31 - 40</a></li>
						<li><a href="swtl/swtl_examples_41_50.html">Chapters 41 - 50</a></li>
						<li>Chapters 51 - 60</li>
						<li>Chapters 61 - 70</li>
						<li>Chapters 81 - 89</li>
					</ul>
				</li>
				<li>Fizz Buzz
					<ul>
						<li><a href="fizzbuzz/fizzbuzz0.html">Fizz Buzz 0</a></li>
						<li><a href="fizzbuzz/fizzbuzz1.html">Fizz Buzz 1</a></li>
						<li><a href="fizzbuzz/fizzbuzz2.html">Fizz Buzz 2</a></li>
						<li><a href="fizzbuzz/fizzbuzz3.html">Fizz Buzz 3</a></li>
						<li><a href="fizzbuzz/fizzbuzz4.html">Fizz Buzz 4</a></li>
					</ul>
				</li>
				
			</ul>
		</section>
`,
"fizzbuzz/fizzbuzz0.html" :
`		<section>			
			<header>
				<h1 id="greeting">Welcome to Fizz Buzz</h1>
			</header>
			
			<form id="greetingForm" action="javascript:void(0)"  method="post">
				<label for="firstName">First name:</label>
				<input type="text" id="firstName" name="firstName" required><br>
				<label for="middleInitial">Middle Initial:</label>
				<input type="text" id="middleInitial" name="middleInitial" maxlength="1"><br>
				<label for="lastName">Last name:</label>
				<input type="text" id="lastName" name="lastName" required><br>
				<label for="count">Count:</label>
				<input type="number" id="count" name="count" value="200" min="10" max="1000" required><br>
				<input type="submit" value="Submit">
			</form>			
			
			<div id="loopHeader"></div>
			<div id="loopSection"></div>
			
		</section>
		<script>
			function makeChanges()
			{
				changeGreeting();
				changeLoop();
			}
			
			function changeGreeting()
			{
				var greetingItem = document.getElementById('greeting'); // this is comment
				var firstName = document.getElementById('firstName').value;
				var middleInitial = document.getElementById('middleInitial').value;
				var lastName = document.getElementById('lastName').value;
				var newGreeting = "Welcome";
				newGreeting = newGreeting.concat(" ", firstName);
				if (middleInitial !== "") { newGreeting = newGreeting.concat(" ", middleInitial, "."); }
				newGreeting = newGreeting.concat(" ", lastName, " ","to Fizz Buzz");				
				greetingItem.textContent = newGreeting;
				return false;
			}
			
			function changeLoop()
			{
				var message = "Beep Boop";
				var loopText = "Beep Boop";
				
				var loopHeaderItem = document.getElementById('loopHeader');								
				var headerLoop = document.createElement("h2");
				headerLoop.textContent = message;
				loopHeaderItem.appendChild(headerLoop);								
				
				var loopSectionItem = document.getElementById('loopSection');
				
				var loopLimit = $('#count').val();
				
				var result="<ol>";
				for (let i = 1; i <= loopLimit; i++) {
					var addition;
					if ( i % 2 == 0 ) { addition = "Even"; } 
					else { addition = "Odd"; }
					result = result.concat("<li>"," ",loopText," ",addition,"</li>");
				}
				result = result.concat("</ol>")
				loopSectionItem.innerHTML = result;
				return false;
			}
			
			$('#greetingForm').on('submit', function(){
				makeChanges();
			});
		</script>
`,
"fizzbuzz/fizzbuzz1.html" :
`		<section>			
			<header>
				<h1 id="greeting">Welcome to Fizz Buzz</h1>
			</header>

			<form id="greetingForm" action="javascript:void(0)"  method="post">
				<label for="firstName">First name:</label>
				<input type="text" id="firstName" name="firstName" required><br>
				<label for="middleInitial">Middle Initial:</label>
				<input type="text" id="middleInitial" name="middleInitial" maxlength="1"><br>
				<label for="lastName">Last name:</label>
				<input type="text" id="lastName" name="lastName" required><br>
				<label for="count">Count:</label>
				<input type="number" id="count" name="count" value="200" min="10" max="1000" required><br>
				<input type="submit" value="Submit">
			</form>	

			<div id="loopHeader"></div>
			<div id="loopSection"></div>
			
		</section>
		<script>
			function makeChanges()
			{
				changeGreeting();
				changeLoop();
			}
			
			function changeGreeting()
			{
				var greetingItem = document.getElementById('greeting'); // this is comment
				var firstName = document.getElementById('firstName').value;
				var middleInitial = document.getElementById('middleInitial').value;
				var lastName = document.getElementById('lastName').value;
				var newGreeting = "Welcome";
				newGreeting = newGreeting.concat(" ", firstName);
				if (middleInitial !== "") { newGreeting = newGreeting.concat(" ", middleInitial, "."); }
				newGreeting = newGreeting.concat(" ", lastName, " ","to Fizz Buzz");				
				greetingItem.textContent = newGreeting;
				return false;
			}
			
			function changeLoop()
			{
				var message = "Beep";
				var message3 = "Boop";
				var message5 = "Zap";
				
				var loopHeaderItem = document.getElementById('loopHeader');								
				var headerLoop = document.createElement("h2");
				headerLoop.textContent = message;
				loopHeaderItem.appendChild(headerLoop);	
				
				var loopSectionItem = document.getElementById('loopSection');
				
				var loopLimit = $('#count').val();
				
				var uList = document.createElement("ol");			
				

				for (let i = 1; i <= loopLimit; i++) 
				{
					var listItem = document.createElement("li");					
					var addition;
					if ( i % 3 == 0 && i % 5 == 0 ) { addition = message3 + " " + message5; }
					else if ( i % 3 == 0 ) { addition = message3; } 
					else if ( i % 5 == 0 ) { addition = message5; } 
					else { addition = message; }
					listItem.appendChild(document.createTextNode(addition));

					uList.appendChild(listItem);
				}

				loopSectionItem.appendChild(uList);
				return false;
			}
			
			$('#greetingForm').on('submit', function(){
				makeChanges();
			});
		</script>
`,
"fizzbuzz/fizzbuzz2.html" :
`		<section>			
			<header>
				<h1 id="greeting">Welcome to Fizz Buzz</h1>
			</header>

			<form id="greetingForm" action="javascript:void(0)"  method="post">
				<label for="firstName">First name:</label>
				<input type="text" id="firstName" name="firstName" required><br>
				<label for="middleInitial">Middle Initial:</label>
				<input type="text" id="middleInitial" name="middleInitial" maxlength="1"><br>
				<label for="lastName">Last name:</label>
				<input type="text" id="lastName" name="lastName" required><br>
				<label for="count">Count:</label>
				<input type="number" id="count" name="count" value="200" min="10" max="1000" required><br>
				<label>Enter number: word pairs</label><br>
				<div class="numberText">
					<input type="number" class="number" id="number1" name="number" value="3"> :
					<input type="text" class="word" id="word1" name="word" value="Boop"><br>
				</div>
				<div class="numberText">
					<input type="number" class="number" id="number2" name="number" value="5"> :
					<input type="text" class="word" id="word2" name="word" value="Zap"><br>
				</div>
				<input type="submit" value="Submit">
			</form>
			
			<div id="loopHeader"></div>
			<div id="loopSection"></div>
			
		</section>
		<script>
			function makeChanges()
			{
				changeGreeting();
				changeLoop();
			}
			
			function changeGreeting()
			{
				var greetingItem = document.getElementById('greeting'); // this is comment
				var firstName = document.getElementById('firstName').value;
				var middleInitial = document.getElementById('middleInitial').value;
				var lastName = document.getElementById('lastName').value;
				var newGreeting = "Welcome";
				newGreeting = newGreeting.concat(" ", firstName);
				if (middleInitial !== "") { newGreeting = newGreeting.concat(" ", middleInitial, "."); }
				newGreeting = newGreeting.concat(" ", lastName, " ","to Fizz Buzz");				
				greetingItem.textContent = newGreeting;
				return false;
			}
			
			function changeLoop()
			{
				var message = "Beep";
				var message3 = "Boop";
				var message5 = "Zap";
				
				var loopHeaderItem = document.getElementById('loopHeader');								
				var headerLoop = document.createElement("h2");
				headerLoop.textContent = message;
				loopHeaderItem.appendChild(headerLoop);			
				
				var loopSectionItem = document.getElementById('loopSection');
				
				var loopLimit = $('#count').val();
				
				var uList = document.createElement("ol");			
				
				
				var x = $('#number1').val();
				var y = $('#number2').val();
				
				for (let i = 1; i <= loopLimit; i++) 				
				{

					var listItem = document.createElement("li");					
					var addition;
					if ( checkDivision (i, x) && checkDivision (i, y) ) { addition = message3 + " " + message5; }
					else if ( checkDivision (i, x) ) { addition = message3; } 
					else if ( checkDivision (i, y) ) { addition = message5; } 
					else { addition = message; }
					listItem.appendChild(document.createTextNode(addition));

					uList.appendChild(listItem);
				}

				loopSectionItem.appendChild(uList);				
			}
			function checkDivision(x, y)
			{
				return (x % y == 0);
			}
			
			$('#greetingForm').on('submit', function(){
				makeChanges();
			});
		</script>
`,
"fizzbuzz/fizzbuzz3.html" :
`		<section>			
			<header>
				<h1 id="greeting">Welcome to Fizz Buzz</h1>
			</header>

			<form id="greetingForm" action="javascript:void(0)"  method="post">
				<label for="firstName">First name:</label>
				<input type="text" id="firstName" name="firstName" required><br>
				<label for="middleInitial">Middle Initial:</label>
				<input type="text" id="middleInitial" name="middleInitial" maxlength="1"><br>
				<label for="lastName">Last name:</label>
				<input type="text" id="lastName" name="lastName" required><br>
				<label for="count">Count:</label>
				<input type="number" id="count" name="count" value="200" min="10" max="1000" required><br>
				<label>Enter number: word pairs</label><br>
				<div class="numberText">
					<input type="number" class="number" id="number1" name="number" value="3"> :
					<input type="text" class="word" id="word1" name="word" value="Boop"><br>
				</div>
				<div class="numberText">
					<input type="number" class="number" id="number2" name="number" value="5"> :
					<input type="text" class="word" id="word2" name="word" value="Zap"><br>
				</div>
				<div class="numberText">
					<input type="number" class="number" id="number3" name="number" value="7"> :
					<input type="text" class="word" id="word3" name="word" value="BANG!"><br>
				</div>
				<input type="submit" value="Submit">
			</form>

			<div id="loopHeader"></div>
			<div id="loopSection"></div>
			
		</section>
		<script>
			function makeChanges()
			{
				changeGreeting();
				changeLoop();
			}
			
			function changeGreeting()
			{
				var greetingItem = document.getElementById('greeting'); // this is comment
				var firstName = document.getElementById('firstName').value;
				var middleInitial = document.getElementById('middleInitial').value;
				var lastName = document.getElementById('lastName').value;
				var newGreeting = "Welcome";
				newGreeting = newGreeting.concat(" ", firstName);
				if (middleInitial !== "") { newGreeting = newGreeting.concat(" ", middleInitial, "."); }
				newGreeting = newGreeting.concat(" ", lastName, " ","to Fizz Buzz");				
				greetingItem.textContent = newGreeting;
				return false;
			}
			
			function changeLoop()
			{
				var defaultMessage = "Beep";
				
				var divisorToMessage = {3 : "Boop", 5 : "Zap", 7 : "BANG!"}; // default
				
				var loopHeaderItem = document.getElementById('loopHeader');								
				var headerLoop = document.createElement("h2");
				headerLoop.textContent = defaultMessage;
				loopHeaderItem.appendChild(headerLoop);				
				
				var loopSectionItem = document.getElementById('loopSection');
				
				var loopLimit = $('#count').val();
				
				var uList = document.createElement("ol");			
				
				
				var x = $('#number1').val();
				var y = $('#number2').val();
				var z = $('#number3').val();
				
				divisorToMessage = { [x] : "Boop", [y] : "Zap", [z] : "BANG!"}; 
				
				for (let i = 1; i <= loopLimit; i++) 				
				{
					var listItem = document.createElement("li");					
					var addition = "";
					for (let [key, value] of Object.entries(divisorToMessage)) {
						 if (checkDivision (i, key)) {
							addition = addition.concat(" ", value);
						}
					}
					if (addition === "") {
						addition = defaultMessage;
					}
					/*if ( checkDivision (i, x) && checkDivision (i, y) ) { addition = message3 + " " + message5; }
					else if ( checkDivision (i, x) ) { addition = message3; } 
					else if ( checkDivision (i, y) ) { addition = message5; } 
					else { addition = message; }*/
					listItem.appendChild(document.createTextNode(addition));

					uList.appendChild(listItem);
				}

				loopSectionItem.appendChild(uList);				
			}
			function checkDivision(x, y)
			{
				return (x % y == 0);
			}
			
			$('#greetingForm').on('submit', function(){
				makeChanges();
			});
		</script>
`,
"fizzbuzz/fizzbuzz4.html" :
`		<section>			
			<header>
				<h1 id="greeting">Welcome to Fizz Buzz</h1>
			</header>
			
			<form id="greetingForm" action="javascript:void(0)"  method="post">
			<div class="formAlign">
				<label for="firstName">First name:</label>
				<input type="text" id="firstName" name="firstName" required><br>
				<label for="middleInitial">Middle Initial:</label>
				<input type="text" id="middleInitial" name="middleInitial" maxlength="1"><br>
				<label for="lastName">Last name:</label>
				<input type="text" id="lastName" name="lastName" required><br>
				<label for="count">Count:</label>
				<input type="number" id="count" name="count" value="200" min="10" max="1000" required><br>
			</div>
				<label for="defaultWord">Default word :</label>
				<input type="text" id="defaultWord" name="defaultWord"><br>
			
				<label>Enter number: word pairs</label><br>
				<div class="numberText">
					<input type="number" class="number" id="number1" name="number" value="3"> :
					<input type="text" class="word" id="word1" name="word"><br>
				</div>
				<div class="numberText">
					<input type="number" class="number" id="number2" name="number" value="5"> :
					<input type="text" class="word" id="word2" name="word"><br>
				</div>
				<div class="numberText">
					<input type="number" class="number" id="number3" name="number" value="7"> :
					<input type="text" class="word" id="word3" name="word"><br>
				</div>				
				<input type="submit" value="Submit">
				<input type="button" id="addMore" value="Add more">
				<input type="button" id="remove" value="Remove">
				<input type="checkbox" id="useWord" checked>
				<label for="useWord">Use default word</label>
				
			</form>	

			<div id="loopHeader"></div>
			<div id="loopSection"></div>
			
		</section>
		<script>
			const words = ["Boop", "Zap", "Bang", "Test", "Taste", "Food", "Bee", "Dog", "Cat", "Bird", "I", "Run", "Out", "Of", "Ideas", "Nope", "None", "Nothing", "Still", "Zero", "Do", "Not", "Expect", "More", "Words", "Wait", "Minute", "Something", "Anything", "Everything", "Stop", "Clicking!", "Nooo", "Sdfghdf"];
			
			const defaultMessage = "Beep";
			
			const defaultCount = 125;
		
			function makeChanges()
			{
				changeGreeting();
				changeLoop();
			}
			
			function changeGreeting()
			{
				let greetingItem = document.getElementById('greeting'); // this is comment
				let firstName = document.getElementById('firstName').value;
				let middleInitial = document.getElementById('middleInitial').value;
				let lastName = document.getElementById('lastName').value;
				let newGreeting = "Welcome";
				newGreeting = newGreeting.concat(" ", firstName);
				if (middleInitial !== "") { newGreeting = newGreeting.concat(" ", middleInitial, "."); }
				newGreeting = newGreeting.concat(" ", lastName, " ","to Fizz Buzz");				
				greetingItem.textContent = newGreeting;
				return false;
			}
			
			function collectNumberWordPairs() {
				let numberWordPairs = {};
				
				
				$('div[class=numberText]').each(function() { // select all element with numberText workaround from direct class selector
				
					let number = Number($(this).find('.number').val()); // convert to number, '' converts into 0
					
					if (number) { // have number 
						
						let word = $(this).find('.word').val(); // collect word
						
						if (word) { // have word
							numberWordPairs[number] = word; // add new pair
						}
					}
				})
				
				/*
				//DEBUG
				for (let [key, value] of Object.entries(numberWordPairs)) {
					alert(key + " : " + value);
				}
				*/
				
				return numberWordPairs;
			}
			
			function changeLoop()
			{			
				let message =  $('#defaultWord').val();
				
				let useWord = $('#useWord').prop('checked');				
				
				//let divisorToMessage = {3 : "Boop", 5 : "Zap", 7 : "BANG!"}; // default
				
				let divisorToMessage = collectNumberWordPairs(); // collect values;
				
				var loopHeaderItem = document.getElementById('loopHeader');								
				var headerLoop = document.createElement("h2");
				headerLoop.textContent = message;
				loopHeaderItem.appendChild(headerLoop);					
				
				let loopSectionItem = document.getElementById('loopSection');
				
				let loopLimit = $('#count').val();				
				
				let uList = document.createElement("ol");			
				
				for (let i = 1; i <= loopLimit; i++) 				
				{
					let listItem = document.createElement("li");					
					let addition = "";
					for (let [key, value] of Object.entries(divisorToMessage)) {
						 if (checkDivision (i, key)) {
							addition = addition.concat(" ", value);
						}
					}
					if (addition === "") {
						if (useWord) {
							addition = message;
						}
						else {
							addition = i;
						}
					}
					
					listItem.appendChild(document.createTextNode(addition));

					uList.appendChild(listItem);
				}
				loopSectionItem.innerHTML = ''; // clear html to add new list
				loopSectionItem.appendChild(uList);				
			}
			
			function checkDivision(x, y)
			{
				return (x % y == 0);
			}
			
			function preFillFields() {
				
				$('#count').attr('value', defaultCount);
			
				$defaultWord = $('#defaultWord');
				$defaultWord.attr('value', defaultMessage);
				
				$('div[class=numberText]').each(function() {
					let $index = $(this).index("div");	
					
					$(this).find('.word').attr('value',words[$index - 1]);
				})
				
			}

			$('#greetingForm').on('submit', function(){
				makeChanges();
			});
			
			$('#addMore').on('click', function() {
				
				let $element = $('div[class=numberText]').last();
				let $index = $element.index("div"); // index of previous last element			
				
				let $d = $('<div>');
				$d.attr('class','numberText');
				
				let $b = $('<br>');
				
				let $s = document.createTextNode(" : ");
			
				let $n = $('<input>');
				$n.attr('type','number');
				$n.attr('class','number');
				$n.attr('id','number'+$index);
				$n.attr('name','number');
				
				let $t = $('<input>');
				$t.attr('type','text');
				$t.attr('class','word');
				$t.attr('id','word'+$index);
				$t.attr('name','word');

				if (words[$index]) {
					$t.attr('value',words[$index]);
				}
				
				$d.append($n);
				$d.append($s);
				$d.append($t);
				$d.append($b);
				
				$element.after($d);				
			})
			
			$('#remove').on('click', function() {
				$('div[class=numberText]').slice(3).last().remove();
			});
			preFillFields();
			
		</script>
`
}