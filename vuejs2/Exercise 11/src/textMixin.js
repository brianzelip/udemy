export const textMixin = {
  data() {
    return {
      mixinText: ''
    };
  },
  computed: {
    reverseMixin() {
      return this.mixinText
        .split('')
        .reverse()
        .join('');
    },
    wordCountMixin() {
      if (this.mixinText === '') return '';
      const count = this.mixinText.length;
      return `${this.mixinText} (${count})`;
    }
  }
};
