var create = document.getElementsByClassName("char-create");

function insertNewChar(charName, charHealth, charAC, charNotes) {

  var charElem = document.createElement('article');
  charElem.classList.add('char');

  var charContentElem = document.createElement('div');
  charContentElem.classList.add('char-content');
  charElem.appendChild(charContentElem);

  var charNameNode = document.createTextNode(charName);
  var charNameElem = document.createElement('p');
  charNameElem.classList.add('char-name');
  charNameElem.appendChild(charNameNode);
  charContentElem.appendChild(charNameElem);
  
  var charHealthNode = document.createTextNode(charName);
  var charHealthElem = document.createElement('p');
  charHealthElem.classList.add('char-health');
  charHealthElem.appendChild(charHealthNode);
  charContentElem.appendChild(charHealthElem);

  var charACNode = document.createTextNode(charAC);
  var charACElem = document.createElement('p');
  charACElem.classList.add('char-ac');
  charACElem.appendChild(charACNode);
  charContentElem.appendChild(charACElem);
  
  var charNotesNode = document.createTextNode(charNotes);
  var charNotesElem = document.createElement('p');
  charNotesElem.classList.add('char-notes');
  charNotesElem.appendChild(charNotesNode);
  charContentElem.appendChild(charNotesElem);
  
  var charDeleteElem = document.createElement('button');
  charDeleteElem.classList.add('char-delete');
  charDeleteElem.innerHTML = '&times;';
  charElem.appendChild(charDeleteElem);


  var charContainer = document.querySelector('main.char-container');
  charContainer.appendChild(charElem);
}

function getCreateInput(event){
	var cname = document.getElementById('inser-name').value;
	var chealth = document.getElementById('inser-health').value;
	var cac = document.getElementById('inser-ac').value;
	var cnotes = document.getElementById('inser-notes').value;
	
	if (cname != '' && chealth != '' && cac != '' && cnotes != ''){
		insertNewChar(cname, chealth, cac, cnotes);
	}
	else {
		alert("Input Field cannot be Blank");
	}
}

create[0].addEventListener('click', function(event) {
	getCreateInput();
});

