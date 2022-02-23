// var  = document.getElementById("");
// var  = document.getElementsByClassName("");
// var drwrOvrly = document.getElementById("drawerOverlay");
// var drwrIcn = document.getElementById("drawerIcon");
// var drwrIcnC = document.getElementById("drawerIconClose");
var page = document.getElementsByClassName("page");
// var card = document.getElementsByClassName("card");

var currentPage = 1;
var previousPage = 1;

setTimeout(function(){
	window.scrollTo(0, 0);
}, 1)
// setTimeout(function(){
// 	document.getElementById('curtains').style.display = "none"
// }, 1000)

function pickPage(number)
{
	window.scrollTo(0, 0);
	if (number == 99){number = previousPage}
	currentPage = number;
	if (number == 0){
	}
	for (i = 0;i < page.length; i++) {
		page[i].classList.remove("on");
	}
	document.getElementById('dot').style.left= number * 25 + 12.5 + "%";
	// for (i = 0; i < card.length; i++) {
	// 	card[i].classList.add("on");
	// }
	page[number].classList.add("on");
}
function cope(block){
		if(block.innerHTML == "Copied!"){return}
		var old = block.innerHTML;
    navigator.clipboard.writeText(block.innerHTML);
    setTimeout(function(){
			block.classList.remove("copied")
			block.innerHTML = old;
		},2000);
		block.innerHTML = "Copied!";
    block.classList.add("copied");
}
