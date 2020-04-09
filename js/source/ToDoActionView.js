var ToDoActionView = (function(){
    'use strict';
    
    var removeItemElement = document.querySelector(".removeItem");
    var selectAllElement = document.querySelector(".selectAll");
    var completeElement = document.querySelector(".markCompleted");
    var toDoListModel  = new ToDoListModel() ;
    var toDoListArr = toDoListModel.getToDoItemList();
    var addItemTextElement = document.querySelector('input');

    var init = function()
    {
          addAllEventListener();
    }

    var addAllEventListener = function(){
        //add To Do Item
        addItemTextElement.addEventListener('keypress', addToDoItem);

        //delete To Do Item
        removeItemElement.addEventListener('click' , deleteToDoSelectedItems)

        //selectAll To Do Item
        selectAllElement.addEventListener('click' ,selectAllItems)

        //mark Completed To Do Item
        completeElement.addEventListener('click' ,completeItem)

    }

    var addToDoItem = function(event)
      {     
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var toDoItem = event.target.value;
            event.target.value ='';
            events.emit("New" ,toDoItem);      
        }
    }
    
    var deleteToDoSelectedItems = function(event)
    { 
        events.emit("update" ,"Delete")
    }

    var selectAllItems = function(event)
    {
        events.emit("update" ,"Select")
    }

    var completeItem = function(){
        events.emit("update" ,"Complete")
    }

    init();
    return {
        init : init
    }
})()



// this.deleteToDoSelectedItemElems = function()
//     {
//             var liarr = document.getElementsByClassName ("toDoItem");
//             for(var i = 0 ; i < liarr.length  ; i += 1)
//             { 
//                console.log("array length"+ liarr.length );
//                var liItem = liarr[i];
//                var checkbox = liItem .getElementsByTagName("input");
//                if(checkbox[0].checked)
//                {
//                    console.log("selected removed item"+ i);
//                    ul.removeChild(liItem);
//                    i -= 1;
//                }
//             }
//     }

//     this.selectAllItemsElems = function()
//     {
//             var ul = document.querySelector(".todolist");
//             var liarr = document.getElementsByClassName ("toDoItem");
//             for(var i = 0 ; i < liarr.length  ; i += 1)
//             { 
//                console.log("array length"+ liarr.length );
//                var liItem = liarr[i];
//                var checkbox = liItem .getElementsByTagName("input");
//                if(!checkbox[0].checked)
//                {
//                    console.log("selected removed item"+ i);
//                    checkbox[0].checked = true
//                }
//             }
//     },

//     this.completeItemElems = function(){
//         var ul = document.querySelector("ol");
//         var liarr = document.getElementsByTagName ("li")
//         for(var i = 0 ; i < liarr.length ; i +=1)
//         {
//            var liItem = liarr[i];
//            var checkbox = liItem .getElementsByTagName("input");
//            if(checkbox[0].checked)
//            {
//                console.log("mark completed check box"+ i);
//                checkbox[0].disabled = true;
//            }
//         }
//     }