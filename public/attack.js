
/*var attackData = JSON.parse("attack.json");
*/
/*var fs = require("fs");*/
var generateButton = 

function readAttackData(attackData){
	var s = attackData.length;
	var weaponArr;
	for(var i=0; i < s; i++){
		var weaponObj = {
			Name    : attackData[i].weaponName,
			Type    : attackData[i].weaponType,
			Dice	  : attackData[i].damageDice,
			nDice       : attackData[i].nDice,
			Weight  : attackData[i].weaponWeight,
			Properys: attackData[i].weaponPropertys,
			Pic	  : attackData[i].weaponLink
		}
		weaponArr[i] = weaponObj;
	}
	
	return weaponArr;
}

function createWeapon(weaponObj){
	var newWeapon = document.createElement('button');
	newWeapon.classList.add('Weapon');
	newWeapon.classList.add('hidden');
	weaponContainer.appendChild(newWeapon);
	
	var weaponContent = document.createElement('div');
	weaponContent.classList.add('weapon-content');
	newWepon.appendChild(weaponContent);

	var weaponName = document.createElement('p');
	weaponName.classList.add('Weapon-Name');
	weaponName.textContent = weaponObj.Name;
	weaponContent.appendChild(weaponName);

	var weaponWeight = document.createElement('p');
	weaponWeight.classList.add('Weapon-Weight');
	weaponWeight.textContent = weaponObj.Weight;
	weaponContent.appendChild(weaponWeight);

	var weaponPropertys = document.createElement('p');
	weaponPropertys.classList.add('Weapon-Propertys');
	weaponPropertys.textContent = weaponObj.propertys;
	weaponContent.appendChild(weaponPropertys);
	
	var str = "D" + weaponObj.Dice + "X" + weaponObj.nDice;
	var weaponDice = document.createElement('p');
	weaponDice.classList.add('Weapon-Dice');
	weaponDice.textContent = str;
	weaponContent.appendChild(weaponDice);

}

function loadPage(attackData){
	var weaponArr = readAttackData(attackData);
	var l = weaponArr.length;
	for(var i = 0; i < l; i++){
		createWeapon(weaponArr[i]);
	}
	return weaponArr;

}

/*var objArr[] = loadPage(attackData); */

window.addEventListener('DOMContentLoaded', function () {

	var createGenerateButton    = document.getElementById('create-link-button');
		if (createLink) {
		createTwitButton.addEventListener('click', showCreateTwitModal);
	}
	


   	// Remember all of the existing twits in an array that we can use for search.
  
/*	var weaponArr = loadPage(attackData);

  /*var attackData = [];
  alert("attack.json");
  attackData = JSON.parse(fs.readFileSync("attack.json"));

  console.log(attackData);
  var objArr = [];
  objArr = loadPage(attackData); 	
*/
  /*
  var createTwitButton = document.getElementById('create-twit-button');
  if (createTwitButton) {
    createTwitButton.addEventListener('click', showCreateTwitModal);
  }

  var modalCloseButton = document.querySelector('#create-twit-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hideCreateTwitModal);
  }

  var modalCancalButton = document.querySelector('#create-twit-modal .modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', hideCreateTwitModal);
  }

  var modalAcceptButton = document.querySelector('#create-twit-modal .modal-accept-button');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }

  var searchButton = document.getElementById('navbar-search-button');
  if (searchButton) {
    searchButton.addEventListener('click', doSearchUpdate);
  }

  var searchInput = document.getElementById('navbar-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', doSearchUpdate);
  }
*/
});



























/*
function createTwit(text, author){
	var newTwit = document.createElement('article');
	newTwit.classList.add("twit");
	twitContainer.appendChild(newTwit);
	
	var twitIcon = document.createElement('div');
	twitIcon.classList.add("twit-icon");
	newTwit.appendChild(twitIcon);
	
	var bullHorn = document.createElement('i');
	bullHorn.classList.add("fas");
	bullHorn.classList.add("fa-bullhorn");
	twitIcon.appendChild(bullHorn);

	var  twitContent = document.createElement('div');
	twitContent.classList.add("twit-content");
	newTwit.appendChild(twitContent);

	var twitText = document.createElement('p');
	twitText.classList.add("twit-text");
	twitText.textContent = text;
	twitContent.appendChild(twitText);

	var twitAuthor = document.createElement('p');
	twitAuthor.classList.add("twit-author");
	twitAuthor.textContent = author;
	twitContent.appendChild(twitAuthor);

}*/
