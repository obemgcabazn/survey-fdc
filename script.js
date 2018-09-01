// ;var vm = new Vue({
//   el: '.app',
//   data: {
//     duration: 0,
//     isActive: true,
//     hasError: false
//   },
//   computed: {
//     output: function() {
//       return this.duration;
//     },
//     wait: function() {
//       if (this.duration == 1) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// });

(function($){
  $(function(){

      //вызов функции параллакса
      parrallaxBG();
      /****************************************
       -    PARALLAX BACKGROUND HANDLER    -
       ****************************************/
      function parrallaxBG(){
          jQuery('.parallaxbg').each(function () {
              var $bgobj = jQuery(this);
              jQuery(window).scroll(bgScrollPosCalculate);
              bgScrollPosCalculate();
              function bgScrollPosCalculate() {
                  var yPos = -(jQuery(this).scrollTop() / $bgobj.data('speed'));
                  var coords = 'center ' + yPos + 'px';
                  $bgobj.css({backgroundPosition: coords});
              }
          });
      }


      //работа выплывающего меню в шапке
      if(!$('body.services').length){
          $(document).on('click','.header_bottom_menu_button',function(e){
              $('.header_bottom_menu_button .fa').toggleClass('fa-bars fa-chevron-down');
              $('.bottom_header_menu_new').slideToggle("slow",function(){});
              e.preventDefault();
          });
      }
      var url                 =   $('.getcurpage').data('curpage'),
          cur_item            =   $('.bottom_header_menu_new').find('[href="'+url+'"]'),
          cur_item_parents    =   $(cur_item[0]).parents('.current_menu');//тут передается только первый найденный cur_item
      $(cur_item_parents).each(function(){
          $(this).addClass('active cur');
      });
      $(cur_item).parent('li').addClass('active cur');
      $('.bottom_header_menu_new li').hover(
          function(){
              var parent = $(this).parent('ul');
              $(parent).find('.active').removeClass('active');
          },
          function(){
              var parent = $(this).parent('ul');
              $(parent).find('.cur').addClass('active');
          }
      );

      //функции для работы рубрикатора /list/

      //функция фильтрации по буквам
      $('.az_rubrikator li a').click(function(e){
          e.preventDefault();
          $('.letter_pile').hide();
          $(this).parents('li').addClass('on').siblings('li').removeClass('on');
          $('.letter_pile[data-letter="'+$(this).data('letter-link')+'"]').show();
      });
      $('.az_rubrikator_all').click(function(e){
          e.preventDefault();
          $('.letter_pile').show();
          $('.az_rubrikator li').removeClass('on');
      });

      //подсветка пунктов меню
      $('.tooht_a').hover(
          function(){
              var type = $(this).attr('data-type');
              $('a[data-type = "'+type+'"]').parent('li').addClass('on');
          },
          function(){
              var type = $(this).attr('data-type');
              $('a[data-type = "'+type+'"]').parent('li').removeClass('on');
          }
      );

      $.fn.animateRotate = function(angle, duration, easing, complete) {
          var args = $.speed(duration, easing, complete);
          var step = args.step;
          return this.each(function(i, e) {
              args.step = function(now) {
                  $.style(e, 'transform', 'rotate(' + now + 'deg)');
                  if (step) return step.apply(this, arguments);
              };

              $({deg: 0}).animate({deg: angle}, args);
          });
      };

      $('area[data-area-link]').hover(function(){
          if($(this).parents('.live').length){
              $('[data-area="'+$(this).data('area-link')+'"]').addClass('ss');
              if($(this).parents('.jaw_anatomy').length){
                  $('.rubrikator_module_tooth_navi [data-area-link="'+$(this).data('area-link')+'"]').addClass('hl');
              }
          }
      },function(){
          if($(this).parents('.live').length){
              $('[data-area="'+$(this).data('area-link')+'"]').removeClass('ss');
              if($(this).parents('.jaw_anatomy').length){
                  $('.rubrikator_module_tooth_navi [data-area-link="'+$(this).data('area-link')+'"]').removeClass('hl');
              }
          }
      })
      $('[data-area-link]').click(function(e){
          e.preventDefault();
          var el=$(this).attr('data-area-link');
          $('[data-area]').removeClass('ss').removeClass('st');
          $('[data-area="'+$(this).data('area-link')+'"]').addClass('ss').addClass('st');
          $('.RMT_complete').addClass('ds');
          var x=Math.floor((Math.random() * 12) + 1);
          var sx=x;
          if(sx>=6) sx-=6;
          var c=x-(sx-3)*2;
          if($(this).parents('.tab').hasClass('tooth_anatomy')){
              if($('.rubrikator_module_tooth_navi [data-area-link="'+el+'"]').hasClass('on')){
                  $('.rubrikator_module_tooth_navi [data-area-link="'+el+'"]').removeClass('on');
                  $('[data-area="'+el+'"]').removeClass('ss');
                  $('.RMT_overlay').addClass('live');
                  $('.RMT_out_points li').removeClass('selected');
                  $('.rubrikator_module_dictionary').stop().animate({'right':'-30px','opacity':'0'}, 450);
              }
              else{
                  $('.RMT_overlay').removeClass('live');
                  $('.RMT_in_points').animateRotate((x*30)*(-1)+15, 2500, 'easeInBack');
                  $('[data-area-text="'+el+'"]').html($('[data-id='+el+']').next('.banner-text').html());
                  $('.RMT_out_points').animateRotate(x*30, 2000, 'easeOutBack', function(){
                      $('.rubrikator_module_dictionary').stop().animate({'right':'35px','opacity':'1'}, 450)
                  });
                  $('.rubrikator_module_dictionary').stop().animate({'right':'-30px','opacity':'0'}, 450, function(){
                      $('[data-area-text="'+el+'"]').show().siblings().hide();
                  })
              }
          }
          if($(this).parents('.tab').hasClass('jaw_anatomy')){
              $('.rubrikator_module_dictionary').css({'right':'35px','opacity':'1'});
              if($('.rubrikator_module_tooth_navi [data-area-link="'+el+'"]').hasClass('on')){
                  $('.JD_img').stop().animate({'top':'-30px','opacity':'0'}, 600);
                  $('.JD_item_text').stop().animate({'top':'30px','opacity':'0'}, 600);
                  return false;
              }
              else{
                  $('.JD_img').stop().animate({'top':'-30px','opacity':'0'}, 600, function(){
                      $('[data-area-text="'+el+'"]').show().siblings().hide();
                      $('.JD_img').stop().animate({'top':'0px','opacity':'1'}, 600);
                  })
                  $('[data-area-text="'+el+'"]').html($('[data-id='+el+']').next('.banner-text').html());
                  $('.JD_item_text').stop().animate({'top':'30px','opacity':'0'}, 600, function(){
                      $('.JD_item_text').stop().animate({'top':'0px','opacity':'1'}, 600);
                  })
              }
          }
          if($(this).parents('.tab').hasClass('jaw_anatomy2')){
              $('.rubrikator_module_dictionary').css({'right':'35px','opacity':'1'});
              if($('.rubrikator_module_tooth_navi [data-area-link="'+el+'"]').hasClass('on')){
                  $('.JD_img').stop().animate({'top':'-30px','opacity':'0'}, 600);
                  $('.JD_item_text').stop().animate({'top':'30px','opacity':'0'}, 600);
                  return false;
              }
              else{
                  $('.JD_img').stop().animate({'top':'-30px','opacity':'0'}, 600, function(){
                      $('[data-area-text="'+el+'"]').show().siblings().hide();
                      $('.JD_img').stop().animate({'top':'0px','opacity':'1'}, 600);
                  })
                  $('[data-area-text="'+el+'"]').html($('[data-id='+el+']').next('.banner-text').html());
                  $('.JD_item_text').stop().animate({'top':'30px','opacity':'0'}, 600, function(){
                      $('.JD_item_text').stop().animate({'top':'0px','opacity':'1'}, 600);
                  })
              }
          }
          $('.RMT_out_points li:nth-child('+c+')').addClass('selected').siblings().removeClass('selected');
          $('.rubrikator_module_tooth_navi [data-area-link]').removeClass('on');
          if($('.rubrikator_module_tooth_navi [data-area-link="'+el+'"]').hasClass('on')) return false;
          $('.rubrikator_module_tooth_navi [data-area-link="'+el+'"]').addClass('on');
      })
  });
})(jQuery)