var closest = function(targetElement ,selector)
{
    while (targetElement) {
        if (targetElement.matches(selector)) {
            return targetElement;
        }
        targetElement = targetElement.parentNode
    }
}
var  find  = function (targetElement ,selector)
{
    while (targetElement) {
        if (targetElement.matches(selector)) {
            return targetElement;
        }
        targetElement = targetElement.querySelector(selector);
    }
}