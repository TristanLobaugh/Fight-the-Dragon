

function timeToFlee(){
	document.getElementById("defeated").style.display = "none";
	document.getElementById("victory").style.display = "none";
	document.images["whichChar"].src = "img/fleeing.png";
	document.getElementById("run-away").style.display = "block";
	// document.getElementByName("fight").style.display = "none";
}

function timeToFight(){
	var fighting = 1;
	document.getElementById("the-fight").style.display = "block";
	document.getElementById("damage").style.display = "block";
	document.getElementById("defeated").style.display = "none";
	document.getElementById("victory").style.display = "none";

	var dragonHealth = 20;
	var heroHealth = 20;

	 while(fighting = 1){
		function throwDice(){
			var randomDie = Math.round(Math.random() *5) +1;
			var imageName = "img/d" + randomDie + ".gif";
			document.images['myDie1'].src = imageName;
			randomDie2 = Math.round(Math.random() *5) +1;
			var imageName = "img/d" + randomDie2 + ".gif";
			document.images['myDie2'].src = imageName;
			var totalRoll = randomDie + randomDie2
			document.getElementById("damage").innerHTML = totalRoll;
		
		if(totalRoll >= 9)	{
			dragonHealth = dragonHealth - totalRoll;
			if(dragonHealth <= 0)	{
				document.getElementById("victory").style.display = "block";
				fighting = 0;
				}
			}else if(totalRoll < 9)		{
				heroHealth = heroHealth - totalRoll;				
			if(heroHealth <= 0)		{					
				document.getElementById("defeated").style.display = "block";
				fighting = 0;
				}					
			}
		}
	}
}

