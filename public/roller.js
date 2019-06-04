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
	var identity = "faces: " + sides;
	rolledArr.push(identity);
	rolledArr.push(amount);
	
	for(var i = 0; i < amount; i++){
		var roll = Math.random() * (sides) + 1;
		roll -= roll % 1;
		rolledArr.push(roll);
	}
	
	return rolledArr;
}