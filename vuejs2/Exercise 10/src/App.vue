<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <p v-window:resize></p>
        <p v-window:scroll></p>
        <div style="height: 5000px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    window: {
      bind(el, binding, vnode) {
        binding.arg === 'resize'
          ? resize()
          : binding.arg === 'scroll' ? scroll() : null;

        function resize() {
          el.innerHTML = rsMsg();

          window.onresize = rsFn;

          function rsFn() {
            el.innerHTML = rsMsg();
          }
          function rsMsg() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            return `The current browser window dimension is ${w}px wide by ${h}px tall`;
          }
        }

        function scroll() {
          el.innerHTML = sMsg();
          el.style.position = 'fixed';

          window.onscroll = sFn;

          function sMsg() {
            return `The current scroll position along the y axis is ${
              window.scrollY
            }`;
          }
          function sFn() {
            el.innerHTML = sMsg();
          }
        }
      }
    }
  }
};
</script>
