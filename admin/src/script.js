$('input[type="password"]').focus(function(){
  $('.tip').css('height','30px')
  setTimeout(function(){
    $('.tip').css('opacity','1')
  },350)
});

$('input[type="password"]').blur(function(){
  $('.tip').css('opacity','0')
  setTimeout(function(){
    $('.tip').css('height','0px')
  },350)
});



$('form').submit(function(){
  $('form,.login_desc h3,.forgotten').animate({'opacity':'0'})
  setTimeout(function(){
    $('.login_profile').addClass('bulge')
  },400);
  setTimeout(function(){
    $('.pulse').fadeIn()
    $('.login_check').fadeIn(300)
  },1350);
   setTimeout(function(){
    $('.login').css('transform','scale(0) translateY(-50%) rotatex(360deg) rotatey(360deg)')
    setTimeout(function(){
    $('.tick').css('transform','scale(1) translateY(-50%)')
  },200);
  },3650);
  return false;
})