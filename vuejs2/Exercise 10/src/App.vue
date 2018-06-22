<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <p v-window>{{ width }}px wide x {{ height }}px high</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello',
      width: '',
      height: ''
    };
  },
  directives: {
    window(el) {
      console.log('hello window!');
      el.innerHTML = `${window.innerWidth}px wide x ${
        window.innerHeight
      }px high`;
      // window.addEventListener('resize', function() {
      //   vm.width = window.innerWidth;
      //   vm.height = window.innerHeight;
      // });
    }
  },
  computed: {
    viewportWidth() {
      return window.innerWidth;
    },
    viewportHeight() {
      return window.innerHeight;
    }
  }
};
</script>
