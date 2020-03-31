  var toDoListModel = function (){
  }

  toDoListModel.prototype = {
    toDoListArr : ["Read javascript" ,"Test innovationmotor" ,"Cook Food"] ,
    addToDoItem : function(toDoItem){
    this.toDoListArr.push(toDoItem);
    } ,
    getToDoItemList : function(){
      console.log(this.toDoListArr[this.toDoListArr.length-1]);
      return this.toDoListArr;
    }

  }