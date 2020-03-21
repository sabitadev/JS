import onAddToDoList from './addToDoList.js';
import selectAll from './selectAllToDoList.js';
import {onCompleteSelectedItemList} from './completedToDoList.js';
import {onDeleteSelectedItemFromList} from './deleteToDoList.js';

var addAllEventListener = function()
{
    //add To Do Item
    const addItemElement = document.querySelector('input');
    addItemElement.addEventListener('keypress', onAddToDoList);

    //delete To Do Item
    var removeItemElement = document.querySelector(".removeItem");
    removeItemElement.addEventListener('click' ,onDeleteSelectedItemFromList)

    //selectAll To Do Item
    var selectAllElement = document.querySelector(".selectAll");
    selectAllElement.addEventListener('click' ,selectAll)

    //mark Completed To Do Item
    var markCompletedElement = document.querySelector(".markCompleted");
    markCompletedElement.addEventListener('click' ,onCompleteSelectedItemList)

}

export default addAllEventListener;