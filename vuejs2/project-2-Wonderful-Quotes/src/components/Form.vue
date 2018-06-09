<template lang="pug">
  .row.justify-content-center
    form.col-6
      .form-group
        label(for="quote-input").font-weight-bold Quote
        textarea.form-control.mb-3#quote-input(rows="3" v-model="input")
        button.btn.btn-primary.d-block.mx-auto(@click.prevent="addQuote") Add Quote
</template>

<script>
export default {
  data() {
    return {
      input: ''
    };
  },
  methods: {
    addQuote() {
      alert('clicked!');
    }
  }
};
</script>

