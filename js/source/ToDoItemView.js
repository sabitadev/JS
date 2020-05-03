var toDoItemView = function(toDoListModelObj){
    this.template = document.querySelector('.todoitemTemplate')
    document.createElement('template'); 
    this.ul = document.querySelector(".todolist");
    this.toDoListModelObj = toDoListModelObj

    this.deleteToDoItemListener = function(event){
        var element = event.target;
        var parent =  closest(element  ,".toDoItem");
        var itemTextElm  = parent.querySelector('.toDoItemText');  
        var id = itemTextElm.getAttribute("id")
        parent.remove();
        this.toDoListModelObj.deleteToDoItem(id);  
    }

    this.itemCheckedListener= function(event){
        var element = event.target;
        var parent =  closest(element  ,".toDoItem");
        var itemTextElm  = parent.querySelector('.toDoItemText');  
        var todoItemcheckElem  = parent.querySelector('.todoItemcheck');  
        console.log(itemTextElm.textContent);
        var id = itemTextElm.getAttribute("id")
        this.toDoListModelObj.updateToDoItem(id,todoItemcheckElem.checked)
    }

}
toDoItemView.prototype = Object.create(toDoBaseView.prototype);
toDoItemView.prototype.constructor = toDoItemView ;
toDoItemView.prototype.init = function(toDoItem)
{
    console.log("Inside init")
    var li = this.template.content.cloneNode(true);
    var itemTextElm  = li.querySelector('.toDoItemText');  
    itemTextElm.textContent = toDoItem.name;
    itemTextElm.setAttribute("id", toDoItem.id);
    var deleteButtonElem= li.querySelector('.deleteItem');  
    deleteButtonElem.addEventListener('click',this.deleteToDoItemListener.bind(this));
    var todoItemcheckElem= li.querySelector('.todoItemcheck'); 
    todoItemcheckElem.checked = toDoItem.isChecked;
    todoItemcheckElem.disabled = toDoItem.isDisabled;
    todoItemcheckElem.addEventListener('change',this.itemCheckedListener.bind(this));
    this.ul.appendChild(li); 
}
toDoItemView.prototype.render = function(toDoItem)
{
    console.log("Inside render")
    var element  = document.getElementById(toDoItem.id);  
    var li =  closest(element ,".toDoItem");
    var itemTextElm  = li.querySelector('.toDoItemText');
    itemTextElm.textContent = toDoItem.name;            
    var todoItemcheckElem= li.querySelector('.todoItemcheck'); 
    todoItemcheckElem.checked = toDoItem.isChecked;
    todoItemcheckElem.disabled = toDoItem.isDisabled;
}
toDoItemView.prototype.destroy = function(toDoItem)
{
    var element = document.getElementById(toDoItem.id);  
    var parent =  closest(element  ,".toDoItem");
    parent.remove();
}






