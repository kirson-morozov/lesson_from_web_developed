//Добавление и удаление задач
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");



console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);
console.log(popup);
console.log(close);


function addItem() {
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задча";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}
function delItem() {
	myList.removeChild(story[0]);

	if (story.length == 0){

		popup.style.display = "block";

	}

}
function closePopup() {
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);

//Проверка возраста пользователя и подписки
var age, name, subScription;

age = prompt("Сколько вам лет", 18);

	if (age>=18) {
		
		subScription = confirm("Вы подписаны на рассылку?")
		if (subScription == true) {
				userTest();
		}
		else {
			alert("Доступ запрещен!")	
		}

	}

	else {
		alert("Доступ запрещен!")
	}
function userTest() {

	console.log("Пользователь допущен!");
	alert("Доступ разрешен!")	

}




