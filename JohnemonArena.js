const Johnemon = require("./Johnemon");
const rl = require('./readline.js')
const JohnemonMaster = require("./JohnemonMaster.js")


class JohnemonArena {
  constructor(johnemon_1, johnemon_2) {
    this.johnemon_1 = johnemon_1;
    this.johnemon_2 = johnemon_2;
    this.round = 1;
  }

  startBattle() {
    console.log(`The battle with ${this.johnemon_1.name}, ${this.johnemon_2.name} has begun!`);
    this.startRound(this.chooseJohnemon());
  }

  chooseJohnemon() {
      player.showCollection();
  }

  startRound(selectedJohnemon) {
    console.log(`Round ${this.round}: ${selectedJohnemon.name} is attacking!`);
    const opponent = selectedJohnemon === this.johnemon_1 ? this.johnemon_2 : this.johnemon_1;
    const damage = Math.floor(Math.random() * 10) + 1;
    opponent.hp -= damage;

    console.log(`${selectedJohnemon.name} deals ${damage} damage to ${opponent.name}.`);
    console.log(`${opponent.name} has ${opponent.hp} HP remaining.`);

    if (opponent.hp <= 0) {
      console.log(`${opponent.name} has been defeated! ${selectedJohnemon.name} wins!`);
      return;
    }
    this.round++;
    this.startRound(opponent);
  }

  playerAction(selectedJohnemon) {

  }

  attack(selectedJohnemon) {
    
  }

  tryToCatch() {
    

  }

  calculateDamage(attackRange, defenseRange) {
    
  }

  wildJohnemonAction() {
    
  }

  checkBattleStatus() {
    
  }

  startNewRound() {
    
  }

  endBattle() {
    
  }
}

// const pokemon = new JohnemonArena;
// console.log(pokemon);

module.exports = JohnemonArena