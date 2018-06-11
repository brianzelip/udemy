<template lang="pug">
  .row
    appQuote(v-for="(quote, i) in quotes" :data-quote-index="i") {{ quote }}

</template>

<script>
import appQuote from './Quote.vue';

export default {
  props: {
    quotes: Array
  },
  components: { appQuote }
};
</script>

