// var  = document.getElementById("");
// var  = document.getElementsByClassName("");
var drwrOvrly = document.getElementById("drawerOverlay");
var drwrIcn = document.getElementById("drawerIcon");
var drwrIcnC = document.getElementById("drawerIconClose");
var page = document.getElementsByClassName("page");
var card = document.getElementsByClassName("card");

var currentPage = 1;
var previousPage = 3;
// function toggleDrawer(state)
// {
// 	if (state != null){menuState = state};
// 	if (menuState == 1){
// 		drwrOvrly.classList.remove("on");
// 		menuState = 0;
// 		drwrIcn.classList.remove("drawerOn");
// 	} else if (menuState == 0){
// 		drwrOvrly.classList.add("on");
// 		menuState = 1;
// 		drwrIcn.classList.add("drawerOn");
// 	}
// }
function pickPage(number)
{
	if (number == 99){number = previousPage}
	currentPage = number;
	drwrIcn.classList.add("on");
	drwrIcnC.classList.remove("on");
	if (number == 0){
		drwrIcn.classList.remove("on");
		drwrIcnC.classList.add("on");
	}
	for (i = 0;i < page.length; i++) {
		page[i].classList.remove("on");
	}
	for (i = 0; i < card.length; i++) {
		card[i].classList.add("on");
	}
	page[number].classList.add("on");
}
