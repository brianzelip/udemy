new Vue({
  el: '[data-vue]',
  data: {
    sourceCode:
      'https://github.com/brianzelip/udemy/tree/master/vuejs2/project%201%20-%20MonsterSlayer',
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
    weHaveAWinner: false,
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
      this.weHaveAWinner = false;
      return;
    },
    rand: function(minMaxArray) {
      // via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
      const min = Math.ceil(minMaxArray[0]);
      const max = Math.floor(minMaxArray[1]);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    attack: function(minMaxArray, attacker) {
      // minMaxArray = [min, max]
      // attacker = string name of attacker
      const vm = this;
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
      if (attacker === 'player') {
        if (!vm.checkMonsterWin) {
          if (!vm.checkPlayerWin) {
            doDamageBy(attacker);
            if (!vm.checkPlayerWin) {
              if (!vm.checkMonsterWin) {
                doDamageBy('monster');
                if (!vm.checkMonsterWin) {
                  return;
                }
              }
            }
          }
        }
      } else {
        if (!vm.checkPlayerWin) {
          if (!vm.checkMonsterWin) {
            doDamageBy(attacker);
            if (!vm.checkMonsterWin) {
              return;
            }
          }
        }
      }
    },
    heal: function() {
      const healScore = this.rand(this.healRangeMinMax);
      this.player.health + healScore > 100
        ? (this.player.health = 100)
        : (this.player.health += healScore);
      this.battleLog.push(['player', `PLAYER heals for ${healScore}!`]);
      this.attack([0, 10], 'monster');
      return healScore;
    }
  },
  computed: {
    checkPlayerWin: function() {
      return this.monster.health <= 0
        ? ((this.end = 'YOU WON 🎉'), (this.weHaveAWinner = true), true)
        : false;
    },
    checkMonsterWin: function() {
      return this.player.health <= 0
        ? ((this.end = 'YOU LOST 😿'), (this.weHaveAWinner = true), true)
        : false;
    }
  }
});
