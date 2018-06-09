<template lang="pug">
  .row.justify-content-center
    form.col-6
      .form-group
        label(for="quote-input").font-weight-bold Quote
        textarea.form-control.mb-3#quote-input(rows="3" v-model="newQuote")
        button.btn.btn-primary.d-block.mx-auto(@click.prevent="addQuote") Add Quote
</template>

<script>
import { quoteBus } from '../main.js';

export default {
  data() {
    return {
      newQuote: ''
    };
  },
  methods: {
    addQuote() {
      quoteBus.$emit('newQuoteAdded', this.newQuote);
      this.newQuote = '';
    }
  }
};
</script>

