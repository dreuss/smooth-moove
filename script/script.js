$(document).ready(function() {
  tel_responsive_placement = {
    item: ".tel",                 //item that needs moving
    mobile_append: "appendTo",    //can use append, appendTO, prepend, prependTo, insertBefore, insertAfter
    mobile_dest: ".header",       //mobile html desination sibling
    desktop_append: "appendTo",   //can use append, appendTO, prepend, prependTo, insertBefore, insertAfter
    desktop_dest: ".middle",      //desktop html destination sibling
    max_width: "920px",           //max-break
    min_width: "921px"            //min-break
  }

  logo_responsive_placement = {
    item: ".logo",
    mobile_append: "insertBefore",
    mobile_dest: ".header h1",
    desktop_append: "insertAfter",
    desktop_dest: ".tel",          
  }

  //Make the call to move your elements around the DOM
  new smooth_moove(tel_responsive_placement);
  new smooth_moove(logo_responsive_placement);
});

//Need this for when Window is resized, changed, loaded.
$(window).on('resize orientationchange', function() {
  new smooth_moove(tel_responsive_placement);
  new smooth_moove(logo_responsive_placement);
});