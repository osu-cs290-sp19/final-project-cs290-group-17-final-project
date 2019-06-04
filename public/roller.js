
var rollButton = document.getElementById('roll-dice-button');


rollButton.addEventListener('click',function(event){
	//fix this array
	var collection = [4, 0, 6, 0, 8, 0, 10, 0, 12, 0, 20, 0];
	var uniqueDice = 0;
	for(var i = 0; i < 6; i++){

		var elem = document.getElementsByClassName('dice-amount')[i];
		if(elem != 0){
			uniqueDice++;
			collection[1+(i*2)] = elem;
		}
		
		
		
	}
	
	console.log("ROLL TEH DIYSSS");
	
	var milled = rollSelection(collection);
	for(var i = 0; i < uniqueDice; i++){
		console.log("==This is in array " + i + ": " + milled[i]); 
	}
	
	
});



function rollSelection(arr){
	var size = Math.floor(arr.length/2)
	var finished = [];
	
	
	for(var i = 0; i< size;i++){
		var amount = arr.pop();
		var side = arr.pop();
		var sto = rollDie(side, amount);
		
		finished.push(sto);
	}
	
	return finished
}


function rollDie(sides, amount){
	var rolledArr = [];
	rolledArr.push(sides);
	
	for(var i = 0; i < amount; i++){
		var roll = Math.random() * (sides) + 1;
		roll -= roll % 1;
		rolledArr.push(roll);
	}
	
	return rolledArr;
}