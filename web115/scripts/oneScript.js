$(document).ready(function(e){
    //code here
	//alert('perform ready action here');
	$('#onepage').html(pageDictionary["index.html"]);
	
	$('a').click(function(e){
		e.preventDefault();
		
		//alert('perform click action here');
		//alert($(this).attr('href'));
		
		let link = $(this).attr('href');
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
						<li>WEB115 Web Markup and Scripting - required class - I suspect that everything and everyone has a web page now or you can get one for free, so it is good to know how it is working to build web pages yourself.</li>
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
`
}