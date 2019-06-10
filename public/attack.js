var nameInput;
var weapProf;
var abilityScore;
var generate;
var link;

var name;
var weaponContainer;

window.addEventListener("load", function(event) {
    weaponContainer = document.getElementsByClassName('Weapon-Container');
    for(var i = 0; i < weaponContainer.length; i++){
        weaponContainer[i].addEventListener('click', setName);
    }
    generate = document.getElementsByClassName("Generate-Character")[0];
    generate.addEventListener('click', sendData);

    nameInput = document.getElementById("Character-name-input");
    this.console.log(nameInput.value);
    weapProf = document.getElementById("Weapon-Proficiency-Input");
    abilityScore = document.getElementById("Weapon-Score-Input");
    link = document.getElementsByClassName('weaponPic')[0].getElementsByTagName('img')[0];
});


function setName(event){
   
    name = event.target.parentNode.getElementsByClassName("weapon-Name")[0].textContent;
    console.log(event.target);
}

var data;


function sendData(event){
    console.log("generate button clicked");
    data = {
            name: name,
            prof: weapProf.value,
            score: abilityScore.value,
            charName: nameInput.value,
            link: link.value
    };

    const url = "http://localhost:3000/characters";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
