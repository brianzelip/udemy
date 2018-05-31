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
    battleLog: [],
    end: ''
  },
  methods: {
    healthBarStyles: function(agent) {
      // 'agent' here is a synonym for the general term 'player'
      return {
        width: this[agent].health > 0 ? `${this[agent].health}%` : '0px'
      };
    },
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
      function doDamageBy(name) {
        const damageScore = vm.rand(minMaxArray);
        const victim = name === 'player' ? 'monster' : 'player';
        vm[victim].health - damageScore <= 0
          ? (vm[victim].health = 0)
          : (vm[victim].health -= damageScore);
        // battlelog = [[string of player name, string of player move], ...]
        vm.battleLog.push([name, `${name} hits ${victim} for ${damageScore}`]);
        return damageScore;
      }
      attacker === 'player'
        ? (doDamageBy(attacker), doDamageBy('monster'))
        : doDamageBy(attacker);
    },
    heal: function() {
      const healScore = this.rand(this.healRangeMinMax);
      this.player.health += healScore;
      this.battleLog.push(['player', `PLAYER heals for ${healScore}!`]);
      this.attack([0, 10], 'monster');
      return healScore;
    }
  },
  computed: {
    checkWin: function() {
      return this.player.health <= 0
        ? ((this.end = 'YOU LOST 😿'), true)
        : this.monster.health <= 0
          ? ((this.end = 'YOU WON 🎊'), true)
          : false;
    }
  }
});
