var toDoListView = function (){

    this.addItemElement = document.querySelector('input');
    this.removeItemElement = document.querySelector(".removeItem");
    this.selectAllElement = document.querySelector(".selectAll");
    this.completeElement = document.querySelector(".markCompleted");
    toDoListModelObj = new toDoListModel();
    this.initToDoItems = function(){
          var toDoListArr = toDoListModelObj.getToDoItemList();
          for (var item = 0; item <toDoListArr.length; item++)
          {
                this.addListItemElem(toDoListArr[item]);
          }  
    }

    checkboxElem = function(){
        var checkbox = document.createElement("input");
        checkbox.name = "todo";
        checkbox.type = "checkbox";
        return checkbox;
    }

    deleteToDoItem = function(event){
        var element = event.target;
        var parent =  closest(element  ,".toDoItem");
        parent.remove();
    }

   deleteButtonElem = function(){
        var deleteButtonElem = document. createElement("input");
        deleteButtonElem.type = "button";
        deleteButtonElem.value = "X";
        deleteButtonElem.className = "deleteListItem";
        deleteButtonElem.style.background = "none";
        deleteButtonElem.style.border = "none";
        deleteButtonElem.style.color = "red";
        deleteButtonElem.addEventListener('click',deleteToDoItem);
        return deleteButtonElem;
    }

    find  = function (targetElement ,selector)
    {
        while (targetElement) {
            if (targetElement.matches(selector)) {
                return targetElement;
            }
            targetElement = targetElement.querySelector(selector);
        }
    }


    resetInputItemText = function()
    {
        var toDoItemArr = document.getElementsByClassName("addToDoItem");
        toDoItemArr[0].value = '';
    }

    closest = function(targetElement ,selector)
    {
        while (targetElement) {
            if (targetElement.matches(selector)) {
                return targetElement;
            }
            targetElement = targetElement.parentNode
        }
    }

    this.addListItemElem = function(toDoItem){   
                
        if(!toDoItem)
        {
                return;
        }  
        var ul = document.querySelector("ol");
        var li = document.createElement("li");    
        li.setAttribute('class',"toDoItem");
        li.appendChild(checkboxElem());
        li.appendChild(document.createTextNode(toDoItem));
        li.appendChild(deleteButtonElem());
        ul.appendChild(li);
        resetInputItemText();
        toDoListModelObj.getToDoItemList();
    }

    this.getToDoItemText = function(){
        var toDoItemArr = document.getElementsByClassName("addToDoItem");
        var toDoItem =toDoItemArr[0].value;
        return toDoItem;
    }

    this.deleteToDoSelectedItemElems = function()
    {
        var ul = document.querySelector(".todolist");
            var liarr = document.getElementsByClassName ("toDoItem");
            for(var i = 0 ; i < liarr.length  ; i += 1)
            { 
               console.log("array length"+ liarr.length );
               var liItem = liarr[i];
               var checkbox = liItem .getElementsByTagName("input");
               if(checkbox[0].checked)
               {
                   console.log("selected removed item"+ i);
                   ul.removeChild(liItem);
                   i -= 1;
               }
            }
    }

    this.selectAllItemsElems = function()
    {
            var ul = document.querySelector(".todolist");
            var liarr = document.getElementsByClassName ("toDoItem");
            for(var i = 0 ; i < liarr.length  ; i += 1)
            { 
               console.log("array length"+ liarr.length );
               var liItem = liarr[i];
               var checkbox = liItem .getElementsByTagName("input");
               if(!checkbox[0].checked)
               {
                   console.log("selected removed item"+ i);
                   checkbox[0].checked = true
               }
            }
    },

    this.completeItemElems = function(){
        var ul = document.querySelector("ol");
        var liarr = document.getElementsByTagName ("li")
        for(var i = 0 ; i < liarr.length ; i +=1)
        {
           var liItem = liarr[i];
           var checkbox = liItem .getElementsByTagName("input");
           if(checkbox[0].checked)
           {
               console.log("mark completed check box"+ i);
               checkbox[0].disabled = true;
           }
        }
    }

    

}


