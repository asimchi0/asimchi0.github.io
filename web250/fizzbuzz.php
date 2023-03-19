<?php
	// define variables and set to empty values
	$firstNameErr = $middleInitialErr = $lastNameErr = $countErr = "";
	$firstName = ""; //"Amphibious";
	$middleInitial = "";
	$lastName = ""; // "Shark";
	$count  = ""; //"200";
	$useWord = true;

	$usePair3 = false;

	$defaultWord = ""; //"Beep";
	$word1 = ""; //"Boop";
	$word2 = ""; // "Zap";
	$word3 = ""; //"Bang";
	$number1 = "";//3;
	$number2 = "";//5;
	$number3 = "";//7;

/*
// Before PHP 7.0, 
// use isset function to determine if the field contains value
$fname = isset($_POST['fieldname']) ? $_POST['fieldname'] : '';
 
// For PHP 7.0 or above, use null coalescing operator (??)
$fname = $_POST['fieldname'] ?? '';
*/

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (empty($_POST["firstName"])) {
			$firstNameErr = "First Name is pre-filled";
			$firstName = "Amphibious"; // pre-fill field if not set
			} else {
			$firstName = testInput($_POST["firstName"]);
			if (!preg_match("/^[a-zA-Z-' ]*$/",$firstName)) {
				$firstNameErr = "Only letters and white space allowed";
			}
		}

		if (empty($_POST["middleInitial"])) {
			$middleInitial = "";
			} else {
			$middleInitial = testInput($_POST["middleInitial"]);
		}

		if (empty($_POST["lastName"])) {
			$lastNameErr = "Last Name is pre-filled";
			$lastName = "Shark";
			} else {
			$lastName = testInput($_POST["lastName"]);
			if (!preg_match("/^[a-zA-Z-' ]*$/",$lastName)) {
				$lastNameErr = "Only letters and white space allowed";
			}
		}

		if (empty($_POST["count"])) {
			$countErr = "Count is pre-filled";
			$count = "200";
			} else {
			$count = testInput($_POST["count"]);
			if($count <= 20 && $count >= 1000) {
				$countErr = "Count should be between 20 and 1000";
			}
		}		

		if (isset($_POST["useWord"]))
		{
			$useWord = true;
		}
		else
		{
			$useWord = false;
		}

		if (empty($_POST["defaultWord"])) {
			$defaultWord = "Beep";
			} else {
			$defaultWord = testInput($_POST["defaultWord"]);
		}

		if (empty($_POST["number1"])) {
			$number1 = "3";
			} else {
			$number1 = testInput($_POST["number1"]);
		}

		if (empty($_POST["word1"])) {
			$word1 = "Boop";
			} else {
			$word1 = testInput($_POST["word1"]);
		}

		if (empty($_POST["number2"])) {
			$number2 = "5";
			} else {
			$number2 = testInput($_POST["number2"]);
		}

		if (empty($_POST["word2"])) {
			$word2 = "Zap";
			} else {
			$word2 = testInput($_POST["word2"]);
		}

		if (isset($_POST["usePair3"]))
		{
			$usePair3 = true;
		}
		else
		{
			$usePair3 = false;
		}

		if (empty($_POST["number3"])) {
			$number3 = "7";
			} else {
			$number3 = testInput($_POST["number3"]);
		}

		if (empty($_POST["word3"])) {
			$word3 = "Bang";
			} else {
			$word3 = testInput($_POST["word3"]);
		}

	}

	function testInput($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}
?>

<h1 id="greeting">Welcome to Fizz Buzz</h1>
			
<form id="greetingForm" action=""  method="post">
<div class="formAlign">	
	First name: <input type="text" id="firstName" name="firstName" value="<?php echo $firstName;?>">
	<span class="error">* <?php echo $firstNameErr;?></span>
	<br>
	
	Middle Initial: <input type="text" id="middleInitial" name="middleInitial" value="<?php echo $middleInitial;?>" maxlength="1">
	<br>
	
	Last name: <input type="text" id="lastName" name="lastName" value="<?php echo $lastName;?>">
	<span class="error">* <?php echo $lastNameErr;?></span>
	<br>
	
	Count: <input type="number" id="count" name="count" value="<?php echo $count;?>" min="10" max="1000">
	<span class="error">* <?php echo $countErr;?></span>
	<br>
</div>

	Default word : <input type="text" id="defaultWord" name="defaultWord" value="<?php echo $defaultWord;?>"><br>
			
	Enter number: word pairs<br>
	<div class="numberText">
		<input type="number" class="number" id="number1" name="number1" value="<?php echo $number1;?>"> :
		<input type="text" class="word" id="word1" name="word1" value="<?php echo $word1;?>"><br>
	</div>
	<div class="numberText">
		<input type="number" class="number" id="number2" name="number2" value="<?php echo $number2;?>"> :
		<input type="text" class="word" id="word2" name="word2" value="<?php echo $word2;?>"><br>
	</div>
	<div class="numberText">
		<input type="number" class="number" id="number3" name="number3" value="<?php echo $number3;?>"> :
		<input type="text" class="word" id="word3" name="word3" value="<?php echo $word3;?>">
		<input type="checkbox" id="usePair3" name="usePair3" value="" <?php if ($usePair3 == true) echo "checked='checked'"; ?>>
		<label for="useWord">Use</label><br>
	</div>				

	<input type="submit" value="Submit">
	<!--
	<input type="button" id="addMore" value="Add more">
	<input type="button" id="remove" value="Remove">
	-->
	<input type="checkbox" id="useWord" name="useWord" value="true" <?php if ($useWord == true) echo "checked='checked'"; ?>>
	<label for="useWord">Use default word</label>
				
</form>	

<div id="loopHeader"></div>
<?php
echo $middleInitial == "" ? "Welcome $firstName $lastName<br>" : "Welcome $firstName $middleInitial. $lastName<br>";
?>
<div id="loopSection"></div>

<?php
// simplified manual version
// collect values
// check if we use additional pair
if ($usePair3)
{
	$numberToWordDict = [$number1 => $word1, $number2 => $word2, $number3 => $word3];
}
else 
{
	$numberToWordDict = [$number1 => $word1, $number2 => $word2];
}

for ($x = 1; $x <= $count; $x++) {
	$addition = "";
	foreach($numberToWordDict as $key => $value) 
	{		
		if ($key != 0 and checkDivision($x,$key)) 
		{
			$addition = $addition . " " . $value;
		}
	}
	if ($addition == "") 
	{		
		if ($useWord == "true")
		{
			$addition = $defaultWord;
		}
		else 
		{
			$addition = $x;
		}
	}
  echo "$x : $addition <br>";
}

function checkDivision($x, $y)
{
	return ((int)$x % (int)$y == 0);
}
?>


<!-- JavaScript code for reference
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
-->