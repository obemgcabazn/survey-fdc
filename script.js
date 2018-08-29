;var vm = new Vue({
  el: '.app',
  data: {
    duration: 0,
    isActive: true,
    hasError: false
  },
  computed: {
    output: function() {
      return this.duration;
    },
    wait: function() {
      if (this.duration == 1) {
        return false;
      } else {
        return true;
      }
    }
  }
});

// (function($){
//   $(function(){
//     $('.carousel').carousel({
      
//     })
//   });
// })(jQuery)