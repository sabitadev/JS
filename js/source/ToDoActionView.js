var toDoActionView = function(toDoListModelObj){
    var removeItemElement = document.querySelector(".removeItem");
    var selectAllElement = document.querySelector(".selectAll");
    var completeElement = document.querySelector(".markCompleted");
    var addItemTextElement = document.querySelector('input');
    var toDoListModelObj  = toDoListModelObj
    var toDoListArr = toDoListModelObj.getToDoItemList();
    this.init = function()
    {
          addAllEventListener();
          
    }
    var addAllEventListener = function(){
        //add To Do Item
        addItemTextElement.addEventListener('keypress', addToDoItem.bind(this));

        //delete To Do Item
        removeItemElement.addEventListener('click' , deleteToDoSelectedItems.bind(this))

        //selectAll To Do Item
        selectAllElement.addEventListener('click' ,selectAllItems.bind(this))

        //mark Completed To Do Item
        completeElement.addEventListener('click' ,doneItems.bind(this))

    }

    var addToDoItem = function(event)
      {     
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var toDoItem = event.target.value;
            event.target.value ='';   
            var toDoItemObj=toDoListModelObj.addToDoItem(toDoItem)
            events.emit(eventsName.NEW ,toDoItemObj);  
        }
    }
    
    var deleteToDoSelectedItems = function(event)
    { 
        var toDoItemObj=toDoListModelObj.deleteSelectedItems()
    }

    var selectAllItems = function(event)
    {
        var toDoItemObj=toDoListModelObj.selectAllItems()
    }

    var doneItems = function()
    {
        var toDoItemObj=toDoListModelObj.doneSelectedItems()
    }
}
