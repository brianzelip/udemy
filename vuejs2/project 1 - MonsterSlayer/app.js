new Vue({
  el: '[data-vue]',
  data: {
    sourceCode:
      'https://github.com/brianzelip/udemy/tree/master/vuejs2/project%201%20-%20MonsterSlayer',
    attackRange: { min: 0, max: 10 },
    specialAttackRange: { min: 7, max: 15 },
    healRange: { min: 5, max: 12 },
    playerHealth: 100,
    monsterHealth: 100,
    newGame: false,
    battleLog: [],
    weHaveAWinner: false,
    end: ''
  },
  methods: {
    healthBarStyles: function(agent) {
      // agent = 'player' || 'monster
      return {
        width: this[`${agent}Health`] > 0 ? `${this[`${agent}Health`]}%` : '0px'
      };
    },
    restart: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.battleLog = [];
      this.newGame = !this.newGame;
      this.weHaveAWinner = false;
      this.end = '';
      return;
    },
    rand: function(obj) {
      // via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
      const min = Math.ceil(obj.min);
      const max = Math.floor(obj.max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    attack: function(minMaxObj, attacker) {
      // minMaxObj = [min, max]
      // attacker = string name of attacker
      const vm = this;
      function doDamageBy(name) {
        const damageScore = vm.rand(minMaxObj);
        const victim = name === 'player' ? 'monster' : 'player';
        vm[`${victim}Health`] - damageScore <= 0
          ? (vm[`${victim}Health`] = 0)
          : (vm[`${victim}Health`] -= damageScore);
        // battlelog = [[string of player name, string of player move], ...]
        vm.battleLog.unshift([
          name,
          `${name} hits ${victim} for ${damageScore}`
        ]);
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
      const healScore = this.rand(this.healRange);
      this.playerHealth + healScore > 100
        ? (this.playerHealth = 100)
        : (this.playerHealth += healScore);
      this.battleLog.unshift(['player', `PLAYER heals for ${healScore}!`]);
      this.attack(this.attackRange, 'monster');
      return healScore;
    }
  },
  computed: {
    checkPlayerWin: function() {
      return this.monsterHealth <= 0
        ? ((this.end = 'YOU WON 🎉'), (this.weHaveAWinner = true), true)
        : false;
    },
    checkMonsterWin: function() {
      return this.playerHealth <= 0
        ? ((this.end = 'YOU LOST 😿'), (this.weHaveAWinner = true), true)
        : false;
    }
  }
});
