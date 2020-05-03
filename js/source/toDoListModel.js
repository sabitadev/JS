
var toDoListModel = function (){
}

toDoListModel.prototype = {
    toDoListArr : [{id:"1", name:"Read javascript" ,isChecked:false ,isDisabled:false} ,
                  {id:"2", name:"Test innovationmotor",isChecked:false ,isDisabled:false} ,
                  {id:"3", name:"Cook Food",isChecked:false ,isDisabled:false}],
    initToDoItemData : function()
    {
      var toDoListArr = this.getToDoItemList();  
      for (var index = 0; index<this.toDoListArr.length; index++)
      {
        events.emit(eventsName.NEW,this.toDoListArr[index]);  
      }  
    },

    addToDoItem : function(toDoItemText){

      var id = 1
      if(this.toDoListArr.length > 0){
         id = parseInt(this.toDoListArr[this.toDoListArr.length-1].id)+1
      }

      var toDoItem = {id :id.toString() ,name:toDoItemText,isChecked:false ,isDisabled:false}
      this.toDoListArr.push(toDoItem)
      return toDoItem;
    } ,
    deleteToDoItem : function(id){
        var toDoItem = this.toDoListArr.find(item => item.id === id)
        var index = this.toDoListArr.indexOf(toDoItem)
        this.toDoListArr.splice(index)
    },
    updateToDoItem : function(id ,checked){
      var toDoItem = this.toDoListArr.find(item => item.id === id)
      var index = this.toDoListArr.indexOf(toDoItem)
      this.toDoListArr[index].isChecked = checked
    },
    getToDoItemList : function(){
      console.log(this.toDoListArr[this.toDoListArr.length-1]);
      return this.toDoListArr;
    },
    deleteSelectedItems : function()
    {
         var afterRemoveToDoItems = this.toDoListArr.filter(item => !item.isChecked);
         var removeToDoItems = this.toDoListArr.filter(item => item.isChecked);
         var beforeRemoveToDoItems =  this.toDoListArr
         this.toDoListArr.splice(0, this.toDoListArr.length);
         this.toDoListArr = afterRemoveToDoItems;
         events.emit(eventsName.DELETE,removeToDoItems);  
    },
    doneSelectedItems :function()
    {
      for (var index = 0 ; index<this.toDoListArr.length ; index++)
        {
          if(this.toDoListArr[index].isChecked)
          {
            this.toDoListArr[index].isDisabled = true
          }     
        }
        events.emit(eventsName.UPDATE,this.toDoListArr); 
    },
    selectAllItems : function()
    {
        for (var index = 0 ; index<this.toDoListArr.length ; index++)
        {
          this.toDoListArr[index].isChecked = true
        }
        events.emit(eventsName.UPDATE,this.toDoListArr); 
    },
    getToDoItemLength : function()
    {
      return toDoListArr.length
    }

}