$(document).ready(function () {
   $('.btn-drop-down').click(function () {
      $('.list-db').toggleClass('active-lg-db');
   });
    (function($){
        $(window).on("load",function(){

            $("tbody").mCustomScrollbar({
                theme:"minimal"
            });

        });
    })(jQuery);
});