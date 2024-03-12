/*
 * show pass
 * otp input
 * delete Item
 * back Page
 * clear Text
 * message
 * gallery
 * image select
 * active Suggestions
 * change value
 * load more
 * check item
 * touch spin
 * show notification
 * hide popup 
 * touchSpin
 * preloader 
 * tree view
 */

(function ($) {
  "use strict";


  /* preloader 
  ------------------------------------------------------------------------------------- */
  var preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 200);
  };



  $(function () {
    preloader();
  
  });
})(jQuery);
