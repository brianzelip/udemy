export const textMixin = {
  data() {
    return {
      mixinText: 'branasgaefkjhsd'
    };
  },
  computed: {
    reverseTextFromMixin() {
      return this.mixinText
        .split('')
        .reverse()
        .join('');
    }
  }
};
