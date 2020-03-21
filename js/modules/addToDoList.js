import {addElementToList} from './addElementToList.js'

var onAddToDoList = function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
       var toDoItemArr = document.getElementsByClassName("addToDoItem");
       var toDoItem =toDoItemArr[0].value;
            
       if(!toDoItem)
        {
            return;
        }
        addElementToList(toDoItem); 
    }
}

export default onAddToDoList



