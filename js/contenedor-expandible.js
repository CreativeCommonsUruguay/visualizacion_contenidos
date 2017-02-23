;(function($){

  $(window).load(function(){
    $('.expand-uno').click(function(evt){
      $('.content-uno').slideToggle('fast');
      evt.preventDefault();

      if ($( "#mostrar-uno" ).hasClass( "invisible" )) {
          $( "#mostrar-uno" ).removeClass("invisible").addClass("visible");
          $( "#ocultar-uno" ).removeClass("visible").addClass("invisible");
      } else {
          $( "#mostrar-uno" ).removeClass("visible").addClass("invisible");
          $( "#ocultar-uno" ).removeClass("invisible").addClass("visible");
      }
    });

    $('.expand-dos').click(function(evt){
      $('.content-dos').slideToggle('fast');
      evt.preventDefault();

      if ($( "#mostrar-dos" ).hasClass( "invisible" )) {
          $( "#mostrar-dos" ).removeClass("invisible").addClass("visible");
          $( "#ocultar-dos" ).removeClass("visible").addClass("invisible");
      } else {
          $( "#mostrar-dos" ).removeClass("visible").addClass("invisible");
          $( "#ocultar-dos" ).removeClass("invisible").addClass("visible");
      }
    });

    $('.expand-tres').click(function(evt){
      $('.content-tres').slideToggle('fast');
      evt.preventDefault();

      if ($( "#mostrar-tres" ).hasClass( "invisible" )) {
          $( "#mostrar-tres" ).removeClass("invisible").addClass("visible");
          $( "#ocultar-tres" ).removeClass("visible").addClass("invisible");
      } else {
          $( "#mostrar-tres" ).removeClass("visible").addClass("invisible");
          $( "#ocultar-tres" ).removeClass("invisible").addClass("visible");
      }
    });

  });

})(jQuery);