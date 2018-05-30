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
    attack: function(minMaxArray, attacker) {
      // minMaxArray = [min, max]
      // attacker = string name of attacker
      const vm = this;
      // via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
      const min = Math.ceil(minMaxArray[0]);
      const max = Math.floor(minMaxArray[1]);
      function rand() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function doDamageBy(name) {
        const damageScore = rand();
        const victim = name === 'player' ? 'monster' : 'player';
        vm[victim].health -= damageScore;
        vm.battleLog.push(`${name} hits ${victim} for ${damageScore}`);
        return damageScore;
      }
      damage();
      // console.log(`${min > 0 ? 'SPECIAL ' : ''}DAMAGE IS ${damage('player')}`);
    }
  },
  computed: {}
});
