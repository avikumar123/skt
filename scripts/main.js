
// $(document).ready(function() {
// var swiper = new Swiper('.swiper-container', {
//       slidesPerView: 1,
//       spaceBetween: 30,
//       init: false,
//       keyboard: {
//         enabled: true,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });

// $.each( $('.swiper-slide'), function( i ){
//   $($('.swiper-slide')[i]).attr('data-info',i);
// });

// $(document).on('click',function() {
//   var info_data = $('.swiper-slide-active').attr('data-info');

//   if( info_data == '0')
//   {
//   $('.swiper-button-next, .swiper-button-prev').css('display','none');    
//   } 
// });

// $('.swiper-slide .btn').click(function(){
//   var step = $(this).attr('data-step');
//   swiper.init();
//   swiper.slideTo(step,1500,false);
// $('.swiper-button-next, .swiper-button-prev').show();  
// });

// $(document).on('click','.fa-th',function(){
//   swiper.slideTo(0,1500,false);
// $('.swiper-button-next, .swiper-button-prev').css('display','none');  
// });

// $('.portfolio-main-image').prepend('<i title="Back To Portfolio" class="fa fa-th"></i>');  


//   //hide alternate header default 
//   $(".header-alt").hide();

//   //init scrolling event heandler
//   $(document).scroll(function(){
   
//     var docScroll = $(document).scrollTop();
//     console.log(docScroll);
//     var scroller = docScroll/5;
//       $('#home-slide').css('background-position','50% '+scroller+'px');    
//   if(docScroll < 40 ) {

//       $(".top-nav-part").css({'position':'absolute',
//                               'top':'40px'}); 

//      // $(".header").css('padding-top','0');      
//     }    
//   else if(docScroll >= 40 && docScroll < 50 ) {

//       $(".top-nav-part").css({'position':'fixed',
//                               'top':'0'}); 
//    //   $(".header").css('padding-top','10px');           
    
//     }    
//     else if(docScroll >= 650 ) {

//       $(".top-nav-part").fadeOut(400);
//       $(".header-alt").fadeIn(300);
    
//     } else {
//       $(".top-nav-part").fadeIn(300);
//       $(".header-alt").fadeOut(400);     
//     }
//   });


//   $("a[href='#go-home']").click(function() {
//   $("html, body").animate({ scrollTop: 0 }, 1000);
//   return false;
//   });

//   $("a[href='#go-about']").click(function() {
//   $("html, body").animate({ scrollTop: 672 }, 1000);
//   return false;
//   });

//   $("a[href='#go-product']").click(function() {
//   $("html, body").animate({ scrollTop: 1350 }, 1000);
//   return false;
//   });

//   $("a[href='#go-clientele']").click(function() {
//   $("html, body").animate({ scrollTop: 2252 }, 1000);
//   return false;
//   });

//   $("a[href='#go-management']").click(function() {
//   $("html, body").animate({ scrollTop: 3000 }, 1000);
//   return false;
//   });  
// });
  
// function inactivityTime() {
//     var t;
//     window.onload = resetTimer;
//     // DOM Events
//     document.onmousemove = resetTimer;
//     document.onkeypress = resetTimer;

//     function logout() {
//       $(".header-alt").fadeOut(700);
//     }

//     function resetTimer() {
//         clearTimeout(t);
//         t = setTimeout(logout, 5000)
//         // 1000 milisec = 1 sec
//     }
// };  

// inactivityTime();