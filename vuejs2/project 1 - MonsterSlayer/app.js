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
      this.battleLog = [];
      this.newGame = !this.newGame;
      return;
    },
    attack: function(min, max) {
      // via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
      min = Math.ceil(min);
      max = Math.floor(max);
      const damage = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(`${min > 0 ? 'SPECIAL ' : ''}DAMAGE IS ${damage}`);
      this.battleLog.push(
        `SHIT JUST WENT DOWN! ${damage} DAMAGE POINTS WERE DEALT!`
      );
      return damage;
    }
  },
  computed: {}
});
