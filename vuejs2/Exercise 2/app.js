new Vue({
  el: '#exercise',
  data: {
    value0: '',
    value1: '',
    counter: 0
  },
  methods: {
    clickAlert: function(event) {
      alert(`${event.originalTarget.innerHTML} button clicked!`);
    },
    updateValue: function(event) {
      this.value0 = event.target.value;
    },
    updateValueOnEnter: function(event) {
      this.value1 = event.target.value;
    }
  }
});
