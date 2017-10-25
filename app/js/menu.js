$( document ).ready(function() {
  var menu = $('.nav-mnu'); 
  var lines = $('.switch');
  var header = $('.bcg_head');
  var heightMenu = header.height();
  var widthMenu = header.width();
  //добавлен айдишник для дива, являющегося контейнером для меню
  var navCont = $('#nav_container');

  if(header.width() < 1200 ) {
    console.log(header.width());
    menu.height(heightMenu);
    menu.width(widthMenu);
    //при загрузке контейнеру меню делаем такое свойство, чтобы скрыть непонятное поведение абсолютно позиционированого меню, которое раздвигает страницу
    navCont.css({'overflow': 'hidden'});
  }
  
  $('#menu_switcher').click(function(){
    if(menu.css("opacity") == "1") {
      menu.css({
        'opacity':'0',
        'right':'-100%'
      });
      //когда меню видно, нужно немножко подождать, пока отыграет медленное уплывание и затухание меню, а только потом делать хидден для контейнера меню
      setTimeout( function() {
        navCont.css({'overflow': 'hidden'});
      }, 500);

      lines.removeClass('sw_closed');
    }
    else {
      menu.css({
        'opacity':'1',
        'right':'0'
      });

      //при появлении меню делаем для контейнера визибл
      navCont.css({'overflow': 'visible'});
      
      lines.addClass('sw_closed');
    }
  });

  // ABOUT_US________________________________
 
  // triangle work


  var ScreenWidth = screen.width; 
  var triangle1, 
      triangle2, 
      triangle3, 
      triangle4;

if( ScreenWidth > 1024 ) {


  triangle1 = $('#photo-1').offset().left;
    var prop1 = triangle1 + 100 + 'px';
    $('#triang-1').css('left', prop1);
    
  triangle2 = $('#photo-2').offset().left;
    var prop2 = triangle2 + 100 + 'px';
    $('#triang-2').css('left', prop2);

  triangle3 = $('#photo-3').offset().left;
    var prop3 = triangle3 + 100 + 'px';
    $('#triang-3').css('left', prop3);  

  triangle4 = $('#photo-4').offset().left;

    var prop4 = triangle4 + 100 + 'px';
    $('#triang-4').css('left', prop4);
  
}

else {

  triangle1 = $('#photo-1').offset().left;
    var prop1 = triangle1 + 60 + 'px';
    $('#triang-1').css('left', prop1);
    
  triangle2 = $('#photo-2').offset().left;
    var prop2 = triangle2 + 60 + 'px';
    $('#triang-2').css('left', prop2);

  triangle3 = $('#photo-3').offset().left;
    var prop3 = triangle3 + 60 + 'px';
    $('#triang-3').css('left', prop3);  

  triangle4 = $('#photo-4').offset().left;

    var prop4 = triangle4 + 60 + 'px';
    $('#triang-4').css('left', prop4);

}



   console.log(ScreenWidth);
});