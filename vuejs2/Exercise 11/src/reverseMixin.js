export const reverseMixin = {
  data() {
    return {
      mixinText: ''
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
