// var  = document.getElementById("");
// var  = document.getElementsByClassName("");
// var drwrOvrly = document.getElementById("drawerOverlay");
// var drwrIcn = document.getElementById("drawerIcon");
// var drwrIcnC = document.getElementById("drawerIconClose");
var page = document.getElementsByClassName("page");
var card = document.getElementsByClassName("card");

var currentPage = 1;
var previousPage = 1;

setTimeout(function(){
	window.scrollTo(0, 0);
}, 1)
setTimeout(function(){
	document.getElementById('curtains').style.display = "none"
}, 1000)

function pickPage(number)
{
	if (number == 99){number = previousPage}
	currentPage = number;
	// drwrIcn.classList.add("on");
	if (number == 0){
		// drwrIcn.classList.remove("on");
	}
	for (i = 0;i < page.length; i++) {
		page[i].classList.remove("on");
	}
	for (i = 0; i < card.length; i++) {
		card[i].classList.add("on");
	}
	page[number].classList.add("on");
	window.scrollTo(0, 0);
}
