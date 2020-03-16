var num = 0;
var toggleButton = ["Select All","Unselect All"];
newItem = function(){
    var item = prompt("Add New Item");
    console.log("NewItem"+item);
    if(item === null ||item === "")
    {
        return;
    }
    num += 1;
    var ul = document.getElementById("todolist");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.name = "todo";
    checkbox.type = "checkbox";
    li.setAttribute('id',item);
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    showHideButton();
    
}
removeItem = function(){
    var ul = document.getElementById("todolist");
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
           num -=1;
       }
    }
    showHideButton();
    
}

markCompleted = function(){
    var ul = document.getElementById("todolist");
    var liarr = document.getElementsByTagName ("li")
    for(var i = 0 ; i < liarr.length ; i +=1)
    {
       var liItem = liarr[i];
       var checkbox = liItem .getElementsByTagName("input");
       if(checkbox[0].checked)
       {
           console.log("mark completed check box"+ i);
           checkbox[0].disabled = true;
       }
    }
    showHideButton();
}

selectAll = function(){
    var ul = document.getElementById("todolist");
    var liarr = document.getElementsByTagName ("li")
    var buttonText = document.getElementById("selectAll").innerText;
    var toggle = true;
    if(buttonText === toggleButton[1] )
    {
        toggle = false;
    }
    for(var i = 0 ; i < liarr.length ; i +=1)
    {
            var liItem = liarr[i];
            var checkbox = liItem .getElementsByTagName("input");
            checkbox[0].checked = toggle;
    }
    if(toggle)
    {
        document.getElementById("selectAll").innerText = toggleButton[1];
    }
    else
    {
        document.getElementById("selectAll").innerText = toggleButton[0];
    }
    
    showHideButton();
}

showHideButton = function (){
    if(num>0)
    {
        document.getElementById("removeItem").style.display='block';
        document.getElementById("selectAll").style.display='block';
        document.getElementById("markCompleted").style.display='block';
    }
    else{
        document.getElementById("removeItem").style.display='none';
        document.getElementById("selectAll").style.display='none';
        document.getElementById("markCompleted").style.display='none';
    }
}

