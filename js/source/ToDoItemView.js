var ToDoItemView = (function(){
    
    var template = document.querySelector('.todoitemTemplate')
    document.createElement('template'); 
    var toDoListModel  = new ToDoListModel() ;
    var toDoListArr = toDoListModel.getToDoItemList();
    var ul = document.querySelector(".todolist");

    var init = function(toDoItem){   
            console.log("Inside render")
            var li = template.content.cloneNode(true);
            var itemTextElm  = li.querySelector('.toDoItemText');  
            itemTextElm.textContent = toDoItem.name;
            var deleteButtonElem= li.querySelector('.deleteItem');  
            deleteButtonElem.addEventListener('click',deleteToDoItemListener);
            var todoItemcheckElem= li.querySelector('.todoItemcheck'); 
            todoItemcheckElem.checked = toDoItem.isChecked;
            todoItemcheckElem.disabled = toDoItem.isDisabled;
            todoItemcheckElem.addEventListener('change',itemCheckedListener);
            ul.appendChild(li); 
    }

    var deleteToDoItemListener = function(event){
        var element = event.target;
        var parent =  closest(element  ,".toDoItem");
        parent.remove();
    }

    var itemCheckedListener= function(event){
        var element = event.target;
        var parent =  closest(element  ,".toDoItem");
        var itemTextElm  = parent.querySelector('.toDoItemText');  
        console.log(itemTextElm.textContent);
        //toDoItemArr = this.toDoItemArr.slice();
        // toDoItemArr[id].isChecked = !toDoItemArr[id].isChecked
        // this.setState({toDoItemArr : toDoItemArr})   
    }

    return {
       init : init
    }
})()






