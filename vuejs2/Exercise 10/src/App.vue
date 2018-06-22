<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <p v-window:resize>{{ width }}px wide x {{ height }}px high</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    window: {
      bind(el, binding, vnode) {
        binding.arg === 'resize' ? (window.onresize = rsFn) : null;
        function rsFn() {
          const w = window.innerWidth;
          const h = window.innerHeight;
          el.innerHTML = `${w}px width by ${h}px height`;
        }
      }
    }
  }
};
</script>
