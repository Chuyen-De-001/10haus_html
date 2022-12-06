function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for(i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if(file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp                    = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if(this.readyState == 4) {
					if(this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if(this.status == 404) {
						elmnt.innerHTML = "Page not found.";
					}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}

function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

function updateCartIcon(int) {
	var cart_icon_number       = document.querySelector("li.cart > span");
	var number                 = Number(cart_icon_number.textContent);
	number                     = number + int;
	cart_icon_number.innerHTML = number;
}

function showMoney(int) {
	return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

var modal      = document.querySelector('div.modal');
var btn_cancel = modal.querySelector("button[name=btn-cancel]")
btn_cancel.addEventListener("click", function() {
	modal.style.display = 'none';
})
window.onclick = function(event) {
	if(event.target === modal) {
		modal.style.display = "none";
	}
}
