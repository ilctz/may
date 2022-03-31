// var  = document.getElementById("");
// var  = document.getElementsByClassName("");
// var drwrOvrly = document.getElementById("drawerOverlay");
// var drwrIcn = document.getElementById("drawerIcon");
// var drwrIcnC = document.getElementById("drawerIconClose");
var page = document.getElementsByClassName("page");
var lnkpage = document.getElementsByClassName("linkPage");
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
	document.getElementById('dot').style.left= lnkpage[number].offsetLeft + "px";
	document.getElementById('dot').style.width= lnkpage[number].offsetWidth;
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
var modal = document.getElementById("modalBlock");
var modalImg = document.getElementById("img00");
var modalVid = document.getElementById("vid00");
var pane;
var columnSide;
var postNo;


this.onclick = function(event) {
    if (event.target.classList.contains("pic") == true) {
      // document.getElementById("menu").classList.add("hide");
      pane = event.target.closest('.pic');
			modalImg.firstElementChild.src = "none";
			modalImg.style.backgroundImage = "none";
      modal.classList.add("on");
			modal.style.opacity = "1";
      postNo = Array.prototype.indexOf.call(pane.parentNode.children,pane);

      if (pane.parentElement.className == "column post left") {columnSide = 0}
      else {columnSide = 1}

			if (pane.nodeName == "VIDEO") {
				modalVid.src = pane.src;
        modalImg.classList.add("on");
        modalVid.classList.add("on");
				document.getElementById("mute").classList.add("on");
				modalVid.play();
			} else {
				modalImg.classList.add("on");
				modalImg.style.backgroundImage = "url('" + pane.src.replace("_th","") + "')";
				modalVid.classList.remove("on");
				// document.getElementById("mute").style.display = "none";
			}
	} else if (event.target.classList.contains("container") == true){
      pane =  event.target.closest('.picdesc');

      modalVid.classList.remove("on");
      modalImg.classList.add("on");
      modalImg.style.backgroundImage = pane.src;
      document.getElementById("source").classList.add("on");
    } return
};

document.getElementById("previous").onclick = function(){
  var previousPane;
  previousPane = pane.previousElementSibling;
  if (previousPane.className == "pic"){
    previousPane.click();
  }
}
document.getElementById("next").onclick = function(){
  var nextPane;
  nextPane = pane.nextElementSibling;
  if (nextPane.className == "pic"){
    nextPane.click();
  }
}
document.getElementById("exit").onclick = function(){
	modal.classList.remove("on");
	modalVid.src = "none";
}
