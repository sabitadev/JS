var toDoListController = (function(){
    'use strict';
    var toDoListModelObj = new toDoListModel();
    var toDoListViewObj = new toDoListView();

    var init = function()
    {
          addAllEventListener();
          toDoListViewObj.initToDoItems();

    }

    var addAllEventListener = function(){
        //add To Do Item
        toDoListViewObj.addItemElement.addEventListener('keypress', addToDoItem);

        //delete To Do Item
        toDoListViewObj.removeItemElement.addEventListener('click' , deleteToDoSelectedItems)

        //selectAll To Do Item
        toDoListViewObj.selectAllElement.addEventListener('click' ,selectAllItems)

        //mark Completed To Do Item
        toDoListViewObj.completeElement.addEventListener('click' ,completeItem)

    }

    var addToDoItem = function(event)
      {     

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var toDoItem = toDoListViewObj.getToDoItemText();
            toDoListViewObj.addListItemElem(toDoItem );
            toDoListModelObj.addToDoItem(toDoItem);
            toDoListModelObj.getToDoItemList();
        }
    }
    
    var deleteToDoSelectedItems = function(event)
    { 
        toDoListViewObj.deleteToDoSelectedItemElems();
    }

    var selectAllItems = function(event)
    {
        toDoListViewObj.selectAllItemsElems();
    }

    var completeItem = function(){
        toDoListViewObj.completeItemElems();
    }
    
    return {
        init : init
    }
})()




