# Fight the Dragon

### Simple game using CSS, HTML and Native Javascript

## Summary

#### Simple game that uses javascript to allow the player to make choices and then random number generator to fight a dragon.

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/fight_the_dragon/master/img/screen_shot.png)


##Code Examples

### Simple native javascript that changes the images on the screen based on the players choice.
```
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
```

### Code used to determine the outcome of the "fight", calculates hits, misses, damage done and weather the player has won or lost.
```
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
	
```