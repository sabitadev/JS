var toDoListController = (function(){
    'use strict';
    var initToDoItems = function()
    {
          var toDoListArr = toDoListModel.initData();
          console.log(toDoListArr[0]);
          for (var item = 0; item <toDoListArr.length; item++)
          {
                toDoListView.addListItemElem(toDoListArr[item]);
    
          }  
    }

    var addToDoItem = function(event)
      {     

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
        var toDoItemArr = document.getElementsByClassName("addToDoItem");
        var toDoItem =toDoItemArr[0].value;
                
        if(!toDoItem)
            {
                return;
            }
            toDoListView.addListItemElem(toDoItem); 
        }
    }

    var deleteToDoItem = function(event){
        var element = event.target;
        element.parentNode.remove();
    }
    
    var deleteToDoSelectedItems = function(event)
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

    var selectAllItems = function(event)
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
    }

    var completeItem = function(){
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
    
    return {
        initToDoItems : initToDoItems ,
        addToDoItem : addToDoItem ,
        deleteToDoItem : deleteToDoItem ,
        deleteToDoSelectedItems : deleteToDoSelectedItems,
        completeItem : completeItem,
        selectAllItems : selectAllItems
    }
})()




