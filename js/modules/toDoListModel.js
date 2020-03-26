var toDoListModel = (function (){
  'use strict';
  var toDoListArr = ["Read javascript" ,"Test innovationmotor" ,"Cook Food"] ; 

  var   initData  = function() {
      return toDoListArr;
  }

  return  { initData : initData}
})();
