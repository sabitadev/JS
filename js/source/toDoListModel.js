var ToDoListModel = function (){

        
}

ToDoListModel.prototype = {
  toDoListArr : [{id:1, name:"Read javascript" ,isChecked:false ,isDisabled:false} ,
                 {id:2, name:"Test innovationmotor",isChecked:false ,isDisabled:false} ,
                 {id:3, name:"Cook Food",isChecked:false ,isDisabled:false}],

  addToDoItemData : function(toDoItemText){
    var toDoItem = {id :this.toDoListArr.length + 1  ,name:toDoItemText,isChecked:false ,isDisabled:false}
    this.toDoListArr.push(toDoItem)
    return toDoItem;
  } ,
  getToDoItemList : function(){
    console.log(this.toDoListArr[this.toDoListArr.length-1]);
    return this.toDoListArr;
  },
  deleteToDoItemData : function(toDoItem){
      var index = this.toDoListArr.indexOf(toDoItem)
      this.toDoListArr.splice(index)
  },
  updateToDoItemData : function(oldToDoItem,newToDoItem){
    var index = this.toDoListArr.indexOf(oldToDoItem)
    this.toDoListArr[index] = newToDoItem
  } 
  
}