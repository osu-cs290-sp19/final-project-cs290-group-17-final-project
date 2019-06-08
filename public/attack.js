var nameInput = document.getElementById("Character-name-input");
var weapProf = document.getElementById("Weapon-Proficiency-Input");
var abilityScore = document.getElementById("Weapon-Score-Input");
var name;
var weaponContainer;

window.addEventListener("load", function(event) {
    weaponContainer = document.getElementsByClassName('Weapon-Container');
    for(var i = 0; i < weaponContainer.length; i++){
        weaponContainer[i].addEventListener('click', setName);
    }
    
});


function setName(event){
    name = event.target.getElementsByClassName("weapon-Name")[0].textContent;
    console.log(name);
}

var data = {}