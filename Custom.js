var toDoBox=$("#to-do-box");

var toDoItem=("#to-do-item");

$(function () {

				$("#todo-box").sortable();});

function removeMe(elem){

				$(elem). parent(). remove();}

				

function removeAll(){

				toDoBox.empty();}

				

function additem() {

				if(toDoItem.val().length>0) {

								//add item to do list

							var item=toDoItem.val();

											toDoBox.append(

															<li class="alert alert-primary ui-state-default">

																			$(item)<i class="fa-solid fa-xmark"></i></li>

											);

											toDoItem.val('');

				}else {

								toDoItem.focus();

				}

}

function toggleItem(elem) {

				$(elem).toggleClass("demo");

}
