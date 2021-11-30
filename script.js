// var  = document.getElementById("");
// var  = document.getElementsByClassName("");
var drwrOvrly = document.getElementById("drawerOverlay");
var drwrIcn = document.getElementById("drawerIcon");
var page = document.getElementsByClassName("page");
var card = document.getElementsByClassName("card");

var menuState = 0;
function toggleDrawer(state)
{
	if (state != null){menuState = state};
	if (menuState == 1){
		drwrOvrly.classList.remove("on");
		menuState = 0;
		drwrIcn.classList.remove("drawerOn");
	} else if (menuState == 0){
		drwrOvrly.classList.add("on");
		menuState = 1;
		drwrIcn.classList.add("drawerOn");
	}
}
function pickPage(number)
{
	for (i = 0;i < page.length; i++) {
		page[i].classList.remove("on");
	}
	for (i = 0; i < card.length; i++) {
		card[i].classList.add("on");
	}
	page[number].classList.add("on");

}
