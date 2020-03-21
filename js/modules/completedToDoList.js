var onCompleteSelectedItemList = function(){
    var ul = document.querySelector("ol");
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
}

export {onCompleteSelectedItemList}
