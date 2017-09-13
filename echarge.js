function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}

//Function To Display Popup-letter
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}



//Function To Display Popup-socia
function div_shows() {
document.getElementById('bcd').style.display = "block";
}
//Function to Hide Popup
function div_hides(){
document.getElementById('bcd').style.display = "none";
}


//popoup login
function div_show_log() {
document.getElementById('cde').style.display = "block";
}
function div_hide_log(){
document.getElementById('cde').style.display = "none";
}


//popup register
function reg(){
	document.getElementById('def').style.display="block";
	document.getElementById('cde').style.display = "none";
}
function regclose(){
document.getElementById('def').style.display = "none";
}
//popup pass reset
function forp(){
	document.getElementById('efg').style.display="block";
	document.getElementById('cde').style.display = "none";
}
function forpclose(){
document.getElementById('efg').style.display = "none";
}

//function @ brand buttons
function div1_seen(){
	document.get.ElementById('history').style.display="block";
	document.get.ElementById('company').style.display="none";
	document.get.ElementById('kaizen').style.display="none";
}
function div2_seen(){
	document.get.ElementById('company').style.display="block";
	document.get.ElementById('history').style.display="none";
	document.get.ElementById('company').style.display="none";
}
function div3_seen(){
	document.get.ElementById('kaizen').style.display="block";
	document.get.ElementById('history').style.display="none";
	document.get.ElementById('company').style.display="none";
}