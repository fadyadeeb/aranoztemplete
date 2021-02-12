$(document).ready(function(){
  //slider
  $('.headerslider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  //menu
  $(".dropdown").hover(function(){
    $(".dropdown-menu").slideToggle(500);

  });

  //navbar
  $(window).scroll(function(){
   let windowscroll=$(window).scrollTop(); 
   if(windowscroll>=100){
  $(".navbar").addClass("bgwidth");
   }else{
    $(".navbar").removeClass("bgwidth");
   }
  });

//dsCountDown


$('.countdown').dsCountDown({
  endDate: new Date("august  24, 2021 23:59:00")
  });
  //search
  $("#search").click(function(){
$(".form-group").slideToggle();

  });

  $(".close").click(function(){
$(".form-group").slideUp();
  });
  //butup
  $(window).scroll(function(){
   let wscroll=$(window).scrollTop();
  //  console.log(wscroll);
  if(wscroll>550){
    $(".butup").fadeIn(400);
  }else{
    $(".butup").fadeOut(400);
  }
  });
  $(".butup").click(function(){
    $("html").animate({scrollTop:0},2000);
  });
  //loading

  $(".loading").fadeOut(2000,function(){
   $("body").css({overflow:"auto"});
 
  });

  //links


  $(".navbar .nav-link").click(function(){
    let ahref=$(this).attr("href");
 
    $("html,body").animate({scrollTop:$(ahref).offset().top-120},2000);
  })
 
  });





