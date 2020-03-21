        
  import {onDeleteToDoItem} from './deleteToDoList.js'
  import toDoListData from './toDoListData.js';

  var initElementToList = function()
  {
      var toDoListArr = toDoListData.getToDoList();
      console.log(toDoListArr[0]);
      for (var i = 0; i<toDoListArr.length; i++)
      {
            addElementToList(toDoListArr[i]);

      }
  }
  
  var addElementToList = function(toDoItem)
  {     
        var ul = document.querySelector("ol");
        var li = document.createElement("li");

        var deleteToDoItemButton = document. createElement("input");
        deleteToDoItemButton.type = "button";
        deleteToDoItemButton.value = "X";
        deleteToDoItemButton.className = "deleteListItem";
        deleteToDoItemButton.style.background = "none";
        deleteToDoItemButton.style.border = "none";
        deleteToDoItemButton.style.color = "red";
        deleteToDoItemButton.addEventListener('click', onDeleteToDoItem);

        var checkbox = document.createElement("input");
        checkbox.name = "todo";
        checkbox.type = "checkbox";
        li.setAttribute('id',toDoItem);
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(toDoItem));
        li.appendChild(deleteToDoItemButton);
        ul.appendChild(li);
  }

 export {addElementToList , initElementToList};