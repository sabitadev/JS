var toDoListModelObj = new toDoListModel()
var toDoListViewObj = new toDoListView(toDoListModelObj)
var toDoActionViewObj = new toDoActionView(toDoListModelObj)
toDoListModelObj.initToDoItemData();
toDoActionViewObj.init()


