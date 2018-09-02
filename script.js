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

(function($){
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
          
          console.log($('li.st[class*=RMC_point]'));
          
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

          // console.log(toothData);
      })

  });
})(jQuery)