;var vm = new Vue({
  el: '.app',
  data: {
    duration: 0,
    isActive: true,
    hasError: false,
    disabled: true,
    toothData: '',
  },
  computed: {
    output: function() {
      return this.duration;
    },
    // wait: function() {
    //   if (this.duration == 1) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
  }
});

;(function($){
  $(function(){

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
          $('[data-area="'+$(this).data('area-link')+'"]').toggleClass('ss st');
          
          //console.log($('li.st[class*=RMC_point]'));
          
          arr = $('li.st[class*=RMC_point]');
          var toothData = new Array();
          arr.each( function(){ 
            toothData.push($(this).text());
          });

          var buttonNext = $('.survey-item.tooth a.next');
          var fakeButton = $('.fake-button');
          
          if(toothData.length === 0) {
            buttonNext.addClass('hidden');
            fakeButton.removeClass('hidden');
          }else {
            buttonNext.removeClass('hidden');
            fakeButton.addClass('hidden');

          }

          console.log(toothData);
      })

      // Отправка формы
      $('.call-back-form').submit(function(e){
        e.preventDefault();
        var m_method=$(this).attr('method');
        var m_action=$(this).attr('action');
        var m_data=$(this).serialize();
        $.ajax({
          type: m_method,
          url: m_action,
          data: m_data,
          success: function(result){
            $('.modal-title').css("visibility", "hidden");
            // $('.call-back-form').css("display", "none");
            $('.form-result').css("display", "block");
            console.log(m_data);
            $('.ajax-call-back-result').text(result);
            // yaCounter19721623.reachGoal('modal-form');
          }
        });
      });

  });
})(jQuery)