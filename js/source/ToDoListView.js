var ToDoListView = (function(){
    
    var toDoListModel  = new ToDoListModel() ;
    var ul = document.querySelector(".todolist");
    var toDoItemArr = document.getElementsByClassName("addToDoItem");
    ToDoBaseView.call(this);
    
    events.on("New" ,function(toDoItemText){
        var toDoItem = toDoListModel.addToDoItemData(toDoItemText)
        ToDoItemView.init(toDoItem);
       }
    );
    events.on("update" ,function(status){
        render(status);
    }    
    );
    
    var init = function()
    {
        this.init();
        var toDoListArr = toDoListModel.getToDoItemList();
        for (var index = 0; index<toDoListArr.length; index++)
        {
            ToDoItemView.init(toDoListArr[index]);
        }  
        
    }

    var render = function(status){
        var toDoListArr = toDoListModel.getToDoItemList();
        
        for(var i = 0 ; i < toDoListArr.length  ; i += 1)
        { 
               if(toDoListArr[i].isChecked && status == 'Delete')
               {
                   console.log("selected removed item"+ i);
                   toDoListModel.deleteToDoItemData(toDoListArr[i])
               }
               else
               {
                   if (toDoListArr[i].isChecked && status == 'Complete')
                   {
                    var updateToDoItem  = toDoListArr[i];
                    updateToDoItem.isDisabled = true
                    toDoListModel.updateToDoItemData(toDoListArr[i],updateToDoItem)
                   }
                   else{
                       if(status == 'Select')
                       {
                        var updateToDoItem  = toDoListArr[i];
                        updateToDoItem.isChecked = true
                        toDoListModel.updateToDoItemData(toDoListArr[i],updateToDoItem)
                       }
                   }
               }
        } 
        destroy()
        init()
        
    }

    var destroy = function(){
        while(ul.firstChild) ul.removeChild(ul.firstChild);
    }
    init();
   
})();


ToDoListView.prototype = Object.create(ToDoBaseView.prototype);
