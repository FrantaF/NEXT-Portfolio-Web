//Set nav links to active/not active
function changeActive(link){    
	//deactivate all links
	document.getElementById("nav-link1").classList.remove("active");
	document.getElementById("nav-link2").classList.remove("active");
	document.getElementById("nav-link3").classList.remove("active");
	//set item's class to active	
	link.className += " active";
}