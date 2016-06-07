/** Adds a new, unique item to the grocery list **/
function add() {
	var newItemVal = document.getElementById("item").value.trim();
	if (newItemVal == null || newItemVal == "") {
		alert("Please enter an item to track");
		return;
	}
	if (document.querySelectorAll("[id='"+newItemVal+"']").length != 0) {
		alert("This item has been tracked already");
		return;
	}
	var newNoteVal = document.getElementById("itemNotes").value.trim();
	
	var div = document.createElement('div');
	div.className = "row notPurchased";
	div.innerHTML = '<div class="mainRow">\
				<div class="colZero">\
					<button id="purchased" class="purchaseButton" onclick="togglePurchased(this)" title="Purchased item">&#9989;</button>\
				</div>\
				<div class="colOne">\
					<span id="' + newItemVal + '" class="name">' + newItemVal + '</span>\
				</div>\
				<div class="colTwo">\
					<button id="notes" onclick="addNotes(this)">Edit notes</button>\
				</div>\
				<div class="colThree">\
					<input type="button" value="Delete" onclick="deleteItem(this)" />\
				</div>\
			</div>\
			<div class="notesRow" style="display: none;">\
				<textarea id="itemNotes" type="text" class="notesArea" placeholder="Add any notes for the item">'+newNoteVal+'</textarea>\
			</div>';
	
	document.getElementById('groceryList').appendChild(div);
}

/** Deletes an item from the list **/
function deleteItem(c){
	var getConfirmation = confirm("Are you sure you want to delete the item?");
	if (getConfirmation) {
		c.parentElement.parentElement.parentElement.remove();
	}
};

/** Expands the notes field to edit **/
function addNotes(c) {
	var x = c.parentElement.parentElement.nextElementSibling;
	
	if (x.style.display == 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}

/** Mark an item on the list as purchased or not **/
function togglePurchased(c) {
	var x = c.parentElement.parentElement.parentElement;
	if (x.classList.contains('notPurchased')) {
		x.classList.add('purchased');
		x.classList.remove('notPurchased');
		c.innerHTML ='&#10006;';
		c.title = "Need to purchase item";
	} else {
		x.classList.remove('purchased');
		x.classList.add('notPurchased');
		c.innerHTML ='&#9989;';
		c.title = "Purchased item";
	}
}
