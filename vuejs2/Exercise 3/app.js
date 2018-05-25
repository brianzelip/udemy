new Vue({
  el: '#exercise',
  data: {
    value: 0,
    resultText: ['not there yet', 'done 🎉']
  },
  computed: {
    result: function() {
      return this.value !== 37 ? this.resultText[0] : this.resultText[1];
    }
  },
  methods: {
    resultMethods: function() {
      const vm = this;
      return vm.value !== 37 ? vm.resultText[0] : vm.resultText[1];
    }
  },
  watch: {
    result: function() {
      const vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, 5000);
    }
  }
});
