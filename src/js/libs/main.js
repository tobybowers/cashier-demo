define(["jquery", "drinks/drinks_prototypal"], function($, drink){
    var _orders = [];
    var _currentOrder = {};
    var _counter = 0;
    return {

      init: function (drinksDetails) {
          $(document).ready(function(){
              console.log(drinksDetails);
              // screen resizing
              function wrapResize() {
                  var height = window.innerHeight;
                  $('#wrapper').css('height', height);
              }



              $(window).resize(function(){
                  wrapResize();
              });




              $('.option').click(function(){
                  if(!$(this).hasClass('item-active') && !$(this).hasClass('item-disabled')){

                      var objID = $(this).attr('id');
                      var $objSelector = $(this);
                      $.each($('.option'),function(){
                          $(this).addClass('item-disabled');
                      });
                      $objSelector.removeClass('item-disabled').addClass('item-active');
                      $('#additions').removeClass('closed');
                      $('#products').addClass('selected');
                      _currentOrder = drink.create(objID);
                      _orders[_counter++] = _currentOrder;
                  }

                  console.log(_orders);
              });

              $('#cancelItem').click(function(){
                  _orders.pop();
                  _counter--;
                  $.each($('.option'),function(){
                      $(this).removeClass('item-disabled item-active');
                  });
                  $('#additions').addClass('closed');
                  $('#products').removeClass('selected');

              });

              wrapResize();
              return _orders;
          });
      }
    };

});


