
var onDeleteToDoItem = function(event){
    var element = event.target;
    element.parentNode.remove();
  }
 
var onDeleteSelectedItemFromList = function(){
    var ul = document.querySelector("ol");
    var liarr = document.getElementsByTagName ("li");
    for(var i = 0 ; i < liarr.length  ; i += 1)
    { 
       console.log("array length"+ liarr.length );
       var liItem = liarr[i];
       var checkbox = liItem .getElementsByTagName("input");
       if(checkbox[0].checked)
       {
           console.log("selected removed item"+ i);
           ul.removeChild(liItem);
           i -= 1;
       }
    }
}

export {onDeleteToDoItem , onDeleteSelectedItemFromList}

