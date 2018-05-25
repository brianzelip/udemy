new Vue({
  el: '[data-vue]',
  data: {
    p4: 'p4',
    red: 'red',
    border: 'border',
    inlineBlock: 'inline-block',
    effectClasses: {
      highlight: true,
      shrink: false
    },
    userClassName: '',
    userClassName2: '',
    userToggleBold: false,
    userWidth: '',
    userColor: '',
    userFontSize: '',
    userBgColor: '',
    progressBarStyles: {
      width: '0',
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    }
  },
  methods: {
    startEffect: function() {
      const vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 2000);
      return;
    },
    startProgress: function() {
      const vm = this;
      let width = 0;
      vm.progressBarStyles.width = 0;
      vm.progressBarStyles.backgroundColor = 'red';
      vm.progressBarStyles.borderColor = 'yellow';
      setInterval(function() {
        width += 2;
        vm.progressBarStyles.width = width <= 98 ? `${width}%` : '100%';
      }, 100);
      return;
    }
  }
});
