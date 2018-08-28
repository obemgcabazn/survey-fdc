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
    waitDisable: function() {
      if (this.duration == 1) {
        return true;
      } else {
        return false;
      }
    }
  }
})