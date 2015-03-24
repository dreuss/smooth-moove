# smooth-moove
A js plugin built to accommodate the adaptive design pattern where html elements need to move about the DOM depending on their mobile / desktop context. 

# Description
This simple script allows a developer to take an element out of the DOM using some jQuery manipulation methods, and place it back into the DOM by selecting an HTML element to attach the removed element near, and then boom, smooth-moove.

# Dependencies
jQuery
Modernizr - media query support

# How to use
-Assing an object literal to a variable, and set the options you want.
-instantiate a new smooth_moove function and add the variable from the object literal as the args.

# Options
  `tel_responsive_placement = {
    item: ".tel",                 //item that needs moving
    mobile_append: "appendTo",    //can use append, appendTO, prepend, prependTo, insertBefore, insertAfter
    mobile_dest: ".header",       //mobile html desination sibling
    desktop_append: "appendTo",   //can use append, appendTO, prepend, prependTo, insertBefore, insertAfter
    desktop_dest: ".middle",      //desktop html destination sibling
    max_width: "920px",           //max-break
    min_width: "921px"            //min-break
  }`

# Defaults
mobile_append: 'appendTo'

desktop_append: 'appendTo'

max_width: '767px'

min_width: '768px'
