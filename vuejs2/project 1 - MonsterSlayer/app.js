new Vue({
  el: '[data-vue]',
  data: {
    msg: 'hello',
    player: {
      health: 100
    },
    monster: {
      health: 100
    },
    newGame: false,
    battleLog: []
  },
  methods: {
    restart: function() {
      this.player.health = 100;
      this.monster.health = 100;
      this.newGame = !this.newGame;
      return;
    }
  },
  computed: {}
});
