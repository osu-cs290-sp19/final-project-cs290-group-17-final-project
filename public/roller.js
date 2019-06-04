function rollSelection(arr){
	var tot
	
}


function rollDie(sides, amount){
	var rolledArr = [];
	
	
	for(var i = 0; i < amount; i++){
		var roll = Math.random() * (sides) + 1;
		roll -= roll % 1;
		rolledArr.push(roll);
	}
	
	return rolledArr;
}