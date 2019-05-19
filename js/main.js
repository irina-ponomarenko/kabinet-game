$(document).ready(function () {
   $('.btn-drop-down').click(function () {
      $('.list-db').toggleClass('active-lg-db');
   });

   /*---------------------scroll-----------------*/

    (function($){
        $(window).on("load",function(){

            $("tbody").mCustomScrollbar({
                theme:"minimal"
            });

        });
    })(jQuery);


    /*--------------------------modal window-------------------*/
    $("#modal-text").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text2").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text3").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text4").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text5").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text6").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text7").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text8").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text9").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text10").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text11").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text12").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text13").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text14").flythat({
        fadeIn: 'slow'
    });
    $("#modal-text15").flythat({
        fadeIn: 'slow'
    });


    $(".btn-menu").click(function() {

        $(".mobile-menu").toggleClass("active-mobile-menu");
    });
    $(".close-btn-mobile").click(function() {
        $(".mobile-menu").removeClass("active-mobile-menu");
    });
      $(".close-mobile").click(function() {
        $(".mobile-menu").removeClass("active-mobile-menu");
    });
    $(".close-modal-mobile").click(function() {
        $(".mobile-menu").removeClass("active-mobile-menu");
    });
});