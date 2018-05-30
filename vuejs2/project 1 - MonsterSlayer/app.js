new Vue({
  el: '[data-vue]',
  data: {
    msg: 'hello',
    attackRangeMinMax: [0, 10],
    specialAttackRangeMinMax: [7, 15],
    healRangeMinMax: [5, 12],
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
    rand: function(minMaxArray) {
      const min = Math.ceil(minMaxArray[0]);
      const max = Math.floor(minMaxArray[1]);
      return Math.floor(Math.random() * (max - min + 1)) + min;
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
      attacker === 'player'
        ? (doDamageBy(attacker), doDamageBy('monster'))
        : doDamageBy(attacker);
    },
    heal: function() {
      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const healScore = rand(5, 12);
      this.player.health += healScore;
      this.battleLog.push(`PLAYER heals for ${healScore}!`);
      this.attack([0, 10], 'monster');
      return healScore;
    }
  },
  computed: {}
});
