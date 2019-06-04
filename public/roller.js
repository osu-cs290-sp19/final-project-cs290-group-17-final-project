
var rollButton = document.getElementById('roll-dice-button');


rollButton.addEventListener('click',function(event){
	
	
	var collection = [4, 6, 8, 10, 12, 20];
	var collComp = [];
	var uniqueDice = 0;
	for(var i = 0; i < 6; i++){

		var elem = document.getElementsByClassName('dice-amount')[i].value;

		if(elem != 0){
			console.log(elem);
			//this function checks to see if strings are put through
			if(/^[a-zA-Z]+$/.test(elem)){
				alert("You dawg, you put like a value that does work. You put in: " + elem);
			}else{
				uniqueDice++;
				collComp.push(collection[i]); 
				collComp.push(elem);
			}
		}
	}
	
	console.log("ROLL TEH DIYSSS");
	
	var milled = rollSelection(collComp);
	for(var i = 0; i < uniqueDice-1; i++){
		console.log("==This is in array " + milled[i] + ": " + milled[i+1]); 
	}
	var total = addUp(milled);
	console.log("==TEH FINAL VALUE IS: " + total);
	
	
});



function rollSelection(arr){
	var size = Math.floor(arr.length/2)
	var finished = [];
	
	
	for(var i = 0; i< size;i++){
		var amount = arr.pop();
		var side = arr.pop();
		var sto = rollDice(side, amount);
		
		finished.push(sto);
	}
	
	return finished;
}


function rollDice(sides, amount){
	var rolledArr = [];
	rolledArr.push(sides);
	
	for(var i = 0; i < amount; i++){
		var roll = Math.random() * (sides) + 1;
		roll -= roll % 1;
		rolledArr.push(roll);
	}
	
	return rolledArr;
}

function addUp(arrayOfarr){
	console.log("==ADDING TEH DYSSSS");
	var total = 0;
	for(var i = 0; i < arrayOfarr.length; i++){
		for(var j = 1; j < arrayOfarr[i].length; j++){
			total += arrayOfarr[i][j];
		}
		console.log("==TEH CURRENT VALUE: " + total);
	}

	return total;
	
}
