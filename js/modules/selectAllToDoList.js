var toggleButton =["Select All" ,"UnSelect All"]
var selectAll = function(){
    var ul = document.querySelector("ol");
    var liarr = document.getElementsByTagName ("li")
    var buttonText = document.querySelector(".selectAll").innerText;
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
        document.querySelector(".selectAll").innerText = toggleButton[1];
    }
    else
    {
        document.querySelector(".selectAll").innerText = toggleButton[0];
    }

}

export default selectAll;
