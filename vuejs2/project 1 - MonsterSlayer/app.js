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
    },
    attack: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const damage = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(`${min > 0 ? 'SPECIAL ' : ''}DAMAGE IS ${damage}`);
      return damage;
    }
  },
  computed: {}
});
