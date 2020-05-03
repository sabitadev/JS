var toDoListView = function(toDoListModelObj){
    this.ul = document.querySelector(".todolist");
    this.toDoListModelObj = toDoListModelObj
    this.toDoItemViewObj  = new toDoItemView(toDoListModelObj);
    toDoBaseView.call(this)
    events.on(eventsName.NEW ,this.init.bind(this))
    events.on(eventsName.DELETE ,this.destroy.bind(this))
    events.on(eventsName.UPDATE ,this.render.bind(this))
} 
toDoListView.prototype = Object.create(toDoBaseView.prototype);
toDoListView.prototype.constructor = toDoListView ;
toDoListView.prototype.init = function(toDoItem)
{
    this.toDoItemViewObj.init(toDoItem);
}

toDoListView.prototype.render = function(toDoItems)
{
    for(var index = 0 ; index<toDoItems.length  ;index++ )
    {
        this.toDoItemViewObj.render(toDoItems[index]);
    }
}

toDoListView.prototype.destroy = function(removeToDoItems)
{

  for(var index = 0 ;index<removeToDoItems.length  ;index++ )
    {
        this.toDoItemViewObj.destroy(removeToDoItems[index]);
    }
}

