<template lang="pug">
  .row.justify-content-center
    .col-6
      .form-group
        label(for="quote-input").font-weight-bold Quote
        textarea.form-control.mb-3#quote-input(rows="3")
        button.btn.btn-primary.d-block.mx-auto  Add Quote
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello'
    };
  }
};
</script>

