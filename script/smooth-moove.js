function smooth_moove(args){
  args.mobile_append = typeof args.mobile_append !== 'undefined' ? args.mobile_append : 'appendTo';
  args.desktop_append = typeof args.desktop_append !== 'undefined' ? args.desktop_append : 'appendTo';
  args.max_width = typeof args.max_width !== 'undefined' ? args.max_width : '767px';
  args.min_width = typeof args.min_width !== 'undefined' ? args.min_width : '768px';

  var $item = $( args.item );
  var $mobileDest = $( args.mobile_dest );
  var $desktopDest = $( args.desktop_dest );

  function smooth_append_style(item, append_style, destination){    
    switch(append_style){
      case "insertAfter":
        item.insertAfter(destination);
        break;
      case "insertBefore":
        item.insertBefore(destination);
        break;
      case "append":
        item.append(destination);
        break;
      case "appendTo":
        item.appendTo(destination);
        break;
      case "prepend":
        item.prepend(destination);
        break;
      case "prependTo":
        item.prependTo(destination);
        break;
    }
  }

  if (Modernizr.mq('(max-width: '+args.max_width+')')) {
    $item.detach();
    smooth_append_style($item, args.mobile_append, $mobileDest );
  }
  if (Modernizr.mq('(min-width: '+args.min_width+')')) {
    $item.detach();
    smooth_append_style($item, args.desktop_append, $desktopDest );
  }
}