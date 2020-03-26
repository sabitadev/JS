
var toDoListView = (function ()
{
    'use strict';
    var addListItemElem = function(toDoItem)
    {     
        var ul = document.querySelector("ol");
        var li = document.createElement("li");    
        li.setAttribute('class',"toDoItem");
        li.appendChild(checkboxElem());
        li.appendChild(document.createTextNode(toDoItem));
        li.appendChild(deleteButtonElem());
        ul.appendChild(li);
        resetInputItemText();
    }

    var deleteButtonElem = function()
    {
        var deleteButtonElem = document. createElement("input");
        deleteButtonElem.type = "button";
        deleteButtonElem.value = "X";
        deleteButtonElem.className = "deleteListItem";
        deleteButtonElem.style.background = "none";
        deleteButtonElem.style.border = "none";
        deleteButtonElem.style.color = "red";
        deleteButtonElem.addEventListener('click',toDoListController.deleteToDoItem);
        return deleteButtonElem;
    }

    var checkboxElem = function()
    {
        var checkbox = document.createElement("input");
        checkbox.name = "todo";
        checkbox.type = "checkbox";
        return checkbox;
    }

    var closest= function(targetElement ,selector)
    {
        while (targetElement) {
            if (targetElement.matches(selector)) {
                return targetElement;
            }
            targetElement = targetElement.parentElement;
        }
    }
    var find = function (targetElement ,selector)
    {
        while (targetElement) {
            if (targetElement.matches(selector)) {
                return targetElement;
            }
            targetElement = targetElement.querySelector(selector);
        }
    }

    var addAllEventListener = function()
    {
        //add To Do Item
        const addItemElement = document.querySelector('input');
        addItemElement.addEventListener('keypress', toDoListController.addToDoItem);

        //delete To Do Item
        var removeItemElement = document.querySelector(".removeItem");
        removeItemElement.addEventListener('click' , toDoListController.deleteToDoSelectedItems)

        //selectAll To Do Item
        var selectAllElement = document.querySelector(".selectAll");
        selectAllElement.addEventListener('click' ,toDoListController.selectAllItems)

        //mark Completed To Do Item
        var completeElement = document.querySelector(".markCompleted");
        completeElement.addEventListener('click' ,toDoListController.completeItem)

    }

    var resetInputItemText = function()
    {
        var toDoItemArr = document.getElementsByClassName("addToDoItem");
        toDoItemArr[0].value = '';
    }

    return {
            addListItemElem : addListItemElem,
            addAllEventListener : addAllEventListener ,
            closest : closest,
            find : find
           }
})()

